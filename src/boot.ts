import { fetcher } from './shared/utils/fetcher';
import { delaysForDebug } from './shared/config';

async function init() {
  const result = await fetcher('/api/boot', {
    delay: delaysForDebug.bootApi,
  });
  console.log(`result`, result); // aditodo remove this
}

init();
