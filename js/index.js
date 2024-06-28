const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

// console.log("form: ", form);
console.log("textInput: ", textInput);
// console.log("cardContainer: ", cardContainer)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
  // const elements = event.target.elements;
  // console.log("elements: ", elements);
  // const textInputValue = elements.textInput.value;
  // console.log("textInputValue", textInputValue);
  console.log("textInput.value", textInput.value);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  // create a DOM element
  const newCard = document.createElement("li");
  newCard.textContent = data.title;
  newCard.classList.add("card");
  // newCard.innerHTML = `
  // <h2>My Fancy Card</h2>
  // <p>${data.title}</p>
  // `;

  // add that element to the page
  cardContainer.append(newCard);
});
