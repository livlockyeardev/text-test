// Difficulty-specific paragraph pools with exact word counts
const paragraphPools = {
  easy: [
    "The quick brown fox jumps over the lazy dog. Children play in the park enjoying the warm spring air. A small bird sings sweetly from the branch. The sun sets beautifully painting the sky orange and pink. Fresh flowers bloom attracting butterflies and bees.",
    "Morning coffee tastes better in the garden surrounded by green plants and singing birds. The old oak tree provides shade for reading books quietly. Gentle breezes carry the scent of flowers through the neighborhood. Neighbors wave from their porches during evening walks together. Life moves slower in peaceful countryside settings like this.",
    "Libraries are quiet places where readers explore stories and discover new ideas. Soft light filters through tall windows illuminating rows of books. The librarian helps find exactly what you are searching for today. People whisper conversations while studying at wooden tables with care. Knowledge waits patiently on every shelf for curious minds.",
    "Autumn leaves fall slowly creating colorful patterns on the ground below. Children collect them in baskets for craft projects at home. The crisp air feels refreshing as we walk through nature trails. Squirrels gather acorns preparing for the cold winter months ahead. Everything seems peaceful during this beautiful season of change.",
    "Cooking dinner fills the kitchen with wonderful aromas that make everyone hungry. Family members gather around the table sharing stories from their day. The warm meal brings comfort and joy to their hearts. Laughter echoes through the dining room as they eat together. These moments create memories that last for many years."
  ],
  medium: [
    "Technology has transformed the way we communicate and interact with each other in modern society. Instant connections across vast distances have broken down traditional barriers to information sharing. People can now work from anywhere in the world thanks to internet access. Video calls allow families separated by continents to see each other daily. Social media platforms connect billions of users sharing their lives and experiences. However we must balance digital connection with genuine human interaction and real relationships. The constant stream of notifications can sometimes feel overwhelming and exhausting to manage.",
    "Mountains rise majestically against clear blue skies offering breathtaking views to adventurous hikers. Winding trails lead through dense forests filled with wildlife and natural beauty at every turn. The challenging climb tests physical endurance and mental determination of climbers. Fresh mountain air fills lungs as hikers pause to admire panoramic vistas below. Wildlife encounters including deer bears and eagles create memorable moments on the journey. Climbers experience a profound connection with nature and sense of accomplishment reaching summits. These experiences inspire respect and appreciation for the power of wild landscapes.",
    "Music fills the air during festive celebrations bringing people together from different cultural backgrounds. Rhythmic melodies echo through streets as crowds dance and celebrate joyfully together. Musicians perform on stages showcasing talent and passion through various instruments and vocals. The energy of live performances creates an electric atmosphere that unites audiences completely. Different genres from classical to rock represent the diversity of human musical expression. Concerts and festivals provide platforms where artists share their creative work with devoted fans. Music truly is a universal language that transcends borders and brings happiness.",
    "The human brain represents one of the most complex systems in all of nature. Billions of neurons connected through trillions of synapses enable remarkable cognitive functions daily. Memory storage processes information and generates consciousness through intricate biochemical reactions constantly. Scientists study brain activity using advanced technology revealing its incredible complexity and capabilities. Learning new skills creates new neural pathways strengthening connections between brain regions significantly. Sleep plays a crucial role in consolidating memories and maintaining overall mental health. Understanding brain function helps develop treatments for neurological disorders affecting millions worldwide.",
    "Education opens doors to unlimited opportunities allowing students to develop critical thinking abilities. Knowledge acquisition prepares young people for successful careers and meaningful lives ahead. Teachers inspire students to explore subjects passionately and pursue their intellectual interests deeply. Classrooms provide environments where diverse learners collaborate and challenge each other constructively. Technology has revolutionized education enabling access to resources previously unavailable to most students. Lifelong learning keeps minds sharp and engaged throughout our entire existence. Education represents an investment in both individual futures and collective societal progress overall."
  ],
  hard: [
    "The intricate relationship between climate patterns atmospheric conditions and global weather systems has been extensively studied by meteorologists and climatologists who work collaboratively across international borders to predict future trends and phenomena. Understanding the complex interactions between ocean currents solar radiation and greenhouse gases requires sophisticated computer models and decades of observational data. Climate change represents one of the most pressing challenges humanity faces today affecting agriculture food security and population displacement worldwide. Scientists warn that rising temperatures will increase frequency and intensity of extreme weather events including hurricanes droughts and floods. International cooperation through agreements like the Paris Climate Accord demonstrates commitment to addressing this global crisis comprehensively. Renewable energy technologies and sustainable practices offer hope for mitigating environmental damage. Future generations depend on decisions made today regarding environmental stewardship and resource conservation strategies.",
    "Quantum mechanics and particle physics have revolutionized our understanding of the fundamental nature of matter energy and the universe revealing phenomena that challenge conventional thinking. Subatomic particles behave differently at quantum scales following probabilistic rules rather than deterministic classical mechanics. Wave particle duality suggests that electrons and photons exhibit properties of both waves and particles simultaneously depending on observation. The uncertainty principle establishes fundamental limits on simultaneous measurement of certain physical quantities like position and momentum. Scientists use particle accelerators to smash particles together studying resulting fragments and interactions at extreme energies. These investigations provide insights into the earliest moments after the Big Bang and the fundamental forces governing reality. Quantum computing promises revolutionary technological advances based on principles of superposition and entanglement.",
    "Archaeological discoveries in ancient civilizations provide invaluable insights into how societies organized themselves developed complex social hierarchies managed agricultural systems and created artistic achievements. Excavations reveal sophisticated engineering techniques used to construct monuments and infrastructure that have survived millennia. Written records and artifacts tell stories of daily life religious beliefs and cultural practices of ancient peoples. DNA analysis and radiocarbon dating enable scientists to establish precise timelines for historical events and population movements. Understanding past civilizations helps modern societies learn from successes and failures of previous generations. Cultural heritage preservation ensures that these treasures remain available for future scholarly study and public appreciation. Ancient wisdom recorded in texts provides philosophical perspectives relevant to contemporary human challenges.",
    "Sustainable development and environmental conservation have become increasingly important as humanity recognizes the consequences of industrialization urbanization and resource depletion. Ecosystems worldwide face threats from habitat destruction pollution and climate change causing species extinctions at alarming rates. Renewable energy sources including solar wind and hydroelectric power offer alternatives to fossil fuels. Circular economy principles promote recycling and reuse reducing waste sent to landfills significantly. International environmental agreements establish frameworks for protecting endangered species and pristine wilderness areas. Individual lifestyle choices regarding consumption transportation and food sources contribute to collective environmental impact. The transition to sustainability requires coordinated efforts from governments businesses and citizens worldwide.",
    "The intersection of artificial intelligence machine learning and neuroscience continues to reshape our understanding of intelligence and cognition fundamentally. Deep learning algorithms inspired by neural network structures enable computers to perform complex tasks previously requiring human expertise. Natural language processing allows machines to understand and generate human language with increasing sophistication and nuance. Ethical considerations regarding AI development include questions about bias transparency and accountability in automated decision making systems. Workplace automation driven by AI technologies raises concerns about employment displacement and economic inequality globally. Collaborative human AI partnerships may offer optimal solutions leveraging strengths of both biological and artificial intelligence. As technology advances society must establish governance frameworks ensuring responsible development and equitable distribution of AI benefits."
  ]
};


// Word count requirements for each difficulty
const wordCounts = {
  easy: 50,
  medium: 100,
  hard: 150
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
