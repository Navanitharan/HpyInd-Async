let count=10;
let p = document.createElement("p");
let timeout = function(count){
    p.innerText=count;
    if(count==0){
        document.body.style.backgroundImage="linear-gradient(#ef7c09,#ffffff,#064f07)";
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="cover";
        p.innerHTML=`<h1>Happy Independence day</h1><br><img src = "https://media.tenor.com/xnCc2meRx4gAAAAM/happy-independence-day---indian-flag-independence-day.gif" style="margin-top:30px">`
    }
}
let loop = setTimeout(()=>{
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 1000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 2000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 3000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 4000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 5000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 6000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 7000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 8000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 9000);
    setTimeout(() => {
        timeout(count)
        count=count-1
    }, 10000);
    setTimeout(() => {
        timeout(count)
    }, 11000); 
},1000);
document.body.appendChild(p)
p.style.textAlign="center"
p.style.fontSize='20px'
p.style.width="100%"

document.body.style.height="100vh";
document.body.style.width="100vw";
document.body.style.display="flex"
document.body.style.alignItems="center"
