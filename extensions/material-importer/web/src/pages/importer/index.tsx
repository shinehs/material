import * as React from 'react';
import { useState } from 'react';

import { Button, Radio, Tabs, Input, Space, Modal } from 'antd';
import { SearchBar } from '~/widget/searchBar/index';
import { ModuleList } from '~/widget/ModuleList/index';
import './index.scss';

const { TabPane } = Tabs;
const { Search } = Input;

interface Props {}
export const Importer: React.FC<Props> = (props) => {
  const [type, setType] = useState('base');
  const [active, setActive] = useState(false);

  const tabChange = (e: any) => {
    setType(e.target.value);
  };

  const onSearch = (val: string) => {
    console.log(val);
    
  };

  const addModulet = (moduleInfo: any) => {
    // 调用 vscode api
    // vscode.postMessage({ text: '你好，我是Webview啊！' });
    console.log('TODO 添加操作vscode代码');
  };

  return (
    <div className="importer-wrapper">
      <Radio.Group
        className="importer-wrapper__radioGroup"
        value={type}
        onChange={(e) => {
          tabChange(e);
        }}
      >
        <Radio.Button value="base">base</Radio.Button>
        <Radio.Button value="default">业务</Radio.Button>
        <Radio.Button value="small">广泛</Radio.Button>
      </Radio.Group>
      <SearchBar onSearch={onSearch}/>
      <Tabs
        id="importer-wrapper__tabs"
        type="card"
        defaultActiveKey={type}
        tabPosition="top"
      >
        <TabPane tab="tab1" key="base">
          <ModuleList header={type}></ModuleList>
        </TabPane>
        <TabPane tab="tab2" key="default">
          Content of tab {type}
        </TabPane>
        <TabPane tab="tab3" key="small">
          Content of tab {type}
        </TabPane>
      </Tabs>
      <Modal
        title="Basic Modal"
        visible={active}
        onOk={() => setActive(false)}
        onCancel={() => setActive(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      {/* <Button type="primary" onClick={() => setActive(true)}>
        Primary
      </Button> */}
    </div>
  );
};
