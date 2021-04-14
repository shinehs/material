const DEFAULT_ENTRY = 'index';
import * as vscode from 'vscode';
import * as path from 'path';

function originResourceProcess(url: string) {
    return vscode.Uri.file(url).with({ scheme: 'vscode-resource' });
}
export function getHtmlForWebview(
  extensionPath: string,
  entryName?: string,
  needVendor?: boolean,
  cdnBasePath?: string,
  extraHtml?: string,
  resourceProcess?: (url: string) => vscode.Uri,
): string {
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

  const fileContent =
    `<!DOCTYPE html>
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

function getNonce(): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
