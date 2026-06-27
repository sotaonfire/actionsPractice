const buttonClass = document.querySelector(".button");
function clickButton() {
  buttonClass.addEventListener("click", () => {
    buttonClass.value = "ボタンが押されました";
    return;
  });
}
clickButton();
