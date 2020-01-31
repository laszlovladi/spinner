document.addEventListener('DOMContentLoaded', () => {
  const imgElem = document.querySelector('.spinner');
  imgElem.src = 'img/spinner.png';
  imgElem.animation = 'rotation 1s infinite linear';
  setTimeout(
    () => {
      imgElem.classList = 'image';
      // imgElem.src = 'img/sloath.jpg';
    },
    4000
  );
});