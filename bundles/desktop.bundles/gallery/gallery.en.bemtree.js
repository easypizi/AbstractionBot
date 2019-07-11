var BEMTREE;

(function(global) {
    function buildBemXjst(__bem_xjst_libs__) {
        var exports = {};

        /// -------------------------------------
/// --------- BEM-XJST Runtime Start ----
/// -------------------------------------
var BEMTREE = function(module, exports) {
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bemtree = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var inherits = require('inherits');
var BemxjstEntity = require('../bemxjst/entity').Entity;

function Entity() {
  BemxjstEntity.apply(this, arguments);
}

inherits(Entity, BemxjstEntity);
exports.Entity = Entity;

Entity.prototype.defaultBody = function(context) {
  context.mods = this.mods.exec(context);
  if (context.ctx.elem) context.elemMods = this.elemMods.exec(context);

  return this.bemxjst.render(context,
                             this,
                             this.content.exec(context),
                             this.js.exec(context),
                             this.mix.exec(context),
                             context.mods,
                             context.elemMods);
};

},{"../bemxjst/entity":5,"inherits":11}],2:[function(require,module,exports){
var inherits = require('inherits');
var BEMXJST = require('../bemxjst');
var Entity = require('./entity').Entity;
var utils = require('../bemxjst/utils');

function BEMTREE() {
  BEMXJST.apply(this, arguments);
}

inherits(BEMTREE, BEMXJST);
module.exports = BEMTREE;

BEMTREE.prototype.Entity = Entity;

BEMTREE.prototype.runMany = function(arr) {
  var out = [];
  var context = this.context;
  var prevPos = context.position;
  var prevNotNewList = context._notNewList;

  if (prevNotNewList) {
    context._listLength += arr.length - 1;
  } else {
    context.position = 0;
    context._listLength = arr.length;
  }
  context._notNewList = true;

  if (this.canFlush) {
    for (var i = 0; i < arr.length; i++)
      out += context._flush(this._run(arr[i])); // TODO: fixme!
  } else {
    for (var i = 0; i < arr.length; i++)
      out.push(this._run(arr[i]));
  }

  if (!prevNotNewList)
    context.position = prevPos;

  return out;
};

BEMTREE.prototype.render = function(context, entity, content, js, mix, mods,
                                                                    elemMods) {
  var ctx = utils.extend({}, context.ctx);
  var isBEM = !!(ctx.block || ctx.elem || ctx.bem);

  if (typeof js !== 'undefined')
    ctx.js = js;

  if (typeof mix !== 'undefined')
    ctx.mix = mix;

  if (!entity.elem && mods && Object.keys(mods).length > 0)
    ctx.mods = utils.extend(ctx.mods || {}, mods);

  if (entity.elem && elemMods && Object.keys(elemMods).length > 0)
    ctx.elemMods = utils.extend(ctx.elemMods || {}, elemMods);

  if (typeof content === 'undefined')
    return ctx;

  ctx.content = this.renderContent(content, isBEM);

  return ctx;
};

BEMTREE.prototype._run = function(context) {
  if (!context || context === true) return context;
  return BEMXJST.prototype._run.call(this, context);
};

BEMTREE.prototype.runUnescaped = function(context) {
  this.context._listLength--;
  return context;
};

},{"../bemxjst":7,"../bemxjst/utils":10,"./entity":1,"inherits":11}],3:[function(require,module,exports){
function ClassBuilder(options) {
  this.modDelim = options.mod || '_';
  this.elemDelim = options.elem || '__';
}
exports.ClassBuilder = ClassBuilder;

ClassBuilder.prototype.build = function(block, elem) {
  if (!elem)
    return block;
  else
    return block + this.elemDelim + elem;
};

ClassBuilder.prototype.buildModPostfix = function(modName, modVal) {
  var res = this.modDelim + modName;
  if (modVal !== true) res += this.modDelim + modVal;
  return res;
};

ClassBuilder.prototype.buildBlockClass = function(name, modName, modVal) {
  var res = name;
  if (modVal) res += this.buildModPostfix(modName, modVal);
  return res;
};

ClassBuilder.prototype.buildElemClass = function(block, name, modName, modVal) {
  return this.buildBlockClass(block) +
    this.elemDelim +
    name +
    this.buildModPostfix(modName, modVal);
};

ClassBuilder.prototype.split = function(key) {
  return key.split(this.elemDelim, 2);
};

},{}],4:[function(require,module,exports){
var utils = require('./utils');

function Context(bemxjst) {
  this._bemxjst = bemxjst;

  this.ctx = null;
  this.block = '';

  // Save current block until the next BEM entity
  this._currBlock = '';

  this.elem = null;
  this.mods = {};
  this.elemMods = {};

  this.position = 0;
  this._listLength = 0;
  this._notNewList = false;

  this.escapeContent = bemxjst.options.escapeContent !== false;
}
exports.Context = Context;

Context.prototype._flush = null;

Context.prototype.isSimple = utils.isSimple;

Context.prototype.isShortTag = utils.isShortTag;
Context.prototype.extend = utils.extend;
Context.prototype.identify = utils.identify;

Context.prototype.xmlEscape = utils.xmlEscape;
Context.prototype.attrEscape = utils.attrEscape;
Context.prototype.jsAttrEscape = utils.jsAttrEscape;

Context.prototype.isFirst = function() {
  return this.position === 1;
};

Context.prototype.isLast = function() {
  return this.position === this._listLength;
};

Context.prototype.generateId = function() {
  return utils.identify(this.ctx);
};

Context.prototype.reapply = function(ctx) {
  return this._bemxjst.run(ctx);
};

},{"./utils":10}],5:[function(require,module,exports){
var utils = require('./utils');
var Match = require('./match').Match;
var tree = require('./tree');
var Template = tree.Template;
var PropertyMatch = tree.PropertyMatch;
var CompilerOptions = tree.CompilerOptions;

function Entity(bemxjst, block, elem, templates) {
  this.bemxjst = bemxjst;

  this.block = null;
  this.elem = null;

  // Compiler options via `xjstOptions()`
  this.options = {};

  // `true` if entity has just a default renderer for `def()` mode
  this.canFlush = true;

  // "Fast modes"
  this.def = new Match(this);
  this.mix = new Match(this, 'mix');
  this.js = new Match(this, 'js');
  this.mods = new Match(this, 'mods');
  this.elemMods = new Match(this, 'elemMods');
  this.content = new Match(this, 'content');

  // "Slow modes"
  this.rest = {};

  // Initialize
  this.init(block, elem);
  this.initModes(templates);
}
exports.Entity = Entity;

Entity.prototype.init = function(block, elem) {
  this.block = block;
  this.elem = elem;
};

Entity.prototype._keys = {
  content: 1,
  mix: 1,
  js: 1,
  mods: 1,
  elemMods: 1
};

Entity.prototype._initRest = function(key) {
  if (key === 'default') {
    this.rest[key] = this.def;
  } else if (this._keys[key]) {
    this.rest[key] = this[key];
  } else {
    this.rest[key] = this.rest[key] || new Match(this, key);
  }
};

Entity.prototype.initModes = function(templates) {
  /* jshint maxdepth : false */
  for (var i = 0; i < templates.length; i++) {
    var template = templates[i];

    for (var j = template.predicates.length - 1; j >= 0; j--) {
      var pred = template.predicates[j];
      if (!(pred instanceof PropertyMatch))
        continue;

      if (pred.key !== '_mode')
        continue;

      template.predicates.splice(j, 1);
      this._initRest(pred.value);

      // All templates should go there anyway
      this.rest[pred.value].push(template);
      break;
    }

    if (j === -1)
      this.def.push(template);

    // Merge compiler options
    for (var j = template.predicates.length - 1; j >= 0; j--) {
      var pred = template.predicates[j];
      if (!(pred instanceof CompilerOptions))
        continue;

      this.options = utils.extend(this.options, pred.options);
    }
  }
};

Entity.prototype.prepend = function(other) {
  // Prepend to the slow modes, fast modes are in this hashmap too anyway
  var keys = Object.keys(this.rest);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!other.rest[key])
      continue;

    this.rest[key].prepend(other.rest[key]);
  }

  // Add new slow modes
  keys = Object.keys(other.rest);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (this.rest[key])
      continue;

    this._initRest(key);
    this.rest[key].prepend(other.rest[key]);
  }
};

// NOTE: This could be potentially compiled into inlined invokations
Entity.prototype.run = function(context) {
  if (this.def.count !== 0)
    return this.def.exec(context);

  return this.defaultBody(context);
};


function contentMode() {
  return this.ctx.content;
}

Entity.prototype.setDefaults = function() {
  // Default .content() template for applyNext()
  if (this.content.count !== 0)
    this.content.push(new Template([], contentMode));

  // .def() default
  if (this.def.count !== 0) {
    this.canFlush = this.options.flush || false;
    var self = this;
    this.def.push(new Template([], function defaultBodyProxy() {
      return self.defaultBody(this);
    }));
  }
};

},{"./match":8,"./tree":9,"./utils":10}],6:[function(require,module,exports){
function BEMXJSTError(msg, func) {
  this.name = 'BEMXJSTError';
  this.message = msg;

  if (Error.captureStackTrace)
    Error.captureStackTrace(this, func || this.constructor);
  else
    this.stack = (new Error()).stack;
}

BEMXJSTError.prototype = Object.create(Error.prototype);
BEMXJSTError.prototype.constructor = BEMXJSTError;

exports.BEMXJSTError = BEMXJSTError;

},{}],7:[function(require,module,exports){
var inherits = require('inherits');

var Tree = require('./tree').Tree;
var PropertyMatch = require('./tree').PropertyMatch;
var AddMatch = require('./tree').AddMatch;
var Context = require('./context').Context;
var ClassBuilder = require('./class-builder').ClassBuilder;
var utils = require('./utils');

function BEMXJST(options) {
  this.options = options;

  this.entities = null;
  this.defaultEnt = null;

  // Current tree
  this.tree = null;

  // Current match
  this.match = null;

  // Create new Context constructor for overriding prototype
  this.contextConstructor = function ContextChild(bemxjst) {
    Context.call(this, bemxjst);
  };
  inherits(this.contextConstructor, Context);
  this.context = null;

  this.classBuilder = new ClassBuilder(this.options.naming || {});

  // Execution depth, used to invalidate `applyNext` bitfields
  this.depth = 0;

  // Do not call `_flush` on overridden `def()` mode
  this.canFlush = false;

  // oninit templates
  this.oninit = null;

  // Initialize default entity (no block/elem match)
  this.defaultEnt = new this.Entity(this, '', '', []);
  this.defaultElemEnt = new this.Entity(this, '', '', []);
}
module.exports = BEMXJST;

BEMXJST.prototype.locals = Tree.methods
    .concat('local', 'applyCtx', 'applyNext', 'apply');

BEMXJST.prototype.compile = function(code) {
  var self = this;

  function applyCtx() {
    return self._run(self.context.ctx);
  }

  function applyCtxWrap(ctx, changes) {
    // Fast case
    if (!changes)
      return self.local({ ctx: ctx }, applyCtx);

    return self.local(changes, function() {
      return self.local({ ctx: ctx }, applyCtx);
    });
  }

  function apply(mode, changes) {
    return self.applyMode(mode, changes);
  }

  function localWrap(changes) {
    return function localBody(body) {
      return self.local(changes, body);
    };
  }

  var tree = new Tree({
    refs: {
      applyCtx: applyCtxWrap,
      apply: apply
    }
  });

  // Yeah, let people pass functions to us!
  var templates = this.recompileInput(code);

  var out = tree.build(templates, [
    localWrap,
    applyCtxWrap,
    function applyNextWrap(changes) {
      if (changes)
        return self.local(changes, applyNextWrap);
      return self.applyNext();
    },
    apply
  ]);

  // Concatenate templates with existing ones
  // TODO(indutny): it should be possible to incrementally add templates
  if (this.tree) {
    out = {
      templates: out.templates.concat(this.tree.templates),
      oninit: this.tree.oninit.concat(out.oninit)
    };
  }
  this.tree = out;

  // Group block+elem entities into a hashmap
  var ent = this.groupEntities(out.templates);

  // Transform entities from arrays to Entity instances
  ent = this.transformEntities(ent);

  this.entities = ent;
  this.oninit = out.oninit;
};

BEMXJST.prototype.getTemplate = function(code, options) {
  this.compile(code, options);

  return this.exportApply();
};

BEMXJST.prototype.recompileInput = function(code) {
  var args = BEMXJST.prototype.locals;
  // Reuse function if it already has right arguments
  if (typeof code === 'function' && code.length === args.length)
    return code;

  return new Function(args.join(', '), utils.fnToString(code));
};

BEMXJST.prototype.groupEntities = function(tree) {
  var res = {};
  for (var i = 0; i < tree.length; i++) {
    // Make sure to change only the copy, the original is cached in `this.tree`
    var template = tree[i].clone();
    var block = null;
    var elem;

    elem = undefined;
    for (var j = 0; j < template.predicates.length; j++) {
      var pred = template.predicates[j];
      if (!(pred instanceof PropertyMatch) &&
        !(pred instanceof AddMatch))
        continue;

      if (pred.key === 'block')
        block = pred.value;
      else if (pred.key === 'elem')
        elem = pred.value;
      else
        continue;

      // Remove predicate, we won't much against it
      template.predicates.splice(j, 1);
      j--;
    }

    if (block === null) {
      var msg = 'block(…) subpredicate is not found.\n' +
      '    See template with subpredicates:\n     * ';

      for (var j = 0; j < template.predicates.length; j++) {
        var pred = template.predicates[j];

        if (j !== 0)
          msg += '\n     * ';

        if (pred.key === '_mode') {
          msg += pred.value + '()';
        } else {
          if (Array.isArray(pred.key)) {
            msg += pred.key[0].replace('mods', 'mod')
              .replace('elemMods', 'elemMod') +
              '(\'' + pred.key[1] + '\', \'' + pred.value + '\')';
          } else {
            msg += 'match(…)';
          }
        }
      }

      msg += '\n    And template body: \n    (' +
        (typeof template.body === 'function' ?
          template.body :
          JSON.stringify(template.body)) + ')';

      if (typeof BEMXJSTError === 'undefined') {
        BEMXJSTError = require('./error').BEMXJSTError;
      }

      throw new BEMXJSTError(msg);
    }

    var key = this.classBuilder.build(block, elem);

    if (!res[key])
      res[key] = [];
    res[key].push(template);
  }
  return res;
};

BEMXJST.prototype.transformEntities = function(entities) {
  var wildcardElems = [];

  var keys = Object.keys(entities);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    // TODO(indutny): pass this values over
    var parts = this.classBuilder.split(key);
    var block = parts[0];
    var elem = parts[1];

    if (elem === '*')
      wildcardElems.push(block);

    entities[key] = new this.Entity(
      this, block, elem, entities[key]);
  }

  // Merge wildcard block templates
  if (entities.hasOwnProperty('*')) {
    var wildcard = entities['*'];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key === '*')
        continue;

      entities[key].prepend(wildcard);
    }
    this.defaultEnt.prepend(wildcard);
    this.defaultElemEnt.prepend(wildcard);
  }

  // Merge wildcard elem templates
  for (var i = 0; i < wildcardElems.length; i++) {
    var block = wildcardElems[i];
    var wildcardKey = this.classBuilder.build(block, '*');
    var wildcard = entities[wildcardKey];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key === wildcardKey)
        continue;

      var entity = entities[key];
      if (entity.block !== block || entity.elem === undefined)
        continue;

      entities[key].prepend(wildcard);
    }
    this.defaultElemEnt.prepend(wildcard);
  }

  // Set default templates after merging with wildcard
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    entities[key].setDefaults();
    this.defaultEnt.setDefaults();
    this.defaultElemEnt.setDefaults();
  }

  return entities;
};

