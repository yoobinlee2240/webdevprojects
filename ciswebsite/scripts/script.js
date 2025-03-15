


//hamburger menu

$(document).ready(function () {
  if (window.matchMedia("(max-width: 800px)").matches) {
    $("#navmenu").addClass("hidden");
    $("burger-button").removeClass("hidden");
  } else {
    $("burger-button").addClass("hidden");
    $("#navmenu").removeClass("hidden");
  }
});

$(window).on("resize", function () {
  if (window.matchMedia("(max-width: 800px)").matches) {
    $("#navmenu").addClass("hidden");
    $("burger-button").removeClass("hidden");
  } else {
    $("burger-button").addClass("hidden");
    $("#navmenu").removeClass("hidden");
  }
});

/*
when #hamburger-button is clicked:
if the navigation menu is not visible:
 remove .hidden from #navmenu
else:
 add .hidden to #navmenu
*/

$("#burger-button").on("click", function () {
  if ($("#navmenu").hasClass("hidden")) {
    $("#navmenu").removeClass("hidden");
  } else {
    $("#navmenu").addClass("hidden");
  }
});

// animate
$("#burger-button").on("click", function () {
  if ($("#navmenu").hasClass("open")) {
    $("#navmenu").removeClass("open");
  } else {
    $("#navmenu").addClass("open");
  }
});

$("#open-modal-button").on("click", function () {
  $("#modal").removeClass("hidden");
  $("body").addClass("no-scroll");
});

$("#close-modal-button").on("click", function () {
  $("#modal").addClass("hidden");
  $("body").removeClass("no-scroll");
});
