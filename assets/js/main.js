let buttonText = document.getElementById("try");

buttonText.addEventListener("click", (e) => {
  let precio = document.getElementById("precio").value;
  let valor = document.getElementById("cantidad").value;
  let finalcolor = document.getElementById("color").value;
  let resultado = precio * valor;

  document.querySelector("#quantity").innerHTML = valor;
  document.querySelector("#total").innerHTML = resultado;
  document.querySelector("#colour").style.backgroundColor = finalcolor;
});
