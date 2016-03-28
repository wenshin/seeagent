import assert from 'assert';
import useragents from './utils/useragents';
import seeagent from '../lib';

describe('seeagent', () => {
  it('parsed all useragents right', () => {
    for (const item of useragents) {
      let agent = seeagent(item.userAgent);
      assert.deepEqual(agent, item.parsed);
    }
  });
});
