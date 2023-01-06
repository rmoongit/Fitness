const buttons = document.querySelectorAll('[data-tab');
const lists = document.querySelectorAll('[data-list]');

const showContent = () => {

  lists.forEach((list) => {

    if (list.dataset.list !== '1') {
      list.style.display = 'none';
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', ()=> {

      buttons.forEach((item) => item.classList.remove('is-active'));

      lists.forEach((list) => {
        list.style.display = 'none';

        if (button.dataset.tab === list.dataset.list) {
          button.classList.add('is-active');
          list.style.display = 'block';
        }
      });
    });
  });

};

export {showContent};
