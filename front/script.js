const container=document.getElementById("pizzas");
const modal=document.getElementById("modal");
function abrirCadastro(){modal.style.display="flex";}
function fecharCadastro(){modal.style.display="none";}
listarPizzas();
async function listarPizzas(){
try{
const resposta=await fetch("http://localhost:3000/pizza/listar");
if(!resposta.ok)throw new Error();
const pizzas=await resposta.json();
container.innerHTML="";
pizzas.forEach(pizza=>{
container.innerHTML+=`<div class="pizza"><h2>${pizza.sabor}</h2><p>R$ ${Number(pizza.preco).toFixed(2)}</p><button onclick="excluirPizza(${pizza.id})">Excluir</button></div>`;
});
}catch{container.innerHTML="<h2>Erro ao carregar pizzas.</h2>";}}
async function cadastrarPizza(sabor,preco){
try{
const resposta=await fetch("http://localhost:3000/pizza/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sabor,preco:Number(preco),foto:""})});
if(!resposta.ok)throw new Error();
listarPizzas();
}catch{alert("Erro ao cadastrar pizza.");}}
function salvarPizza(){const sabor=document.getElementById("nome").value;const preco=document.getElementById("preco").value;if(sabor===""||preco===""){alert("Preencha todos os campos.");return;}cadastrarPizza(sabor,preco);document.getElementById("nome").value="";document.getElementById("preco").value="";fecharCadastro();}
async function excluirPizza(id){try{const r=await fetch(`http://localhost:3000/pizza/excluir/${id}`,{method:"DELETE"});if(!r.ok)throw new Error();listarPizzas();}catch{alert("Erro ao excluir a pizza.");}}