import timeAgo from './timeAgo';

it('Converts Unix time to elapsed time in hours/minutes', () => {
  const nowInSecs = Math.floor((new Date().getTime()) / 1000);
  const threeHrsInSecs = 60 * 60 * 3; // 10800 seconds
  const threeHrsAgoInSecs = nowInSecs - threeHrsInSecs;
  
  let elapsedTime: string = timeAgo(threeHrsAgoInSecs);
  expect(elapsedTime).toBe('3 hours ago');

  const tenMinsInSecs = 60 * 10; // 600 seconds
  const tenMinsAgoInSecs = nowInSecs - tenMinsInSecs;
  elapsedTime = timeAgo(tenMinsAgoInSecs);
  expect(elapsedTime).toBe('10 minutes ago');

  const oneMinInSecs = 60 * 1; // 60 seconds
  const oneMinAgoInSecs = nowInSecs - oneMinInSecs;
  elapsedTime = timeAgo(oneMinAgoInSecs);
  expect(elapsedTime).toBe('1 minute ago');
});