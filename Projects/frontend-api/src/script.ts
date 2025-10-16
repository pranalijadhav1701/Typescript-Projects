// Get references to HTML elements
// @ts-ignore
const button = document.getElementById("btn") as HTMLButtonElement;
// @ts-ignore
const jokeElement = document.getElementById("joke") as HTMLParagraphElement;

// Add click event
button.addEventListener("click", async () => {
  console.log("Button clicked!"); // Debug line
  jokeElement.textContent = "Loading joke... 😄";

  try {
    // Call public joke API
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data: { setup: string; punchline: string } = await response.json();

    jokeElement.textContent = `${data.setup} 🤭 ${data.punchline}`;
  } catch (error) {
    jokeElement.textContent = "Failed to fetch joke 😢";
    console.error(error);
  }
});
