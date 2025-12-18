// Difficulty-specific paragraph pools with exact word counts
const paragraphPools = {
  easy: [
    "The quick brown fox jumps over the lazy dog today.",
    "Children play happily in the park during warm sunny afternoons.",
    "Books sit quietly on shelves waiting for curious readers always.",
    "Fresh coffee smells wonderful in the morning kitchen every day.",
    "Birds sing beautiful melodies from trees in the peaceful garden."
  ],
  medium: [
    "Technology connects people across the world enabling instant communication through video calls and social media platforms that share experiences daily.",
    "Mountains offer breathtaking views to hikers climbing winding trails through forests where wildlife creates memorable moments and inspires deep respect.",
    "Music brings people together during celebrations as rhythmic melodies echo through streets creating electric atmospheres that unite diverse audiences completely.",
    "The human brain contains billions of neurons enabling complex cognitive functions while scientists study its activity to develop treatments worldwide.",
    "Education opens doors to opportunities allowing students to develop critical thinking skills preparing them for successful careers and meaningful lives."
  ],
  hard: [
    "Climate patterns and atmospheric conditions have been extensively studied by meteorologists who work collaboratively across international borders to predict future trends and phenomena affecting global systems.",
    "Quantum mechanics revolutionized our understanding of matter and energy revealing phenomena that challenge conventional thinking as subatomic particles behave differently following probabilistic rules at quantum scales.",
    "Archaeological discoveries in ancient civilizations provide invaluable insights into how societies organized themselves developed complex hierarchies managed agricultural systems and created remarkable artistic achievements throughout history.",
    "Sustainable development has become increasingly important as humanity recognizes the consequences of industrialization and resource depletion while ecosystems face threats from habitat destruction pollution and climate change.",
    "Artificial intelligence and machine learning continue to reshape our understanding of cognition as deep learning algorithms enable computers to perform complex tasks previously requiring significant human expertise."
  ]
};


// Word count requirements for each difficulty
const wordCounts = {
  easy: 10,
  medium: 20,
  hard: 30
};

// Get DOM elements
const difficultySelect = document.getElementById('difficulty-select');
const displayText = document.getElementById('display-text');
const retryBtn = document.getElementById('retry-btn');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

// Function to generate random text based on difficulty
function generateRandomText(difficulty, currentText) {
  if (!difficulty) return;
  
  const difficultyParagraphs = paragraphPools[difficulty];
  let newText;
  
  // Keep generating until we get a different text than current
  do {
    const randomIndex = Math.floor(Math.random() * difficultyParagraphs.length);
    newText = difficultyParagraphs[randomIndex];
  } while (newText === currentText);
  
  return newText;
}

// Function to update display text
function updateDisplayText() {
  const selectedDifficulty = difficultySelect.value;
  
  if (selectedDifficulty) {
    const currentText = displayText.textContent;
    const newText = generateRandomText(selectedDifficulty, currentText);
    displayText.textContent = newText;
  } else {
    displayText.textContent = 'Select a difficulty level to begin';
  }
}

// Event listener for difficulty selection
difficultySelect.addEventListener('change', updateDisplayText);

// Event listener for retry button
retryBtn.addEventListener('click', updateDisplayText);

// Timer variables
let startTime = null;
let testInProgress = false;

// Function to handle start button click
function handleStartTest() {
  if (!difficultySelect.value) {
    alert('Please select a difficulty level first');
    return;
  }
  
  startTime = Date.now();
  testInProgress = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

// Function to handle stop button click
function handleStopTest() {
  if (!testInProgress) return;
  
  const endTime = Date.now();
  const elapsedSeconds = (endTime - startTime) / 1000;
  const roundedTime = elapsedSeconds.toFixed(2);
  
  displayTestTime(roundedTime);
  
  testInProgress = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Function to display time in results panel
function displayTestTime(timeInSeconds) {
  const timeElement = document.getElementById('result-time');
  timeElement.textContent = `time: ${timeInSeconds}s`;
}

// Function to reset button states on retry
function resetTestState() {
  testInProgress = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  startTime = null;
}

// Event listeners for start and stop buttons
startBtn.addEventListener('click', handleStartTest);
stopBtn.addEventListener('click', handleStopTest);

// Update retry to include state reset
retryBtn.addEventListener('click', function() {
  updateDisplayText();
  resetTestState();
});

// Initialize button states
stopBtn.disabled = true;
