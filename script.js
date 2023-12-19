let count=10;
let p = document.createElement("p");
let timeout = function(count){
    p.innerText=count
    if(count==0){
        document.body.style.backgroundImage="linear-gradient(#ef7c09,#ffffff,#064f07)";
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="cover";
        p.innerHTML=`<h1>Happy Independence day</h1><br><img src = "https://media.tenor.com/xnCc2meRx4gAAAAM/happy-independence-day---indian-flag-independence-day.gif" style="margin-top:50px">`
    }
    count=count-1;
    if(count>=0){
    let loop =setTimeout(()=>{
        timeout(count)
    },1000)
    
    }
}
let loop = setTimeout(()=>{
    timeout(count);
},5000);
document.body.appendChild(p)
p.style.textAlign="center"
p.style.fontSize='20px'
p.style.width="100%"

document.body.style.height="100vh";
document.body.style.width="100vw";
document.body.style.display="flex"
document.body.style.alignItems="center"