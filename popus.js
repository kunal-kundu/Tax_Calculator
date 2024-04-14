const popup = document.getElementById("popup")
const data = localStorage.getItem("amount")
console.log(data);

popup.innerHTML = 'Your Overall income will be <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Rs ' + data + '<br> &nbsp &nbsp &nbsp after tax deductions';