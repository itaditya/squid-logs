import './boot/boot';

async function init() {
  await import('./main/main');
}

init();
