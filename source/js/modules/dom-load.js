export default () => {
  const activeState = 'active';

  const init = (event) => {
    event.target.body.classList.add(activeState);
  };

  window.addEventListener('DOMContentLoaded', init);
};
