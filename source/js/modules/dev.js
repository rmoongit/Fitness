// проверка на пп (по завершению проекта снесу)

export const createScript = function () {
  const createElement = document.createElement('script');
  const link = 'https://efiand.github.io/pixelperfect-tool/pixelperfect.min.js';
  createElement.src = link;

  window.pixelperfect = {
    breakpoints: [320, 768, 1366],
    folder: 'img/pixelperfect',
  };

  document.body.append(createElement);
};
