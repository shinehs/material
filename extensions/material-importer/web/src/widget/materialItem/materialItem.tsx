import * as React from 'react';
import { FC } from 'react';
import { Avator } from '../avator/avator';
import { ControlBar } from '../controlBar/index';
import './materialItem.scss';
export interface MaterialItemProps {
  txt?: string
  url?: string
}
export const MaterialItem: FC<MaterialItemProps> = (props) => {
  return (
    <div className="m-item__wrapper">
      <Avator url={props.url}></Avator>
      <p className="m-item__wrapper__info">{props.txt}</p>
      <ControlBar></ControlBar>
    </div>
  );
};
