import * as React from 'react';
import { useState } from 'react';
import { List, Typography, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { MaterialItem, MaterialItemProps } from './MaterialItem';
import './list.scss';

const data: Array<MaterialItemProps> = [
  {
    txt: '12asdasdsada',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
  {
    txt: 'adasfdsafgsarfsa',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
  {
    txt: 'asdsafhsiugaf',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
  {
    txt: 'Racing car sprays burning fuel into crowd.1',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
  {
    txt: '12asdasdsada',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
  {
    txt: 'adasfdsafgsarfsa',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
  {
    txt: 'asdsafhsiugaf',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
  {
    txt: 'Racing car sprays burning fuel into crowd.1',
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
  },
];
interface Props {
  header: String
}
export const ModuleList: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { header } = props;

  const handleInfiniteOnLoad = () => {};
  return (
    <div className="module-list__content">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          header={<div>{header}</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <MaterialItem txt={item.txt} url={item.url}></MaterialItem>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
