export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";

  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Menu</h1>
    <ul>
      <li>Pizza</li>
      <li>Pasta</li>
      <li>Burger</li>
    </ul>
  `;
  content.appendChild(div);
}
