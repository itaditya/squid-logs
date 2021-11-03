import { fetcher } from '../shared/utils/fetcher';
import { delaysForDebug } from '../shared/config';

export async function loadBootData() {
  console.log('boot start');
  try {
    const result = await fetcher('/api/boot', {
      delay: delaysForDebug.bootApi,
    });
    console.log(`boot success result`, result); // aditodo remove this
    return result;
  } catch (error) {
    return error;
  }
}
