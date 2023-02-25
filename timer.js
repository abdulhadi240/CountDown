const endDate=' 22 March 2023 10:50 PM';
const inputs =document.querySelectorAll('input')
document.getElementById('end-date').innerHTML=endDate;
const clock =()=>{
    const date = new Date(endDate);
    const newDate=new Date();
    const diff = (date - newDate)/1000;

    const days= Math.floor(diff / 3600 / 24 );
    

    inputs[0].value = days;

    const hours = Math.floor(diff / (3600) % 24);

    inputs[1].value = hours;

    const minutes = Math.floor(diff / 60) % 60;

    inputs[2].value = minutes;

    const seconds = Math.floor(diff) % 60;

    inputs[3].value = seconds;



    
}

clock();

setInterval(
    ()=>{
        clock();
    },1000
    
)