
let checkBtn, checkMail, flag;
let arrayMail;

arrayMail = ["matteo@gmail.com" , "fabio@gmail.com" , "pietro@gmail.com" , "anna@gmail.com"];
flag = false;

checkBtn = document.getElementById("btn-mail");

checkBtn.addEventListener('click', function() {

    flag = false; //lo reimposta a false nel caso non si aggiornasse il browser e si inserisce
                 //direttamente un altro indirizzo

    checkMail = document.getElementById("input-email").value;

for(let i = 0; i < arrayMail.length; i++){
    
    if(checkMail == arrayMail[i]){
        
        flag = true;

    } 
}

switch (flag){

    case true:
        console.log("L'indirizzo è presente nel database");
        alert("L'indirizzo è presente nel database");
        break;
    
    case false:
        console.log("L'indirizzo non è presente o non è registrato nel database");
        alert("L'indirizzo non è presente o non è registrato nel database");
        break;

}

});


