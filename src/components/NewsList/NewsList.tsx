/** 
  * @desc A news list that contains news items
  * @author Leon Li bbddstory@live.com
  */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { getTopNews } from '../../api/news.api';
import { Logo, PanelBlock } from '../common.style';
import News from '../News/News';

export const NewsListComp: React.FC<RouteComponentProps> = () => {
  const TOP_NEWS_LIMITER = 10;
  const [topNewsIds, setTopNewsIds] = useState<number[]>([]);

  // Fetching top news, the maximum return is 500
  useEffect(() => {
    if (!topNewsIds.length) {
      getTopNews(TOP_NEWS_LIMITER).then(res => {
        res && setTopNewsIds(res);
      });
    }
  }, [topNewsIds]);

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <nav className="panel">
          <p className="panel-heading">
            <Logo>Y</Logo>
            Hacker News - Top {TOP_NEWS_LIMITER} Stories
          </p>
          {topNewsIds.length ? (
            topNewsIds.map((value: number, index: number) => {
              return (
                <PanelBlock key={value} className="panel-block">
                  <News index={++index} itemId={value} />
                </PanelBlock>
              )
            })
          ) : (
            <PanelBlock className="panel-block">
              Loading...
            </PanelBlock>
          )}
        </nav>
      </div>
    </div>
  );
}

const NewsList = React.memo(NewsListComp);

export default NewsList;
