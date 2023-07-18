
// const btns = document.querySelectorAll('button')
// let input = document.querySelector('#input')
// let currentItem = 0;

// for(let i=0; i<btns.length;i++){
//    btns[i].addEventListener('click',(e)=>{
//       // alert("dsfk")
//       if(e.target.classList.contains('increase')){
//          currentItem++
//          // console.log(currentItem);
//          input.innerText = currentItem
//          if(input.innerText > "0"){
//             input.style.color = "green"
//          }

//       }
//       else if(e.target.classList.contains("decrease")){
//          currentItem--
//          input.innerText = currentItem
//          if(input.innerText < "0"){
//             input.style.color = "red"
//          }
//       }
//       else if(e.target.classList.contains("reset")){
//          currentItem = 0;
//          input.innerText = currentItem
//          if(input.innerText == "0"){
//             input.style.color = "yellow"
//          }
//       }

      
//    })
// }


// else if(e.target.classList.contains("increase" && currentItem >0)){
//    input.style.color = "green"
// }

const btns = document.querySelectorAll("button")
const input = document.querySelector("#input")
let num = 0
for(let i=0; i<btns.length; i++){
   btns[i].addEventListener("click",(e)=>{
if(e.target.classList.contains('increase')){
   num++
   input.innerText = num
   if(num>0){
      input.style.color = "green"
   }
}
else if(e.target.classList.contains("decrease")){
   num--
   input.innerText = num
   if(num <0){
      input.style.color = "red"
   }
}
else if(e.target.classList.contains("reset")){

   num = 0
   input.innerText = num
   if(num == 0){
      input.style.color = "black"
   }
}
   })
}























// <----------- I do this code----->
// const input = document.querySelector("#input")
// const increment = document.querySelector("#inc-btn")
// const decrement = document.querySelector("#dec-btn")
// const reset = document.querySelector("#reset-btn")

// let value = 0;

// increment.addEventListener('click', function () {
//    value++
//    input.innerText = value;

//    if (value > 0) {
//       input.style.color = "green"
//    }

// })

// decrement.addEventListener('click', function () {
//    value--
//    input.innerText = value;
   
//    if(value <0){
//       input.style.color ="red"
//    }

// })

// reset.addEventListener('click', function () {
//    value = 0;
//    input.innerText = '0';
//    input.style.color = "black"
// })


// <---------I wrote this code with your teaching ------>


// const result = document.querySelector("#input")
// const buttons = document.querySelectorAll(".btn")

// // console.log(buttons);

// let value = 0;
// // console.log(value);

// for(let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click',function(){
//          if(buttons[i].classList.contains('increase')){
//            value++
//             result.innerText = value;
//         }
//         else if(buttons[i].classList.contains('decrease')){
//             value--
//              result.innerText = value;
//          }
//          else if(buttons[i].classList.contains('reset')){
//             value = "0"
//              result.innerText = value;
//          }
//          if(value > 0){
//             result.style.color = "green"
//          }
//          else if(value == 0){
//             result.style.color = "black"
//          }
//          else{
//             result.style.color = "red"
//          }
//     })
// }

// <-------------------------------------adsfasfa---------------------------------------------->

// const increBTn = document.querySelector('#inc-btn')
// const decBtn = document.querySelector('#dec-btn')
// const reset = document.querySelector('#reset-btn')
// const num = document.querySelector('#input')

// let valueEL = 0;
// increBTn.addEventListener('click',function(){
//    valueEL++
//    num.innerText = valueEL
// })

// decBtn.addEventListener('click',function(){
//    valueEL--
//    num.innerText = valueEL
// })

// reset.addEventListener('click',function(){
//    valueEL = 0
//    num.innerText = '0'
//    if(valueEL > 0){
//       num.style.color="green"
//    }
//    else if(valueEL == 0){
//       num.style.color="black"
//    }
//    else{
//       num.style.color ="red"
//    }
// })
