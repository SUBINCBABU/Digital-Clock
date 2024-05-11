const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const section=document.querySelector("#section")


const btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
  if(btn.innerHTML==="Dark"){
    btn.innerHTML="Light"
    document.body.style.backgroundColor="black"
    document.body.style.color="#00ffff"
  }
  else
  {
    btn.innerHTML="Dark"
    document.body.style.backgroundColor="white"
    document.body.style.color="black"

  }

})


const displayTime=()=>{
  let hrs=new Date().getHours()
  let mnt=new Date().getMinutes()
  let snd=new Date().getSeconds()
if(hrs>=12){
  section.innerHTML="PM"

}
else{
  section.innerHTML="AM"
}
if(hrs>12){
  hrs=hrs-12
}
if(snd<10){
  snd="0"+snd
}
if(mnt<10){
  mnt="0"+mnt
}

  hours.innerHTML=hrs;
  minutes.innerHTML=mnt;
  seconds.innerHTML=snd;


}
setInterval(displayTime,10)
 
