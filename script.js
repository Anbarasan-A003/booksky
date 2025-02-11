var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})
var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
event.preventDefault()
popupbox.style.display="none"
    popupoverlay.style.display="none"
})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("booktitle-input")
var bookauthor = document.getElementById("bookauthor-input")
var description = document.getElementById("bookdescription-input")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","Book-Container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

function deletebook(event)
{
   event.target.parentElement.remove()
}