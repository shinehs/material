import * as React from 'react';
import { useState } from 'react';
import { List, Typography, Divider, BackTop } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { MaterialItem, MaterialItemProps } from '../materialItem/materialItem';
import './list.scss';

const data: Array<MaterialItemProps> = [
  {
    txt: '12asdasdsada',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
    previewUrl: 'https://',
    sourceCode: '',
  },
  {
    txt: 'adasfdsafgsarfsa',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fq_70%2Fimages03%2F20200618%2F46a8c11bfe9e4d75859493227184f6b7.jpeg&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624010374&t=9ee8170b54cedd07e6fd485b1058c175',
    previewUrl: 'https://',
    sourceCode: '',
  },
  {
    txt: 'asdsafhsiugaf',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F12140636730%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624010482&t=be6528c5ca151f0c6275e30e3cf29772',
    previewUrl: 'https://',
    sourceCode: '',
  },
  {
    txt: 'Racing car sprays burning fuel into crowd.1',
    url:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4032942342,429774400&fm=26&gp=0.jpg',
    previewUrl: 'https://',
    sourceCode: '',
  },
  {
    txt: '12asdasdsada',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
    previewUrl: 'https://',
    sourceCode: '',
  },
  {
    txt: 'adasfdsafgsarfsa',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
    previewUrl: 'https://',
    sourceCode: '',
  },
  {
    txt: 'asdsafhsiugaf',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
    previewUrl: 'https://',
    sourceCode: '',
  },
  {
    txt: 'Racing car sprays burning fuel into crowd.1',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11878485106%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623935113&t=3420c6ef1e017600f980b777456fde1a',
    previewUrl: 'https://',
    sourceCode: '',
  },
];
interface Props {
  header: String
}
export const ModuleList: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [itemActive, setItemActive] = useState(
    Array.from({ length: data.length }).map((item) => false),
  );
  const { header } = props;
  const mouseOver = (index: number) => {
    let target: Array<boolean> = [...itemActive];
    target[index] = true;
    setItemActive(target);
  };
  const mouseOut = (index: number) => {
    let target: Array<boolean> = [...itemActive];
    target[index] = false;
    setItemActive(target);
  };

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
          className="list__content__list"
          header={<div>{header}</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              className={itemActive[index] ? 'active' : ''}
              onMouseOver={mouseOver.bind(this, index)}
              onMouseOut={mouseOut.bind(this, index)}
            >
              <MaterialItem
                txt={item.txt}
                url={item.url}
                previewUrl={item.previewUrl}
                sourceCode={item.sourceCode}
              ></MaterialItem>
            </List.Item>
          )}
        />
      </InfiniteScroll>
      {/* <BackTop visibilityHeight={300} target={() => document.getElementById('list__content__list')} >
        <div >back</div>
      </BackTop> */}
    </div>
  );
};
