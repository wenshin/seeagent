import assert from 'assert';
import useragents from './utils/useragents';
import seeagent from '../lib';

describe('seeagent', () => {
  it('should parsed all useragents right', () => {
    for (const item of useragents) {
      let agent = seeagent({query: item.query, httpUserAgent: item.userAgent});
      assert.deepEqual(agent, item.parsed);
    }
  });

  // it('can extend fingerprints', () => {
  // });

  // it('can extend query rules', () => {
  // });
});
