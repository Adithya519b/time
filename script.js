let Year=document.querySelector("#year");
let Hours=document.querySelector("#hours");
let Minutes=document.querySelector("#minutes");
let Seconds=document.querySelector("#seconds");

let month=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
let day=new Date();

Year.textContent=`${day.getDate()+" , "+month[day.getMonth()]+" , "+day.getFullYear()}`;
Hours.textContent=day.getHours();
Minutes.textContent=day.getMinutes();
Seconds.textContent=day.getSeconds();

