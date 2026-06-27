const buttonClass = document.querySelector(".button");
const button_text = document.querySelector(".button_text");
function clickButton() {
  buttonClass.addEventListener("click", () => {
    button_text.textContent = "ボタンが押されたよ";
    return;
  });
}
clickButton();
