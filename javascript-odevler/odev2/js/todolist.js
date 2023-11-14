// console.log("to do list js");
let closeCarret = `<button type="button" class="close" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`;
const ulDOM = document.querySelector("#list");
var closeBtn = document.querySelectorAll("li .close");
let checkIcon = `<i class="fa-solid fa-check"></i>`;

function newElement(e) {
  var inputDOM = document.getElementById("task");
  let liDOM = document.createElement("li");
//   console.log(inputDOM.value.trim().length);
  if (inputDOM.value.trim().length > 0 ) {
    liDOM.append(inputDOM.value);
    liDOM.innerHTML += closeCarret;
    ulDOM.appendChild(liDOM);
    $("#liveToast.success").toast("show");
    inputDOM.value = "";
  }else{
    $("#liveToast.error").toast("show");
  }
  closeBtn = document.querySelectorAll("li .close");
  remove();
}

function remove(){

    closeBtn.forEach(element => {
        element.addEventListener('click', function removeElement(){
            this.closest("li").remove();
         });
        // console.log(element);
    });
}

remove();

// let li = document.querySelectorAll("li");
// // const textNode = document.createTextNode(checkIcon);
// li.forEach(element => {
//     element.addEventListener('click', function check(){
//         // element.innerHTML += checkIcon;
//         element.insertBefore(checkIcon, element.children[0]);
//     });
// });


