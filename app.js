var btns = document.querySelectorAll("button");
var displayScreen = document.querySelector("input");
var equalbtn = document.querySelector(".equal");
var deleteBtn = document.querySelector(".delete");
var deleteCharBtn = document.querySelector(".deleteChar")

var arr = "";

deleteBtn.addEventListener("click", function(){
    arr = "";
    console.log(arr);
})

deleteCharBtn.addEventListener("click", function(){
    arr = arr.slice(0, -1);
    displayScreen.value = arr;
})


btns.forEach(element => {
    element.addEventListener("click", function () {
        if(element.value == "+" || element.value == "-" || element.value == "*" || element.value == "/" || element.value == "%"){
           arr += " "; 
           arr += `${element.value}`;
           displayScreen.value = arr;
           arr+= " ";
        }else{
            arr += `${element.value}`;
            displayScreen.value = arr;
        }
       
    })
});

equalbtn.addEventListener("click", function() {
    var result = eval(arr);
    console.log(result);
    displayScreen.value = result;
});



