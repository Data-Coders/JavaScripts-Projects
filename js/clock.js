const options = {weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'}
setInterval(() => {
    var a = new Date
    tim = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
    day = a.toLocaleDateString(undefined, options);
    time.innerText = tim + " on " + day  
}, 1000);
