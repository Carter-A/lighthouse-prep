$(document).ready(function() {
  $(".hide-img").click(function() {
  	$(".img").toggleClass("img-hidden");

  	if($(this).text() == "Hide Images") {
  		$(this).text("Show Images");
  	}
  	else {
  		$(this).text("Hide Images");
  	};
  });
  $(".check-ingredients").click(function() {
  	$(this).closest('li').toggleClass("strike");
  });
});
