const { createApp, ref } = Vue;

createApp({
  setup() {
    const buttonText = ref("ボタンはまだ押されていないよ");
    const clicked = ref(false);
    const clickButton = () => {
      if (clicked.value) {
        clicked.value = false;
        buttonText.value = "ボタンはまだ押されていないよ";
      } else {
        clicked.value = true;
        buttonText.value = "ボタンは押されたよ";
      }
    };
    return {
      buttonText,
      clickButton,
    };
  },
}).mount("#app");
