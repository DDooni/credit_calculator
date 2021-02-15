const monthInYear = 12;
const defaultPercent = 15;

function calculate(){
    let inputs = document.querySelectorAll('input');
    let sum = inputs[0].value;
    let time = inputs[1].value * monthInYear;
    let perc = document.getElementById('percent').innerText / 100 / monthInYear;
    let result = sum * (perc + (perc/(((1 + perc)**time)-1)))*time;

    document.querySelector('#sum').innerText = Math.floor(result*100)/100;
}

function check(){

    if(document.querySelectorAll('input')[0].value<1000 || document.querySelectorAll('input')[1].value<1){
        alert("Сумма или срок слишком маленькие! Минимальное значение - 1000 грн. и 1 год!");
        document.querySelector('button').disabled = true;
        document.getElementById('percent').innerText = "-";
    }
    else{
        document.querySelector('button').disabled = false;
        let percent = document.getElementById('percent').innerText;
        let inputs = document.querySelectorAll('input');
        let sum = inputs[0].value;
        let time = inputs[1].value;

        if(sum === "" || time === ""){
            document.getElementById('percent').innerText = defaultPercent;
        }
        //
        else if(sum>=1000 && sum<10000 && time <3){
            document.getElementById('percent').innerText = defaultPercent;
        }
        else if(sum>=1000 && sum<10000 && time >=3 && time<5){
            document.getElementById('percent').innerText = defaultPercent + 1;
        }
        else if(sum>=1000 && sum<10000 && time >=5 && time<10){
            document.getElementById('percent').innerText = defaultPercent + 2;
        }
        else if(sum>=1000 && sum<10000 && time >=10){
            document.querySelector('button').disabled = true;
            document.getElementById('percent').innerText = "индивидуально";
            document.querySelector('#sum').innerText = 0;
        }
        //
        else if(sum>=10000 && sum<20000 && time <3){
            document.getElementById('percent').innerText = defaultPercent - 1;
        }
        else if(sum>=10000 && sum<20000 && time >=3 && time<5){
            document.getElementById('percent').innerText = defaultPercent;
        }
        else if(sum>=10000 && sum<20000 && time >=5 && time<10){
            document.getElementById('percent').innerText = defaultPercent + 1;
        }
        else if(sum>=10000 && sum<20000 && time >=10){
            document.querySelector('button').disabled = true;
            document.getElementById('percent').innerText = "индивидуально";
            document.querySelector('#sum').innerText = 0;
        }
        //
        else if(sum>=20000 && sum<40000 && time <3){
            document.getElementById('percent').innerText = defaultPercent-2;
        }
        else if(sum>=20000 && sum<40000 && time >=3 && time<5){
            document.getElementById('percent').innerText = defaultPercent-1;
        }
        else if(sum>=20000 && sum<40000 && time >=5 && time<10){
            document.getElementById('percent').innerText = defaultPercent;
        }
        else if(sum>=20000 && sum<40000 && time >=10){
            document.querySelector('button').disabled = true;
            document.getElementById('percent').innerText = "индивидуально";
            document.querySelector('#sum').innerText = 0;
        }
        //
        else if(sum>=40000){
            document.querySelector('button').disabled = true;
            document.getElementById('percent').innerText = "индивидуально";
            document.querySelector('#sum').innerText = 0;
        }
    }
}