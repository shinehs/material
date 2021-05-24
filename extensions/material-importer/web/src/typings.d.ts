
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.svg';

interface IVScode {
    postMessage(message: any): void;
}

declare const vscode: IVScode;

declare function acquireVsCodeApi(): any;