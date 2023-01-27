import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  document.body.addEventListener("click", () => {
    for(let i = 0; i < 5; i++){
      let art = document.createElement('article');
      art.classList.add('message')
      art.innerText = `This is article ${i+1} on the page`;
      document.body.appendChild(art);
    }
  })
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
