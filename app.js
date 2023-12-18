const sunPath =
  "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";
const moonPath =
  "M26.5 50C26.5 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 26.5 22.3858 26.5 50Z";

const svg = document.querySelector("#mode");
const svgPath = document.querySelector("#sun");
const text = document.getElementsByTagName("h1")[0];
let toggle = false;

svg.addEventListener("click", () => {
  const timeline = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
    update: function () {
      text.innerText = toggle ? "Dark Mode" : "Light Mode";
    },
  });
  timeline
    .add({
      targets: svgPath,
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: svg,
        rotate: toggle ? 0 : 320,
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        background: toggle ? "#fffcf2" : "#403d39",
        color: toggle ? "#403d39" : "#fffcf2",
      },
      "-=700"
    );
  toggle = !toggle;
});
