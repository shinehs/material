import * as React from 'react';
import { FC } from 'react';
import './index.scss';
interface Props {
  url?: string
}
export const ControlBar: FC<Props> = (props) => {
  return (
    <>
      <ul className="m-control-bar-wrapper">
        <li>
          <a href="#">添加</a>
        </li>
        <li>
          <a href="#">预览</a>
        </li>
        <li>
          <a href="#">源码</a>
        </li>
      </ul>
    </>
  );
};
