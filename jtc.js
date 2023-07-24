let counter = document.querySelector('.counter');
let carIn = document.querySelector('.carIn');
let carOut = document.querySelector('.carOut');
let spotCount = document.querySelector('.spotCount')
carIn.style.color = 'red';
carOut.style.color = 'blue';

// type in how many spots are available

counter.addEventListener('click',()=>{
  counter.innerHTML = prompt('How many spots are available', '0');
});


carIn.addEventListener('click',function(){
  if(counter.innerHTML == 0){
    counter.innerHTML = 0;
 }else{
   counter.innerHTML = counter.innerHTML - 1;
 }
});

carOut.addEventListener('click',function(){
  counter.innerHTML = +counter.innerHTML + 1;
});

spotCount.addEventListener('click',function(){
  counter.innerHTML = +counter.innerHTML + 1;
});


