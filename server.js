const message = `
My beloved Habiba,

Happy 6th Anniversary, my love. 🥺❤️

Six years ago, you entered my life like a sunrise — warm, gentle, and full of promise. Every moment since has been a melody of joy, laughter, growth, and so much love.

There are a million reasons why I love you. Your kindness melts my heart. Your strength inspires me. Your smile gives me peace. When I look into your eyes, I see the future I always dreamed of — and more.

You’ve been my best friend, my soulmate, my partner in all chaos and calm. You've made me a better person in every way.

And today, on our anniversary, I just want to say… I love you more than words can ever capture. I am endlessly grateful for you.

Here’s to a lifetime of memories together.

Forever yours, and only yours — ❤️
`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

window.onload = () => {
  typeWriter();
  setInterval(createHeart, 300);
};
