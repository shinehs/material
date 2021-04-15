// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { name, version } = require('../package.json');
import * as vscode from 'vscode';
import I18n from './i18n';
import { getHtmlForWebview } from './utils/getHtmlForWebview';

// import createExtensionsStatusBar from './statusBar/createExtensionsStatusBar';
// import { showExtensionsQuickPickCommandId, projectExistsTime } from './constants';
// import showAllQuickPick from './quickPicks/showAllQuickPick';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const { window, ViewColumn } = vscode;
export function activate(context: vscode.ExtensionContext) {
    const { subscriptions, extensionPath } = context;

    let disposable = vscode.commands.registerCommand('n.helloWorld', function () {
        vscode.window.showInformationMessage(`${name} is running version ${version} `);
        const panel = vscode.window.createWebviewPanel(
            'demo',
            'demo',
            ViewColumn.One,
            {}
        );
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
    let materialImporterWebviewPanel: vscode.WebviewPanel | undefined;
    async function activeMaterialImporterWebview() {
        if (materialImporterWebviewPanel) {
            materialImporterWebviewPanel.reveal();
        } else {
            let columnToShowIn = ViewColumn.One;
            let layout = { orientation: 0, groups: [{}] };
            if (window.activeTextEditor) {
                columnToShowIn = ViewColumn.Beside;
                layout = { orientation: 0, groups: [{ size: 0.7 }, { size: 0.3 }] };
            }

            materialImporterWebviewPanel = window.createWebviewPanel(
                'material-import',
                I18n.format('extension.helper.materailImporter.title'),
                { viewColumn: columnToShowIn, preserveFocus: true },
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                    enableFindWidget: true,
                },
            );
            
            materialImporterWebviewPanel.webview.html = getHtmlForWebview(extensionPath,'vendor');

            // materialImporterWebviewPanel.webview.html = getPreviewHtml();
            // let { html } = await getHTML('http://www.baidu.com');
            // materialImporterWebviewPanel.webview.html = html;
            materialImporterWebviewPanel.iconPath = vscode.Uri.parse('https://web.yystatic.com/project/yycom_header/pc/images/logo-dc375a3e.png');
            materialImporterWebviewPanel.onDidDispose(
                () => {
                    materialImporterWebviewPanel = undefined;
                },
                null,
                context.subscriptions,
            );

            vscode.commands.executeCommand('vscode.setEditorLayout', layout);

            // connectService(materialImporterWebviewPanel, context, { services, recorder });
        }
    }
    subscriptions.push(
        vscode.commands.registerCommand('n.start', () => {
            const { visibleTextEditors } = vscode.window;
            if (visibleTextEditors.length) {
                activeMaterialImporterWebview();
            } else {
                vscode.window.showErrorMessage(I18n.format('extension.iceworksMaterialHelper.extension.start.errorMessage'));
            }
        }),
    );
    context.subscriptions.push(disposable);
}

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
export function deactivate() {}
