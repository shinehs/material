import * as React from 'react';
import { FC } from 'react';
import './avator.scss';
interface Props {
    url?: string
}
export const Avator: FC<Props> = (props) => {
    const { url } = props;
    return (
        <span className="m-avator">
            <img src={url} alt="截图" />
        </span>
    );
};
