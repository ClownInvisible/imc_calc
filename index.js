function calcular(){
  let nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let imc = peso / (altura * altura);
  let aval = "";
  let modal = document.getElementById("modal")
  if(imc<=16.9){
    aval = "Muito abaixo do peso";
  }else if(imc<=18.4){
    aval = "Abaixo do peso";
  }else if(imc<=24.9){
    aval = "Peso normal";
  }else if(imc<=29.9){
    aval = "Acima do peso";
  }else if(imc<=34.9){
    aval = "Obesidade grau 1";
  }
  if(nome !== "" && altura !== "" && peso !== ""){
    modal.innerHTML = `${nome}, seu imc indica (${aval})`;
  }else{
    modal.innerHTML = "Preencha todos os campos!!!";
  }

}
