const fs = require('fs'),
  path = require('path'),
  nodeEval = require('node-eval'),
  config = require('./config'),

  isDev = process.env.NODE_ENV === 'development',
  useCache = !isDev,
  cacheTTL = config.cacheTTL,
  langs = config.langs;

let cache = {};

const render = (req, res, data, context) => {
  if (isDev && req.query.json) {
    return res.json(data);
  }

  const user = req.user,
    currentLang = data.lang || langs[0],
    cacheKey = req.originalUrl + currentLang + (context ? JSON.stringify(context) : '') + (user ? JSON.stringify(user) : '');

  let cached = cache[cacheKey];

  if (useCache && cached && (new Date() - cached.timestamp < cacheTTL)) {
    return res.send(cached.html);
  }

  var bemtreeCtx = {
    block: 'root',
    context: context,
    // extend with data needed for all routes
    data: Object.assign({}, {
      view: data.view || 'page-' + data.page,
      params: req.params,
      url: req._parsedUrl,
      user: req.isAuthenticated() ? req.user : false
    }, data)
  };

  const templates = getTemplates(data.page, data.bundle);
  let bemjson;
  try {
    bemjson = templates[currentLang].BEMTREE.apply(bemtreeCtx);
  } catch (err) {

    console.error('BEMTREE error', err.stack);
    console.trace('server stack');
    return res.sendStatus(500);
  }

  if (isDev && req.query.bemjson) {
    return res.json(bemjson);
  }

  let html;
  try {
    html = templates[currentLang].BEMHTML.apply(bemjson);
  } catch (err) {
    console.error('BEMHTML error', err.stack);
    return res.sendStatus(500);
  }

  useCache && (cache[cacheKey] = {
    timestamp: new Date(),
    html: html
  });

  return res.send(html);
}

function dropCache() {
  cache = {};
}

function evalFile(filename) {
  return nodeEval(fs.readFileSync(filename, 'utf8'), filename);
}

function getTemplates(bundleName = 'index', level = 'desktop') {
  const pathToBundle = path.resolve('bundles', level + '.bundles', bundleName);
  return langs.reduce(function(tmpls, lang) {
    tmpls[lang] = {
      BEMTREE: evalFile(path.join(pathToBundle, bundleName + '.' + lang + '.bemtree.js')).BEMTREE,
      BEMHTML: evalFile(path.join(pathToBundle, bundleName + '.' + lang + '.bemhtml.js')).BEMHTML
    }
    return tmpls;
  }, {});
}

module.exports = {
  render: render,
  dropCache: dropCache
};