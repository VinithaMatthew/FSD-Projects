const getHours=document.getElementById("hours");
const getMinutes=document.getElementById("minutes");
const getSeconds=document.getElementById("seconds");

const getDate=document.getElementById("date-display");

const dateOptions={
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};


function gettime()
{
    const timeData = new Date();
    let infoH= timeData.getHours();
    let infoM=timeData.getMinutes();
    let infoS=timeData.getSeconds();

    if(infoH <10)
        infoH="0"+infoH;
    if(infoM<10)
        infoM="0"+infoM;
    if(infoS <10)
        infoS="0"+infoS;

    getHours.textContent=infoH;
    getMinutes.textContent=infoM;
    getSeconds.textContent=infoS;
    getDate.textContent= timeData.toLocaleDateString("en-US",dateOptions);
}

gettime();
setInterval(gettime,1000);