const playerInstance = jwplayer("playeriqphim").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "Xem phim miễn phí tại iQphim.com",
  aboutlink: "https://iqphim.com",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "https://iqphim.com/uploads/system_logo/logo.png",
    link: "https://iqphim.com"
  },

  captions: {
    color: "#F00",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Cuộc chiến của ai đó",
      description: "Bạn đang xem",
      image: "https://iqphim.com/uploads/poster_image/20790.jpg",
      sources: [
        {
          file:
            "https://vie2.opstream7.com/20240131/2515_2dedb1f6/3000k/hls/mixed.m3u8",
          label: "1080p",
          default: true
        }
      ],
      captions: [
        {
          file:
            "https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BBengali%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Vietnamese",
          kind: "captions"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
 

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Chuyển tiếp sau 10 giây";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Chuyển tiếp sau 10 giây";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});