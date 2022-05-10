// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jKwHT":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _marked = require("marked");
_marked.marked.setOptions({
    renderer: new _marked.marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});
_alpinejsDefault.default.data("editor", ()=>({
        body: `# Welcome to Markdown
  
  Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
  
  ## How to use this?
  
  1. Write markdown in the markdown editor window
  2. See the rendered markdown in the preview window
              
  ### Features
              
  - Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
  - Name and save the document to access again later
  - Choose between Light or Dark mode depending on your preference
              
  > This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).
              
  #### Headings
              
  To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.
  
  ##### Lists
  
  You can see examples of ordered and unordered lists above.
  
  ###### Code Blocks
  
  This markdown editor allows for inline-code snippets, like this: \`<p>I'm inline</p>\`. It also allows for larger code blocks like this:
  
  \`\`\`
  <main>
    <h1>This is a larger code block</h1>
  </main>
  \`\`\``,
        markdown: "",
        showPreview: false
    })
);
window.marked = _marked.marked;
window.Alpine = _alpinejsDefault.default;
_alpinejsDefault.default.start();

},{"alpinejs":"69hXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","marked":"4duqf"}],"69hXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>module_default
);
// packages/alpinejs/src/scheduler.js
var flushPending = false;
var flushing = false;
var queue = [];
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    flushing = false;
}
// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) scheduler(task);
                else task();
            }
        })
    ;
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup2 = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = new Set();
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i()
                );
            };
        }
        el._x_effects.add(effectReference);
        cleanup2 = ()=>{
            if (effectReference === void 0) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup2();
        }
    ];
}
// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === void 0 || names.includes(name)) {
            value.forEach((i)=>i()
            );
            delete el._x_attributeCleanups[name];
        }
    });
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
        willProcessRecordQueue = true;
        queueMicrotask(()=>{
            processRecordQueue();
            willProcessRecordQueue = false;
        });
    }
}
function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = new Map();
    let removedAttributes = new Map();
    for(let i1 = 0; i1 < mutations.length; i1++){
        if (mutations[i1].target._x_ignoreMutationObserver) continue;
        if (mutations[i1].type === "childList") {
            mutations[i1].addedNodes.forEach((node)=>node.nodeType === 1 && addedNodes.push(node)
            );
            mutations[i1].removedNodes.forEach((node)=>node.nodeType === 1 && removedNodes.push(node)
            );
        }
        if (mutations[i1].type === "attributes") {
            let el = mutations[i1].target;
            let name = mutations[i1].attributeName;
            let oldValue = mutations[i1].oldValue;
            let add2 = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            if (el.hasAttribute(name) && oldValue === null) add2();
            else if (el.hasAttribute(name)) {
                remove();
                add2();
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs)
        );
    });
    for (let node2 of removedNodes){
        if (addedNodes.includes(node2)) continue;
        onElRemoveds.forEach((i)=>i(node2)
        );
        if (node2._x_cleanups) while(node2._x_cleanups.length)node2._x_cleanups.pop()();
    }
    addedNodes.forEach((node)=>{
        node._x_ignoreSelf = true;
        node._x_ignore = true;
    });
    for (let node1 of addedNodes){
        if (removedNodes.includes(node1)) continue;
        if (!node1.isConnected) continue;
        delete node1._x_ignoreSelf;
        delete node1._x_ignore;
        onElAddeds.forEach((i)=>i(node1)
        );
        node1._x_ignore = true;
        node1._x_ignoreSelf = true;
    }
    addedNodes.forEach((node)=>{
        delete node._x_ignoreSelf;
        delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}
// packages/alpinejs/src/scope.js
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [
        data2,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data2
        );
    };
}
function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value])=>{
        existingScope[key] = value;
    });
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
        ownKeys: ()=>{
            return Array.from(new Set(objects.flatMap((i)=>Object.keys(i)
            )));
        },
        has: (target, name)=>{
            return objects.some((obj)=>obj.hasOwnProperty(name)
            );
        },
        get: (target, name)=>{
            return (objects.find((obj)=>{
                if (obj.hasOwnProperty(name)) {
                    let descriptor = Object.getOwnPropertyDescriptor(obj, name);
                    if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) return true;
                    if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
                        let getter = descriptor.get;
                        let setter = descriptor.set;
                        let property = descriptor;
                        getter = getter && getter.bind(thisProxy);
                        setter = setter && setter.bind(thisProxy);
                        if (getter) getter._x_alreadyBound = true;
                        if (setter) setter._x_alreadyBound = true;
                        Object.defineProperty(obj, name, {
                            ...property,
                            get: getter,
                            set: setter
                        });
                    }
                    return true;
                }
                return false;
            }) || {})[name];
        },
        set: (target, name, value)=>{
            let closestObjectWithKey = objects.find((obj)=>obj.hasOwnProperty(name)
            );
            if (closestObjectWithKey) closestObjectWithKey[name] = value;
            else objects[objects.length - 1][name] = value;
            return true;
        }
    });
    return thisProxy;
}
// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
    let isObject2 = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null
    ;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value , enumerable  }])=>{
            if (enumerable === false || value === void 0) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data2, path, key);
            else if (isObject2(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data2);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize (data2, path, key) {
            return callback(this.initialValue, ()=>get(data2, path)
            , (value)=>set(data2, path, value)
            , path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data2, path, key)=>{
                let innerValue = initialValue.initialize(data2, path, key);
                obj.initialValue = innerValue;
                return initialize(data2, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment]
    , obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}
// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback])=>{
        Object.defineProperty(obj, `$${name}`, {
            get () {
                let [utilities, cleanup2] = getElementBoundUtilities(el);
                utilities = {
                    interceptor,
                    ...utilities
                };
                onElRemoved(el, cleanup2);
                return callback(el, utilities);
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error2, el, expression) {
    Object.assign(error2, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error2;
    }, 0);
}
// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    callback();
    shouldAutoEvaluateFunctions = cache;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value
    , extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...closestDataStack(el)
    ];
    if (typeof expression === "function") return generateEvaluatorFromFunction(dataStack, expression);
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope: scope2 = {} , params =[]  } = {})=>{
        let result = func.apply(mergeProxies([
            scope2,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            return new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
        } catch (error2) {
            handleError(error2, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope: scope2 = {} , params =[]  } = {})=>{
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([
            scope2,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func(func, completeScope).catch((error2)=>handleError(error2, el, expression)
            );
            if (func.finished) {
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                func.result = void 0;
            } else promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2)=>handleError(error2, el, expression)
            ).finally(()=>func.result = void 0
            );
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope2, params)
        ).catch((error2)=>handleError(error2, el, value)
        );
        else receiver(result);
    } else receiver(value);
}
// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
}
function directives(el, attributes, originalAttributeOverride) {
    let transformedAttributeMap = {};
    let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName
    )).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2)=>{
        return getDirectiveHandler(el, directive2);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr)
    );
}
var isDeferringHandlers = false;
var directiveHandlerStacks = new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback)=>cleanups.push(callback)
    ;
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i()
        )
    ;
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive2) {
    let noop = ()=>{};
    let handler3 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler3.inline && handler3.inline(el, directive2, utilities);
        handler3 = handler3.bind(handler3, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
}
var startingWith = (subject, replacement)=>({ name , value  })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    }
;
var into = (i)=>i
;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name , value  })=>{
        let { name: newName , value: newValue  } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
var attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name  }) {
    return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`)
;
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name , value  })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")
            ),
            expression: value,
            original
        };
    };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport",
    "element"
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true
    }));
}
// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}
// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2)=>walk(el2, callback)
        );
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true
    );
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}
// packages/alpinejs/src/lifecycle.js
function start() {
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el)=>initTree(el, walk)
    );
    onElRemoved((el)=>destroyTree(el)
    );
    onAttributesAdded((el, attrs)=>{
        directives(el, attrs).forEach((handle)=>handle()
        );
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true)
    ;
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn()
    );
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn()
    );
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector)
        )) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector)
    );
}
function initTree(el, walker = walk) {
    deferHandlingDirectives(()=>{
        walker(el, (el2, skip)=>{
            directives(el2, el2.attributes).forEach((handle)=>handle()
            );
            el2._x_ignore && skip();
        });
    });
}
function destroyTree(root) {
    walk(root, (el)=>cleanupAttributes(el)
    );
}
// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString2)=>classString2.split(" ").filter(Boolean)
    ;
    let missingClasses = (classString2)=>classString2.split(" ").filter((i)=>!el.classList.contains(i)
        ).filter(Boolean)
    ;
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean)
    ;
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false
    ).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false
    ).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i)
        );
        added.forEach((i)=>el.classList.remove(i)
        );
    };
}
// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2])=>{
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value2);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
// packages/alpinejs/src/utils/once.js
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}
// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value , modifiers , expression  }, { evaluate: evaluate2  })=>{
    if (typeof expression === "function") expression = evaluate2(expression);
    if (!expression) registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
        enter: (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        leave: (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out")
    );
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out")
    );
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: delay,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: delay,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    let clickAwayCompatibleShow = ()=>{
        document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
    };
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide)
        );
        el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            })
        );
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else queueMicrotask(()=>{
            let hideAfterChildren = (el2)=>{
                let carry = Promise.all([
                    el2._x_hidePromise,
                    ...(el2._x_hideChildren || []).map(hideAfterChildren)
                ]).then(([i])=>i()
                );
                delete el2._x_hidePromise;
                delete el2._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during , start: start2 , end  } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start2);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(()=>{
        mutateDom(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                releaseNextTicks();
            }
            stages.after();
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: once(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    mutateDom(()=>{
        stages.start();
        stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            mutateDom(()=>{
                stages.end();
            });
            releaseNextTicks();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}
// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args)
    ;
}
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback)=>{
        walk(el2, (el3, skip)=>{
            if (hasRunThroughFirstEl && isRoot(el3)) return skip();
            hasRunThroughFirstEl = true;
            callback(el3, skip);
        });
    };
    initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el)=>{
        let storedEffect = cache(callback2);
        release(storedEffect);
        return ()=>{};
    });
    callback();
    overrideEffect(cache);
}
// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
function bindInputValue(el, value) {
    if (el.type === "radio") {
        if (el.attributes.value === void 0) el.value = value;
        if (window.fromModel) el.checked = checkedAttrLooseCompare(el.value, value);
    } else if (el.type === "checkbox") {
        if (Number.isInteger(value)) el.value = value;
        else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            void 0
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value)
        );
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        void 0,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2)=>{
        return value2 + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase()
    );
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function isBooleanAttr(attrName) {
    const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule"
    ];
    return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    let attr = el.getAttribute(name);
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    if (attr === "") return true;
    return attr;
}
// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false
            , limit);
        }
    };
}
// packages/alpinejs/src/plugin.js
function plugin(callback) {
    callback(alpine_default);
}
// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
    }
    if (value === void 0) return stores[name];
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
    initInterceptors(stores[name]);
}
function getStores() {
    return stores;
}
// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, object) {
    binds[name] = typeof object !== "function" ? ()=>object
     : object;
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/alpine.js
var Alpine = {
    get reactive () {
        return reactive;
    },
    get release () {
        return release;
    },
    get effect () {
        return effect;
    },
    get raw () {
        return raw;
    },
    version: "3.10.0",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
};
var alpine_default = Alpine;
// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()]
     : (val)=>!!map[val]
    ;
}
var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
};
var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var extend = Object.assign;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key)=>hasOwnProperty.call(val, key)
;
var isArray = Array.isArray;
var isMap = (val)=>toTypeString(val) === "[object Map]"
;
var isString = (val)=>typeof val === "string"
;
var isSymbol = (val)=>typeof val === "symbol"
;
var isObject = (val)=>val !== null && typeof val === "object"
;
var objectToString = Object.prototype.toString;
var toTypeString = (value)=>objectToString.call(value)
;
var toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key
;
var cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : ""
    );
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase()
);
var capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1)
);
var toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``
);
var hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue)
;
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("");
var MAP_KEY_ITERATE_KEY = Symbol("");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) fn = fn.raw;
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) effect3();
    return effect3;
}
function stop(effect3) {
    if (effect3.active) {
        cleanup(effect3);
        if (effect3.options.onStop) effect3.options.onStop();
        effect3.active = false;
    }
}
var uid = 0;
function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
        if (!effect3.active) return fn();
        if (!effectStack.includes(effect3)) {
            cleanup(effect3);
            try {
                enableTracking();
                effectStack.push(effect3);
                activeEffect = effect3;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
}
function cleanup(effect3) {
    const { deps  } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const effects = new Set();
    const add2 = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect3)=>{
            if (effect3 !== activeEffect || effect3.allowRecurse) effects.add(effect3);
        });
    };
    if (type === "clear") depsMap.forEach(add2);
    else if (key === "length" && isArray(target)) depsMap.forEach((dep, key2)=>{
        if (key2 === "length" || key2 >= newValue) add2(dep);
    });
    else {
        if (key !== void 0) add2(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) add2(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) add2(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect3)=>{
        if (effect3.options.scheduler) effect3.options.scheduler(effect3);
        else effect3();
    };
    effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]
).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var shallowGet = /* @__PURE__ */ createGetter(false, true);
var readonlyGet = /* @__PURE__ */ createGetter(true);
var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
var arrayInstrumentations = {};
[
    "includes",
    "indexOf",
    "lastIndexOf"
].forEach((key)=>{
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
        const res = method.apply(arr, args);
        if (res === -1 || res === false) return method.apply(arr, args.map(toRaw));
        else return res;
    };
});
[
    "push",
    "pop",
    "shift",
    "unshift",
    "splice"
].forEach((key)=>{
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
    };
});
function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (isObject(res)) return isReadonly ? readonly(res) : reactive2(res);
        return res;
    };
}
var set2 = /* @__PURE__ */ createSetter();
var shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
};
var readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        return true;
    },
    deleteProperty (target, key) {
        return true;
    }
};
var shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
});
var toReactive = (value)=>isObject(value) ? reactive2(value) : value
;
var toReadonly = (value)=>isObject(value) ? readonly(value) : value
;
var toShallow = (value)=>value
;
var getProto = (v)=>Reflect.getPrototypeOf(v)
;
function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get", key);
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2  } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has", key);
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2 , get: get3  } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2 , get: get3  } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = void 0;
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        return type === "delete" ? false : this;
    };
}
var mutableInstrumentations = {
    get (key) {
        return get$1(this, key);
    },
    get size () {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
};
var shallowInstrumentations = {
    get (key) {
        return get$1(this, key, false, true);
    },
    get size () {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
};
var readonlyInstrumentations = {
    get (key) {
        return get$1(this, key, true);
    },
    get size () {
        return size(this, true);
    },
    has (key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
};
var shallowReadonlyInstrumentations = {
    get (key) {
        return get$1(this, key, true, true);
    },
    get size () {
        return size(this, true);
    },
    has (key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
};
var iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
];
iteratorMethods.forEach((method)=>{
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
};
var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
    if (target && target["__v_isReadonly"]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) return target;
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0) return target;
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", ()=>nextTick
);
// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el)=>dispatch.bind(dispatch, el)
);
// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2 , effect: effect3  })=>(key, callback)=>{
        let evaluate2 = evaluateLater2(key);
        let firstTime = true;
        let oldValue;
        let effectReference = effect3(()=>evaluate2((value)=>{
                JSON.stringify(value);
                if (!firstTime) queueMicrotask(()=>{
                    callback(value, oldValue);
                    oldValue = value;
                });
                else oldValue = value;
                firstTime = false;
            })
        );
        el._x_effects.delete(effectReference);
    }
);
// packages/alpinejs/src/magics/$store.js
magic("store", getStores);
// packages/alpinejs/src/magics/$data.js
magic("data", (el)=>scope(el)
);
// packages/alpinejs/src/magics/$root.js
magic("root", (el)=>closestRoot(el)
);
// packages/alpinejs/src/magics/$refs.js
magic("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while(currentEl){
        if (currentEl._x_refs) refObjects.push(currentEl._x_refs);
        currentEl = currentEl.parentNode;
    }
    return refObjects;
}
// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return findClosest(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}
// packages/alpinejs/src/magics/$id.js
magic("id", (el)=>(name, key = null)=>{
        let root = closestIdRoot(el, name);
        let id = root ? root._x_ids[name] : findAndIncrementId(name);
        return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    }
);
// packages/alpinejs/src/magics/$el.js
magic("el", (el)=>el
);
// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el)=>warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el)
    );
}
// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression  }, { effect: effect3 , evaluateLater: evaluateLater2  })=>{
    let func = evaluateLater2(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i
        );
        return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                __placeholder: val
            }
        })
    ;
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        effect3(()=>innerSet(outerGet())
        );
        effect3(()=>outerSet(innerGet())
        );
    });
});
// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { expression  }, { cleanup: cleanup2  })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone2.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    addScopeToNode(clone2, {}, el);
    mutateDom(()=>{
        target.appendChild(clone2);
        initTree(clone2);
        clone2._x_ignore = true;
    });
    cleanup2(()=>clone2.remove()
    );
});
// packages/alpinejs/src/directives/x-ignore.js
var handler = ()=>{};
handler.inline = (el, { modifiers  }, { cleanup: cleanup2  })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
directive("ignore", handler);
// packages/alpinejs/src/directives/x-effect.js
directive("effect", (el, { expression  }, { effect: effect3  })=>effect3(evaluateLater(el, expression))
);
// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e)=>callback(e)
    ;
    let options = {};
    let wrapHandler = (callback2, wrapper)=>(e)=>wrapper(callback2, e)
    ;
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("prevent")) handler3 = wrapHandler(handler3, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler3 = wrapHandler(handler3, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("self")) handler3 = wrapHandler(handler3, (next, e)=>{
        e.target === el && next(e);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler3 = wrapHandler(handler3, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("once")) handler3 = wrapHandler(handler3, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
    });
    handler3 = wrapHandler(handler3, (next, e)=>{
        if (isKeyEvent(event)) {
            if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        }
        next(e);
    });
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler3 = throttle(handler3, wait);
    }
    listenerTarget.addEventListener(event, handler3, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler3, options);
    };
}
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase()
    );
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier)
    );
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i)
    );
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
        ctrl: "control",
        slash: "/",
        space: "-",
        spacebar: "-",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier
    );
}
// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers , expression  }, { effect: effect3 , cleanup: cleanup2  })=>{
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = on(el, event, modifiers, (e)=>{
        evaluateAssignment(()=>{}, {
            scope: {
                $event: e,
                rightSideOfExpression: assigmentFunction
            }
        });
    });
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(()=>el._x_removeModelListeners["default"]()
    );
    let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
    el._x_model = {
        get () {
            let result;
            evaluate2((value)=>result = value
            );
            return result;
        },
        set (value) {
            evaluateSetModel(()=>{}, {
                scope: {
                    __placeholder: value
                }
            });
        }
    };
    el._x_forceModelUpdate = ()=>{
        evaluate2((value)=>{
            if (value === void 0 && expression.match(/\./)) value = "";
            window.fromModel = true;
            mutateDom(()=>bind(el, "value", value)
            );
            delete window.fromModel;
        });
    };
    effect3(()=>{
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate();
    });
});
function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") mutateDom(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    return (event, currentValue)=>{
        return mutateDom(()=>{
            if (event instanceof CustomEvent && event.detail !== void 0) return event.detail || event.target.value;
            else if (el.type === "checkbox") {
                if (Array.isArray(currentValue)) {
                    let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
                    return event.target.checked ? currentValue.concat([
                        newValue
                    ]) : currentValue.filter((el2)=>!checkedAttrLooseCompare2(el2, newValue)
                    );
                } else return event.target.checked;
            } else if (el.tagName.toLowerCase() === "select" && el.multiple) return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            }) : Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
            else {
                let rawValue = event.target.value;
                return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
            }
        });
    };
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el)=>queueMicrotask(()=>mutateDom(()=>el.removeAttribute(prefix("cloak"))
        )
    )
);
// packages/alpinejs/src/directives/x-init.js
addInitSelector(()=>`[${prefix("init")}]`
);
directive("init", skipDuringClone((el, { expression  }, { evaluate: evaluate2  })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate2(expression, {}, false);
    return evaluate2(expression, {}, false);
}));
// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression  }, { effect: effect3 , evaluateLater: evaluateLater2  })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.textContent = value;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression  }, { effect: effect3 , evaluateLater: evaluateLater2  })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                initTree(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
directive("bind", (el, { value , modifiers , expression , original  }, { effect: effect3  })=>{
    if (!value) return applyBindingsObject(el, expression, original, effect3);
    if (value === "key") return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(()=>evaluate2((result)=>{
            if (result === void 0 && expression.match(/\./)) result = "";
            mutateDom(()=>bind(el, value, result, modifiers)
            );
        })
    );
});
function applyBindingsObject(el, expression, original, effect3) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    getBindings((bindings)=>{
        let attributes = Object.entries(bindings).map(([name, value])=>({
                name,
                value
            })
        );
        let staticAttributes = attributesOnly(attributes);
        attributes = attributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name
            )) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        directives(el, attributes, original).map((handle)=>{
            cleanupRunners.push(handle.runCleanups);
            handle();
        });
    }, {
        scope: bindingProviders
    });
}
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}
// packages/alpinejs/src/directives/x-data.js
addRootSelector(()=>`[${prefix("data")}]`
);
directive("data", skipDuringClone((el, { expression  }, { cleanup: cleanup2  })=>{
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, {
        scope: dataProviderContext
    });
    if (data2 === void 0) data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(()=>{
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
    });
}));
// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers , expression  }, { effect: effect3  })=>{
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide) el._x_doHide = ()=>{
        mutateDom(()=>el.style.display = "none"
        );
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        mutateDom(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    let clickAwayCompatibleShow = ()=>setTimeout(show)
    ;
    let toggle = once((value)=>value ? show() : hide()
    , (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect3(()=>evaluate2((value)=>{
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        })
    );
});
// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression  }, { effect: effect3 , cleanup: cleanup2  })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(()=>loop(el, iteratorNames, evaluateItems, evaluateKey)
    );
    cleanup2(()=>{
        Object.values(el._x_lookup).forEach((el2)=>el2.remove()
        );
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i)=>typeof i === "object" && !Array.isArray(i)
    ;
    let templateEl = el;
    evaluateItems((items)=>{
        if (isNumeric3(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1
        );
        if (items === void 0) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject2(items)) items = Object.entries(items).map(([key, value])=>{
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2)=>keys.push(value2)
            , {
                scope: {
                    index: key,
                    ...scope2
                }
            });
            scopes.push(scope2);
        });
        else for(let i8 = 0; i8 < items.length; i8++){
            let scope2 = getIterationScopeVariables(iteratorNames, items[i8], i8, items);
            evaluateKey((value)=>keys.push(value)
            , {
                scope: {
                    index: i8,
                    ...scope2
                }
            });
            scopes.push(scope2);
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for(let i2 = 0; i2 < prevKeys.length; i2++){
            let key = prevKeys[i2];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter((key)=>!removes.includes(key)
        );
        let lastKey = "template";
        for(let i3 = 0; i3 < keys.length; i3++){
            let key = keys[i3];
            let prevIndex = prevKeys.indexOf(key);
            if (prevIndex === -1) {
                prevKeys.splice(i3, 0, key);
                adds.push([
                    lastKey,
                    i3
                ]);
            } else if (prevIndex !== i3) {
                let keyInSpot = prevKeys.splice(i3, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i3, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else sames.push(key);
            lastKey = key;
        }
        for(let i4 = 0; i4 < removes.length; i4++){
            let key = removes[i4];
            if (!!lookup[key]._x_effects) lookup[key]._x_effects.forEach(dequeueJob);
            lookup[key].remove();
            lookup[key] = null;
            delete lookup[key];
        }
        for(let i5 = 0; i5 < moves.length; i5++){
            let [keyInSpot, keyForSpot] = moves[i5];
            let elInSpot = lookup[keyInSpot];
            let elForSpot = lookup[keyForSpot];
            let marker = document.createElement("div");
            mutateDom(()=>{
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
        }
        for(let i6 = 0; i6 < adds.length; i6++){
            let [lastKey2, index] = adds[i6];
            let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope2 = scopes[index];
            let key = keys[index];
            let clone2 = document.importNode(templateEl.content, true).firstElementChild;
            addScopeToNode(clone2, reactive(scope2), templateEl);
            mutateDom(()=>{
                lastEl.after(clone2);
                initTree(clone2);
            });
            if (typeof key === "object") warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key] = clone2;
        }
        for(let i7 = 0; i7 < sames.length; i7++)refreshScope(lookup[sames[i7]], scopes[keys.indexOf(sames[i7])]);
        templateEl._x_prevKeys = keys;
    });
}
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim()
        );
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim()
        );
        names.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-ref.js
function handler2() {}
handler2.inline = (el, { expression  }, { cleanup: cleanup2  })=>{
    let root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(()=>delete root._x_refs[expression]
    );
};
directive("ref", handler2);
// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression  }, { effect: effect3 , cleanup: cleanup2  })=>{
    let evaluate2 = evaluateLater(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(()=>{
            el.after(clone2);
            initTree(clone2);
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = ()=>{
            walk(clone2, (node)=>{
                if (!!node._x_effects) node._x_effects.forEach(dequeueJob);
            });
            clone2.remove();
            delete el._x_currentIfEl;
        };
        return clone2;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect3(()=>evaluate2((value)=>{
            value ? show() : hide();
        })
    );
    cleanup2(()=>el._x_undoIf && el._x_undoIf()
    );
});
// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression  }, { evaluate: evaluate2  })=>{
    let names = evaluate2(expression);
    names.forEach((name)=>setIdRoot(el, name)
    );
});
// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value , modifiers , expression  }, { cleanup: cleanup2  })=>{
    let evaluate2 = expression ? evaluateLater(el, expression) : ()=>{};
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e)=>{
        evaluate2(()=>{}, {
            scope: {
                $event: e
            },
            params: [
                e
            ]
        });
    });
    cleanup2(()=>removeListener()
    );
}));
// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName2, slug) {
    directive(directiveName2, (el)=>warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el)
    );
}
// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default;
// packages/alpinejs/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4duqf":[function(require,module,exports) {
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */ /**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports) {
    'use strict';
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function() {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function getDefaults() {
        return {
            baseUrl: null,
            breaks: false,
            extensions: null,
            gfm: true,
            headerIds: true,
            headerPrefix: '',
            highlight: null,
            langPrefix: 'language-',
            mangle: true,
            pedantic: false,
            renderer: null,
            sanitize: false,
            sanitizer: null,
            silent: false,
            smartLists: false,
            smartypants: false,
            tokenizer: null,
            walkTokens: null,
            xhtml: false
        };
    }
    exports.defaults = getDefaults();
    function changeDefaults(newDefaults) {
        exports.defaults = newDefaults;
    }
    /**
   * Helpers
   */ var escapeTest = /[&<>"']/;
    var escapeReplace = /[&<>"']/g;
    var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
    var escapeReplacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    var getEscapeReplacement = function getEscapeReplacement(ch) {
        return escapeReplacements[ch];
    };
    function escape(html, encode) {
        if (encode) {
            if (escapeTest.test(html)) return html.replace(escapeReplace, getEscapeReplacement);
        } else {
            if (escapeTestNoEncode.test(html)) return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
        return html;
    }
    var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    /**
   * @param {string} html
   */ function unescape(html) {
        // explicitly match decimal, hex, and named HTML entities
        return html.replace(unescapeTest, function(_, n) {
            n = n.toLowerCase();
            if (n === 'colon') return ':';
            if (n.charAt(0) === '#') return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            return '';
        });
    }
    var caret = /(^|[^\[])\^/g;
    /**
   * @param {string | RegExp} regex
   * @param {string} opt
   */ function edit(regex, opt) {
        regex = typeof regex === 'string' ? regex : regex.source;
        opt = opt || '';
        var obj = {
            replace: function replace(name, val) {
                val = val.source || val;
                val = val.replace(caret, '$1');
                regex = regex.replace(name, val);
                return obj;
            },
            getRegex: function getRegex() {
                return new RegExp(regex, opt);
            }
        };
        return obj;
    }
    var nonWordAndColonTest = /[^\w:]/g;
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    /**
   * @param {boolean} sanitize
   * @param {string} base
   * @param {string} href
   */ function cleanUrl(sanitize, base, href) {
        if (sanitize) {
            var prot;
            try {
                prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
            } catch (e) {
                return null;
            }
            if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) return null;
        }
        if (base && !originIndependentUrl.test(href)) href = resolveUrl(base, href);
        try {
            href = encodeURI(href).replace(/%25/g, '%');
        } catch (e) {
            return null;
        }
        return href;
    }
    var baseUrls = {};
    var justDomain = /^[^:]+:\/*[^/]*$/;
    var protocol = /^([^:]+:)[\s\S]*$/;
    var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    /**
   * @param {string} base
   * @param {string} href
   */ function resolveUrl(base, href) {
        if (!baseUrls[' ' + base]) {
            // we can ignore everything in base after the last slash of its path component,
            // but we might need to add _that_
            // https://tools.ietf.org/html/rfc3986#section-3
            if (justDomain.test(base)) baseUrls[' ' + base] = base + '/';
            else baseUrls[' ' + base] = rtrim(base, '/', true);
        }
        base = baseUrls[' ' + base];
        var relativeBase = base.indexOf(':') === -1;
        if (href.substring(0, 2) === '//') {
            if (relativeBase) return href;
            return base.replace(protocol, '$1') + href;
        } else if (href.charAt(0) === '/') {
            if (relativeBase) return href;
            return base.replace(domain, '$1') + href;
        } else return base + href;
    }
    var noopTest = {
        exec: function noopTest() {}
    };
    function merge(obj) {
        var i = 1, target, key;
        for(; i < arguments.length; i++){
            target = arguments[i];
            for(key in target)if (Object.prototype.hasOwnProperty.call(target, key)) obj[key] = target[key];
        }
        return obj;
    }
    function splitCells(tableRow, count) {
        // ensure that every cell-delimiting pipe has a space
        // before it to distinguish it from an escaped pipe
        var row = tableRow.replace(/\|/g, function(match, offset, str) {
            var escaped = false, curr = offset;
            while(--curr >= 0 && str[curr] === '\\')escaped = !escaped;
            if (escaped) // odd number of slashes means | is escaped
            // so we leave it alone
            return '|';
            else // add space before unescaped |
            return ' |';
        }), cells = row.split(/ \|/);
        var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe
        if (!cells[0].trim()) cells.shift();
        if (cells.length > 0 && !cells[cells.length - 1].trim()) cells.pop();
        if (cells.length > count) cells.splice(count);
        else while(cells.length < count)cells.push('');
        for(; i < cells.length; i++)// leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
        return cells;
    }
    /**
   * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
   * /c*$/ is vulnerable to REDOS.
   *
   * @param {string} str
   * @param {string} c
   * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
   */ function rtrim(str, c, invert) {
        var l = str.length;
        if (l === 0) return '';
         // Length of suffix matching the invert condition.
        var suffLen = 0; // Step left until we fail to match the invert condition.
        while(suffLen < l){
            var currChar = str.charAt(l - suffLen - 1);
            if (currChar === c && !invert) suffLen++;
            else if (currChar !== c && invert) suffLen++;
            else break;
        }
        return str.slice(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
        if (str.indexOf(b[1]) === -1) return -1;
        var l = str.length;
        var level = 0, i = 0;
        for(; i < l; i++){
            if (str[i] === '\\') i++;
            else if (str[i] === b[0]) level++;
            else if (str[i] === b[1]) {
                level--;
                if (level < 0) return i;
            }
        }
        return -1;
    }
    function checkSanitizeDeprecation(opt) {
        if (opt && opt.sanitize && !opt.silent) console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    } // copied from https://stackoverflow.com/a/5450113/806777
    /**
   * @param {string} pattern
   * @param {number} count
   */ function repeatString(pattern, count) {
        if (count < 1) return '';
        var result = '';
        while(count > 1){
            if (count & 1) result += pattern;
            count >>= 1;
            pattern += pattern;
        }
        return result + pattern;
    }
    function outputLink(cap, link, raw, lexer) {
        var href = link.href;
        var title = link.title ? escape(link.title) : null;
        var text = cap[1].replace(/\\([\[\]])/g, '$1');
        if (cap[0].charAt(0) !== '!') {
            lexer.state.inLink = true;
            var token = {
                type: 'link',
                raw: raw,
                href: href,
                title: title,
                text: text,
                tokens: lexer.inlineTokens(text, [])
            };
            lexer.state.inLink = false;
            return token;
        }
        return {
            type: 'image',
            raw: raw,
            href: href,
            title: title,
            text: escape(text)
        };
    }
    function indentCodeCompensation(raw, text) {
        var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
        if (matchIndentToCode === null) return text;
        var indentToCode = matchIndentToCode[1];
        return text.split('\n').map(function(node) {
            var matchIndentInNode = node.match(/^\s+/);
            if (matchIndentInNode === null) return node;
            var indentInNode = matchIndentInNode[0];
            if (indentInNode.length >= indentToCode.length) return node.slice(indentToCode.length);
            return node;
        }).join('\n');
    }
    /**
   * Tokenizer
   */ var Tokenizer1 = /*#__PURE__*/ function() {
        function Tokenizer(options) {
            this.options = options || exports.defaults;
        }
        var _proto = Tokenizer.prototype;
        _proto.space = function space(src) {
            var cap = this.rules.block.newline.exec(src);
            if (cap && cap[0].length > 0) return {
                type: 'space',
                raw: cap[0]
            };
        };
        _proto.code = function code(src) {
            var cap = this.rules.block.code.exec(src);
            if (cap) {
                var text = cap[0].replace(/^ {1,4}/gm, '');
                return {
                    type: 'code',
                    raw: cap[0],
                    codeBlockStyle: 'indented',
                    text: !this.options.pedantic ? rtrim(text, '\n') : text
                };
            }
        };
        _proto.fences = function fences(src) {
            var cap = this.rules.block.fences.exec(src);
            if (cap) {
                var raw = cap[0];
                var text = indentCodeCompensation(raw, cap[3] || '');
                return {
                    type: 'code',
                    raw: raw,
                    lang: cap[2] ? cap[2].trim() : cap[2],
                    text: text
                };
            }
        };
        _proto.heading = function heading(src) {
            var cap = this.rules.block.heading.exec(src);
            if (cap) {
                var text = cap[2].trim(); // remove trailing #s
                if (/#$/.test(text)) {
                    var trimmed = rtrim(text, '#');
                    if (this.options.pedantic) text = trimmed.trim();
                    else if (!trimmed || / $/.test(trimmed)) // CommonMark requires space before trailing #s
                    text = trimmed.trim();
                }
                var token = {
                    type: 'heading',
                    raw: cap[0],
                    depth: cap[1].length,
                    text: text,
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.hr = function hr(src) {
            var cap = this.rules.block.hr.exec(src);
            if (cap) return {
                type: 'hr',
                raw: cap[0]
            };
        };
        _proto.blockquote = function blockquote(src) {
            var cap = this.rules.block.blockquote.exec(src);
            if (cap) {
                var text = cap[0].replace(/^ *>[ \t]?/gm, '');
                return {
                    type: 'blockquote',
                    raw: cap[0],
                    tokens: this.lexer.blockTokens(text, []),
                    text: text
                };
            }
        };
        _proto.list = function list(src) {
            var cap = this.rules.block.list.exec(src);
            if (cap) {
                var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
                var bull = cap[1].trim();
                var isordered = bull.length > 1;
                var list = {
                    type: 'list',
                    raw: '',
                    ordered: isordered,
                    start: isordered ? +bull.slice(0, -1) : '',
                    loose: false,
                    items: []
                };
                bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;
                if (this.options.pedantic) bull = isordered ? bull : '[*+-]';
                 // Get next list item
                var itemRegex = new RegExp("^( {0,3}" + bull + ")((?:[\t ][^\\n]*)?(?:\\n|$))"); // Check if current bullet point can start a new List Item
                while(src){
                    endEarly = false;
                    if (!(cap = itemRegex.exec(src))) break;
                    if (this.rules.block.hr.test(src)) break;
                    raw = cap[0];
                    src = src.substring(raw.length);
                    line = cap[2].split('\n', 1)[0];
                    nextLine = src.split('\n', 1)[0];
                    if (this.options.pedantic) {
                        indent = 2;
                        itemContents = line.trimLeft();
                    } else {
                        indent = cap[2].search(/[^ ]/); // Find first non-space char
                        indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                        itemContents = line.slice(indent);
                        indent += cap[1].length;
                    }
                    blankLine = false;
                    if (!line && /^ *$/.test(nextLine)) {
                        // Items begin with at most one blank line
                        raw += nextLine + '\n';
                        src = src.substring(nextLine.length + 1);
                        endEarly = true;
                    }
                    if (!endEarly) {
                        var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))");
                        var hrRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"); // Check if following lines should be included in List Item
                        while(src){
                            rawLine = src.split('\n', 1)[0];
                            line = rawLine; // Re-align to follow commonmark nesting rules
                            if (this.options.pedantic) line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
                             // End list item if found start of new bullet
                            if (nextBulletRegex.test(line)) break;
                             // Horizontal rule found
                            if (hrRegex.test(src)) break;
                            if (line.search(/[^ ]/) >= indent || !line.trim()) // Dedent if possible
                            itemContents += '\n' + line.slice(indent);
                            else if (!blankLine) // Until blank line, item doesn't need indentation
                            itemContents += '\n' + line;
                            else break;
                            if (!blankLine && !line.trim()) // Check if current line is blank
                            blankLine = true;
                            raw += rawLine + '\n';
                            src = src.substring(rawLine.length + 1);
                        }
                    }
                    if (!list.loose) {
                        // If the previous item ended with a blank line, the list is loose
                        if (endsWithBlankLine) list.loose = true;
                        else if (/\n *\n *$/.test(raw)) endsWithBlankLine = true;
                    } // Check for task list items
                    if (this.options.gfm) {
                        istask = /^\[[ xX]\] /.exec(itemContents);
                        if (istask) {
                            ischecked = istask[0] !== '[ ] ';
                            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
                        }
                    }
                    list.items.push({
                        type: 'list_item',
                        raw: raw,
                        task: !!istask,
                        checked: ischecked,
                        loose: false,
                        text: itemContents
                    });
                    list.raw += raw;
                } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
                list.items[list.items.length - 1].raw = raw.trimRight();
                list.items[list.items.length - 1].text = itemContents.trimRight();
                list.raw = list.raw.trimRight();
                var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first
                for(i = 0; i < l; i++){
                    this.lexer.state.top = false;
                    list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                    var spacers = list.items[i].tokens.filter(function(t) {
                        return t.type === 'space';
                    });
                    var hasMultipleLineBreaks = spacers.every(function(t) {
                        var chars = t.raw.split('');
                        var lineBreaks = 0;
                        for(var _iterator = _createForOfIteratorHelperLoose(chars), _step; !(_step = _iterator()).done;){
                            var _char = _step.value;
                            if (_char === '\n') lineBreaks += 1;
                            if (lineBreaks > 1) return true;
                        }
                        return false;
                    });
                    if (!list.loose && spacers.length && hasMultipleLineBreaks) {
                        // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
                        list.loose = true;
                        list.items[i].loose = true;
                    }
                }
                return list;
            }
        };
        _proto.html = function html(src) {
            var cap = this.rules.block.html.exec(src);
            if (cap) {
                var token = {
                    type: 'html',
                    raw: cap[0],
                    pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
                    text: cap[0]
                };
                if (this.options.sanitize) {
                    token.type = 'paragraph';
                    token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
                    token.tokens = [];
                    this.lexer.inline(token.text, token.tokens);
                }
                return token;
            }
        };
        _proto.def = function def(src) {
            var cap = this.rules.block.def.exec(src);
            if (cap) {
                if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
                var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
                return {
                    type: 'def',
                    tag: tag,
                    raw: cap[0],
                    href: cap[2],
                    title: cap[3]
                };
            }
        };
        _proto.table = function table(src) {
            var cap = this.rules.block.table.exec(src);
            if (cap) {
                var item = {
                    type: 'table',
                    header: splitCells(cap[1]).map(function(c) {
                        return {
                            text: c
                        };
                    }),
                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
                };
                if (item.header.length === item.align.length) {
                    item.raw = cap[0];
                    var l = item.align.length;
                    var i, j, k, row;
                    for(i = 0; i < l; i++){
                        if (/^ *-+: *$/.test(item.align[i])) item.align[i] = 'right';
                        else if (/^ *:-+: *$/.test(item.align[i])) item.align[i] = 'center';
                        else if (/^ *:-+ *$/.test(item.align[i])) item.align[i] = 'left';
                        else item.align[i] = null;
                    }
                    l = item.rows.length;
                    for(i = 0; i < l; i++)item.rows[i] = splitCells(item.rows[i], item.header.length).map(function(c) {
                        return {
                            text: c
                        };
                    });
                     // parse child tokens inside headers and cells
                    // header child tokens
                    l = item.header.length;
                    for(j = 0; j < l; j++){
                        item.header[j].tokens = [];
                        this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
                    } // cell child tokens
                    l = item.rows.length;
                    for(j = 0; j < l; j++){
                        row = item.rows[j];
                        for(k = 0; k < row.length; k++){
                            row[k].tokens = [];
                            this.lexer.inlineTokens(row[k].text, row[k].tokens);
                        }
                    }
                    return item;
                }
            }
        };
        _proto.lheading = function lheading(src) {
            var cap = this.rules.block.lheading.exec(src);
            if (cap) {
                var token = {
                    type: 'heading',
                    raw: cap[0],
                    depth: cap[2].charAt(0) === '=' ? 1 : 2,
                    text: cap[1],
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.paragraph = function paragraph(src) {
            var cap = this.rules.block.paragraph.exec(src);
            if (cap) {
                var token = {
                    type: 'paragraph',
                    raw: cap[0],
                    text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.text = function text(src) {
            var cap = this.rules.block.text.exec(src);
            if (cap) {
                var token = {
                    type: 'text',
                    raw: cap[0],
                    text: cap[0],
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.escape = function escape$1(src) {
            var cap = this.rules.inline.escape.exec(src);
            if (cap) return {
                type: 'escape',
                raw: cap[0],
                text: escape(cap[1])
            };
        };
        _proto.tag = function tag(src) {
            var cap = this.rules.inline.tag.exec(src);
            if (cap) {
                if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) this.lexer.state.inLink = true;
                else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) this.lexer.state.inLink = false;
                if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = true;
                else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = false;
                return {
                    type: this.options.sanitize ? 'text' : 'html',
                    raw: cap[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
                };
            }
        };
        _proto.link = function link(src) {
            var cap = this.rules.inline.link.exec(src);
            if (cap) {
                var trimmedUrl = cap[2].trim();
                if (!this.options.pedantic && /^</.test(trimmedUrl)) {
                    // commonmark requires matching angle brackets
                    if (!/>$/.test(trimmedUrl)) return;
                     // ending angle bracket cannot be escaped
                    var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
                    if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) return;
                } else {
                    // find closing parenthesis
                    var lastParenIndex = findClosingBracket(cap[2], '()');
                    if (lastParenIndex > -1) {
                        var start = cap[0].indexOf('!') === 0 ? 5 : 4;
                        var linkLen = start + cap[1].length + lastParenIndex;
                        cap[2] = cap[2].substring(0, lastParenIndex);
                        cap[0] = cap[0].substring(0, linkLen).trim();
                        cap[3] = '';
                    }
                }
                var href = cap[2];
                var title = '';
                if (this.options.pedantic) {
                    // split pedantic href and title
                    var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                    if (link) {
                        href = link[1];
                        title = link[3];
                    }
                } else title = cap[3] ? cap[3].slice(1, -1) : '';
                href = href.trim();
                if (/^</.test(href)) {
                    if (this.options.pedantic && !/>$/.test(trimmedUrl)) // pedantic allows starting angle bracket without ending angle bracket
                    href = href.slice(1);
                    else href = href.slice(1, -1);
                }
                return outputLink(cap, {
                    href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
                    title: title ? title.replace(this.rules.inline._escapes, '$1') : title
                }, cap[0], this.lexer);
            }
        };
        _proto.reflink = function reflink(src, links) {
            var cap;
            if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
                var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
                link = links[link.toLowerCase()];
                if (!link || !link.href) {
                    var text = cap[0].charAt(0);
                    return {
                        type: 'text',
                        raw: text,
                        text: text
                    };
                }
                return outputLink(cap, link, cap[0], this.lexer);
            }
        };
        _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
            if (prevChar === void 0) prevChar = '';
            var match = this.rules.inline.emStrong.lDelim.exec(src);
            if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
            if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
            var nextChar = match[1] || match[2] || '';
            if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
                var lLength = match[0].length - 1;
                var rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
                var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)
                maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
                while((match = endReg.exec(maskedSrc)) != null){
                    rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                    if (!rDelim) continue; // skip single * in __abc*abc__
                    rLength = rDelim.length;
                    if (match[3] || match[4]) {
                        // found another Left Delim
                        delimTotal += rLength;
                        continue;
                    } else if (match[5] || match[6]) // either Left or Right Delim
                    {
                        if (lLength % 3 && !((lLength + rLength) % 3)) {
                            midDelimTotal += rLength;
                            continue; // CommonMark Emphasis Rules 9-10
                        }
                    }
                    delimTotal -= rLength;
                    if (delimTotal > 0) continue; // Haven't found enough closing delimiters
                    // Remove extra characters. *a*** -> *a*
                    rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***
                    if (Math.min(lLength, rLength) % 2) {
                        var _text = src.slice(1, lLength + match.index + rLength);
                        return {
                            type: 'em',
                            raw: src.slice(0, lLength + match.index + rLength + 1),
                            text: _text,
                            tokens: this.lexer.inlineTokens(_text, [])
                        };
                    } // Create 'strong' if smallest delimiter has even char count. **a***
                    var text = src.slice(2, lLength + match.index + rLength - 1);
                    return {
                        type: 'strong',
                        raw: src.slice(0, lLength + match.index + rLength + 1),
                        text: text,
                        tokens: this.lexer.inlineTokens(text, [])
                    };
                }
            }
        };
        _proto.codespan = function codespan(src) {
            var cap = this.rules.inline.code.exec(src);
            if (cap) {
                var text = cap[2].replace(/\n/g, ' ');
                var hasNonSpaceChars = /[^ ]/.test(text);
                var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
                if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) text = text.substring(1, text.length - 1);
                text = escape(text, true);
                return {
                    type: 'codespan',
                    raw: cap[0],
                    text: text
                };
            }
        };
        _proto.br = function br(src) {
            var cap = this.rules.inline.br.exec(src);
            if (cap) return {
                type: 'br',
                raw: cap[0]
            };
        };
        _proto.del = function del(src) {
            var cap = this.rules.inline.del.exec(src);
            if (cap) return {
                type: 'del',
                raw: cap[0],
                text: cap[2],
                tokens: this.lexer.inlineTokens(cap[2], [])
            };
        };
        _proto.autolink = function autolink(src, mangle) {
            var cap = this.rules.inline.autolink.exec(src);
            if (cap) {
                var text, href;
                if (cap[2] === '@') {
                    text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
                    href = 'mailto:' + text;
                } else {
                    text = escape(cap[1]);
                    href = text;
                }
                return {
                    type: 'link',
                    raw: cap[0],
                    text: text,
                    href: href,
                    tokens: [
                        {
                            type: 'text',
                            raw: text,
                            text: text
                        }
                    ]
                };
            }
        };
        _proto.url = function url(src, mangle) {
            var cap;
            if (cap = this.rules.inline.url.exec(src)) {
                var text, href;
                if (cap[2] === '@') {
                    text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
                    href = 'mailto:' + text;
                } else {
                    // do extended autolink path validation
                    var prevCapZero;
                    do {
                        prevCapZero = cap[0];
                        cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
                    }while (prevCapZero !== cap[0])
                    text = escape(cap[0]);
                    if (cap[1] === 'www.') href = 'http://' + text;
                    else href = text;
                }
                return {
                    type: 'link',
                    raw: cap[0],
                    text: text,
                    href: href,
                    tokens: [
                        {
                            type: 'text',
                            raw: text,
                            text: text
                        }
                    ]
                };
            }
        };
        _proto.inlineText = function inlineText(src, smartypants) {
            var cap = this.rules.inline.text.exec(src);
            if (cap) {
                var text;
                if (this.lexer.state.inRawBlock) text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
                else text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
                return {
                    type: 'text',
                    raw: cap[0],
                    text: text
                };
            }
        };
        return Tokenizer;
    }();
    /**
   * Block-Level Grammar
   */ var block = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: noopTest,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        // regex template, placeholders will be replaced according to different paragraph
        // interruption rules of commonmark and the original markdown spec:
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
    block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
    block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
    /**
   * Normal Block Grammar
   */ block.normal = merge({}, block);
    /**
   * GFM Block Grammar
   */ block.gfm = merge({}, block.normal, {
        table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" // Cells
    });
    block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('table', block.gfm.table) // interrupt paragraphs with table
    .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */ block.pedantic = merge({}, block.normal, {
        html: edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace('comment', block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest,
        // fences not supported
        paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
    });
    /**
   * Inline-Level Grammar
   */ var inline = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: noopTest,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        // CDATA section
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: 'reflink|nolink(?!\\()',
        emStrong: {
            lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
            //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
            //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
            rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
            rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: noopTest,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/
    }; // list of punctuation marks from CommonMark spec
    // without * and _ to handle the different emphasis markers * and _
    inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
    inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>
    inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
    inline.escapedEmSt = /\\\*|\\_/g;
    inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
    inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
    inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
    inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
    inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
    inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
    /**
   * Normal Inline Grammar
   */ inline.normal = merge({}, inline);
    /**
   * Pedantic Inline Grammar
   */ inline.pedantic = merge({}, inline.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
    });
    /**
   * GFM Inline Grammar
   */ inline.gfm = merge({}, inline.normal, {
        escape: edit(inline.escape).replace('])', '~|])').getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    });
    inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
    /**
   * GFM + Line Breaks Inline Grammar
   */ inline.breaks = merge({}, inline.gfm, {
        br: edit(inline.br).replace('{2,}', '*').getRegex(),
        text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
    });
    /**
   * smartypants text replacement
   * @param {string} text
   */ function smartypants1(text) {
        return text // em-dashes
        .replace(/---/g, "\u2014") // en-dashes
        .replace(/--/g, "\u2013") // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
        .replace(/'/g, "\u2019") // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
        .replace(/"/g, "\u201D") // ellipses
        .replace(/\.{3}/g, "\u2026");
    }
    /**
   * mangle email addresses
   * @param {string} text
   */ function mangle1(text) {
        var out = '', i, ch;
        var l = text.length;
        for(i = 0; i < l; i++){
            ch = text.charCodeAt(i);
            if (Math.random() > 0.5) ch = 'x' + ch.toString(16);
            out += '&#' + ch + ';';
        }
        return out;
    }
    /**
   * Block Lexer
   */ var Lexer1 = /*#__PURE__*/ function() {
        function Lexer(options) {
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || exports.defaults;
            this.options.tokenizer = this.options.tokenizer || new Tokenizer1();
            this.tokenizer = this.options.tokenizer;
            this.tokenizer.options = this.options;
            this.tokenizer.lexer = this;
            this.inlineQueue = [];
            this.state = {
                inLink: false,
                inRawBlock: false,
                top: true
            };
            var rules = {
                block: block.normal,
                inline: inline.normal
            };
            if (this.options.pedantic) {
                rules.block = block.pedantic;
                rules.inline = inline.pedantic;
            } else if (this.options.gfm) {
                rules.block = block.gfm;
                if (this.options.breaks) rules.inline = inline.breaks;
                else rules.inline = inline.gfm;
            }
            this.tokenizer.rules = rules;
        }
        /**
     * Expose Rules
     */ /**
     * Static Lex Method
     */ Lexer.lex = function lex(src, options) {
            var lexer = new Lexer(options);
            return lexer.lex(src);
        } /**
     * Static Lex Inline Method
     */ ;
        Lexer.lexInline = function lexInline(src, options) {
            var lexer = new Lexer(options);
            return lexer.inlineTokens(src);
        } /**
     * Preprocessing
     */ ;
        var _proto = Lexer.prototype;
        _proto.lex = function lex(src) {
            src = src.replace(/\r\n|\r/g, '\n');
            this.blockTokens(src, this.tokens);
            var next;
            while(next = this.inlineQueue.shift())this.inlineTokens(next.src, next.tokens);
            return this.tokens;
        } /**
     * Lexing
     */ ;
        _proto.blockTokens = function blockTokens(src, tokens) {
            var _this = this;
            if (tokens === void 0) tokens = [];
            if (this.options.pedantic) src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
            else src = src.replace(/^( *)(\t+)/gm, function(_, leading, tabs) {
                return leading + '    '.repeat(tabs.length);
            });
            var token, lastToken, cutSrc, lastParagraphClipped;
            while(src){
                if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(extTokenizer) {
                    if (token = extTokenizer.call({
                        lexer: _this
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                 // newline
                if (token = this.tokenizer.space(src)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.length === 1 && tokens.length > 0) // if there's a single \n as a spacer, it's terminating the last line,
                    // so move it there so that we don't get unecessary paragraph tags
                    tokens[tokens.length - 1].raw += '\n';
                    else tokens.push(token);
                    continue;
                } // code
                if (token = this.tokenizer.code(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.
                    if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                } // fences
                if (token = this.tokenizer.fences(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // heading
                if (token = this.tokenizer.heading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // hr
                if (token = this.tokenizer.hr(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // blockquote
                if (token = this.tokenizer.blockquote(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // list
                if (token = this.tokenizer.list(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // html
                if (token = this.tokenizer.html(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // def
                if (token = this.tokenizer.def(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.raw;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else if (!this.tokens.links[token.tag]) this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title
                    };
                    continue;
                } // table (gfm)
                if (token = this.tokenizer.table(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // lheading
                if (token = this.tokenizer.lheading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // top-level paragraph
                // prevent paragraph consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startBlock) (function() {
                    var startIndex = Infinity;
                    var tempSrc = src.slice(1);
                    var tempStart = void 0;
                    _this.options.extensions.startBlock.forEach(function(getStartIndex) {
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === 'number' && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                })();
                if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
                    lastToken = tokens[tokens.length - 1];
                    if (lastParagraphClipped && lastToken.type === 'paragraph') {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    lastParagraphClipped = cutSrc.length !== src.length;
                    src = src.substring(token.raw.length);
                    continue;
                } // text
                if (token = this.tokenizer.text(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === 'text') {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            this.state.top = true;
            return tokens;
        };
        _proto.inline = function inline(src, tokens) {
            this.inlineQueue.push({
                src: src,
                tokens: tokens
            });
        } /**
     * Lexing/Compiling
     */ ;
        _proto.inlineTokens = function inlineTokens(src, tokens) {
            var _this2 = this;
            if (tokens === void 0) tokens = [];
            var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong
            var maskedSrc = src;
            var match;
            var keepPrevChar, prevChar; // Mask out reflinks
            if (this.tokens.links) {
                var links = Object.keys(this.tokens.links);
                if (links.length > 0) {
                    while((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null)if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
            } // Mask out other blocks
            while((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
             // Mask out escaped em & strong delimiters
            while((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
            while(src){
                if (!keepPrevChar) prevChar = '';
                keepPrevChar = false; // extensions
                if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(extTokenizer) {
                    if (token = extTokenizer.call({
                        lexer: _this2
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                 // escape
                if (token = this.tokenizer.escape(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // tag
                if (token = this.tokenizer.tag(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                } // link
                if (token = this.tokenizer.link(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // reflink, nolink
                if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                } // em & strong
                if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // code
                if (token = this.tokenizer.codespan(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // br
                if (token = this.tokenizer.br(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // del (gfm)
                if (token = this.tokenizer.del(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // autolink
                if (token = this.tokenizer.autolink(src, mangle1)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // url (gfm)
                if (!this.state.inLink && (token = this.tokenizer.url(src, mangle1))) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // text
                // prevent inlineText consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startInline) (function() {
                    var startIndex = Infinity;
                    var tempSrc = src.slice(1);
                    var tempStart = void 0;
                    _this2.options.extensions.startInline.forEach(function(getStartIndex) {
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === 'number' && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                })();
                if (token = this.tokenizer.inlineText(cutSrc, smartypants1)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.slice(-1) !== '_') // Track prevChar before string of ____ started
                    prevChar = token.raw.slice(-1);
                    keepPrevChar = true;
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            return tokens;
        };
        _createClass(Lexer, null, [
            {
                key: "rules",
                get: function get() {
                    return {
                        block: block,
                        inline: inline
                    };
                }
            }
        ]);
        return Lexer;
    }();
    /**
   * Renderer
   */ var Renderer1 = /*#__PURE__*/ function() {
        function Renderer(options) {
            this.options = options || exports.defaults;
        }
        var _proto = Renderer.prototype;
        _proto.code = function code(_code, infostring, escaped) {
            var lang = (infostring || '').match(/\S*/)[0];
            if (this.options.highlight) {
                var out = this.options.highlight(_code, lang);
                if (out != null && out !== _code) {
                    escaped = true;
                    _code = out;
                }
            }
            _code = _code.replace(/\n$/, '') + '\n';
            if (!lang) return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
            return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
        } /**
     * @param {string} quote
     */ ;
        _proto.blockquote = function blockquote(quote) {
            return "<blockquote>\n" + quote + "</blockquote>\n";
        };
        _proto.html = function html(_html) {
            return _html;
        } /**
     * @param {string} text
     * @param {string} level
     * @param {string} raw
     * @param {any} slugger
     */ ;
        _proto.heading = function heading(text, level, raw, slugger) {
            if (this.options.headerIds) {
                var id = this.options.headerPrefix + slugger.slug(raw);
                return "<h" + level + " id=\"" + id + "\">" + text + "</h" + level + ">\n";
            } // ignore IDs
            return "<h" + level + ">" + text + "</h" + level + ">\n";
        };
        _proto.hr = function hr() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        };
        _proto.list = function list(body, ordered, start) {
            var type = ordered ? 'ol' : 'ul', startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
            return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
        } /**
     * @param {string} text
     */ ;
        _proto.listitem = function listitem(text) {
            return "<li>" + text + "</li>\n";
        };
        _proto.checkbox = function checkbox(checked) {
            return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
        } /**
     * @param {string} text
     */ ;
        _proto.paragraph = function paragraph(text) {
            return "<p>" + text + "</p>\n";
        } /**
     * @param {string} header
     * @param {string} body
     */ ;
        _proto.table = function table(header, body) {
            if (body) body = "<tbody>" + body + "</tbody>";
            return "<table>\n<thead>\n" + header + '</thead>\n' + body + '</table>\n';
        } /**
     * @param {string} content
     */ ;
        _proto.tablerow = function tablerow(content) {
            return "<tr>\n" + content + "</tr>\n";
        };
        _proto.tablecell = function tablecell(content, flags) {
            var type = flags.header ? 'th' : 'td';
            var tag = flags.align ? "<" + type + " align=\"" + flags.align + "\">" : "<" + type + ">";
            return tag + content + ("</" + type + ">\n");
        } /**
     * span level renderer
     * @param {string} text
     */ ;
        _proto.strong = function strong(text) {
            return "<strong>" + text + "</strong>";
        } /**
     * @param {string} text
     */ ;
        _proto.em = function em(text) {
            return "<em>" + text + "</em>";
        } /**
     * @param {string} text
     */ ;
        _proto.codespan = function codespan(text) {
            return "<code>" + text + "</code>";
        };
        _proto.br = function br() {
            return this.options.xhtml ? '<br/>' : '<br>';
        } /**
     * @param {string} text
     */ ;
        _proto.del = function del(text) {
            return "<del>" + text + "</del>";
        } /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */ ;
        _proto.link = function link(href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) return text;
            var out = '<a href="' + escape(href) + '"';
            if (title) out += ' title="' + title + '"';
            out += '>' + text + '</a>';
            return out;
        } /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */ ;
        _proto.image = function image(href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) return text;
            var out = "<img src=\"" + href + "\" alt=\"" + text + "\"";
            if (title) out += " title=\"" + title + "\"";
            out += this.options.xhtml ? '/>' : '>';
            return out;
        };
        _proto.text = function text(_text) {
            return _text;
        };
        return Renderer;
    }();
    /**
   * TextRenderer
   * returns only the textual part of the token
   */ var TextRenderer1 = /*#__PURE__*/ function() {
        function TextRenderer() {}
        var _proto = TextRenderer.prototype;
        // no need for block level renderers
        _proto.strong = function strong(text) {
            return text;
        };
        _proto.em = function em(text) {
            return text;
        };
        _proto.codespan = function codespan(text) {
            return text;
        };
        _proto.del = function del(text) {
            return text;
        };
        _proto.html = function html(text) {
            return text;
        };
        _proto.text = function text(_text) {
            return _text;
        };
        _proto.link = function link(href, title, text) {
            return '' + text;
        };
        _proto.image = function image(href, title, text) {
            return '' + text;
        };
        _proto.br = function br() {
            return '';
        };
        return TextRenderer;
    }();
    /**
   * Slugger generates header id
   */ var Slugger1 = /*#__PURE__*/ function() {
        function Slugger() {
            this.seen = {};
        }
        /**
     * @param {string} value
     */ var _proto = Slugger.prototype;
        _proto.serialize = function serialize(value) {
            return value.toLowerCase().trim() // remove html tags
            .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
            .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
        } /**
     * Finds the next safe (unique) slug to use
     * @param {string} originalSlug
     * @param {boolean} isDryRun
     */ ;
        _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
            var slug = originalSlug;
            var occurenceAccumulator = 0;
            if (this.seen.hasOwnProperty(slug)) {
                occurenceAccumulator = this.seen[originalSlug];
                do {
                    occurenceAccumulator++;
                    slug = originalSlug + '-' + occurenceAccumulator;
                }while (this.seen.hasOwnProperty(slug))
            }
            if (!isDryRun) {
                this.seen[originalSlug] = occurenceAccumulator;
                this.seen[slug] = 0;
            }
            return slug;
        } /**
     * Convert string to unique id
     * @param {object} [options]
     * @param {boolean} [options.dryrun] Generates the next unique slug without
     * updating the internal accumulator.
     */ ;
        _proto.slug = function slug(value, options) {
            if (options === void 0) options = {};
            var slug = this.serialize(value);
            return this.getNextSafeSlug(slug, options.dryrun);
        };
        return Slugger;
    }();
    /**
   * Parsing & Compiling
   */ var Parser1 = /*#__PURE__*/ function() {
        function Parser(options) {
            this.options = options || exports.defaults;
            this.options.renderer = this.options.renderer || new Renderer1();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.textRenderer = new TextRenderer1();
            this.slugger = new Slugger1();
        }
        /**
     * Static Parse Method
     */ Parser.parse = function parse(tokens, options) {
            var parser = new Parser(options);
            return parser.parse(tokens);
        } /**
     * Static Parse Inline Method
     */ ;
        Parser.parseInline = function parseInline(tokens, options) {
            var parser = new Parser(options);
            return parser.parseInline(tokens);
        } /**
     * Parse Loop
     */ ;
        var _proto = Parser.prototype;
        _proto.parse = function parse(tokens, top) {
            if (top === void 0) top = true;
            var out = '', i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
            var l = tokens.length;
            for(i = 0; i < l; i++){
                token = tokens[i]; // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        'space',
                        'hr',
                        'heading',
                        'code',
                        'table',
                        'blockquote',
                        'list',
                        'html',
                        'paragraph',
                        'text'
                    ].includes(token.type)) {
                        out += ret || '';
                        continue;
                    }
                }
                switch(token.type){
                    case 'space':
                        continue;
                    case 'hr':
                        out += this.renderer.hr();
                        continue;
                    case 'heading':
                        out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                        continue;
                    case 'code':
                        out += this.renderer.code(token.text, token.lang, token.escaped);
                        continue;
                    case 'table':
                        header = ''; // header
                        cell = '';
                        l2 = token.header.length;
                        for(j = 0; j < l2; j++)cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                            header: true,
                            align: token.align[j]
                        });
                        header += this.renderer.tablerow(cell);
                        body = '';
                        l2 = token.rows.length;
                        for(j = 0; j < l2; j++){
                            row = token.rows[j];
                            cell = '';
                            l3 = row.length;
                            for(k = 0; k < l3; k++)cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                                header: false,
                                align: token.align[k]
                            });
                            body += this.renderer.tablerow(cell);
                        }
                        out += this.renderer.table(header, body);
                        continue;
                    case 'blockquote':
                        body = this.parse(token.tokens);
                        out += this.renderer.blockquote(body);
                        continue;
                    case 'list':
                        ordered = token.ordered;
                        start = token.start;
                        loose = token.loose;
                        l2 = token.items.length;
                        body = '';
                        for(j = 0; j < l2; j++){
                            item = token.items[j];
                            checked = item.checked;
                            task = item.task;
                            itemBody = '';
                            if (item.task) {
                                checkbox = this.renderer.checkbox(checked);
                                if (loose) {
                                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                                        item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                                    } else item.tokens.unshift({
                                        type: 'text',
                                        text: checkbox
                                    });
                                } else itemBody += checkbox;
                            }
                            itemBody += this.parse(item.tokens, loose);
                            body += this.renderer.listitem(itemBody, task, checked);
                        }
                        out += this.renderer.list(body, ordered, start);
                        continue;
                    case 'html':
                        // TODO parse inline content if parameter markdown=1
                        out += this.renderer.html(token.text);
                        continue;
                    case 'paragraph':
                        out += this.renderer.paragraph(this.parseInline(token.tokens));
                        continue;
                    case 'text':
                        body = token.tokens ? this.parseInline(token.tokens) : token.text;
                        while(i + 1 < l && tokens[i + 1].type === 'text'){
                            token = tokens[++i];
                            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                        }
                        out += top ? this.renderer.paragraph(body) : body;
                        continue;
                    default:
                        var errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return;
                        } else throw new Error(errMsg);
                }
            }
            return out;
        } /**
     * Parse Inline Tokens
     */ ;
        _proto.parseInline = function parseInline(tokens, renderer) {
            renderer = renderer || this.renderer;
            var out = '', i, token, ret;
            var l = tokens.length;
            for(i = 0; i < l; i++){
                token = tokens[i]; // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        'escape',
                        'html',
                        'link',
                        'image',
                        'strong',
                        'em',
                        'codespan',
                        'br',
                        'del',
                        'text'
                    ].includes(token.type)) {
                        out += ret || '';
                        continue;
                    }
                }
                switch(token.type){
                    case 'escape':
                        out += renderer.text(token.text);
                        break;
                    case 'html':
                        out += renderer.html(token.text);
                        break;
                    case 'link':
                        out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                        break;
                    case 'image':
                        out += renderer.image(token.href, token.title, token.text);
                        break;
                    case 'strong':
                        out += renderer.strong(this.parseInline(token.tokens, renderer));
                        break;
                    case 'em':
                        out += renderer.em(this.parseInline(token.tokens, renderer));
                        break;
                    case 'codespan':
                        out += renderer.codespan(token.text);
                        break;
                    case 'br':
                        out += renderer.br();
                        break;
                    case 'del':
                        out += renderer.del(this.parseInline(token.tokens, renderer));
                        break;
                    case 'text':
                        out += renderer.text(token.text);
                        break;
                    default:
                        var errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return;
                        } else throw new Error(errMsg);
                }
            }
            return out;
        };
        return Parser;
    }();
    /**
   * Marked
   */ function marked(src, opt, callback) {
        // throw error in case of non string input
        if (typeof src === 'undefined' || src === null) throw new Error('marked(): input parameter is undefined or null');
        if (typeof src !== 'string') throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
        if (typeof opt === 'function') {
            callback = opt;
            opt = null;
        }
        opt = merge({}, marked.defaults, opt || {});
        checkSanitizeDeprecation(opt);
        if (callback) {
            var highlight = opt.highlight;
            var tokens;
            try {
                tokens = Lexer1.lex(src, opt);
            } catch (e1) {
                return callback(e1);
            }
            var done = function done(err) {
                var out;
                if (!err) try {
                    if (opt.walkTokens) marked.walkTokens(tokens, opt.walkTokens);
                    out = Parser1.parse(tokens, opt);
                } catch (e) {
                    err = e;
                }
                opt.highlight = highlight;
                return err ? callback(err) : callback(null, out);
            };
            if (!highlight || highlight.length < 3) return done();
            delete opt.highlight;
            if (!tokens.length) return done();
            var pending = 0;
            marked.walkTokens(tokens, function(token) {
                if (token.type === 'code') {
                    pending++;
                    setTimeout(function() {
                        highlight(token.text, token.lang, function(err, code) {
                            if (err) return done(err);
                            if (code != null && code !== token.text) {
                                token.text = code;
                                token.escaped = true;
                            }
                            pending--;
                            if (pending === 0) done();
                        });
                    }, 0);
                }
            });
            if (pending === 0) done();
            return;
        }
        try {
            var _tokens = Lexer1.lex(src, opt);
            if (opt.walkTokens) marked.walkTokens(_tokens, opt.walkTokens);
            return Parser1.parse(_tokens, opt);
        } catch (e) {
            e.message += '\nPlease report this to https://github.com/markedjs/marked.';
            if (opt.silent) return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
            throw e;
        }
    }
    /**
   * Options
   */ marked.options = marked.setOptions = function(opt) {
        merge(marked.defaults, opt);
        changeDefaults(marked.defaults);
        return marked;
    };
    marked.getDefaults = getDefaults;
    marked.defaults = exports.defaults;
    /**
   * Use Extension
   */ marked.use = function() {
        for(var _len = arguments.length, args1 = new Array(_len), _key = 0; _key < _len; _key++)args1[_key] = arguments[_key];
        var opts = merge.apply(void 0, [
            {}
        ].concat(args1));
        var extensions = marked.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        var hasExtensions;
        args1.forEach(function(pack) {
            // ==-- Parse "addon" extensions --== //
            if (pack.extensions) {
                hasExtensions = true;
                pack.extensions.forEach(function(ext) {
                    if (!ext.name) throw new Error('extension name required');
                    if (ext.renderer) {
                        // Renderer extensions
                        var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
                        if (prevRenderer) // Replace extension with func to run new extension but fall back if false
                        extensions.renderers[ext.name] = function() {
                            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                            var ret = ext.renderer.apply(this, args);
                            if (ret === false) ret = prevRenderer.apply(this, args);
                            return ret;
                        };
                        else extensions.renderers[ext.name] = ext.renderer;
                    }
                    if (ext.tokenizer) {
                        // Tokenizer Extensions
                        if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') throw new Error("extension level must be 'block' or 'inline'");
                        if (extensions[ext.level]) extensions[ext.level].unshift(ext.tokenizer);
                        else extensions[ext.level] = [
                            ext.tokenizer
                        ];
                        if (ext.start) {
                            // Function to check for start of token
                            if (ext.level === 'block') {
                                if (extensions.startBlock) extensions.startBlock.push(ext.start);
                                else extensions.startBlock = [
                                    ext.start
                                ];
                            } else if (ext.level === 'inline') {
                                if (extensions.startInline) extensions.startInline.push(ext.start);
                                else extensions.startInline = [
                                    ext.start
                                ];
                            }
                        }
                    }
                    if (ext.childTokens) // Child tokens to be visited by walkTokens
                    extensions.childTokens[ext.name] = ext.childTokens;
                });
            } // ==-- Parse "overwrite" extensions --== //
            if (pack.renderer) (function() {
                var renderer = marked.defaults.renderer || new Renderer1();
                var _loop = function _loop(prop) {
                    var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false
                    renderer[prop] = function() {
                        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
                        var ret = pack.renderer[prop].apply(renderer, args);
                        if (ret === false) ret = prevRenderer.apply(renderer, args);
                        return ret;
                    };
                };
                for(var prop1 in pack.renderer)_loop(prop1);
                opts.renderer = renderer;
            })();
            if (pack.tokenizer) (function() {
                var tokenizer = marked.defaults.tokenizer || new Tokenizer1();
                var _loop2 = function _loop2(prop) {
                    var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false
                    tokenizer[prop] = function() {
                        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)args[_key4] = arguments[_key4];
                        var ret = pack.tokenizer[prop].apply(tokenizer, args);
                        if (ret === false) ret = prevTokenizer.apply(tokenizer, args);
                        return ret;
                    };
                };
                for(var prop2 in pack.tokenizer)_loop2(prop2);
                opts.tokenizer = tokenizer;
            })();
             // ==-- Parse WalkTokens extensions --== //
            if (pack.walkTokens) {
                var _walkTokens = marked.defaults.walkTokens;
                opts.walkTokens = function(token) {
                    pack.walkTokens.call(this, token);
                    if (_walkTokens) _walkTokens.call(this, token);
                };
            }
            if (hasExtensions) opts.extensions = extensions;
            marked.setOptions(opts);
        });
    };
    /**
   * Run callback for every token
   */ marked.walkTokens = function(tokens, callback) {
        var _loop3 = function _loop3() {
            var token = _step.value;
            callback.call(marked, token);
            switch(token.type){
                case 'table':
                    for(var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;){
                        var cell = _step2.value;
                        marked.walkTokens(cell.tokens, callback);
                    }
                    for(var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;){
                        var row = _step3.value;
                        for(var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;){
                            var _cell = _step4.value;
                            marked.walkTokens(_cell.tokens, callback);
                        }
                    }
                    break;
                case 'list':
                    marked.walkTokens(token.items, callback);
                    break;
                default:
                    if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) // Walk any extensions
                    marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
                        marked.walkTokens(token[childTokens], callback);
                    });
                    else if (token.tokens) marked.walkTokens(token.tokens, callback);
            }
        };
        for(var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;)_loop3();
    };
    /**
   * Parse Inline
   * @param {string} src
   */ marked.parseInline = function(src, opt) {
        // throw error in case of non string input
        if (typeof src === 'undefined' || src === null) throw new Error('marked.parseInline(): input parameter is undefined or null');
        if (typeof src !== 'string') throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
        opt = merge({}, marked.defaults, opt || {});
        checkSanitizeDeprecation(opt);
        try {
            var tokens = Lexer1.lexInline(src, opt);
            if (opt.walkTokens) marked.walkTokens(tokens, opt.walkTokens);
            return Parser1.parseInline(tokens, opt);
        } catch (e) {
            e.message += '\nPlease report this to https://github.com/markedjs/marked.';
            if (opt.silent) return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
            throw e;
        }
    };
    /**
   * Expose
   */ marked.Parser = Parser1;
    marked.parser = Parser1.parse;
    marked.Renderer = Renderer1;
    marked.TextRenderer = TextRenderer1;
    marked.Lexer = Lexer1;
    marked.lexer = Lexer1.lex;
    marked.Tokenizer = Tokenizer1;
    marked.Slugger = Slugger1;
    marked.parse = marked;
    var options1 = marked.options;
    var setOptions = marked.setOptions;
    var use = marked.use;
    var walkTokens = marked.walkTokens;
    var parseInline = marked.parseInline;
    var parse = marked;
    var parser1 = Parser1.parse;
    var lexer1 = Lexer1.lex;
    exports.Lexer = Lexer1;
    exports.Parser = Parser1;
    exports.Renderer = Renderer1;
    exports.Slugger = Slugger1;
    exports.TextRenderer = TextRenderer1;
    exports.Tokenizer = Tokenizer1;
    exports.getDefaults = getDefaults;
    exports.lexer = lexer1;
    exports.marked = marked;
    exports.options = options1;
    exports.parse = parse;
    exports.parseInline = parseInline;
    exports.parser = parser1;
    exports.setOptions = setOptions;
    exports.use = use;
    exports.walkTokens = walkTokens;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}]},["jKwHT","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
