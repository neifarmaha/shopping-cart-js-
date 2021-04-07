//console.log{document}
//var totalTag = document.getElementById("total")
//var totalTag = document.querySelector("#total")
//var imgs = document.getElementsByTagName("imag")
//var imgs = document.querySelectorAll ("img")
var btnsAddTag = document.getElementsByClassName("add")
var checkTags = document.querySelectorAll(".check")
var btndelete= document.querySelectorAll(".delete")
var btnRemove = document.getElementsByClassName("remove")
var icons = document.getElementsByClassName("like")
//console.log(totalTag)
for (var j=0 ; j< checkTags.length; j++){
    checkTags [j].addEventListener("click",total)
}

for ( var i=0 ; i<btnsAddTag.length; i++) {
    btnsAddTag[i].addEventListener("click",add)
    // btnsAddTag[i].onclick = add
}
for ( var i=0 ; i<btndelete.length; i++) {
    btndelete[i].addEventListener("click",delet)
    // btnsdeleteTag[i].onclick = remove
}

for ( var i=0 ; i<btnRemove.length; i++) {
    btnRemove[i].addEventListener("click",remove)
    // btnsdeleteTag[i].onclick = remove
}
for ( var n=0 ; n<icons.length; n++) {
    icons[n].onclick=like
    
}

function add(event) {
    // console.log(event.target)
    var btnAdd = event.target
    var tdElt = btnAdd.parentElement 
    // console.log(tdElt)
    var inputTag = tdElt.querySelector(".quantity")
    var quantity = Number (inputTag.value)
    quantity++
    // console.log(quantity)
    inputTag.value = quantity
    var trElt = btnAdd.parentElement.parentElement
    var unitPriceTag = trElt.querySelector(".unitprice")
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML) 
    var unitPrice = Number(unitPriceTag.innerHTML)
    price = quantity * unitPrice
    priceTag.innerHTML = price  
}

function remove(event) {
    var btnRemove = event.target
    console.log(event.target)
    var tdElt = btnRemove.parentElement 
    // console.log(tdElt)
    var inputTag = tdElt.querySelector(".quantity")
    var quantity = Number (inputTag.value)
    if (quantity>0)
    {quantity--}
    // console.log(quantity)
    inputTag.value = quantity
    var trElt = btnRemove.parentElement.parentElement
    var unitPriceTag = trElt.querySelector(".unitprice")
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML) 
    var unitPrice = Number(unitPriceTag.innerHTML)
    price = quantity * unitPrice
    priceTag.innerHTML = price  
}


function total(event) {
     var currentcheck = event.target
     var totalTag = document.getElementById ("total")
     var total = Number(totalTag.innerHTML)
     console.log(total)
     var trElt = currentcheck.parentElement.parentElement
     var priceTag = trElt.querySelector (".price")
     var price =  Number(priceTag.innerHTML)
     console.log(price)
     var btnsAddTag = trElt.querySelector(".add")
     var btnsRemoveTag = trElt.querySelector(".remove")
     if (currentcheck.checked === true) {
        totalTag.innerHTML =Number(totalTag.innerHTML)+price
         btnsAddTag.setAttribute("disabled",true)
         btnsRemoveTag.setAttribute("disabled",true)
          
     }
     else {
        totalTag.innerHTML =Number(totalTag.innerHTML)-price
         btnsAddTag.removeAttribute("disabled")
         btnsRemoveTag.removeAttribute("disabled")
     }
     total.innerHTML = total 
}
 


 
 
function delet(e){
    var btndelete = e.target
    var trElt= btndelete.parentNode.parentNode
    var i = trElt.rowIndex
    document.getElementById('myTable').deleteRow(i);
    total(e)

} 
 

 function like(e){
     var heart = e.target 
     if(heart.style.color!== "red") {
         heart.style.color ="red"
     }
     else {
     heart.style.color = "black"
     }
 }