let typeText =document.getElementById("typeText");
let count =0;
let deleteText =false;


function typeJs(){
   
    if(!deleteText){
        typeText.innerHTML +=typeText.dataset.text.charAt(count);
        count++;

        if(count === typeText.dataset.text.length){
            deleteText =true;
        }
    }else{
        typeText.innerHTML=typeText.dataset.text.substring(0,count-1);
        count--;

        if(count ===0){
            deleteText =false;
        }
    }

    
}


let timerInterval =setInterval(()=>{
    typeJs()
},1000)
