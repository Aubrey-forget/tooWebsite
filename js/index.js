if (isMobile.phone) {
  $('#mt-phone').css({
    "display": "block"
  });
  $('#mt-too-web').css({
    "display": "none"
  });
  $(() => {
    new ZoomPic("mt-phone-swiper");
  })
} else {
  $('#mt-phone').css({
    "display": "none"
  });
  $('#mt-too-web').css({
    "display": "block"
  });
  $(() => {
    new ZoomPic("mt-swiper");
  })
}


$(".mt-fun-title").find("div").eq(0).click(() => {
  $(".mt-fun-title").find("div").eq(0).addClass("mt-active");
  $(".mt-fun-title").find("div").eq(1).removeClass("mt-active");
  $(".mt-fun-left").css({
    "display": "block"
  });
  $(".mt-fun-right").css({
    "display": "none"
  });
})

$(".mt-fun-title").find("div").eq(1).click(() => {
  $(".mt-fun-title").find("div").eq(1).addClass("mt-active");
  $(".mt-fun-title").find("div").eq(0).removeClass("mt-active");
  $(".mt-fun-left").css({
    "display": "none"
  });
  $(".mt-fun-right").css({
    "display": "block"
  });
})



$(".mt-features-switch").find('div').eq(0).click(() => {
  $(".mt-features-switch").find('div').eq(0).addClass("mt-active");
  $(".mt-features-switch").find('div').eq(1).removeClass("mt-active");
  $(".mt-features-content").removeClass('mt-right-active')
  $(".mt-features-content").addClass('mt-left-active')
});
$(".mt-features-switch").find('div').eq(1).click(() => {
  $(".mt-features-switch").find('div').eq(1).addClass("mt-active");
  $(".mt-features-switch").find('div').eq(0).removeClass("mt-active");
  $(".mt-features-content").removeClass('mt-left-active')
  $(".mt-features-content").addClass('mt-right-active')
});

// 我们有的不止这些
const more = {
  moreList: [{
      figure: './img/viewMore/KTV.png',
      name: 'KTV',
    }, {
      figure: './img/viewMore/2.png',
      name: '超市',
    }, {
      figure: './img/viewMore/3.png',
      name: '生鲜',
    }, {
      figure: './img/viewMore/4.png',
      name: '酒水',
    }, {
      figure: './img/viewMore/5.png',
      name: '外卖',
    }, {
      figure: './img/viewMore/6.png',
      name: '新零售',
    }, {
      figure: './img/viewMore/7.png',
      name: '鲜花',
    }, {
      figure: './img/viewMore/8.png',
      name: '母婴',
    }, {
      figure: './img/viewMore/9.png',
      name: '美妆',
    }, {
      figure: './img/viewMore/10.png',
      name: '烘焙',
    }, {
      figure: './img/viewMore/11.png',
      name: '服装',
    }, {
      figure: './img/viewMore/12.png',
      name: '医疗',
    }, {
      figure: './img/viewMore/13.png',
      name: '教育',
    }, {
      figure: './img/viewMore/14.png',
      name: '社区',
    }, {
      figure: './img/viewMore/15.png',
      name: '家居',
    }, {
      figure: './img/viewMore/16.png',
      name: '家政',
    }, {
      figure: './img/viewMore/17.png',
      name: '旅游',
    }, {
      figure: './img/viewMore/18.png',
      name: '酒店',
    },

  ]
}
const html = template.render($('#mt-moreList-box').html(), more);
$('#mt-moreList').html(html);
