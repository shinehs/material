import * as React from 'react';
import { FC } from 'react';
import { Avator } from './avator';
export interface MaterialItemProps {
  txt?: string
  url?: string
}
export const MaterialItem: FC<MaterialItemProps> = (props) => {
  return (
    <div className="m-item__wrapper">
      <Avator url={props.url}></Avator>
      <span>{props.txt}</span>
    </div>
  );
};
