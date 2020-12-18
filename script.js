function fillRaiting(ratingValue){
    let starsArray = $(".red-star");
    starsArray[0].setAttribute("width", 100*(ratingValue/20)+"%");
    starsArray[1].setAttribute("width", 100*((ratingValue-20)/20)+"%");
    starsArray[2].setAttribute("width", 100*((ratingValue-40)/20)+"%");
    starsArray[3].setAttribute("width", 100*((ratingValue-60)/20)+"%");
    starsArray[4].setAttribute("width", 100*((ratingValue-80)/20)+"%");
}


$(document).ready(function() {
    $(".burger-menu__burger").click(function(event) {
		$(".burger-menu__burger, .header__menu, body, .header, .dark").toggleClass("active");
    }); 
	
	$(".dark").click(function(event) {
		$(".burger-menu__burger, .header__menu, body, .header, .dark").toggleClass("active");
    }); 
	window.addEventListener('scroll', function() {
		if(pageYOffset>0)
		{
			$(".header, .header__body").addClass("scroll");
		}else{
			$(".header, .header__body").removeClass("scroll");
		}
    });
	
	fillRaiting(70);
});

//Звездный рейтинг


 