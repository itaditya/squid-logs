import { fetcher } from '../shared/utils/fetcher';
import { delaysForDebug } from '../shared/config';

async function init() {
  console.log('boot start');
  const result = await fetcher('/api/boot', {
    delay: delaysForDebug.bootApi,
  });
  console.log(`boot result`, result); // aditodo remove this
}

init();
