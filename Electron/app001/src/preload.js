const { ipcRenderer } = require("electron");

document.addEventListener('DOMContentLoaded', function () {
  console.log('hello!!')

  let myButton = document.getElementById("myButton");
  myButton.addEventListener("click", () => {
    let txtBox = document.getElementById('myText');
    let txtVal = txtBox.value;

    ipcRenderer.send("saveText", txtVal);
  })
})