BEMXJST.prototype._run = function(context) {
  if (context === undefined || context === '' || context === null)
    return this.runEmpty();
  else if (Array.isArray(context))
    return this.runMany(context);
  else if (
    typeof context.html === 'string' &&
    !context.tag &&
    typeof context.block === 'undefined' &&
    typeof context.elem === 'undefined' &&
    typeof context.cls === 'undefined' &&
    typeof context.attrs === 'undefined'
  )
    return this.runUnescaped(context);
  else if (utils.isSimple(context))
    return this.runSimple(context);

  return this.runOne(context);
};

BEMXJST.prototype.run = function(json) {
  var match = this.match;
  var context = this.context;

  this.match = null;
  this.context = new this.contextConstructor(this);
  this.canFlush = this.context._flush !== null;
  this.depth = 0;
  var res = this._run(json);

  if (this.canFlush)
    res = this.context._flush(res);

  this.match = match;
  this.context = context;

  return res;
};

BEMXJST.prototype.runEmpty = function() {
  this.context._listLength--;
  return '';
};

BEMXJST.prototype.runUnescaped = function(context) {
  this.context._listLength--;
  return '' + context.html;
};

BEMXJST.prototype.runSimple = function(simple) {
  this.context._listLength--;
  if (!simple && simple !== 0 || simple === true)
    return '';

  return typeof simple === 'string' && this.context.escapeContent ?
      utils.xmlEscape(simple) :
      simple;
};

BEMXJST.prototype.runOne = function(json) {
  var context = this.context;

  var oldCtx = context.ctx;
  var oldBlock = context.block;
  var oldCurrBlock = context._currBlock;
  var oldElem = context.elem;
  var oldMods = context.mods;
  var oldElemMods = context.elemMods;

  if (json.block || json.elem)
    context._currBlock = '';
  else
    context._currBlock = context.block;

  context.ctx = json;
  if (json.block) {
    context.block = json.block;

    if (json.mods)
      context.mods = json.mods;
    else if (json.block !== oldBlock || !json.elem)
      context.mods = {};
  } else {
    if (!json.elem)
      context.block = '';
    else if (oldCurrBlock)
      context.block = oldCurrBlock;
  }

  context.elem = json.elem;
  if (json.elemMods)
    context.elemMods = json.elemMods;
  else
    context.elemMods = {};

  var block = context.block || '';
  var elem = context.elem;

  // Control list position
  if (block || elem)
    context.position++;
  else
    context._listLength--;

  // To invalidate `applyNext` flags
  this.depth++;

  var restoreFlush = false;
  var ent = this.entities[this.classBuilder.build(block, elem)];
  if (ent) {
    if (this.canFlush && !ent.canFlush) {
      // Entity does not support flushing, do not flush anything nested
      restoreFlush = true;
      this.canFlush = false;
    }
  } else {
    // No entity - use default one
    ent = this.defaultEnt;
    if (elem !== undefined)
      ent = this.defaultElemEnt;
    ent.init(block, elem);
  }

  var res = this.options.production === true ?
    this.tryRun(context, ent) :
    ent.run(context);

  context.ctx = oldCtx;
  context.block = oldBlock;
  context.elem = oldElem;
  context.mods = oldMods;
  context.elemMods = oldElemMods;
  context._currBlock = oldCurrBlock;
  this.depth--;
  if (restoreFlush)
    this.canFlush = true;

  return res;
};

BEMXJST.prototype.tryRun = function(context, ent) {
  try {
    return ent.run(context);
  } catch (e) {
    console.error('BEMXJST ERROR: cannot render ' +
      [
        'block ' + context.block,
        'elem ' + context.elem,
        'mods ' + JSON.stringify(context.mods),
        'elemMods ' + JSON.stringify(context.elemMods)
      ].join(', '), e);
    return '';
  }
};

BEMXJST.prototype.renderContent = function(content, isBEM) {
  var context = this.context;
  var oldPos = context.position;
  var oldListLength = context._listLength;
  var oldNotNewList = context._notNewList;

  context._notNewList = false;
  if (isBEM) {
    context.position = 0;
    context._listLength = 1;
  }

  var res = this._run(content);

  context.position = oldPos;
  context._listLength = oldListLength;
  context._notNewList = oldNotNewList;

  return res;
};

BEMXJST.prototype.local = function(changes, body) {
  var keys = Object.keys(changes);
  var restore = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var parts = key.split('.');

    var value = this.context;
    for (var j = 0; j < parts.length - 1; j++)
      value = value[parts[j]];

    restore.push({
      parts: parts,
      value: value[parts[j]]
    });
    value[parts[j]] = changes[key];
  }

  var res = body.call(this.context);

  for (var i = 0; i < restore.length; i++) {
    var parts = restore[i].parts;
    var value = this.context;
    for (var j = 0; j < parts.length - 1; j++)
      value = value[parts[j]];

    value[parts[j]] = restore[i].value;
  }

  return res;
};

BEMXJST.prototype.applyNext = function() {
  return this.match.exec(this.context);
};

BEMXJST.prototype.applyMode = function(mode, changes) {
  var key;
  var match = this.match;

  if (!match) {
    var key = this.classBuilder.build(this.context.block, this.context.elem);
    match = this.entities[key].rest[mode];
  } else {
    match = this.match.entity.rest[mode];
  }

  if (!match) {
    if (mode === 'mods')
      return this.context.mods;

    if (mode === 'elemMods')
      return this.context.elemMods;

    return this.context.ctx[mode];
  }

  if (!changes)
    return match.exec(this.context);

  var self = this;

  // Allocate function this way, to prevent allocation at the top of the
  // `applyMode`
  var localBody = function() {
    return match.exec(self.context);
  };
  return this.local(changes, localBody);
};

