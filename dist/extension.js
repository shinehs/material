/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { name, version } = __webpack_require__(2);
const vscode = __webpack_require__(1);
const i18n_1 = __webpack_require__(3);
const getHtmlForWebview_1 = __webpack_require__(5);
// import createExtensionsStatusBar from './statusBar/createExtensionsStatusBar';
// import { showExtensionsQuickPickCommandId, projectExistsTime } from './constants';
// import showAllQuickPick from './quickPicks/showAllQuickPick';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const { window, ViewColumn } = vscode;
function activate(context) {
    const { subscriptions, extensionPath } = context;
    let disposable = vscode.commands.registerCommand('n.helloWorld', function () {
        vscode.window.showInformationMessage(`${name} is running version ${version} `);
        const panel = vscode.window.createWebviewPanel('demo', 'demo', ViewColumn.One, {});
        panel.webview.html = getPreviewHtml();
    });
    // init statusBarItem TODO 不出来 暂时不知道为什么
    // const extensionsStatusBar = createExtensionsStatusBar();
    // subscriptions.push(extensionsStatusBar);
    // subscriptions.push(
    //     vscode.commands.registerCommand(showExtensionsQuickPickCommandId, async () => {
    //         await showAllQuickPick();
    //     }),
    // );
    // set material importer
    let materialImporterWebviewPanel;
    function activeMaterialImporterWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            if (materialImporterWebviewPanel) {
                materialImporterWebviewPanel.reveal();
            }
            else {
                let columnToShowIn = ViewColumn.One;
                let layout = { orientation: 0, groups: [{}] };
                if (window.activeTextEditor) {
                    columnToShowIn = ViewColumn.Beside;
                    layout = { orientation: 0, groups: [{ size: 0.7 }, { size: 0.3 }] };
                }
                materialImporterWebviewPanel = window.createWebviewPanel('material-import', i18n_1.default.format('extension.helper.materailImporter.title'), { viewColumn: columnToShowIn, preserveFocus: true }, {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                    enableFindWidget: true,
                });
                materialImporterWebviewPanel.webview.html = getHtmlForWebview_1.getHtmlForWebview(extensionPath, 'http://www.baidu.com', true, ' ');
                // materialImporterWebviewPanel.webview.html = getPreviewHtml();
                // let { html } = await getHTML('http://www.baidu.com');
                // materialImporterWebviewPanel.webview.html = html;
                materialImporterWebviewPanel.iconPath = vscode.Uri.parse('https://web.yystatic.com/project/yycom_header/pc/images/logo-dc375a3e.png');
                materialImporterWebviewPanel.onDidDispose(() => {
                    materialImporterWebviewPanel = undefined;
                }, null, context.subscriptions);
                vscode.commands.executeCommand('vscode.setEditorLayout', layout);
                // connectService(materialImporterWebviewPanel, context, { services, recorder });
            }
        });
    }
    subscriptions.push(vscode.commands.registerCommand('n.start', () => {
        const { visibleTextEditors } = vscode.window;
        if (visibleTextEditors.length) {
            activeMaterialImporterWebview();
        }
        else {
            vscode.window.showErrorMessage(i18n_1.default.format('extension.iceworksMaterialHelper.extension.start.errorMessage'));
        }
    }));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function getPreviewHtml() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Text2QRCode</title>
    </head>
    <body>
    <div style="display: flex; min-height: 240px; height: 100%; width: 100%;">
        <h1>test</h1>
    </div>
    </body>
    </html>`;
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"n","displayName":"n","description":"","version":"0.0.1","engines":{"vscode":"^1.55.0"},"categories":["Other"],"activationEvents":["onCommand:n.helloWorld","onCommand:n.start"],"main":"./dist/extension.js","contributes":{"commands":[{"command":"n.helloWorld","title":"Hello World1111111111111111"},{"command":"n.start","title":"ssssssssss"}]},"scripts":{"vscode:prepublish":"yarn run package","compile":"webpack","watch":"webpack --watch","package":"webpack --mode production --devtool hidden-source-map","test-compile":"tsc -p ./","test-watch":"tsc -watch -p ./","pretest":"yarn run test-compile && yarn run lint","lint":"eslint src --ext ts","test":"node ./out/test/runTest.js"},"devDependencies":{"@types/glob":"^7.1.3","@types/mocha":"^8.0.4","@types/node":"^12.11.7","@types/vscode":"^1.55.0","@typescript-eslint/eslint-plugin":"^4.14.1","@typescript-eslint/parser":"^4.14.1","eslint":"^7.19.0","glob":"^7.1.6","mocha":"^8.2.1","ts-loader":"^8.0.14","typescript":"^4.1.3","vscode-test":"^1.5.0","webpack":"^5.19.0","webpack-cli":"^4.4.0"},"viewsContainers":{"activitybar":[{"id":"mertial","title":"iiiiii","icon":"images/icon.svg"}]}}');

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const enZHTextMap = __webpack_require__(4);
// 注册语言表
class I18n {
    constructor() { }
    static format(path) {
        return enZHTextMap[path];
    }
}
exports.default = I18n;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = JSON.parse('{"extension.helper.materailImporter.title":"导入组件 - Import Componen","extension.helper.getAllDocsInfo.sourceLoading":"Source Loading... Please try again later��","extension.helper.getComponentQuickPicks.noMaterial":"No material matching this project��","extension.helper.getComponentQuickPicks.more.label":"More","extension.helper.getComponentQuickPicks.more.detail":"Display All Components","extension.helper.getHoverItem.hoverItemLink":"[Docs for <%= componentName %> ](<%= commandUri %>)","extension.helper.openInBorwser.noBrowserPreview":"You must install��Browser Preview�� to open url in vscode.","extension.helper.extension.start.errorMessage":"Fail to start Import Component Panel, please open a file first.","extension.helper.componentCreator.webviewTitle":"Download Materials - Iceworks","extension.helper.pageGenerator.webViewTitle":"Generate Page by Blocks - Iceworks","extension.helper.pageCreator.webViewTitle":"Generate Page by Configuration - Iceworks","extension.helper.debugMaterial.addMaterial.label":"Add a local material project to debug list","extension.helper.debugMaterial.addMaterial.detail":"Select a local material project","extension.helper.debugMaterial.deleteMaterial.label":"Clear debug material source","extension.helper.debugMaterial.deleteMaterial.detail":"Delete all local material project in material source list","extension.helper.debugMaterial.addMaterial.openLabel":"Debug Materials","extension.helper.initDebug.err":"init Debug Err�� <%= errMessage %>","extension.helper.debugInput.addSourceSuccess":"Add Debug Material Item Successfully","extension.helper.debugInput.deleteSourceSuccess":"Delete Debug Material Item Successfully","extension.helper.showEntriesQuickPick.generatePage.label":"Generate Page by Blocks","extension.helper.showEntriesQuickPick.generatePage.detail":"Generate pages by block assembly","extension.helper.showEntriesQuickPick.createPage.label":"Generate Page by Configuration","extension.helper.showEntriesQuickPick.createPage.detail":"Generate pages by using template configuration","extension.helper.showEntriesQuickPick.generateComponent.label":"Design Component","extension.helper.showEntriesQuickPick.generateComponent.detail":"Generate components in a completely visual canvas","extension.helper.showEntriesQuickPick.createComponent.label":"Download Materials","extension.helper.showEntriesQuickPick.createComponent.detail":"Download component materials to local","extension.helper.showEntriesQuickPick.imgcook.label":"Design to code","extension.helper.showEntriesQuickPick.imgcook.detail":"Intelligently generate component code according to the uploaded image"}');

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHtmlForWebview = void 0;
const DEFAULT_ENTRY = 'index';
const vscode = __webpack_require__(1);
const path = __webpack_require__(6);
function originResourceProcess(url) {
    return vscode.Uri.file(url).with({ scheme: 'vscode-resource' });
}
function getHtmlForWebview(extensionPath, entryName, needVendor, cdnBasePath, extraHtml, resourceProcess) {
    entryName = entryName || DEFAULT_ENTRY;
    resourceProcess = resourceProcess || originResourceProcess;
    const localBasePath = path.join(extensionPath, 'build');
    //   const rootPath = cdnBasePath || localBasePath;
    const rootPath = localBasePath;
    const scriptPath = path.join(rootPath, `js/${entryName}.js`);
    const scriptUri = cdnBasePath ?
        scriptPath :
        resourceProcess(scriptPath);
    const stylePath = path.join(rootPath, `css/${entryName}.css`);
    const styleUri = cdnBasePath ?
        stylePath :
        resourceProcess(stylePath);
    // vendor for MPA
    const vendorStylePath = path.join(rootPath, '../extensions/css/vendor.css');
    const vendorStyleUri = cdnBasePath
        ? vendorStylePath
        : resourceProcess(vendorStylePath);
    const vendorScriptPath = path.join(rootPath, '../extensions/js/vendor.js');
    const vendorScriptUri = cdnBasePath
        ? vendorScriptPath
        : resourceProcess(vendorScriptPath);
    // Use a nonce to whitelist which scripts can be run
    //   const nonce = getNonce();
    const fileContent = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
      <meta name="theme-color" content="#FFFFFF">
      <title>meterial</title>
      <style>
        #app{
            font-size: 20px;
        }
      </style>
      <link rel="stylesheet" type="text/css" href="${styleUri}">
      ${extraHtml || ''}
      ` +
        (needVendor ? `<link rel="stylesheet" type="text/css" href="${vendorStyleUri}" />` : '') +
        `
    </head>
    <body>
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201507%2F06%2F20150706140024_kRCzw.jpeg&refer=http%3A%2F%2Fimg4q.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620995196&t=031788f62cb0573ec4018d7e71148614"/>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="app">111111111</div>
      ` +
        (needVendor ? `<script src="${vendorScriptUri}"></script>` : '') +
        `<script src="${scriptUri}"></script>
    <button onclick="btnClick()">btn</button>
    </body>
  </html>`;
    return fileContent;
}
exports.getHtmlForWebview = getHtmlForWebview;
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("path");;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map