import * as vscode from 'vscode';
// import { getProjectType, checkIsPegasusProject, checkIsTargetProjectType } from '@iceworks/project-service';
// import { checkIsAliInternal, checkIsInstalledDoctor } from '@iceworks/common-service';
// import i18n from '../i18n';

/**
 * 该数组总是列出所有可用的命令，外部可以基于该数组进行赛选
 */
export default [
  {
    label: 'test',
    detail: 'testdetail',
    command: 'iceworks-project-creator.create-project.start',
    async condition() {
      return vscode.extensions.getExtension('iceworks-team.iceworks-project-creator');
    },
  }
];
