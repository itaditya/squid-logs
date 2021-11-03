import { fetcher } from '../shared/utils/fetcher';
import { delaysForDebug } from '../shared/config';

export async function loadBootData() {
  try {
    const result = await fetcher('/api/boot', {
      delay: delaysForDebug.bootApi,
    });
    return {
      status: 'success',
      data: result.data,
    };
  } catch (error) {
    return {
      status: 'error',
      error,
    };
  }
}
