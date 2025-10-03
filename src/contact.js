export default function loadContact() {
  const content = document.getElementById("content");
  content.textContent = "";

  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Contact Us</h1>
    <p>📞 123-456-789</p>
    <p>📧 contact@restaurant.com</p>
  `;
  content.appendChild(div);
}
