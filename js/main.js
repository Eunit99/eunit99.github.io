(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	$(document).ready(function () {
		var greet;
		var date = new Date();
		var copyrightYear = date.getFullYear();

		$("document").ready(function () {
			$("#copyright").text(copyrightYear); // SET CURRENT YEAR AS COPYRIGHT
		});

	});

})(jQuery);

$(document).ready(function () {
	var $date = new Date(),
		$copyrightYear = $date.getFullYear(),
		$copyright = $(".copyright"),
		$intialCount = 0,
		$totalQuotesNumber = 35 - 1,
		// There are actually 35 quotes, but you start counting from 0, so there are 34
		$currentQuote,
		$currentAuthor,
		$quotes,
		$authors,
		$heartCount = $(".heart-cont"),
		$heartPlus = $(".heart-plus"),
		$newQuote = $(".new-quote"),
		$quoteContent = $("#quote-content"),
		$quoteAuthor = $("#quote-author");
	$heartCount.text($intialCount);
	$copyright.text($copyrightYear);
	// Increment the heart counts (favorites) once the heart icon is clicked
	$heartPlus.click(function () {
		var $state = true;
		if ($state = true) {
			$intialCount++;
			$heartCount.text($intialCount);
			$heartPlus.addClass("favourited bounceIn");
			$state = false;
			// console.log($state);
		} else if ($state = false) {
			$intialCount--;
			$heartCount.text($intialCount);
			$heartPlus.removeClass("favourited bounceIn");
			// console.log($state);
		}
	});

	$quotes = [
		'Everything has beauty, but not everyone can see.',
		'Better than a thousand hollow words, is one word that brings peace. ',
		'Believe you can and you\'re halfway there. ',
		'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky. ',
		'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
		'It is always the simple that produces the marvelous. ',
		'Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig. ',
		'Your present circumstances don\'t determine where you can go; they merely determine where you start. ',
		'Don\'t be afraid to give up the good to go for the great. ',
		'Go as far as you can see; when you get there, you\'ll be able to see farther.',
		'Luck is a dividend of sweat. The more you sweat, the luckier you get. ',
		'Everyone who\'s ever taken a shower has an idea. It\'s the person who gets out of the shower, dries off and does something about it who makes a difference.',
		'It is during our darkest moments that we must focus to see the light.',
		'Nothing is impossible, the word itself says \"I\'m possible\" ',
		'I hated every minute of training, but I said, \"Don\'t quit. Suffer now and live the rest of your life as a champion.',
		'The future belongs to those who believe in the beauty of their dreams.',
		'Our greatest glory is not in never falling, but in rising every time we fall.',
		'You should never let your fears prevent you from doing what you know is right.',
		'Stop being a prisoner of your past. Become the architect of your future. ',
		'Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring. ',
		'To be a great champion, You must believe You are the best. If You’re not, pretend You are. ',
		'One day you will wake up and there won’t be any more time to do the things you’ve always wanted. Do it now. ',
		'It doesn’t matter where you are coming from All that matters is where you are going ',
		'Dream big and dare to fail. ',
		'With will one can do anything.',
		'Challenges are what make life interesting and overcoming them is what makes life meaningful ',
		'In order to succeed, your desire for success should be greater than your fear of failure ',
		'I am thankful for all of those who said NO to me. Its because of them I’m doing it myself. ',
		'The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.',
		'Don’t worry about failures, worry about the chances you miss when you don’t even try. ',
		'Build your own dreams, or someone else will hire you to build theirs.',
		'The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. ',
		'If the facts don’t fit the theory, change the facts. ',
		'It is never too late to be what you might have been. ',
		'All our dreams can come true – if we have the courage to pursue them. '
	]
	$authors = [
		' Confucius',
		' Budda',
		' Theodore Roosevelt',
		' Rabindranath Tagore',
		' Robert Louis Stevenson',
		' Amrliar Barr',
		' Marcus Aurelius',
		' Nido Qubein',
		' John D. Rockefeller',
		' J. P. Morgan',
		' Ray Kroc',
		' Nolan Bushnell',
		' Aristotle Onassis',
		' Audrey Hepburn',
		' Muhammad Ali',
		' Eleanor Roosevelt',
		' Confucius',
		' Aung San Suu Kyi',
		' Robin S. Sharma',
		' Marilyn Monroe',
		' Muhammad Ali',
		' Paulo CeolHo',
		' Brian Tracy',
		' Norman Vaughan',
		' Samuel Smiles',
		' Joshua J. Marine',
		' Bill Cosby',
		' Albert Einstein',
		' Steve Jobs',
		' Jack Canfield',
		' Faray Gray',
		' Joel Brown',
		' Albert Einstein',
		' George Eliot',
		' Walt Disney'
	]

	function newQuote() {
		$newQuote.click(function () {
			// Generate random numbers to use for each quote
			$randomNumber = Math.floor(Math.random() * $totalQuotesNumber);
			// Get a current quote after generating the random number
			$currentQuote = $quotes[$randomNumber];
			// Get a curent author after generating the random number
			$currentAuthor = $authors[$randomNumber];
			// display the generated quote in #quote-content using jQuery text method
			$quoteContent.text($currentQuote);
			// display the generated author in #quote-author using jQuery text method
			$quoteAuthor.text($currentAuthor);
		})
	}

	newQuote();
});

// Baffle js

const b = baffle(".intro-title");
b.set({
	characters: "█▓ ▒░/ █░▓/ █▒▒▓/█ ░█ █░▓/ █▒▒▓/█ ░█ ▒/ ▒▓░ █<░▒ ▒/ ▒▓░ █<░▒ ▓/░>",
	speed: 100
}).start().reveal(5000);
