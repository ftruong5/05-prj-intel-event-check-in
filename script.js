// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const progressBar = document.getElementById("progressBar");
const attendeeCount = document.getElementById("attendeeCount");

// Track attendance 
let count = 0;
const maxCount = 50;

// Handle form submission 
form.addEventListener("submit", function(event){
  event.preventDefault();

  // Get form values 
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  // Increment count 
  count++
  console.log("Total check-ins: ", count);

  // Update progress bar 
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  progressBar.style.width = percentage;
  attendeeCount.textContent = count;

  // Update team counter 
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show welcome message 
  const message = `🎉 Welcome, ${name} from ${teamName}`;
  console.log(message);

  // Display personalized greeting
  greeting.textContent = message;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  form.reset();
});