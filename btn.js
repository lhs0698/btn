let inter;
let inter2;
// 전역변수

function changecolor_click(){

    inter = setInterval(function color(){
        document.body.style.backgroundColor = "aqua"
    },500);
    inter2 = setInterval(function color(){
        document.body.style.backgroundColor = "pink"
    },700);

    // let textInput = document.getElementById('setColor');
    // let colorValue = textInput.value;

    // document.body.style.backgroundColor = colorValue;
    // push 클릭 시 배경색 변경
} 
// push 버튼 이벤트

function getInter(){
    return [inter, inter2];
}

function stop_click(){
    let inters = getInter();

    clearInterval(inters[0]);
    clearInterval(inters[1]);
    document.body.style.backgroundColor = "white"
}
// stop 버튼 이벤트


let timer;
let curtime;

function today_click(){
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth()+1;
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    timer = [year,month,date,hour,minute,second];
    
    // alert(timer);
    // console.log(timer[2]);

    let curtime = timer[3];
    console.log(curtime);
    if (curtime >= 3){
        document.body.style.backgroundColor = "yellow"
    }else {
        document.body.style.backgroundColor = "green"
    }
}