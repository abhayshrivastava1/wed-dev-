// example 1 :- Change text on clicking

let hold = document.getElementById("changeTextButton").addEventListener('click',  () => {
    // console.log(this);
    let paragraph = document.getElementById("myParagraph")
    // console.log(paragraph);
    paragraph.textContent = "my name is abhay";

});


// function ke saath current context aur
// => ke saath window object
// console.log(hold);



// example 2 :- Highlight first city on clicking

document.getElementById('highlightFirstCity').addEventListener('click', function (){
    let grabfirstcity = document.getElementById("citiesList")
    // console.log(grabfirstcity);
    // console.log(grabfirstcity.firstElementChild);
    grabfirstcity.firstElementChild.classList.add("highlight");


})

// example 3 :- Change order of espresso



document.getElementById("changeOrder").addEventListener('click', function (){
    let changeorder = document.getElementById('coffeeType');

    changeorder.textContent= "Espresso";
    changeorder.style.backgroundColor="green";

})



// example 4 :- Add new item on clicking


document.getElementById("addNewItem").addEventListener('click', function (){


    let newitem=document.createElement('li')
    newitem.textContent = "Cake";

    let addelement = document.getElementById('shoppingList')

    addelement.appendChild(newitem);

    // document.getElementById('shoppingList').appendChild(newitem);
})

//Dono tariko se append ho jayega!!


// example 5 :- Remove an element


document.getElementById("removeLastTask").addEventListener('click', function (){
    let tasks= document.getElementById("taskList")
    tasks.lastElementChild.remove();})


// example 6 :- Put an alert


document.getElementById("clickMeButton").addEventListener('click', function (){
    alert("my name is abhay");
})



// example 7 :- select only one element

document.getElementById("teaList").addEventListener('click', function (){

    if(event.target && event.target.matches(".teaItem") ){
        alert("You selected: " + event.target.textContent);
    }
})


// example 8 :-

document.getElementById("feedbackForm").addEventListener('submit', function (){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);

    // hw how to grab the label

    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;


})


// example 9 :-


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
})


// example 10 :-


document.getElementById("toggleHighlight").addEventListener('click', function (){

    let descriptiontext = document.getElementById("descriptionText").classList.toggle("highlight");


    // descriptiontext.classList.add("highlight");

    descriptiontext.classList.toggle("highlight");


})