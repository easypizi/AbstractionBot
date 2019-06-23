const fs = require("fs"),
  path = require("path"),
  mkdirp = require("mkdirp"),
  techs = require("./config/techs"),
  getLevels = require("./config/levels").getLevels,
  SETS = require("./config/levels").SETS,
  langs = require("../server/config").langs,
  __DEV__ = process.env.NODE_ENV !== "production";

module.exports = config => {
  config.setLanguages(langs);

  const platforms = Object.keys(SETS);

  platforms.forEach(platform => {
    let distLevels = getLevels(platform);

    ["css", "js"].forEach(catalog => {
      pathToStatic = path.resolve("static", "assets", catalog, platform);
      fs.existsSync(pathToStatic) || mkdirp(pathToStatic);
    });

    config.nodes("bundles/" + platform + ".bundles/*", nodeConfig => {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: distLevels }],
        [techs.fileProvider, { target: "?.bemdecl.js" }],
        [techs.bem.deps, { target: ".?.deps.js" }],
        [techs.bem.files, { depsFile: ".?.deps.js" }],
        // i18n
        [techs.keysets, { lang: "{lang}" }],
        [
          techs.i18n,
          {
            exports: { ym: true, commonJS: true },
            lang: "{lang}"
          }
        ]
      ]);

      nodeConfig.addTechs([
        // bemtree
        [
          techs.bemtreeI18N,
          {
            sourceSuffixes: ["bemtree", "bemtree.js"],
            target: "?.{lang}.bemtree.js",
            lang: "{lang}"
          }
        ],

        // templates
        [
          techs.bemhtml,
          {
            sourceSuffixes: ["bemhtml", "bemhtml.js"],
            target: "?.{lang}.bemhtml.js",
            forceBaseTemplates: true,
            engineOptions: {
              elemJsInstances: true,
              xhtml: false,
              omitOptionalEndTags: true,
              unquotedAttrs: true
            }
          }
        ]
      ]);

      nodeConfig.addTargets(["?.{lang}.bemtree.js", "?.{lang}.bemhtml.js"]);
    });

    config.node("dist/" + platform, nodeConfig => {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: distLevels }],
        [techs.bem.levelsToBemdecl],

        // essential
        [techs.bem.deps, { target: ".?.deps.js" }],
        [techs.bem.files, { depsFile: ".?.deps.js" }],

        // css
        [
          techs.postcss,
          {
            target: "?.css",
            oneOfSourceSuffixes: ["post.css", "css"],
            plugins: techs.postcssPlugins
          }
        ],

        // i18n
        [techs.keysets, { lang: "{lang}" }],
        [
          techs.i18n,
          {
            exports: { ym: true, commonJS: true },
            lang: "{lang}"
          }
        ],

        // client templates
        [
          techs.bem.depsByTechToBemdecl,
          {
            target: ".?.tmpl.bemdecl.js",
            sourceTech: "js",
            destTech: "bemhtml"
          }
        ],
        [
          techs.bem.deps,
          {
            target: ".?.tmpl.deps.js",
            bemdeclFile: ".?.tmpl.bemdecl.js"
          }
        ],
        [
          techs.bem.files,
          {
            depsFile: ".?.tmpl.deps.js",
            filesTarget: "?.tmpl.files",
            dirsTarget: "?.tmpl.dirs"
          }
        ],
        [
          techs.bemhtml,
          {
            target: ".?.browser.bemhtml.js",
            filesTarget: "?.tmpl.files",
            sourceSuffixes: ["bemhtml", "bemhtml.js"],
            engineOptions: {
              elemJsInstances: true
            }
          }
        ],

        // js
        [
          techs.browserJs,
          {
            target: ".?.browser.js"
          }
        ],
        [
          techs.fileMerge,
          {
            target: ".?.pre.es6.{lang}.js",
            sources: ["?.lang.{lang}.js", ".?.browser.bemhtml.js", ".?.browser.js"],
            lang: "{lang}"
          }
        ],

        __DEV__
          ? [techs.fileCopy, { target: "?.pre.{lang}.js", source: ".?.pre.es6.{lang}.js" }]
          : [
              techs.babel,
              {
                target: "?.pre.{lang}.js",
                sourceTarget: ".?.pre.es6.{lang}.js",
                babelOptions: {
                  presets: [
                    [
                      "env",
                      {
                        targets: {
                          browsers: ["last 2 versions", "safari >= 7"]
                        }
                      }
                    ]
                  ]
                }
              }
            ],

        [
          techs.prependYm,
          {
            source: "?.pre.{lang}.js",
            target: "?.{lang}.js"
          }
        ],

        [
          techs.borschik,
          {
            minify: true,
            freeze: false,
            source: "?.{lang}.js",
            target: "?.{lang}.min.js"
          }
        ],
        [techs.borschik, { minify: true, freeze: true, source: "?.css", target: "?.min.css" }],
        [
          techs.borschik,
          {
            minify: true,
            freeze: false,
            source: "?.bemhtml.js",
            target: "?.bemhtml.min.js"
          }
        ],

        [
          techs.fileCopy,
          {
            source: "?.{lang}.min.js",
            target: "../../static/assets/js/" + platform + "/?.{lang}.min.js"
          }
        ],
        [
          techs.fileCopy,
          {
            source: "?.min.css",
            target: "../../static/assets/css/" + platform + "/?.min.css"
          }
        ]
      ]);

      nodeConfig.addTargets(["../../static/assets/css/" + platform + "/?.min.css", "../../static/assets/js/" + platform + "/?.{lang}.min.js"]);
    });
  });
};
