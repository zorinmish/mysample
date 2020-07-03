var color = "yellow";

function change() {
  let res = document.x.hello.value;
  if (res == "") {
    alert("Что-то введите ");
  } else {
    if (!isNaN(+res)) {
      document.body.style.background = "red";
    }
  }
}
