$('document').ready(function() {

  function hideOrShowTeam() {
    var wholeSection = $("#team");

    var sectionToToggle = wholeSection.children('section');
    var teamDividerLine = wholeSection.children().last();
    var teamFooter = sectionToToggle.children().last();
    var moreLessButton = teamFooter.children().last();
    var triangleButtonBackground = wholeSection.children('div');

    if (sectionToToggle.attr('class') == "to-toggle") {

      $(sectionToToggle[0]).toggleClass("to-toggle extend-section");
      teamDividerLine.toggleClass("divider-line extend-divider-line");
      teamFooter.addClass("extend-footer");
      triangleButtonBackground.toggleClass("divider-button-background extend-divider-button-background");
      moreLessButton[0].innerHTML = "LESS";

    } else {

      $(sectionToToggle[0]).toggleClass("extend-section to-toggle");
      teamDividerLine.toggleClass("extend-divider-line divider-line");
      teamFooter.removeClass("extend-footer");
      triangleButtonBackground.toggleClass("extend-divider-button-background divider-button-background");
      moreLessButton[0].innerHTML = "MORE";
      $('html, body').animate({
        scrollTop: 630
      }, 900);
    };

    return false;
  }

  function scrollSite() {
    var header = $('body').children().first();
    if (window.pageYOffset > 20) {
      header[0].className = "visible";
    } else {
      header[0].className = "";
    };
  }

  function scrollSpy() {
    var currentActive = $('.active-section') || $('nav');
    var position = window.pageYOffset;

    var sectionOne = $('#section_1').position().top;
    var sectionTwo = $('#section_2').position().top;
    var sectionThree = $('#section_3').position().top;
    var sectionFour = $('#section_4').position().top;
    var sectionFive = $('#section_5').position().top;
    var sectionOneExit = sectionTwo;
    var sectionTwoExit = sectionThree;
    var sectionFourSourceExit = sectionFour;
    var sectionFiveExit = sectionFive;

    if (position >= sectionOne && position < sectionOneExit) {
      currentActive.removeClass('active-section');
      $('a[href="#section_1"]').next().addClass('active-section');
    } else if (position >= sectionTwo && position < sectionProjectsExit) {
      currentActive.removeClass('active-section');
      $('a[href="#section_2"]').next().addClass('active-section');
    } else if (position >= sectionThree && position < sectionFourSourceExit) {
      currentActive.removeClass('active-section');
      $('a[href="#section_3"]').next().addClass('active-section');
    } else if (position >= sectionFour && position < sectionFiveExit) {
      currentActive.removeClass('active-section');
      $('a[href="#section_4"]').next().addClass('active-section');
    } else if (position >= sectionFive) {
      currentActive.removeClass('active-section');
      $('a[href="#section_5"]').next().addClass('active-section');
    };
  }

  function toggleMenu() {
    if ($('.mobile-menu-links').css('height') == '270px') {
      $('.mobile-menu-links').css('height', '0px')
    } else {
      $('.mobile-menu-links').css('height', '270px')
      $(this).css('border-radius', '0')
    }
    return
  }

  $('.menu-controls').on('click', function() {
    event.stopPropagation();
    toggleMenu();
  })

  $('body').click(function(e) {
    if ($('.mobile-menu-links').css('height') == '270px') {
      toggleMenu();
    }
  });
  $(window).on('scroll', scrollSite);
  $(window).on('scroll', scrollSpy);
});
