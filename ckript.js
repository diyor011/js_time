
var time = +prompt('soat neci boldi')
if(time > 0 &&time <=3){

    alert('soat tungi '+ time)
}else if (time > 3 && time<=7){
    alert('Soat tongi'+ time)

}else if(time > 7 && time <=12){
    alert('soat kunduzgi'+time)
}else if (time > 12 && time <=17){
    alert ('soat tushgi ' + (time -12))
}
    else if (time > 17 && time <=21){
        alert ('soat kecki '+ (time -12))
    }else if (time >21 && time <= 23){
        alert('soat tungi '+(time -12))
    }else if(time ==24 ||time ==0){
        alert('soat tungi'+time)
    }else{
        console.error('xato kiritingiz!')
    }
