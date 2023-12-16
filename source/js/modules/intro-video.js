const video = document.querySelector('.intro__media-container');
const videoButton = document.querySelector('.intro__media-button');

window.addEventListener('DOMContentLoaded', function () {
  videoButton.addEventListener('click', function () {
    if (video.classList.contains('ready')) {
      return;
    }
    video.classList.add('intro__media-container--hide');
    videoButton.classList.add('intro__media-button--hide');
    video.insertAdjacentHTML(
      'afterbegin',
      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9TZXsZItgdw?si=Ds6XaCVooRkUI8UE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
  });
  return false;
});
