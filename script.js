document.getElementById("myBtn").addEventListener("click", submitText);

function removeText() {
    document.getElementById('inputBox').value = ''
}
function submitText() {
    console.log('hello');
    const typed = document.querySelector(".typeList").value;
    document.querySelector(".body").innerHTML = typed;
    removeText();
}
