 const countValue = document.getElementById('counter');
 const plus =  document.getElementById('plus');
 const minus =  document.getElementById('minus');
 
 let counter = 0;

plus.addEventListener('click', ()=> {
    counter ++;
    countValue.innerHTML = counter;
})
minus.addEventListener('click', ()=> {
    counter --;
    if(counter >= 0){
        countValue.innerHTML = counter;
    } else if(counter = 0) {
        countValue.innerHTML = counter++;
    }
})