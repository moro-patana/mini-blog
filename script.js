console.log('it works');

// code your solution in here

// Grab elements

const newPost = document.getElementById(`post-list`);
const button = document.getElementById(`submit-form`);
const input = document.getElementById(`new-post-title`);
const textarea = document.getElementById(`new-post-content`);
const form = document.querySelector(`form`);

// Create elements

const firstDiv = document.createElement(`div`);
const secondDiv = document.createElement(`div`);
const newHeading = document.createElement(`h5`);
const newParagraph = document.createElement(`p`);

// Store them in its parents

firstDiv.classList.add(`card`, `some-space`);
secondDiv.classList.add(`card-body`);
secondDiv.appendChild(newHeading);
secondDiv.appendChild(newParagraph);
firstDiv.appendChild(secondDiv);
newPost.appendChild(firstDiv);

// Add an event listener to the submit button

button.addEventListener(`click`, ($event) => {
  $event.preventDefault();
  newHeading.textContent = `${input.value}`;
  newParagraph.textContent = `${textarea.value}`;
  form.reset();
});