BEMXJST.prototype.exportApply = function(exports) {
  var self = this;
  var ret = exports || {};

  ret.apply = function(context) {
    return self.run(context);
  };

  // Add templates at run time
  ret.compile = function(templates) {
    self.compile(templates);
    return ret;
  };

  ret.BEMContext = this.contextConstructor;

  for (var i = 0; i < this.oninit.length; i++) {
    // NOTE: oninit has global context instead of BEMXJST
    var oninit = self.oninit[i];
    oninit(ret, { BEMContext: ret.BEMContext });
  }

  return ret;
};

},{"./class-builder":3,"./context":4,"./error":6,"./tree":9,"./utils":10,"inherits":11}],8:[function(require,module,exports){
var tree = require('./tree');
var PropertyMatch = tree.PropertyMatch;
var AddMatch = tree.AddMatch;
var WrapMatch = tree.WrapMatch;
var ExtendMatch = tree.ExtendMatch;
var CustomMatch = tree.CustomMatch;

function MatchNested(template, pred) {
  this.template = template;
  this.keys = pred.key;
  this.value = pred.value;
}

MatchNested.prototype.exec = function(context) {
  var val = context;

  for (var i = 0; i < this.keys.length - 1; i++) {
    val = val[this.keys[i]];
    if (!val)
      return false;
  }

  val = val[this.keys[i]];

  if (this.value === true)
    return val !== undefined && val !== '' && val !== false && val !== null;

  return String(val) === this.value;
};

function MatchCustom(template, pred) {
  this.template = template;
  this.body = pred.body;
}

MatchCustom.prototype.exec = function(context) {
  return this.body.call(context, context, context.ctx);
};

function MatchWrap(template) {
  this.template = template;
  this.wrap = null;
}

MatchWrap.prototype.exec = function(context) {
  var res = this.wrap !== context.ctx;
  this.wrap = context.ctx;
  return res;
};

function MatchExtend(template) {
  this.template = template;
  this.wrap = null;
}

MatchExtend.prototype.exec = function(context) {
  var res = this.ext !== context.ctx;
  this.ext = context.ctx;
  return res;
};

function AddWrap(template, pred) {
  this.template = template;
  this.key = pred.key;
  this.value = pred.value;
}

AddWrap.prototype.exec = function(context) {
  return context[this.key] === this.value;
};

function MatchTemplate(mode, template) {
  this.mode = mode;
  this.predicates = new Array(template.predicates.length);
  this.body = template.body;

  var postpone = [];

  for (var i = 0, j = 0; i < this.predicates.length; i++, j++) {
    var pred = template.predicates[i];
    if (pred instanceof PropertyMatch) {
      this.predicates[j] = new MatchNested(this, pred);
    } else if (pred instanceof ExtendMatch) {
      j--;
      postpone.push(new MatchExtend(this));
    } else if (pred instanceof AddMatch) {
      this.predicates[j] = new AddWrap(this, pred);
    } else if (pred instanceof CustomMatch) {
      this.predicates[j] = new MatchCustom(this, pred);

      // Push MatchWrap later, they should not be executed first.
      // Otherwise they will set flag too early, and body might not be executed
    } else if (pred instanceof WrapMatch) {
      j--;
      postpone.push(new MatchWrap(this));
    } else {
      // Skip
      j--;
    }
  }

  // Insert late predicates
  for (var i = 0; i < postpone.length; i++, j++)
    this.predicates[j] = postpone[i];

  if (this.predicates.length !== j)
    this.predicates.length = j;
}
exports.MatchTemplate = MatchTemplate;

function Match(entity, modeName) {
  this.entity = entity;
  this.modeName = modeName;
  this.bemxjst = this.entity.bemxjst;
  this.templates = [];

  // applyNext mask
  this.mask = [ 0 ];

  // We are going to create copies of mask for nested `applyNext()`
  this.maskSize = 0;
  this.maskOffset = 0;

  this.count = 0;
  this.depth = -1;

  this.thrownError = null;
}
exports.Match = Match;

Match.prototype.prepend = function(other) {
  this.templates = other.templates.concat(this.templates);
  this.count += other.count;

  while (Math.ceil(this.count / 31) > this.mask.length)
    this.mask.push(0);

  this.maskSize = this.mask.length;
};

Match.prototype.push = function(template) {
  this.templates.push(new MatchTemplate(this, template));
  this.count++;

  if (Math.ceil(this.count / 31) > this.mask.length)
    this.mask.push(0);

  this.maskSize = this.mask.length;
};

Match.prototype.tryCatch = function(fn, ctx) {
  try {
    return fn.call(ctx, ctx, ctx.ctx);
  } catch (e) {
    this.thrownError = e;
  }
};

Match.prototype.exec = function(context) {
  var save = this.checkDepth();

  var template;
  var bitIndex = this.maskOffset;
  var mask = this.mask[bitIndex];
  var bit = 1;
  for (var i = 0; i < this.count; i++) {
    if ((mask & bit) === 0) {
      template = this.templates[i];
      for (var j = 0; j < template.predicates.length; j++) {
        var pred = template.predicates[j];

        /* jshint maxdepth : false */
        if (!pred.exec(context))
          break;
      }

      // All predicates matched!
      if (j === template.predicates.length)
        break;
    }

    if (bit === 0x40000000) {
      bitIndex++;
      mask = this.mask[bitIndex];
      bit = 1;
    } else {
      bit <<= 1;
    }
  }

  if (i === this.count) {
    if (this.modeName === 'mods')
      return context.mods;

    if (this.modeName === 'elemMods')
      return context.elemMods;

    return context.ctx[this.modeName];
  }

  var oldMask = mask;
  var oldMatch = this.bemxjst.match;
  this.mask[bitIndex] |= bit;
  this.bemxjst.match = this;

  this.thrownError = null;

  var out;
  if (typeof template.body === 'function')
    out = this.tryCatch(template.body, context);
  else
    out = template.body;

  this.mask[bitIndex] = oldMask;
  this.bemxjst.match = oldMatch;
  this.restoreDepth(save);

  var e = this.thrownError;
  if (e !== null) {
    this.thrownError = null;
    throw e;
  }

  return out;
};

Match.prototype.checkDepth = function() {
  if (this.depth === -1) {
    this.depth = this.bemxjst.depth;
    return -1;
  }

  if (this.bemxjst.depth === this.depth)
    return this.depth;

  var depth = this.depth;
  this.depth = this.bemxjst.depth;

  this.maskOffset += this.maskSize;

  while (this.mask.length < this.maskOffset + this.maskSize)
    this.mask.push(0);

  return depth;
};

Match.prototype.restoreDepth = function(depth) {
  if (depth !== -1 && depth !== this.depth)
    this.maskOffset -= this.maskSize;
  this.depth = depth;
};

},{"./tree":9}],9:[function(require,module,exports){
var inherits = require('inherits');
var utils = require('./utils');

function Template(predicates, body) {
  this.predicates = predicates;

  this.body = body;
}
exports.Template = Template;

Template.prototype.wrap = function() {
  var body = this.body;
  for (var i = 0; i < this.predicates.length; i++) {
    var pred = this.predicates[i];
    body = pred.wrapBody(body);
  }
  this.body = body;
};

Template.prototype.clone = function() {
  return new Template(this.predicates.slice(), this.body);
};

function MatchBase() {
}
exports.MatchBase = MatchBase;

MatchBase.prototype.wrapBody = function(body) {
  return body;
};

function Item(tree, children) {
  this.conditions = [];
  this.children = [];

  for (var i = children.length - 1; i >= 0; i--) {
    var arg = children[i];
    if (arg instanceof MatchBase)
      this.conditions.push(arg);
    else if (arg === tree.boundBody)
      this.children[i] = tree.queue.pop();
    else
      this.children[i] = arg;
  }
}

function WrapMatch(refs) {
  MatchBase.call(this);

  this.refs = refs;
}
inherits(WrapMatch, MatchBase);
exports.WrapMatch = WrapMatch;

WrapMatch.prototype.wrapBody = function(body) {
  var applyCtx = this.refs.applyCtx;

  if (typeof body !== 'function') {
    return function() {
      return applyCtx(body);
    };
  }

  return function() {
    return applyCtx(body.call(this, this, this.ctx));
  };
};

function ReplaceMatch(refs) {
  MatchBase.call(this);

  this.refs = refs;
}
inherits(ReplaceMatch, MatchBase);
exports.ReplaceMatch = ReplaceMatch;

ReplaceMatch.prototype.wrapBody = function(body) {
  var applyCtx = this.refs.applyCtx;

  if (typeof body !== 'function') {
    return function() {
      return applyCtx(body, { position: this.position - 1 });
    };
  }

  return function() {
    return applyCtx(body.call(this, this, this.ctx),
                    { position: this.position - 1 });
  };
};

function ExtendMatch(refs) {
  MatchBase.call(this);

  this.refs = refs;
}
inherits(ExtendMatch, MatchBase);
exports.ExtendMatch = ExtendMatch;

ExtendMatch.prototype.wrapBody = function(body) {
  var refs = this.refs;
  var applyCtx = refs.applyCtx;

  if (typeof body !== 'function') {
    return function() {
      var changes = {};

      var keys = Object.keys(body);
      for (var i = 0; i < keys.length; i++)
        changes[keys[i]] = body[keys[i]];

      return applyCtx(this.ctx, changes);
    };
  }

  return function() {
    var changes = {};

    var obj = body.call(this, this, this.ctx);
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++)
      changes[keys[i]] = obj[keys[i]];

    return applyCtx(this.ctx, changes);
  };
};

function AddMatch(mode, refs) {
  MatchBase.call(this);

  this.mode = mode;
  this.refs = refs;
}
inherits(AddMatch, MatchBase);
exports.AddMatch = AddMatch;

AddMatch.prototype.wrapBody = function(body) {
  return this[this.mode + 'WrapBody'](body);
};

AddMatch.prototype.appendContentWrapBody = function(body) {
  var apply = this.refs.apply;

  if (typeof body !== 'function') {
    return function() {
      return [ apply('content') , body ];
    };
  }

  return function() {
    return [ apply('content'), body.call(this, this, this.ctx) ];
  };
};

AddMatch.prototype.prependContentWrapBody = function(body) {
  var apply = this.refs.apply;

  if (typeof body !== 'function') {
    return function() {
      return [ body, apply('content') ];
    };
  }

  return function() {
    return [ body.call(this, this, this.ctx), apply('content') ];
  };
};

AddMatch.prototype.mixWrapBody = function(body) {
  var apply = this.refs.apply;

  if (typeof body !== 'function') {
    return function() {
      var ret = apply('mix');
      /* istanbul ignore else */
      if (!Array.isArray(ret)) ret = [ ret ];
      return ret.concat(body);
    };
  }

  return function() {
    var ret = apply('mix');
    if (!Array.isArray(ret)) ret = [ ret ];
    return ret.concat(body.call(this, this, this.ctx));
  };
};

[ 'attrs', 'js', 'mods', 'elemMods' ].forEach(function(method) {
  AddMatch.prototype[ method + 'WrapBody'] = function(body) {
    var apply = this.refs.apply;

    return typeof body !== 'function' ?
      function() {
        return (this[method] = utils.extend(apply(method) || {}, body));
      } :
      function() {
        return (this[method] = utils.extend(apply(method) || {},
                               body.call(this, this, this.ctx)));
      };
  };
});

function CompilerOptions(options) {
  MatchBase.call(this);
  this.options = options;
}
inherits(CompilerOptions, MatchBase);
exports.CompilerOptions = CompilerOptions;

function PropertyMatch(key, value) {
  MatchBase.call(this);

  this.key = key;
  this.value = value;
}
inherits(PropertyMatch, MatchBase);
exports.PropertyMatch = PropertyMatch;

function CustomMatch(body) {
  MatchBase.call(this);

  this.body = body;
}
inherits(CustomMatch, MatchBase);
exports.CustomMatch = CustomMatch;

function Tree(options) {
  this.options = options;
  this.refs = this.options.refs;

  this.boundBody = this.body.bind(this);

  var methods = this.methods('body');
  for (var i = 0; i < methods.length; i++) {
    var method = methods[i];
    // NOTE: method.name is empty because of .bind()
    this.boundBody[Tree.methods[i]] = method;
  }

  this.queue = [];
  this.templates = [];
  this.initializers = [];
}
exports.Tree = Tree;

Tree.methods = [
  // Subpredicates:
  'match', 'block', 'elem', 'mod', 'elemMod',
  // Runtime related:
  'oninit', 'xjstOptions',
  // Output generators:
  'wrap', 'replace', 'extend', 'mode', 'def',
  'content', 'appendContent', 'prependContent',
  'attrs', 'addAttrs', 'js', 'addJs', 'mix', 'addMix',
  'mods', 'addMods', 'addElemMods', 'elemMods',
  'tag', 'cls', 'bem'
];

Tree.prototype.build = function(templates, apply) {
  var methods = this.methods('global').concat(apply);
  methods[0] = this.match.bind(this);

  templates.apply({}, methods);

  return {
    templates: this.templates.slice().reverse(),
    oninit: this.initializers
  };
};

function methodFactory(self, kind, name) {
  var method = self[name];
  var boundBody = self.boundBody;

  if (kind !== 'body') {
    if (name === 'replace' || name === 'extend' || name === 'wrap') {
      return function() {
        return method.apply(self, arguments);
      };
    }

    return function() {
      method.apply(self, arguments);
      return boundBody;
    };
  }

  return function() {
    var res = method.apply(self, arguments);

    // Insert body into last item
    var child = self.queue.pop();
    var last = self.queue[self.queue.length - 1];
    last.conditions = last.conditions.concat(child.conditions);
    last.children = last.children.concat(child.children);

    if (name === 'replace' || name === 'extend' || name === 'wrap')
      return res;
    return boundBody;
  };
}

Tree.prototype.methods = function(kind) {
  var out = new Array(Tree.methods.length);

  for (var i = 0; i < out.length; i++) {
    var name = Tree.methods[i];
    out[i] = methodFactory(this, kind, name);
  }

  return out;
};

// Called after all matches
Tree.prototype.flush = function(conditions, item) {
  var subcond = item.conditions ?
    conditions.concat(item.conditions) :
    item.conditions;

  for (var i = 0; i < item.children.length; i++) {
    var arg = item.children[i];

    // Go deeper
    if (arg instanceof Item) {
      this.flush(subcond, item.children[i]);

    // Body
    } else {
      var template = new Template(conditions, arg);
      template.wrap();
      this.templates.push(template);
    }
  }
};

Tree.prototype.body = function() {
  var children = new Array(arguments.length);
  for (var i = 0; i < arguments.length; i++)
    children[i] = arguments[i];

  var child = new Item(this, children);
  this.queue[this.queue.length - 1].children.push(child);

  if (this.queue.length === 1)
    this.flush([], this.queue.shift());

  return this.boundBody;
};

Tree.prototype.match = function() {
  var children = new Array(arguments.length);

  if (!arguments.length)
    throw new Error('.match() must have argument');

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (typeof arg === 'function')
      arg = new CustomMatch(arg);

    if (!(arg instanceof MatchBase))
      throw new Error('Wrong .match() argument');

    children[i] = arg;
  }

  this.queue.push(new Item(this, children));

  return this.boundBody;
};

