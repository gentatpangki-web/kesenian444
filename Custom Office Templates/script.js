
// Mendapatkan elemen reel
let reels = document.querySelectorAll('.reel');

// Array simbol
let symbolArray = ['7', 'BAR', 'WILL'];
let symbolClass = ['red', 'green', 'blue'];

// Fungsi untuk memutar slot game
function spin() {
  // Mengatur simbol secara acak
  reels.forEach((reel) => {
    let intervalId = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * symbolArray.length);
      reel.innerHTML = `<div class="symbol ${symbolClass[randomIndex]}">${symbolArray[randomIndex]}</div>`;
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);
  });
}

// Mendapatkan elemen tombol spin
let spinButton = document.getElementById('spin-button');
spinButton.addEventListener('click', spin);







