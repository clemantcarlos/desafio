function play(video) {
  video.classList.toggle('d-none'); 
  video.play();
}
function pause(video) {
  video.classList.add('d-none');
  video.pause();
}

export function playVideo(playClass, videoClass) {
  window.addEventListener('click', (e) => {
    const $target = e.target;

    if ($target.matches(playClass)) {
      const $video = $target.parentNode.previousElementSibling;

      console.log($target.parentNode);

      $target.parentNode.classList.add('d-none');
      play($video);
    }

    if($target.matches(videoClass)){
      const $img = $target.nextElementSibling;
      $img.classList.toggle('d-none');
      pause($target)
    }
  });
}