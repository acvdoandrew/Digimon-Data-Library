const URL2 = "https://digimon-api.vercel.app/api/digimon/level/";

// Cached element references
const $inputLevel = $("#Level");
const $formLevel = $(".level");
const $owlCarousel = $(".owl-carousel");

// event listeners
$formLevel.on("submit", handleSubmit);

// functions
handleSubmit();

function handleSubmit(event) {
  event && event.preventDefault();

  const level = $inputLevel.val() || "In Training";

  if (!level) return;

  const promise = $.ajax(`${URL2}${level}`);

  promise.then(
    function (data) {
      renderLevel(data);
      console.log(data);
      $inputLevel.val("");
    },
    function (error) {
      alert("Error: Could not find Digimon in the database", error);
      $input.val("");
    }
  );
}

function renderLevel(digiData) {
  const cards = [];
  const newCarousel = document.createElement("div");
  $(newCarousel).addClass("new-carousel owl-carousel owl-theme");
  $(".main").html(newCarousel);

  for (let i = 0; i < digiData.length; i++) {
    let digimon = digiData[i];
    const div = document.createElement("div");

    $(div).addClass("item").html(`
            <p><b>Name:</b> ${digimon.name}</p>
            <p><b>Level</b> : ${digimon.level}</p>
            <div class="digi-img-wrapper">
                <img src="${digimon.img}" class="digi-img">
            </div>
        `);
    cards.push(div);
  }
  $(newCarousel).html(cards);
  const newOwl = $(".new-carousel");
  newOwl.owlCarousel({
    items: 4,
    navigation: true,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0 : {
        items : 1,
        dots: false,
      },
      480 : {
        items: 2,
        dots: false,
      },
      728 : {
        items: 3,
        dots: false,
      },
      960 : {
        items: 4,
      }
    }
  });

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
}
