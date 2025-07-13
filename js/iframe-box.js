//  ! "iframe-box" Box с видео   youtube_box.css
//* <div class="popup-viideo">
//*   <button type="button" class="close-btn">&times;</button>
//* </div>
//! Ссылка на видео youtube ".video-button"
const youtubeVideoButton = {
  0: "1sKKRrB4Hoo",
  1: "E7CWfciqTKY",
};

const playBtnBanner = document.querySelectorAll(".video-button");

const popupViideo = document.querySelector(".popup-viideo");
const closeBtn = document.querySelector(".close-btn");
//! Открытие Box с "iframe-box" видео
function openViideoBox(youtubeSrc, classBox) {
  const itemUrl =
    // `<iframe class="iframe-box" src="https://www.youtube.com/embed/${youtubeSrc}?si=nOAwWLJosQOiWPI2&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    [
      `<iframe class="iframe-box"
        src="https://www.youtube.com/embed/${youtubeSrc}?autoplay=1&modestbranding=1&rel=0&autohide=1&showinfo=0&iv_load_policy=3"
        title="YouTube video player"
        allowfullscreen
      ></iframe>`,
      `<iframe class="iframe-box"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.549727608529!2d34.56870519999999!3d31.673536499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029c46c6305555%3A0x6429f9f9a5f88474!2z15HXmdeqINeU16LXnQ!5e0!3m2!1sru!2ses!4v1748108063020!5m2!1sru!2ses"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>`,
      // `<iframe class="iframe-box" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.529108950923!2d34.56445839678955!3d31.674100400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029c46d150240f%3A0x5601a717979196b7!2sHa-Nasi%201%20Pub!5e0!3m2!1sru!2ses!4v1747917292579!5m2!1sru!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    ];

  closeBtn.insertAdjacentHTML("afterend", itemUrl[classBox]);
  // popupViideo.style.display = "";
  popupViideo.classList.toggle("active");
  document.querySelector(".navigation").style.display = "none";
  document.body.style.overflow = "hidden";
}
//! Открытие видео ".banner .video-button"
playBtnBanner.forEach((img, index) => {
  img.onclick = (event) => {
    event.preventDefault();
    openViideoBox(youtubeVideoButton[index], 0);
  };
});

//! Закрытие  Box с "iframe-box" видео
closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const youtubeVideo = document.querySelector(".iframe-box");
  youtubeVideo.remove();
  popupViideo.classList.toggle("active");
  document.querySelector(".navigation").style.display = "";
  document.body.style.overflow = "";
});
