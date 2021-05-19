import * as React from 'react';
import { FC } from 'react';
import { Avator } from '../avator/avator';
import { ControlBar } from '../controlBar/index';
import './materialItem.scss';
export interface MaterialItemProps {
  txt?: string
  url?: string
  previewUrl: string
  sourceCode: string
}
export const MaterialItem: FC<MaterialItemProps> = (props) => {
  const { txt, url, previewUrl, sourceCode } = props;
  return (
    <div className="m-item__wrapper">
      <Avator url={url}></Avator>
      <p className="m-item__wrapper__info">{props.txt}</p>
      <ControlBar previewUrl={previewUrl} sourceCode={sourceCode}></ControlBar>
    </div>
  );
};
