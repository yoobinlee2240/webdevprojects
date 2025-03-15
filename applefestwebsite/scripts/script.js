$("#map-button").on("click", function() {
  $("#map-transparency").removeClass("hidden");
  $("#map-modal").removeClass("hidden");
});

$("#x-button").on("click", function() {
  $("#map-transparency").addClass("hidden");
  $("#map-modal").addClass("hidden");
});


$(document).ready(function() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    $("#navmenu").addClass("hidden");
    $("#hamburger-button").removeClass("hidden");
  } else {
    $("#hamburger-button").addClass("hidden");
    $("#navmenu").removeClass("hidden");
  }
});

$(window).on("resize", function() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    $("#navmenu").addClass("hidden");
    $("#hamburger-button").removeClass("hidden");
  } else {
    $("#hamburger-button").addClass("hidden");
    $("#navmenu").removeClass("hidden");
  }
});

$("#hamburger-button").on("click", function() {
  if ($("#navmenu").hasClass("hidden")) {
    $("#navmenu").removeClass("hidden");
  } else {
    $("#navmenu").addClass("hidden");
  }
});
