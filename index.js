window.onload=function(){
    const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

    document.getElementById("generate-btn").addEventListener("click", function(){
        let passwordone="";
        let passwordtwo="";
        for(let i=0;i<15;i++){
            let randomChar=getRandomInt(0,90);
            passwordone+=characters[randomChar];           
        }
        for(let i=0;i<15;i++){
            let randomChar=getRandomInt(0,90);
            passwordtwo+=characters[randomChar];                
        }
        console.log(passwordone)
        console.log(passwordtwo)  
        document.getElementById("p1").textContent=passwordone;
        document.getElementById("p2").textContent=passwordtwo;
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }