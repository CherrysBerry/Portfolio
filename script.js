const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

menuBotao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("aberto"));
});

const trilho = document.querySelector(".carrossel__trilho");
const passo = () => trilho.querySelector(".habilidade").offsetWidth + 18;

document.querySelector(".seta--esq").addEventListener("click", () => {
  trilho.scrollBy({ left: -passo() });
});
document.querySelector(".seta--dir").addEventListener("click", () => {
  trilho.scrollBy({ left: passo() });
});