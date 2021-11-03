import { loadBootData } from './boot/boot';
import { delaysForDebug } from './shared/config';
import { sleep } from './shared/utils/misc';

async function loadMain() {
  const appDelay = delaysForDebug.app;

  if (appDelay) {
    await sleep(appDelay);
  }

  const { setup } = await import('./main/main');
  return setup;
}

function removeBootElem() {
  const bootElem = document.getElementById('boot');
  bootElem.remove();
}

async function init() {
  const [result, setup] = await Promise.all([loadBootData(), loadMain()]);
  setup(result);
  removeBootElem();
}

init();
