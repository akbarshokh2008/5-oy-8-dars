const formTodo = document.querySelector("#todoForm");
const productList = document.querySelector("#productList");

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInp = document.querySelector("#nameInp").value;
  const speedInp = document.querySelector("#speedInp").value;
  const priceInp = document.querySelector("#priceInp").value;
  const urlInp = document.querySelector("#urlInp").value;
  const colorInp = document.querySelector("#colorInp").value;

  const mashina = document.createElement("li");

  mashina.innerHTML = `   <li class="list-item">
  <img src="${urlInp}" alt="" width="100px">
  <h2>nomi: ${nameInp}</h2>
  <p>tezligi: ${speedInp} km/s</p>
  <p>narxi: ${priceInp}$</p>
  <p>rangi: <span style="widht: 40px; background:${colorInp}"; display: block>000</span></p>
</li>`;

  // productList ga mashina elementini qo'shish
  productList.appendChild(mashina);
});
