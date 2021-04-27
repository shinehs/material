import * as vscode from 'vscode';
import { showExtensionsQuickPickCommandId, materialImporterText } from '../constants';

export default function createExtensionsStatusBar() {
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = materialImporterText.statusBar.text;
    statusBarItem.command = showExtensionsQuickPickCommandId;
    statusBarItem.show();
    return statusBarItem;
}
