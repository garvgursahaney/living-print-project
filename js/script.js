document.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("a-marker");
  const audioEntity = document.querySelector("[sound]");
  const video = document.querySelector("a-video");

  let audioPlaying = false;

  // When marker is found
  marker.addEventListener("markerFound", () => {
    console.log("Marker detected");

    if (audioEntity && !audioPlaying) {
      audioEntity.components.sound.playSound();
      audioPlaying = true;
    }
  });

  // When marker is lost
  marker.addEventListener("markerLost", () => {
    console.log("Marker lost");

    if (audioEntity && audioPlaying) {
      audioEntity.components.sound.stopSound();
      audioPlaying = false;
    }
  });

  // Click anywhere to toggle video play/pause
  window.addEventListener("click", () => {
    if (video) {
      const vid = video.components.material.material.map.image;

      if (vid.paused) {
        vid.play();
      } else {
        vid.pause();
      }
    }
  });
});