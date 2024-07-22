window.addEventListener('scroll', function() {
  var rocket = document.getElementById('rocket-img');
  var scrollPosition = window.scrollY;

  if (scrollPosition < 300) { // Adjust the value 500 as needed
      // Move the rocket up and rotate in increments
      rocket.style.bottom = scrollPosition + 'px';
      rocket.style.left = '0px';

      // Calculate rotation incrementally
      if (scrollPosition < 300) {
          rocket.style.transform = 'rotate(-39deg)';
      } else if (scrollPosition < 440) {
          rocket.style.transform = 'rotate(-30deg)';
      } else if (scrollPosition < 460) {
          rocket.style.transform = 'rotate(-20deg)';
      } else if (scrollPosition < 580) {
          rocket.style.transform = 'rotate(-10deg)';
      } else {
          rocket.style.transform = 'rotate(0deg)';
      }
  } else {
      // Move the rocket to the right after 500px scroll and keep the rotation fixed
      rocket.style.bottom = '300px'; // Fixed bottom position after 500px scroll
      rocket.style.left = (scrollPosition - 300) + 'px';
      rocket.style.transform = 'rotate(0deg)'; // Final rotation
  }
});
