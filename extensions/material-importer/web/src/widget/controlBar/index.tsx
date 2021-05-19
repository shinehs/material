import * as React from 'react';
import { FC } from 'react';
import './index.scss';
interface Props {
  previewUrl: string
  sourceCode: string
}
export const ControlBar: FC<Props> = (props) => {
  const { previewUrl, sourceCode } = props;
  return (
    <>
      <ul className="m-control-bar-wrapper">
        <li>
          <a href="#">添加</a>
        </li>
        <li>
          <a href={previewUrl} target="_blank">预览</a>
        </li>
        <li>
          <a href={sourceCode} target="_blank">源码</a>
        </li>
      </ul>
    </>
  );
};
