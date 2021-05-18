import * as React from 'react';
import { Button, Radio, Tabs, Input, Space, Modal } from 'antd';

const { Search } = Input;
interface Props {
    onSearch: Function
}
export const SearchBar: React.FC<Props> = (props) => {
    
    const onSearch = (val:string) => {
        props.onSearch(val);
    };

    return (
        <>
            <Search
                className="importer-wrapper__search"
                placeholder="input search text"
                onSearch={ onSearch }
                enterButton
            />
        </>
    );
};
