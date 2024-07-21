const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
  circle.style.transform = 'translateX(0)';
  circle.style.transition = 'transform 0.5s ease-in-out';

  let direction = Math.random() < 0.5 ? -1 : 1;
  let speed = Math.random() * 2 + 1;

  setInterval(() => {
    circle.style.transform = `translateX(${direction * speed}px)`;
    direction *= -1;
  }, 1000);
});