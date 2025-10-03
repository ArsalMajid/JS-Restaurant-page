export default function loadHome() {
  const content = document.getElementById("content");
  content.textContent = ""; // clear

  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Welcome to My Restaurant</h1>
    <p>We serve the most delicious food 🍲</p>
    <img src="https://via.placeholder.com/300" alt="food">
  `;
  content.appendChild(div);
}