Tree.prototype.applyMode = function(args, mode) {
  if (args.length) {
    throw new Error('Predicate should not have arguments but ' +
      JSON.stringify(args) + ' passed');
  }

  return this.mode(mode);
};

Tree.prototype.xjstOptions = function(options) {
  this.queue.push(new Item(this, [
    new CompilerOptions(options)
  ]));
  return this.boundBody;
};

[ 'mode', 'elem', 'block' ].forEach(function(method) {
  Tree.prototype[method] = function(name) {
    return this.match(new PropertyMatch(
      method === 'mode' ? '_mode' : method, name));
  };
});

[ 'mod', 'elemMod' ].forEach(function(method) {
  Tree.prototype[method] = function(name, value) {
    return this.match(new PropertyMatch([ method + 's', name ],
                                  value === undefined ? true : String(value)));
  };
});

Tree.prototype.def = function() {
  return this.applyMode(arguments, 'default');
};

[
  'content', 'mix', 'bem', 'js', 'cls', 'attrs', 'tag', 'elemMods', 'mods'
].forEach(function(method) {
  Tree.prototype[method] = function() {
    return this.applyMode(arguments, method);
  };
});

[ 'appendContent', 'prependContent' ].forEach(function(method) {
  Tree.prototype[method] = function() {
    return this.content.apply(this, arguments)
      .match(new AddMatch(method, this.refs));
  };
});

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

[ 'mods', 'elemMods', 'attrs', 'js', 'mix' ].forEach(function(method) {
  Tree.prototype['add' + capitalize(method)] = function() {
    return this[method].apply(this, arguments)
      .match(new AddMatch(method, this.refs));
  };
});

Tree.prototype.wrap = function() {
  return this.def.apply(this, arguments).match(new WrapMatch(this.refs));
};

Tree.prototype.replace = function() {
  return this.def.apply(this, arguments).match(new ReplaceMatch(this.refs));
};

Tree.prototype.extend = function() {
  return this.def.apply(this, arguments).match(new ExtendMatch(this.refs));
};

Tree.prototype.oninit = function(fn) {
  this.initializers.push(fn);
};

},{"./utils":10,"inherits":11}],10:[function(require,module,exports){
var amp = '&amp;';
var lt = '&lt;';
var gt = '&gt;';
var quot = '&quot;';
var singleQuot = '&#39;';

var matchXmlRegExp = /[&<>]/;

function isEmpty(string) {
  return typeof string === 'undefined' ||
     string === null ||
     (typeof string === 'number' && isNaN(string));
}

exports.xmlEscape = function(string) {
  if (isEmpty(string))
    return '';

  var str = '' + string;
  var match = matchXmlRegExp.exec(str);

  if (!match)
    return str;

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 38: // &
        escape = amp;
        break;
      case 60: // <
        escape = lt;
        break;
      case 62: // >
        escape = gt;
        break;
      default:
        continue;
    }

    if (lastIndex !== index)
      html += str.substring(lastIndex, index);

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ?
    html + str.substring(lastIndex, index) :
    html;
};

var matchAttrRegExp = /["&]/;

exports.attrEscape = function(string) {
  if (isEmpty(string))
    return '';

  var str = '' + string;
  var match = matchAttrRegExp.exec(str);

  if (!match)
    return str;

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = quot;
        break;
      case 38: // &
        escape = amp;
        break;
      default:
        continue;
    }

    if (lastIndex !== index)
      html += str.substring(lastIndex, index);

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ?
    html + str.substring(lastIndex, index) :
    html;
};

var matchJsAttrRegExp = /['&]/;

exports.jsAttrEscape = function(string) {
  if (isEmpty(string))
    return '';

  var str = '' + string;
  var match = matchJsAttrRegExp.exec(str);

  if (!match)
    return str;

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 38: // &
        escape = amp;
        break;
      case 39: // '
        escape = singleQuot;
        break;
      default:
        continue;
    }

    if (lastIndex !== index)
      html += str.substring(lastIndex, index);

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ?
    html + str.substring(lastIndex, index) :
    html;
};

exports.extend = function(o1, o2) {
  if (!o1 || !o2)
    return o1 || o2;

  var res = {};
  var n;

  for (n in o1)
    /* istanbul ignore else */
    if (o1.hasOwnProperty(n))
      res[n] = o1[n];
  for (n in o2)
    /* istanbul ignore else */
    if (o2.hasOwnProperty(n))
      res[n] = o2[n];
  return res;
};

var SHORT_TAGS = { // hash for quick check if tag short
  area: 1, base: 1, br: 1, col: 1, command: 1, embed: 1, hr: 1, img: 1,
  input: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1, wbr: 1
};

exports.isShortTag = function(t) {
  return SHORT_TAGS.hasOwnProperty(t);
};

exports.isSimple = function isSimple(obj) {
  if (!obj || obj === true) return true;
  if (!obj.block &&
      !obj.elem &&
      !obj.tag &&
      !obj.cls &&
      !obj.attrs &&
      obj.hasOwnProperty('html') &&
      isSimple(obj.html))
    return true;
  return typeof obj === 'string' || typeof obj === 'number';
};

exports.isObj = function(val) {
  return val && typeof val === 'object' && !Array.isArray(val) &&
    val !== null;
};

var uniqCount = 0;
var uniqId = +new Date();
var uniqExpando = '__' + uniqId;
var uniqPrefix = 'uniq' + uniqId;

function getUniq() {
  return uniqPrefix + (++uniqCount);
}
exports.getUniq = getUniq;

exports.identify = function(obj, onlyGet) {
  if (!obj)
    return getUniq();
  if (onlyGet || obj[uniqExpando])
    return obj[uniqExpando];

  var u = getUniq();
  obj[uniqExpando] = u;
  return u;
};

exports.fnToString = function(code) {
  // It is fine to compile without templates at first
  if (!code)
    return '';

  if (typeof code === 'function') {
    // Examples for regular function
    //   function () { … }
    //   function name() { … }
    //   function (a, b) { … }
    //   function name(a, b) { … }
    //
    // Examples for arrow function
    //   () => { … }
    //   (a, b) => { … }
    //   _ => { … }

    code = code.toString();
    code = code.replace(
      code.indexOf('function') === 0 ?
      /^function\s*[^{]+{|}$/g :
      /^(_|\(\w|[^=>]+\))\s=>\s{|}$/g,
    '');
  }

  return code;
};

/**
 * regexp for check may attribute be unquoted
 *
 * https://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.2
 * https://www.w3.org/TR/html5/syntax.html#attributes
 */
var UNQUOTED_ATTR_REGEXP = /^[:\w.-]+$/;

exports.isUnquotedAttr = function(str) {
  return str && UNQUOTED_ATTR_REGEXP.exec(str);
};

},{}],11:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}]},{},[2])(2)
});
;
  return module.exports ||
      exports.BEMTREE;
}({}, {});
/// -------------------------------------
/// --------- BEM-XJST Runtime End ------
/// -------------------------------------

