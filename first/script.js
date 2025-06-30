const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Do one thing every day that scares you. - Eleanor Roosevelt"
];

const colors = [
  'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 
  'bg-yellow-400', 'bg-pink-400', 'bg-teal-400', 'bg-orange-400'
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandom() {
  // Set random background color
  const background = document.getElementById('background');
  background.className = `min-h-screen flex items-center justify-center transition-all duration-500 ${getRandomItem(colors)}`;

  // Set random quote
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = getRandomItem(quotes);
}

// Generate random content on page load
generateRandom();