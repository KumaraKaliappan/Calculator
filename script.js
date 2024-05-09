let outputScr = document.getElementById("outputScr");
function display(num) {
  outputScr.value += num;
}
function calc() {
  try {
    outputScr.value = eval(outputScr.value);
  } catch (err) {
    alert(" invalid value");
  }
}
function del() {
  outputScr.value = outputScr.value.slice(0, -1);
}
function clr() {
  outputScr.value = "";
}
