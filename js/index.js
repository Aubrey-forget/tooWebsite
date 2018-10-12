if (isMobile.phone) {
  $("#mt-phone").css({
    display: "block"
  });
  $("#mt-too-web").css({
    display: "none"
  });
  $(() => {
    new ZoomPic("mt-phone-swiper");
  });
} else {
  $("#mt-phone").css({
    display: "none"
  });
  $("#mt-too-web").css({
    display: "block"
  });
  $(() => {
    new ZoomPic("mt-swiper");
  });
}

$(".mt-fun-title")
  .find("div")
  .eq(0)
  .click(() => {
    $(".mt-fun-title")
      .find("div")
      .eq(0)
      .addClass("mt-active");
    $(".mt-fun-title")
      .find("div")
      .eq(1)
      .removeClass("mt-active");
    $(".mt-fun-left").css({
      display: "block"
    });
    $(".mt-fun-right").css({
      display: "none"
    });
  });

$(".mt-fun-title")
  .find("div")
  .eq(1)
  .click(() => {
    $(".mt-fun-title")
      .find("div")
      .eq(1)
      .addClass("mt-active");
    $(".mt-fun-title")
      .find("div")
      .eq(0)
      .removeClass("mt-active");
    $(".mt-fun-left").css({
      display: "none"
    });
    $(".mt-fun-right").css({
      display: "block"
    });
  });

$(".mt-features-switch")
  .find("div")
  .eq(0)
  .click(() => {
    $(".mt-features-switch")
      .find("div")
      .eq(0)
      .addClass("mt-active");
    $(".mt-features-switch")
      .find("div")
      .eq(1)
      .removeClass("mt-active");
    $(".mt-features-content").removeClass("mt-right-active");
    $(".mt-features-content").addClass("mt-left-active");
  });
$(".mt-features-switch")
  .find("div")
  .eq(1)
  .click(() => {
    $(".mt-features-switch")
      .find("div")
      .eq(1)
      .addClass("mt-active");
    $(".mt-features-switch")
      .find("div")
      .eq(0)
      .removeClass("mt-active");
    $(".mt-features-content").removeClass("mt-left-active");
    $(".mt-features-content").addClass("mt-right-active");
  });
