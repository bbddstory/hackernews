import { IItem } from '../components/Item/Item';
import { getTopNews, getItem } from './news.api';

it('Calls Hacker News API for top stories', async () => {
  const limiter = 10;

  await getTopNews(limiter).then((res: number[]) => {
    expect(typeof res).toBe('object');
    expect(res.length).toBe(limiter);
    expect(typeof res[0]).toBe('number');
  });
});

it('Calls Hacker News API for a single item (story/comment)', async () => {
  const limiter = 1;

  await getTopNews(limiter).then((res: number[]) => {
    expect(res.length).toBe(limiter);

    getItem(res[0]).then((res: IItem) => {
      expect(typeof res.by).toBe('string');
      expect(typeof res.id).toBe('number');
      expect(res.type).toBe('story');
    });
  });
});
