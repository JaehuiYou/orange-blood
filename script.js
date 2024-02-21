$(function () {
  var body = $("#starshine"),
    template = $(".template.shine"),
    stars = 500,
    sparkle = 20;

  var size = "small";
  var createStar = function () {
    template
      .clone()
      .removeAttr("id")
      .css({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        webkitAnimationDelay: Math.random() * sparkle + "s",
        mozAnimationDelay: Math.random() * sparkle + "s",
      })
      .addClass(size)
      .appendTo(body);
  };

  for (var i = 0; i < stars; i++) {
    if (i % 2 === 0) {
      size = "small";
    } else if (i % 3 === 0) {
      size = "medium";
    } else {
      size = "large";
    }

    createStar();
  }
});
//
$(document).ready(function () {
  $(document).mousemove(function (e) {
    console.log(e.pageX + ", " + e.pageY);
  });
});

// 캘린더 영상변경하기!
var video = document.querySelector("video");

// 마우스 이벤트 리스너 등록
document.addEventListener("mousemove", function (event) {
  // 마우스 좌표 가져오기
  var x = event.clientX;
  var y = event.clientY;

  // 일정한 좌표에 도달했는지 확인
  if (x >= 1080 && x <= 1535 && y >= 348 && y <= 415) {
    // 영상 변경
    video.src = "video/sweetvenom.mov";
  } else if (x >= 1080 && x <= 1535 && y >= 440 && y <= 512) {
    // 영상 변경
    video.src = "video/stillmonster.mov";
  } else if (x >= 1080 && x <= 1535 && y >= 574 && y <= 653) {
    // 영상 변경
    video.src = "video/orangeflower.mov";
  } else {
    // 영상 원래대로
    video.src = "video/calendar.mp4";
  }
});