var api = new BEMTREE({});
/// -------------------------------------
/// ------ BEM-XJST User-code Start -----
/// -------------------------------------
api.compile(function(
match, block, elem, mod, elemMod, oninit, xjstOptions, wrap, replace, extend, mode, def, content, appendContent, prependContent, attrs, addAttrs, js, addJs, mix, addMix, mods, addMods, addElemMods, elemMods, tag, cls, bem, local, applyCtx, applyNext, apply
) {
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/page/page.bemtree.js */
block("page").content()(function() {
  return [
    {
      block: "header"
    },
    {
      block: this.data.view
    },
    {
      block: "footer"
    },
    {
      block: "socials",
      mods: {
        vertical: true
      }
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/page/page.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/page-index/page-index.bemtree.js */
block("page-index").content()(() => {
  let lineup = {
    techno: [
      {
        title: "The Panacea (DE)",
        description: "",
        photo: "panacea",
        link: "https://soundcloud.com/thepanaceaofficial"
      },
      {
        title: "Alekseev aka Aliksiv",
        description: "Fantazery, LABYRINTH",
        photo: "ALEKSEEV",
        link: "https://soundcloud.com/ellixalien"
      },
      {
        title: "Alex Panchenco ",
        description: "Escade Music, Aura Music",
        photo: "Alex",
        link: "https://soundcloud.com/alex-panchenco "
      },
      {
        title: "Artarea",
        description: "",
        link: "https://vk.com/artem_miliukov",
        photo: "artarea"
      },
      {
        title: "Bagus aka Mr.B ",
        description: "(dj set)",
        photo: "Bagus",
        link: "https://soundcloud.com/kirillbagus"
      },
      {
        title: "Daniil Waigelman ",
        description: "Psycometrik Recordings (Spain)",
        photo: "Waigelman",
        link: "https://soundcloud.com/daniilwaigelman"
      },
      {
        title: "Danny Mills ",
        description: "",
        link: "https://www.beatport.com/artist/danny-mills/394436",
        photo: "mills"
      },
      {
        title: "DERKNOB",
        description: "",
        link: "https://www.mixcloud.com/der-knob",
        photo: "derknob"
      },
      {
        title: "Eye Que ",
        description: "SubSpace",
        photo: "EYE",
        link: "https://soundcloud.com/eye_que "
      },
      {
        title: "German Air  (hybrid live/dj set)",
        description: "Heartbeat Records, Baikonur Recordings ",
        photo: "GermanAir",
        link: "https://soundcloud.com/german_air "
      },
      {
        title: "Kaya",
        description: "LABYRINTH",
        photo: "kaya",
        link: "https://soundcloud.com/user-695448784"
      },

      {
        title: "Mila Craft",
        description: "Mistral'",
        photo: "mila",
        link: "https://soundcloud.com/mila_craft/"
      },
      {
        title: "Mish Mish",
        description: "",
        photo: "mishmish",
        link: "http://promodj.com/mishmishdj"
      },

      {
        title: "Mixa Wawer",
        description: "(dj set)",
        photo: "Waver",
        link: "https://soundcloud.com/technopunks "
      },
      {
        title: "NICK-OS ",
        description: "LABYRINTH",
        photo: "NICK-OS",
        link: "https://vk.com/djnick_os"
      },
      {
        title: "Oscar Schultz ",
        description: "Deep Ladoga",
        photo: "Oscar",
        link: "https://vk.com/oscarschultz"
      },
      {
        title: "Voodoo Noise aka Otto O'Shea",
        description: "Mistral'",
        photo: "Voodoo",
        link: "https://soundcloud.com/voodoonoise"
      },
      {
        title: "Pete",
        description: "(vinyl dj set)",
        photo: "pete",
        link: "https://soundcloud.com/peter-kuschnereit"
      },
      {
        title: "SPTNK",
        description: "",
        photo: "sptnk",
        link: "https://vk.com/sptnk.music"
      },
      {
        title: "Space Modular",
        description: "Techno Vinyls Records",
        photo: "Space",
        link: "https://soundcloud.com/space-modular "
      },
      {
        title: "Ten-G",
        description: "Fantazery , Mistral’",
        photo: "TEN-G1",
        link: "https://soundcloud.com/tengi  "
      },
      {
        title: "Tochka_sborki DJs",
        description: "",
        photo: "tochka",
        link:
          "https://soundcloud.com/tochka_sborki/tochka-sborki-djs-live-at-masts-club-10112017  "
      },
      {
        title: "qqoma",
        description: "(vinyl dj set)",
        photo: "qoma",
        link: "https://vk.com/qoma_music"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Denis Podgorniy",
        description: "",
        link: "https://soundcloud.com/denis-podgorny-1",
        photo: "podgor"
      }
    ],
    trance: [
      {
        title: "Fagin's Reject ",
        description: "(Wildthings Records), UK - LIVE ",
        link: "https://soundcloud.com/fagins_reject ",
        photo: "fagins"
      },
      {
        title: "Headworks ",
        description: "(Wildthings Records), UK - LIVE ",
        link: "https://soundcloud.com/headworks-1 ",
        photo: "Headworks"
      },
      {
        title: "Beardy Weardy ",
        description: "(Wildthings Records) UK - LIVE + Dj set ",
        link: "https://soundcloud.com/beardy-weardy-wildthings ",
        photo: "Beardy"
      },
      {
        title: "Samadhi ",
        description: "(Hilltop Records) - Goa/Ru  ",
        link: "https://soundcloud.com/samadhi  ",
        photo: "samadhi"
      },
      {
        title: "Groove Hunter ",
        description: "( World People Production/NT Group ), Ru - LIVE  ",
        link: "https://soundcloud.com/groove_hunter  ",
        photo: "gh"
      },
      {
        title: "LaaToka ",
        description: "(Sunstation rec), Ru  ",
        link: "https://soundcloud.com/laatoka  ",
        photo: "Laatoka"
      },
      {
        title: "Exciter ",
        description: "(Bounce Recordings), Ru  ",
        link: "https://soundcloud.com/exciteroffical   ",
        photo: "Exciter"
      },
      {
        title: "Anumana ",
        description: "(Timewarp Records) ",
        link: "https://soundcloud.com/anumana ",
        photo: "Anumana"
      },
      {
        title: "Belonica ",
        link: "https://soundcloud.com/belonica",
        photo: "blnc"
      },
      {
        title: "Casper ",
        description: "(NT Group Promotion), Ru ",
        link: "http://promodj.com/hystericalmind/music ",
        photo: "Casper"
      },
      {
        title: "Doozer",
        description: "",
        link: "https://vk.com/djdoozer ",
        photo: "Doozer"
      },
      {
        title: "Funkyjunky ",
        description: "(Basic Algorithm), Ru ",
        link: "https://soundcloud.com/funkyshmunky   ",
        photo: "fj"
      },
      {
        title: "psYphomet ",
        description: "(Multifrequency Records), Ru ",
        link: "https://soundcloud.com/psyphometboobblegooms    ",
        photo: "psy"
      },
      {
        title: "Plazmer ",
        description: "(Basic Algorithm Records) ",
        link: "https://mixcloud.com/plazmer20  ",
        photo: "plazmer"
      },
      {
        title: "Sure ",
        description: "(NT Group Promotion), Ru  ",
        link: "https://www.mixcloud.com/surepb/  ",
        photo: "sure"
      },
      {
        title: "Satori ",
        description: "(Vertigo Records), Ru ",
        link: "https://www.facebook.com/nata.satori ",
        photo: "satori"
      },
      {
        title: "Troll machine   ",
        link: "https://soundcloud.com/troll-machine ",
        photo: "tm"
      },
      {
        title: "Will  ",
        description: "(NT Group Promotion), Ru  ",
        link: "https://soundcloud.com/willspb ",
        photo: "will"
      },
      {
        title: "Yhtiot    ",
        description: "(Feeless Records), Ru ",
        link: "https://soundcloud.com/yhtiot ",
        photo: "yt"
      },
      {
        title: "ToyFog ",
        link: "https://soundcloud.com/toyfog ",
        photo: "toyfog"
      },
      {
        title: "Trickster",
        description: "Basic Algorithm Records",
        link: "https://promodj.com/trickster",
        photo: "trickster"
      },
      {
        title: "On",
        link: "https://www.mixcloud.com/olegfreerider/ ",
        photo: "on2"
      },
      {
        title: "Fil Zionpsychedelic",
        description: "",
        link: "http://soundcloud.com/surya-project",
        photo: "fil"
      },
      {
        title: "Mauri Naja",
        description: "",
        link: "https://soundcloud.com/maurinaja",
        photo: "mauri"
      },
      {
        title: "Oxidant ",
        description: "",
        link: "https://vk.com/britva92",
        photo: "oxidant"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Blastourist (HU)",
        description: "",
        link: "https://soundcloud.com/blastourist",
        photo: "blastourist"
      },
      {
        title: "Racoon",
        description: "",
        link: "https://soundcloud.com/raccoon-374329708",
        photo: "racoon"
      }
    ],
    chill: [
      {
        title: "Alexander Daf",
        description: "",
        link: "https://soundcloud.com/alexanderdaf",
        photo: "daf"
      },
      {
        title: "Aedem",
        description: "",
        link: "https://soundcloud.com/aedem",
        photo: "AEDEM"
      },
      {
        title: "Arthur Pralaya",
        description: "",
        link: "https://vk.com/arthur_pralaya",
        photo: "pralaya"
      },
      {
        title: "Blue Lotus",
        description: "Microcosmos records",
        link: "https://blue-lotus.ru/ ",
        photo: "bluelotus"
      },
      {
        title: "Doozer",
        description: "",
        link: "https://vk.com/djdoozer ",
        photo: "Doozer"
      },
      {
        title: "EDD-989",
        description: "Microcosmos Records",
        link: "https://vk.com/edd_989",
        photo: "edd989"
      },
      {
        title: "Helimax",
        description: "",
        link: "https://promodj.com/Helimax",
        photo: "helimax"
      },
      {
        title: "Invisible Inks",
        description: "",
        link: "https://vk.com/invisible_inks",
        photo: "invisibleinks"
      },
      {
        title: "Kuzma",
        description: "",
        link: "http://kuzma-kuznetsov.bandcamp.com/",
        photo: "kuzma"
      },
      {
        title: "Олег Bu33a",
        description: "",
        link: "https://www.instagram.com/oleg_bu33a/",
        photo: "bizza"
      },
      {
        title: "Dj Pealot",
        description: "",
        link: "https://www.mixcloud.com/peaLot/",
        photo: "pealot"
      },
      {
        title: "RaFuze",
        description: "",
        link: "https://t.me/soundhunter",
        photo: "rafuze"
      },
      {
        title: "Sofi Sayonara",
        description: "",
        link: "https://www.mixcloud.com/southfruit/",
        photo: "sofi"
      },
      {
        title: "Susie Johnson",
        description: "",
        link: "https://soundcloud.com/dj_susie",
        photo: "susie"
      },
      {
        title: "Translippers",
        description: "",
        link: "https://translippers.ru",
        photo: "translippers"
      },
      {
        title: "UMT -:- Unlimited Mental Traffic",
        description: "",
        link: "unlim.pdj.ru",
        photo: "umt"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Alexander S. Karlov and E-Motive",
        description: "",
        link: "https://vk.com/djkarlov",
        photo: "backtoback"
      },
      {
        title: "ch1ga",
        description: "",
        link: "https://vk.com/ch1ga",
        photo: "chiga"
      },
      {
        title: "Doqta",
        description: "",
        link: "https://vk.com/vdoqte",
        photo: "doqta"
      },
      {
        title: "#EkzaSelecta",
        description: "",
        link: "https://soundcloud.com/ekzaselecta",
        photo: "ekza"
      },
      {
        title: "ISTWA",
        description: "",
        link: "https://vk.com/kosmoaila",
        photo: "istwa"
      },
      {
        title: "Mir Ashov",
        description: "",
        link: "https://vk.com/id79322013",
        photo: "mirashov"
      },
      {
        title: "Vuestra Merced",
        description: "",
        link: "https://soundcloud.com/vuestramerced",
        photo: "vuestra"
      }
    ]
  };

  let technoArray = lineup.techno.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  let tranceArray = lineup.trance.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  let chillArray = lineup.chill.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  let photoArchive = [];

  for (let i = 1; i < 47; i++) {
    photoArchive.push(i);
  }

  let photoArray = photoArchive.map(item => {
    return {
      block: "card",
      mods: {
        image: true
      },
      photo: item + ".jpg"
    };
  });

  return [
    {
      elem: "content",
      content: [
        {
          elem: "first",
          content: [
            {
              block: "graphics",
              mix: {
                block: "page-index",
                elem: "absImage",
                elemMods: { top: true }
              },
              mods: {
                view: "topStar"
              }
            },
            {
              block: "graphics",
              mix: {
                block: "page-index",
                elem: "absImage",
                elemMods: { left: true }
              },
              mods: {
                view: "left"
              }
            },
            {
              block: "graphics",
              mix: {
                block: "page-index",
                elem: "absImage",
                elemMods: { right: true }
              },
              mods: {
                view: "right"
              }
            },
            {
              elem: "contentWrapper",
              mix: {
                block: "page",
                mods: {
                  width: "narrow"
                }
              },
              content: [
                {
                  elem: "date",
                  content: [
                    {
                      block: "lazyImage",
                      mix: [{ block: "lazyImage", mods: { hidden: true } }],
                      imgSrc: "assets/images/Date.png"
                    }
                  ]
                },
                {
                  elem: "logo",
                  content: [
                    {
                      block: "lazyImage",
                      mix: [{ block: "lazyImage", mods: { hidden: true } }],
                      imgSrc: "assets/images/Logo.png"
                    }
                  ]
                },
                {
                  block: "button",
                  mix: { block: "page-index", elem: "buyButton" },
                  mods: {
                    type: "link",
                    ym: true
                  },
                  url: "http://rupor.biz/widgets/event-tickets/361",
                  text: "Купить билет"
                },
                {
                  block: "button",
                  mix: { block: "page-index", elem: "sideButton" },
                  mods: {
                    type: "link"
                  },
                  target: "_blank",
                  url: "http://rupor.biz/widgets/event-tickets/393",
                  text: "Арендовать домик"
                },
                {
                  block: "button",
                  mix: { block: "page-index", elem: "sideButton" },
                  mods: {
                    type: "link"
                  },
                  target: "_blank",
                  url: "http://rupor.biz/widgets/event-tickets/411",
                  text: "Забронировать трансфер"
                },
                {
                  elem: "video",
                  content: {
                    html:
                      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/agp0yNzh64Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                  }
                }
              ]
            }
          ]
        },
        {
          elem: "second",
          content: {
            elem: "contentWrapper",
            mix: {
              block: "page",
              mods: {
                width: "narrow"
              }
            },
            content: [
              {
                block: "graphics",
                mix: {
                  block: "page-index",
                  elem: "absImage",
                  elemMods: { middle: true }
                },
                mods: {
                  view: "midStar"
                }
              },
              {
                block: "title",
                mods: {
                  size: "l"
                },
                content: "ABSTRACTION X"
              },
              {
                block: "paragraph",
                mods: {
                  size: "l"
                },
                content:
                  "Techno, trance и природа. 3 дня, 2 ночи, частная территория, более 100 артистов и ди джеев, музыка нон-стоп. Здесь будет всё, как ты любишь. Погнали!"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content:
                  "Десять лет назад мы превратили наши неясные фантазии о путешествии в альтернативную реальность в один из лучших лесных фестивалей электронной музыки, из года в год помогая не только отвлечься от всего несущественного, повседневного, но и открывать для себя новые грани музыки, природы, творчества, дружбы и лесных приключений."
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content:
                  "Десятый раз мы готовимся отправить вас через бесчисленность измерений и бесконечное пространство возможностей на лесную планету, где стихии сплетаются с восприятием, где воздух, огонь, вода и земля объединяются в один неразрывный абстрактный узор с пятью чувствами, рождая уникальную встречу Вселенной и Человека."
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content:
                  "Этим летом мы снова запустим лучший лайн-ап на взлётных полосах танцполов. На Abstraction X время остановится, чтобы подарить каждому миг откровения, встреч с самим собой и момент истины. Приглашаем тебя стать соавтором этого фрактального калейдоскопа. Стань частью абстракции."
              }
            ]
          }
        },
        {
          elem: "third",
          content: {
            elem: "contentWrapper",
            mix: {
              block: "page",
              mods: {
                width: "narrow"
              }
            },
            content: [
              {
                block: "title",
                mods: {
                  size: "l"
                },
                content: "Музыка"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content:
                  "В 2019 году привозим самый прогрессивный саунд мира в лице самых мощных и актуальных артистов"
              },
              {
                block: "tabs",
                mods: { type: "button" },
                tabs: [
                  {
                    text: "Транс",
                    disabled: false,
                    active: true,
                    checked: false
                  },
                  {
                    text: "Техно",
                    active: false,
                    disabled: false,
                    checked: false
                  },
                  {
                    text: "Чиллаут",
                    active: false,
                    disabled: false,
                    checked: false
                  }
                ],
                content: [
                  {
                    elem: "pane",
                    elemMods: { active: true },
                    content: [
                      {
                        block: "gallery",
                        js: {
                          slides: 4
                        },
                        elems: tranceArray
                      }
                    ]
                  },
                  {
                    elem: "pane",
                    elemMods: { active: false },
                    content: [
                      {
                        block: "gallery",
                        js: {
                          slides: 4
                        },
                        elems: technoArray
                      }
                    ]
                  },
                  {
                    elem: "pane",
                    elemMods: { active: false },
                    content: [
                      {
                        block: "gallery",
                        js: {
                          slides: 4
                        },
                        elems: chillArray
                      }
                    ]
                  }
                ]
              },
              {
                block: "button",
                mix: { block: "page-index", elem: "lineup" },
                mods: {
                  type: "link"
                },
                url: "/lineup",
                text: "Весь лайн-ап",
                icon: {
                  block: "icon",
                  mods: {
                    arrow: "right"
                  }
                }
              }
            ]
          }
        },
        {
          elem: "forth",
          content: {
            elem: "contentWrapper",
            mix: {
              block: "page",
              mods: {
                width: "narrow"
              }
            },
            content: [
              {
                block: "graphics",
                mix: {
                  block: "page-index",
                  elem: "absImage",
                  elemMods: { top: true }
                },
                mods: {
                  view: "topStar"
                }
              },
              {
                block: "gallery",
                mods: {
                  photo: true
                },
                js: {
                  slides: 4
                },
                elems: photoArray
              }
            ]
          }
        },
        {
          elem: "fifth",
          attrs: {
            id: "place"
          },
          content: {
            elem: "contentWrapper",
            mix: {
              block: "page",
              mods: {
                width: "narrow"
              }
            },
            content: [
              {
                block: "title",
                mods: { size: "l" },
                content: "Место"
              },
              {
                block: "paragraph",
                mods: { size: "s", narrow: true },
                content:
                  'Фестиваль будет проходить на частной территории. Горнолыжный курорт "Красное Озеро"'
              },
              {
                block: "title",
                mods: {
                  size: "m",
                  blue: true
                },
                content: "Как добраться"
              },
              // {
              //   block: "title",
              //   mods: {
              //     size: "s"
              //   },
              //   content: "Фестивальным трансфером"
              // },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "Общественным транспортом"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content:
                  "Автобус № К898 от станции метро «Парнас». Билеты покупать заранее в кассе. Справки по телефону: +7(812)748-27-39 Время отправления автобусов: 9:30, 13:00, 15:00, 18:30, 20:30 Автобус № 897 от станции метро «Девяткино». Время отправления автобусов: 08:40, 10:10, 11:15, 14:50, 16:50, 19:10 Справки по телефонам: +7(981)696-30-37"
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "На машине"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content: {
                  html:
                    '<strong>Маршрут 1: </strong>Трасса "Скандинавия" - едете по Выборгскому направлению, после мотеля "Огоньки" и заправки "ПТК" поворот направо на "Первомайское". Далее через Первомайское по старой Выборгской трассе до Подгорья. Затем поворот направо на "Мичуринское", ехать до Коробицыно. После Коробицыно еще около километра по трассе и поворот налево в курорт "Красное озеро", висят большие баннеры курорта, сложно не заметить. Дорога от Санкт-Петербурга занимает примерно 1,5-2 часа в зависимости от дорожной обстановки. '
                }
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content: {
                  html:
                    '<strong>Маршрут 2: </strong>По Новоприозерскому шоссе до поворота налево в Раздолье/Мичуринское, далее прямо около 30 км. Не доезжая 1 км до поселка Коробицыно, поворот направо к горнолыжному курорту "Красное Озеро". Висят большие баннеры курорта, сложно не заметить. Дорога от Санкт-Петербурга занимает примерно 1,5-2 часа в зависимости от дорожной обстановки.'
                }
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "На такси"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content: [
                  'Из Санкт-Петербурга много вариантов такси, машина стоит около 2000-2500 руб. Рассчитайте поездку из вашего района, указав диспетчеру Горнолыжный курорт "Красное Озеро", вблизи пос. Коробицыно. Также в районе поселков: Первомайское, Рощино и Курорта "Красное Озеро" будут курировать машины такси. Цены: от Рощино до Фестиваля - 1300₽; от Первомайского до Фестиваля - 900₽'
                ]
              }
            ]
          }
        },
        {
          elem: "sixth",
          content: {
            html:
              '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A85a6825746cf088954a942bed768433f64ad7a55de4898b553ab4d69823aac27&width=100%25&height=100%&lang=ru_RU&scroll=true"></script>'
          }
        },
        {
          elem: "seventh",
          content: {
            elem: "contentWrapper",
            mix: {
              block: "page",
              mods: {
                width: "small"
              }
            },
            content: [
              {
                block: "title",
                mods: { size: "m", blue: true },
                content: "Кемпинг"
              },
              {
                block: "paragraph",
                mods: { size: "s", blue: true },
                content:
                  "На территории фестиваля оборудованы места для кемпинга. Создана вся необходимая инфраструктура: туалеты, места сбора мусора, места для разведения огня. За проживание в кемпинге дополнительная плата не взимается."
              },
              {
                block: "title",
                mods: { size: "m", blue: true },
                content: "Аренда домика"
              },
              {
                block: "paragraph",
                mods: { size: "s", blue: true },
                content:
                  "На Фестивале Abstraction X вы можете волшебно отдохнуть в уютном коттедже после похода на мейн: спать в удобной кровати, принять душ, сварить вкусный кофе и наблюдать невероятную красоту Красного озера из своих окон. Ознакомьтесь с информацией о ценах, а также о наличии свободных коттеджей."
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                target: "_blank",
                url: "http://rupor.biz/widgets/event-tickets/393",
                text: "Арендовать домик"
              },
              {
                block: "title",
                mods: { size: "m", blue: true },
                content: "Трансфер"
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "ТРАНСФЕР ДО ABSTRACTION X FESTIVAL ИЗ МОСКВЫ"
              },
              {
                block: "paragraph",
                mods: { size: "s", blue: true },
                content:
                  "ВНИМАНИЕ, МОСКВА, Появилась возможность телепортироваться из Москвы до Фестиваля Abstraction X. За рулем надежные водители, которые уже несколько раз привозили к нам веселых москвичей! Отправление из Москвы - метро Речной вокзал (в сторону области). Выезды будут осуществляться по следующему графику: Из Москвы:  15 августа (четверг) - 22:00 В Москву: 18 августа (понедельник) 12:00 Стоимость билета 4500 руб.  Подробная информация и бронирование: +7925-218-58-84, +7977-343-58-08 , Евгений"
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: {
                  html:
                    "ТРАНСФЕР ДО ABSTRACTION X FESTIVAL ИЗ <br> САНКТ-ПЕТЕРБУРГА"
                }
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                target: "_blank",
                url: "http://rupor.biz/widgets/event-tickets/411",
                text: "Забронировать трансфер"
              }
            ]
          }
        },
        {
          elem: "eighth",
          content: {
            elem: "contentWrapper",
            mix: {
              block: "page",
              mods: {
                width: "narrow"
              }
            },
            content: [
              {
                block: "graphics",
                mix: {
                  block: "page-index",
                  elem: "absImage",
                  elemMods: { star: true }
                },
                mods: {
                  view: "botStar"
                }
              },
              {
                block: "graphics",
                mix: {
                  block: "page-index",
                  elem: "absImage",
                  elemMods: { slime: true }
                },
                mods: {
                  view: "bottom"
                }
              },
              {
                block: "button",
                mods: {
                  type: "link",
                  ym: true
                },
                url: "http://rupor.biz/widgets/event-tickets/361",
                text: "Купить билет"
              }
            ]
          }
        }
      ]
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/page-index/page-index.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/lazyImage/lazyImage.bemtree.js */
block("lazyImage").content()(function() {
  return [
    {
      block: "image",
      alt: "Abstraction fest",
      attrs: {
        "data-src": this.ctx.imgSrc
      }
    },
    {
      elem: "loader",
      elemMods: {
        show: true
      },
      mix: { block: "lds-dual-ring" }
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/lazyImage/lazyImage.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_right.bemtree.js */
block("graphics")
  .mod("view", "right")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/images/topR.png"
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_right.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_topStar.bemtree.js */
block("graphics")
  .mod("view", "topStar")
  .content()(function() {
  return [
    [
      {
        block: "lazyImage",
        mix: [{ block: "lazyImage", mods: { hidden: true } }],
        imgSrc: "assets/images/abs1.svg"
      }
    ]
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_topStar.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_midStar.bemtree.js */
block("graphics")
  .mod("view", "midStar")
  .content()(function() {
  return [
    [
      {
        block: "lazyImage",
        mix: [{ block: "lazyImage", mods: { hidden: true } }],
        imgSrc: "assets/images/abs2.svg"
      }
    ]
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_midStar.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_botStar.bemtree.js */
block("graphics")
  .mod("view", "botStar")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/images/abs3.svg"
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_botStar.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_bottom.bemtree.js */
block("graphics")
  .mod("view", "bottom")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/images/BotC.png"
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_bottom.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/gallery/gallery.bemtree.js */
block("gallery").content()((node, ctx) => {
  return [
    {
      elem: "slides",
      content:
        ctx &&
        ctx.elems &&
        ctx.elems.map(item => {
          return {
            elem: "card",
            content: item
          };
        })
    },
    {
      elem: "controls",
      content: [
        {
          block: "button",
          mods: {
            slide: "left"
          },
          icon: {
            block: "icon",
            mods: {
              symbol: "round"
            }
          }
        },
        {
          block: "button",
          mods: {
            slide: "right"
          },
          icon: {
            block: "icon",
            mods: {
              symbol: "round"
            }
          }
        }
      ]
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/gallery/gallery.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/card/card.bemtree.js */
block("card").content()((node, ctx) => {
  let artist = ctx.artist;
  return [
    {
      elem: "wrapper",
      js: {
        link: artist.link
      },
      content: [
        {
          elem: "title",
          content: artist.title ? artist.title : "TBA"
        },
        {
          elem: "description",
          content: artist.description ? artist.description : "(dj set)"
        },
        {
          block: "lazyImage",
          mix: [{ block: "lazyImage", mods: { hidden: true } }, { block: "card", elem: "photo" }],
          imgSrc: artist.photo ? "assets/images/artist/" + artist.photo + ".png" : "assets/images/photos/default.png"
        },
        {
          elem: "link",
          content: [
            {
              block: "icon",
              mods: {
                symbol: "link"
              }
            },
            {
              block: "link",
              url: artist.link ? artist.link : "/",
              target: "_blank",
              content: "MixCloud"
            }
          ]
        }
      ]
    }
  ];
});

block("card")
  .mod("image")
  .content()((node, ctx) => {
  return [
    {
      elem: "wrapper",
      content: [
        {
          block: "lazyImage",
          mix: [{ block: "lazyImage", mods: { hidden: true } }, { block: "card", elem: "photo" }],
          imgSrc: "assets/images/photos/" + ctx.photo
        }
      ]
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/card/card.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/page-gallery/page-gallery.bemtree.js */
block("page-gallery").content()(function() {
  let lineup = {
    techno: [
      {
        title: "The Panacea (DE)",
        description: "",
        photo: "panacea",
        link: "https://soundcloud.com/thepanaceaofficial"
      },
      {
        title: "Alekseev aka Aliksiv",
        description: "Fantazery, LABYRINTH",
        photo: "ALEKSEEV",
        link: "https://soundcloud.com/ellixalien"
      },
      {
        title: "Alex Panchenco ",
        description: "Escade Music, Aura Music",
        photo: "Alex",
        link: "https://soundcloud.com/alex-panchenco "
      },
      {
        title: "Artarea",
        description: "",
        link: "https://vk.com/artem_miliukov",
        photo: "artarea"
      },
      {
        title: "Bagus aka Mr.B ",
        description: "(dj set)",
        photo: "Bagus",
        link: "https://soundcloud.com/kirillbagus"
      },
      {
        title: "Daniil Waigelman ",
        description: "Psycometrik Recordings (Spain)",
        photo: "Waigelman",
        link: "https://soundcloud.com/daniilwaigelman"
      },
      {
        title: "Danny Mills ",
        description: "",
        link: "https://www.beatport.com/artist/danny-mills/394436",
        photo: "mills"
      },
      {
        title: "DERKNOB",
        description: "",
        link: "https://www.mixcloud.com/der-knob",
        photo: "derknob"
      },
      {
        title: "Eye Que ",
        description: "SubSpace",
        photo: "EYE",
        link: "https://soundcloud.com/eye_que "
      },
      {
        title: "German Air  (hybrid live/dj set)",
        description: "Heartbeat Records, Baikonur Recordings ",
        photo: "GermanAir",
        link: "https://soundcloud.com/german_air "
      },
      {
        title: "Kaya",
        description: "LABYRINTH",
        photo: "kaya",
        link: "https://soundcloud.com/user-695448784"
      },

      {
        title: "Mila Craft",
        description: "Mistral'",
        photo: "mila",
        link: "https://soundcloud.com/mila_craft/"
      },
      {
        title: "Mish Mish",
        description: "",
        photo: "mishmish",
        link: "http://promodj.com/mishmishdj"
      },

      {
        title: "Mixa Wawer",
        description: "(dj set)",
        photo: "Waver",
        link: "https://soundcloud.com/technopunks "
      },
      {
        title: "NICK-OS ",
        description: "LABYRINTH",
        photo: "NICK-OS",
        link: "https://vk.com/djnick_os"
      },
      {
        title: "Oscar Schultz ",
        description: "Deep Ladoga",
        photo: "Oscar",
        link: "https://vk.com/oscarschultz"
      },
      {
        title: "Voodoo Noise aka Otto O'Shea",
        description: "Mistral'",
        photo: "Voodoo",
        link: "https://soundcloud.com/voodoonoise"
      },
      {
        title: "Pete",
        description: "(vinyl dj set)",
        photo: "pete",
        link: "https://soundcloud.com/peter-kuschnereit"
      },
      {
        title: "SPTNK",
        description: "",
        photo: "sptnk",
        link: "https://vk.com/sptnk.music"
      },
      {
        title: "Space Modular",
        description: "Techno Vinyls Records",
        photo: "Space",
        link: "https://soundcloud.com/space-modular "
      },
      {
        title: "Ten-G",
        description: "Fantazery , Mistral’",
        photo: "TEN-G1",
        link: "https://soundcloud.com/tengi  "
      },
      {
        title: "Tochka_sborki DJs",
        description: "",
        photo: "tochka",
        link:
          "https://soundcloud.com/tochka_sborki/tochka-sborki-djs-live-at-masts-club-10112017  "
      },
      {
        title: "qqoma",
        description: "(vinyl dj set)",
        photo: "qoma",
        link: "https://vk.com/qoma_music"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Denis Podgorniy",
        description: "",
        link: "https://soundcloud.com/denis-podgorny-1",
        photo: "podgor"
      }
    ],
    trance: [
      {
        title: "Fagin's Reject ",
        description: "(Wildthings Records), UK - LIVE ",
        link: "https://soundcloud.com/fagins_reject ",
        photo: "fagins"
      },
      {
        title: "Headworks ",
        description: "(Wildthings Records), UK - LIVE ",
        link: "https://soundcloud.com/headworks-1 ",
        photo: "Headworks"
      },
      {
        title: "Beardy Weardy ",
        description: "(Wildthings Records) UK - LIVE + Dj set ",
        link: "https://soundcloud.com/beardy-weardy-wildthings ",
        photo: "Beardy"
      },
      {
        title: "Samadhi ",
        description: "(Hilltop Records) - Goa/Ru  ",
        link: "https://soundcloud.com/samadhi  ",
        photo: "samadhi"
      },
      {
        title: "Groove Hunter ",
        description: "( World People Production/NT Group ), Ru - LIVE  ",
        link: "https://soundcloud.com/groove_hunter  ",
        photo: "gh"
      },
      {
        title: "LaaToka ",
        description: "(Sunstation rec), Ru  ",
        link: "https://soundcloud.com/laatoka  ",
        photo: "Laatoka"
      },
      {
        title: "Exciter ",
        description: "(Bounce Recordings), Ru  ",
        link: "https://soundcloud.com/exciteroffical   ",
        photo: "Exciter"
      },
      {
        title: "Anumana ",
        description: "(Timewarp Records) ",
        link: "https://soundcloud.com/anumana ",
        photo: "Anumana"
      },
      {
        title: "Belonica ",
        link: "https://soundcloud.com/belonica",
        photo: "blnc"
      },
      {
        title: "Casper ",
        description: "(NT Group Promotion), Ru ",
        link: "http://promodj.com/hystericalmind/music ",
        photo: "Casper"
      },
      {
        title: "Doozer",
        description: "",
        link: "https://vk.com/djdoozer ",
        photo: "Doozer"
      },
      {
        title: "Funkyjunky ",
        description: "(Basic Algorithm), Ru ",
        link: "https://soundcloud.com/funkyshmunky   ",
        photo: "fj"
      },
      {
        title: "psYphomet ",
        description: "(Multifrequency Records), Ru ",
        link: "https://soundcloud.com/psyphometboobblegooms    ",
        photo: "psy"
      },
      {
        title: "Plazmer ",
        description: "(Basic Algorithm Records) ",
        link: "https://mixcloud.com/plazmer20  ",
        photo: "plazmer"
      },
      {
        title: "Sure ",
        description: "(NT Group Promotion), Ru  ",
        link: "https://www.mixcloud.com/surepb/  ",
        photo: "sure"
      },
      {
        title: "Satori ",
        description: "(Vertigo Records), Ru ",
        link: "https://www.facebook.com/nata.satori ",
        photo: "satori"
      },
      {
        title: "Troll machine   ",
        link: "https://soundcloud.com/troll-machine ",
        photo: "tm"
      },
      {
        title: "Will  ",
        description: "(NT Group Promotion), Ru  ",
        link: "https://soundcloud.com/willspb ",
        photo: "will"
      },
      {
        title: "Yhtiot    ",
        description: "(Feeless Records), Ru ",
        link: "https://soundcloud.com/yhtiot ",
        photo: "yt"
      },
      {
        title: "ToyFog ",
        link: "https://soundcloud.com/toyfog ",
        photo: "toyfog"
      },
      {
        title: "Trickster",
        description: "Basic Algorithm Records",
        link: "https://promodj.com/trickster",
        photo: "trickster"
      },
      {
        title: "On",
        link: "https://www.mixcloud.com/olegfreerider/ ",
        photo: "on2"
      },
      {
        title: "Fil Zionpsychedelic",
        description: "",
        link: "http://soundcloud.com/surya-project",
        photo: "fil"
      },
      {
        title: "Mauri Naja",
        description: "",
        link: "https://soundcloud.com/maurinaja",
        photo: "mauri"
      },
      {
        title: "Oxidant ",
        description: "",
        link: "https://vk.com/britva92",
        photo: "oxidant"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Blastourist (HU)",
        description: "",
        link: "https://soundcloud.com/blastourist",
        photo: "blastourist"
      },
      {
        title: "Racoon",
        description: "",
        link: "https://soundcloud.com/raccoon-374329708",
        photo: "racoon"
      }
    ],
    chill: [
      {
        title: "Alexander Daf",
        description: "",
        link: "https://soundcloud.com/alexanderdaf",
        photo: "daf"
      },
      {
        title: "Aedem",
        description: "",
        link: "https://soundcloud.com/aedem",
        photo: "AEDEM"
      },
      {
        title: "Arthur Pralaya",
        description: "",
        link: "https://vk.com/arthur_pralaya",
        photo: "pralaya"
      },
      {
        title: "Blue Lotus",
        description: "Microcosmos records",
        link: "https://blue-lotus.ru/ ",
        photo: "bluelotus"
      },
      {
        title: "Doozer",
        description: "",
        link: "https://vk.com/djdoozer ",
        photo: "Doozer"
      },
      {
        title: "EDD-989",
        description: "Microcosmos Records",
        link: "https://vk.com/edd_989",
        photo: "edd989"
      },
      {
        title: "Helimax",
        description: "",
        link: "https://promodj.com/Helimax",
        photo: "helimax"
      },
      {
        title: "Invisible Inks",
        description: "",
        link: "https://vk.com/invisible_inks",
        photo: "invisibleinks"
      },
      {
        title: "Kuzma",
        description: "",
        link: "http://kuzma-kuznetsov.bandcamp.com/",
        photo: "kuzma"
      },
      {
        title: "Олег Bu33a",
        description: "",
        link: "https://www.instagram.com/oleg_bu33a/",
        photo: "bizza"
      },
      {
        title: "Dj Pealot",
        description: "",
        link: "https://www.mixcloud.com/peaLot/",
        photo: "pealot"
      },
      {
        title: "RaFuze",
        description: "",
        link: "https://t.me/soundhunter",
        photo: "rafuze"
      },
      {
        title: "Sofi Sayonara",
        description: "",
        link: "https://www.mixcloud.com/southfruit/",
        photo: "sofi"
      },
      {
        title: "Susie Johnson",
        description: "",
        link: "https://soundcloud.com/dj_susie",
        photo: "susie"
      },
      {
        title: "Translippers",
        description: "",
        link: "https://translippers.ru",
        photo: "translippers"
      },
      {
        title: "UMT -:- Unlimited Mental Traffic",
        description: "",
        link: "unlim.pdj.ru",
        photo: "umt"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Alexander S. Karlov and E-Motive",
        description: "",
        link: "https://vk.com/djkarlov",
        photo: "backtoback"
      },
      {
        title: "ch1ga",
        description: "",
        link: "https://vk.com/ch1ga",
        photo: "chiga"
      },
      {
        title: "Doqta",
        description: "",
        link: "https://vk.com/vdoqte",
        photo: "doqta"
      },
      {
        title: "#EkzaSelecta",
        description: "",
        link: "https://soundcloud.com/ekzaselecta",
        photo: "ekza"
      },
      {
        title: "ISTWA",
        description: "",
        link: "https://vk.com/kosmoaila",
        photo: "istwa"
      },
      {
        title: "Mir Ashov",
        description: "",
        link: "https://vk.com/id79322013",
        photo: "mirashov"
      },
      {
        title: "Vuestra Merced",
        description: "",
        link: "https://soundcloud.com/vuestramerced",
        photo: "vuestra"
      }
    ]
  };

  let technoArray = lineup.techno.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  let tranceArray = lineup.trance.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  let chillArray = lineup.chill.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  return [
    {
      block: "link",
      mix: {
        block: "page-gallery",
        elem: "backButton"
      },
      url: "/",
      content: [
        {
          block: "icon",
          mods: {
            arrow: "right"
          }
        },
        { elem: "text", content: "на главную" }
      ]
    },
    {
      elem: "contentWrapper",
      mix: {
        block: "page",
        mods: {
          width: "narrow"
        }
      },
      content: [
        {
          block: "graphics",
          mix: {
            block: "page-gallery",
            elem: "absImage",
            elemMods: { middle: true }
          },
          mods: {
            view: "midStar"
          }
        },
        {
          block: "title",
          mods: {
            size: "l"
          },
          content: "ЛАЙН-АП"
        },
        {
          block: "tabs",
          mods: { type: "button" },
          tabs: [
            {
              text: "Транс",
              disabled: false,
              active: true,
              checked: false
            },
            {
              text: "Техно",
              active: false,
              disabled: false,
              checked: false
            },
            {
              text: "Чиллаут",
              active: false,
              disabled: false,
              checked: false
            }
          ],
          content: [
            {
              elem: "pane",
              mix: {
                block: "page-gallery",
                mods: {
                  flexBox: true
                }
              },
              elemMods: { active: true },
              content: tranceArray
            },
            {
              elem: "pane",
              elemMods: { active: false },
              mix: {
                block: "page-gallery",
                mods: {
                  flexBox: true
                }
              },
              content: technoArray
            },
            {
              elem: "pane",
              elemMods: { active: false },
              mix: {
                block: "page-gallery",
                mods: {
                  flexBox: true
                }
              },
              content: chillArray
            }
          ]
        }
      ]
    },
    {
      elem: "eighth",
      content: {
        elem: "contentWrapper",
        mix: {
          block: "page",
          mods: {
            width: "narrow"
          }
        },
        content: [
          {
            block: "graphics",
            mix: {
              block: "page-gallery",
              elem: "absImage",
              elemMods: { star: true }
            },
            mods: {
              view: "botStar"
            }
          },
          {
            block: "graphics",
            mix: {
              block: "page-gallery",
              elem: "absImage",
              elemMods: { slime: true }
            },
            mods: {
              view: "bottom"
            }
          },
          {
            block: "button",
            mods: {
              type: "link",
              ym: true
            },
            url: "http://rupor.biz/widgets/event-tickets/361",
            text: "Купить билет"
          }
        ]
      }
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/page-gallery/page-gallery.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/header/header.bemtree.js */
block("header").content()(() => {
  return [
    {
      block: "nav-menu"
    },
    {
      block: "burger",
      mix: {
        block: "header",
        elem: "burger"
      }
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/header/header.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/burger/burger.bemtree.js */
block("burger").content()(function() {
  return [
    {
      elem: "content",
      content: [
        {
          elem: "line",
          tag: "span"
        },
        {
          elem: "line",
          tag: "span"
        },
        {
          elem: "line",
          tag: "span"
        }
      ]
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/burger/burger.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/footer/footer.bemtree.js */
block("footer").content()(() => {
  return [
    {
      elem: "content",
      content: [
        {
          block: "nav-menu",
          js: true
        },
        {
          block: "socials",
          mods: {
            horizontal: true
          }
        }
      ]
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/footer/footer.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/root/root.bemtree.js */
block("root").replace()(function() {
  var ctx = this.ctx,
    data = (this.data = ctx.data),
    bundle = data.bundle || "desktop",
    lang = data.lang || "en";

  if (ctx.context) return ctx.context;

  return {
    block: "page",
    title: data.title || "Abstraction Fest 2019",
    favicon: "favicon.ico",
    lang: lang,
    styles: [
      {
        elem: "css",
        url: "assets/css/" + bundle + "/" + bundle + ".min.css"
      }
    ],
    scripts: [
      {
        elem: "js",
        url: "assets/js/" + bundle + "/" + bundle + "." + lang + ".min.js",
        attrs: { async: true }
      },
      {
        elem: "js",
        url: "https://code.jquery.com/jquery-1.11.0.min.js"
      },
      {
        elem: "js",
        url: "https://code.jquery.com/jquery-migrate-1.2.1.min.js"
      },
      {
        elem: "js",
        url: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
      },
      {
        elem: "js",
        url: "https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"
      },
      {
        elem: "js",
        url: "vendor/tinyslider_helper.js"
      },
      {
        elem: "js",
        url: "vendor/tinyslider.js"
      }
    ],
    head: [
      {
        elem: "meta",
        attrs: {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        }
      },
      {
        elem: "meta",
        attrs: {
          "http-equip": "Content-Security-Policy",
          content: "upgrade-insecure-requests"
        }
      },
      // Yandex Metrica
      {
        elem: "js",
        attrs: { async: true },
        content:
          '(function(m, e, t, r, i, k, a) {m[i] =m[i] ||function() {(m[i].a = m[i].a || []).push(arguments);};m[i].l = 1 * new Date();(k = e.createElement(t)),(a = e.getElementsByTagName(t)[0]),(k.async = 1),(k.src = r),a.parentNode.insertBefore(k, a);})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(53056525, "init", {clickmap: true,trackLinks: true,accurateTrackBounce: true,webvisor: true});'
      },
      // Yandex Metrica (noscript)
      {
        tag: "noscript",
        content: {
          html: '<div><img src="https://mc.yandex.ru/watch/53056525" style="position:absolute; left:-9999px;" alt="" /></div>'
        }
      },
      // <!— End Yandex Metrica —>
      // <!— Google Tag Manager —>
      {
        elem: "js",
        attrs: { async: true },
        url: "https://www.googletagmanager.com/gtag/js?id=UA-137391029-1"
      },
      {
        elem: "js",
        attrs: { async: true },
        content: 'window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-137391029-1");'
      },
      //  <!— End Google Tag Manager —>
      // <!— VK Analytics —>
      {
        elem: "js",
        attrs: { async: true },
        content:
          '!(function() {var t = document.createElement("script");(t.type = "text/javascript"),(t.async = !0),(t.src = "https://vk.com/js/api/openapi.js?160"),(t.onload = function() {VK.Retargeting.Init("VK-RTRG-352180-9LGD"), VK.Retargeting.Hit();}),document.head.appendChild(t);})();'
      },
      // Yandex Metrica (noscript)
      {
        tag: "noscript",
        content: {
          html: '<div><img src="https://vk.com/rtrg?p=VK-RTRG-352180-9LGD" style="position:fixed; left:-999px; alt="" /></div>'
        }
      },
      //  <!— End VK Analytics —>
      // <!-- Facebook Pixel Code -->
      {
        elem: "js",
        attrs: { async: true },
        content:
          '!(function(f, b, e, v, n, t, s) {if (f.fbq) return;n = f.fbq = function() {n.callMethod? n.callMethod.apply(n, arguments): n.queue.push(arguments);};if (!f._fbq) f._fbq = n;n.push = n;n.loaded = !0;n.version = "2.0";n.queue = [];t = b.createElement(e);t.async = !0;t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init", "2009238136050520");fbq("track", "PageView");'
      },
      // Yandex Metrica (noscript)
      {
        tag: "noscript",
        content: {
          html: '<div><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2009238136050520&ev=PageView&noscript=1" /></div>'
        }
      },
      //  <!— End Facebook Pixel Code —>
      {
        html: '<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />'
      },
      {
        html: '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>'
      },
      { html: '<link href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.7.4/tiny-slider.css" rel="stylesheet">' },
      { elem: "meta", attrs: { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" } },
      { elem: "meta", attrs: { "http-equip": "Content-Security-Policy", content: "upgrade-insecure-requests" } },
      { elem: "meta", attrs: { name: "description", content: "Abstraction festival | Красное озеро | Транс | Техно | Фестиваль " } },
      { elem: "meta", attrs: { name: "image", content: "/share_image.png" } },

      // Search Engine
      { elem: "meta", attrs: { id: "SearchEngine-Title", itemprop: "name", content: "Abstraction festival" } },
      { elem: "meta", attrs: { id: "SearchEngine-Description", itemprop: "description", content: "Abstraction festival | Красное озеро | Транс | Техно | Фестиваль " } },
      { elem: "meta", attrs: { id: "SearchEngine-Title", itemprop: "image", content: "/share_image.png" } },

      // Facebook & VK shares
      { elem: "meta", attrs: { property: "og:title", content: "Abstraction festival" } },
      { elem: "meta", attrs: { property: "og:url", content: "http://abstractionfest.ru" } },
      { elem: "meta", attrs: { property: "og:site_name", content: "AbstractioN" } },
      { elem: "meta", attrs: { property: "og:locale", content: "ru_RU" } },
      { elem: "meta", attrs: { property: "og:type", content: "website" } },
      { elem: "meta", attrs: { property: "og:description", content: "Abstraction festival | Красное озеро | Транс | Техно | Фестиваль " } },
      { elem: "meta", attrs: { property: "og:image", content: "/share_image.png" } },

      // Twitter share methods
      { elem: "meta", attrs: { name: "twitter:title", content: "Abstraction festival" } },
      { elem: "meta", attrs: { property: "twitter:image", content: "http://abstractionfest.ru/share_image.png" } },
      { elem: "meta", attrs: { name: "twitter:description", content: "Abstraction festival | Красное озеро | Транс | Техно | Фестиваль " } },
      { elem: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },

      // G+ share methods
      { elem: "meta", attrs: { itemprop: "name", content: "Abstraction festival" } },
      { elem: "meta", attrs: { itemprop: "image", content: "http://abstractionfest.ru/share_image.png" } },
      { elem: "meta", attrs: { itemprop: "description", content: "Abstraction festival | Красное озеро | Транс | Техно | Фестиваль " } },

      { elem: "meta", attrs: { name: "apple-mobile-web-app-capable", content: "yes" } },
      { html: '<link rel="canonical" href=http://abstractionfest.ru>' },
      { html: '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">' },
      { html: '<link rel="icon" type="image/png" sizes="32x32" href="favicon.png">' },
      { html: '<link rel="icon" type="image/png" sizes="16x16" href="favicon.png">' },
      { html: '<meta name="msapplication-TileColor" content="#ff0000">' },
      { html: '<meta name="theme-color" content="#ffffff">' }
    ],
    mods: {
      theme: "plus",
      view: data.view
    }
  };
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/root/root.bemtree.js */
/* begin: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_left.bemtree.js */
block("graphics")
  .mod("view", "left")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/images/topL.png"
    }
  ];
});

/* end: /Users/Dirty_Sanchez/Documents/dev/AbstractionBot/components/common.blocks/graphics/_view/graphics_view_left.bemtree.js */
oninit(function(exports, context) {
    var BEMContext = exports.BEMContext || context.BEMContext;
    BEMContext.prototype.i18n = ((function () {
            var data;

            /**
             * @exports
             * @param {String} keyset
             * @param {String} key
             * @param {Object} [params]
             * @returns {String}
             */
            function i18n(keyset, key, params) {
                if(!data) throw Error('i18n need to be filled with data');
                var val = data[keyset] && data[keyset][key];
                return typeof val === 'undefined'?
                keyset + ':' + key :
                    typeof val === 'string'?
                        val :
                        val.call(i18n, params, i18n);
            }

            i18n.decl = function(i18nData) {
                if(!data) {
                    data = i18nData;
                    return this;
                }

                for(var ks in i18nData) {
                    var dataKs = data[ks] || (data[ks] = {}),
                        i18nDataKs = i18nData[ks];

                    for(var k in i18nDataKs)
                        dataKs[k] = i18nDataKs[k];
                }

                return this;
            };

            return i18n;
        })()).decl({"index":{"indextext":"smthg"}});
});
oninit(function(exports, context) {
    var BEMContext = exports.BEMContext || context.BEMContext;
    // Provides third-party libraries from different modular systems
    BEMContext.prototype.require = function(lib) {
       return __bem_xjst_libs__[lib];
    };
});;
});
api.exportApply(exports);
/// -------------------------------------
/// ------ BEM-XJST User-code End -------
/// -------------------------------------


        return exports;
    };

    

    var defineAsGlobal = true;

    // Provide with CommonJS
    if (typeof module === 'object' && typeof module.exports === 'object') {
        exports['BEMTREE'] = buildBemXjst({
    
}
);
        defineAsGlobal = false;
    }

    // Provide to YModules
    if (typeof modules === 'object') {
        modules.define(
            'BEMTREE',
            [],
            function(
                provide
                
                ) {
                    provide(buildBemXjst({
    
}
));
                }
            );

        defineAsGlobal = false;
    }

    // Provide to global scope
    if (defineAsGlobal) {
        BEMTREE = buildBemXjst({
    
}
);
        global['BEMTREE'] = BEMTREE;
    }
})(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
