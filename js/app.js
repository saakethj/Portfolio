$(document).ready(function () {
    function animateElements()
	{
		$('.animated_element').each(function(){
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if(elementPos<topOfWindow+$(window).height()-20) 
			{
				var elementClasses = $(this).attr('class').split(' ');
				var animation = "fadeIn";
				var duration = 600;
				var delay = 0;
				for(var i=0; i<elementClasses.length; i++)
				{
					if(elementClasses[i].indexOf('animation-')!=-1)
						animation = elementClasses[i].replace('animation-', '');
					if(elementClasses[i].indexOf('duration-')!=-1)
						duration = elementClasses[i].replace('duration-', '');
					if(elementClasses[i].indexOf('delay-')!=-1)
						delay = elementClasses[i].replace('delay-', '');
				}
				$(this).addClass(animation);
				$(this).css({"animation-duration": duration + "ms"});
				$(this).css({"animation-delay": delay + "ms"});
				$(this).css({"transition-delay": delay + "ms"});
			}
		});
		// $('.box_header').each(function(){
		// 	var elementPos = $(this).offset().top;
		// 	var topOfWindow = $(window).scrollTop();
		// 	if(elementPos<topOfWindow+$(window).height()-30) 
		// 	{
		// 		$(this).addClass("slide");
		// 	}
		// });
	}
	animateElements();
	$(window).scroll(animateElements);
})