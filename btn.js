let inter;
// 전역변수
let isBlink = true; //toggle 변수
let speed = 1000;

let pushBtn = document.querySelector('.push_button');
pushBtn.addEventListener('click', function(e) {
    changecolor_click()
})


let stopBtn = document.querySelector('.stop_button');
stopBtn.addEventListener('click', function(e) {
    stop_click()
})


function changecolor_click(){

    if(!inter) {
        inter = setInterval(function () {
            if(isBlink) {
                document.body.style.backgroundColor = "aqua"
            } else {
                document.body.style.backgroundColor = "pink"
            }
            isBlink = !isBlink
        }, speed / 2)
    }

    // let textInput = document.getElementById('setColor');
    // let colorValue = textInput.value;

    // document.body.style.backgroundColor = colorValue;
    // push 클릭 시 배경색 변경
} 
// push 버튼 이벤트



function stop_click(){
    clearInterval(inter);
    inter = null;
    document.body.style.backgroundColor = "white"
}
// stop 버튼 이벤트

// today_button
// function today_click(){
//     const time = new Date();
//     const year = time.getFullYear();
//     const month = time.getMonth()+1;
//     const date = time.getDate();
//     const hour = time.getHours();
//     const minute = time.getMinutes();
//     const second = time.getSeconds();

//     let timer = [year,month,date,hour,minute,second];
    
    // alert(timer);
    // console.log(timer[2]);

    // let curtime = timer[5];
    // console.log(curtime);

    // if (curtime >= 30){
    //     document.body.style.backgroundColor = "yellow"
    // }else {
    //     document.body.style.backgroundColor = "green"
    // }
// }

// let type;
// let loginBtn = document.querySelector('#login');
// loginBtn.addEventListener('click', function(event) {
//     let myInfo = {
//         name: '현수',
//         nickName: '해태',
//         age: '26',
//         addr: {
//             dong: '시흥',
//             si: '서울시',
//             gu: '서대문구'
//         }
//     }

//     let input = document.querySelector('#login_ID').value; //사용자입력

//     // 비구조화 할당
//     let { name, nickName, age, addr: { dong, si, gu } } = myInfo;

//     if(input === name) {
//         // document.body.style.backgroundColor = "yellow"
//         type = 'same'
//     } else {
//         // document.body.style.backgroundColor = "green"
//         type = 'diff'
//     }
//     let mess = (type === 'same') ? '<h1>일치합니다</h1>' : '<h1>틀렸습니다.</h1>'
//     let messEle = document.querySelector('#mess');
//     messEle.innerHTML = mess;
// })

let type;
let loginBtn = document.querySelector("#login");
let loginBtns = document.querySelector("#logout");
let nextpage = "btn2.html"; // location.href 페이지 이동

loginBtn.addEventListener("click", function(){
    let LOGIN = {
        ID : "alta",
        PW : "alta0204",
    }
    let newID = document.querySelector('#login_ID').value;
    let newPW = document.querySelector("#login_PW").value;

    let {ID: oldID} = LOGIN;
    if(oldID === newID){
        console.log("login!");
    }else {
        console.log("fail!");
    }

    let {PW : oldPW} = LOGIN;
    
    if(oldPW === newPW){
        console.log("login!!");
    }else{
        console.log("fail!!")
    }
    
    if (oldID != newID){
        var div = document.querySelector(".message");
        div.innerHTML = '<div>ID가 틀렸습니다</div>'
    }else{
        document.querySelector('.message').style.display = 'none';
    }

    if (oldPW != newPW){
        var divs = document.querySelector(".messages");
        divs.innerHTML = '<div>PASSWORD가 틀렸습니다</div>'
    }else{
        document.querySelector('.messages').style.display = 'none';
    }
    
    // location.reload(); = 새로고침
    // 왜 반복이 안될까?????????????????????? 조건 실행 반복은 어떻게? for문?

    // if (oldID === LOGIN.ID){
    //     let div = document.createElement('div');
    //     div.innerHTML = '<h1>heee</h1>'
    //     document.body.append(div);
    //     console.log(div)
    // }
})

// loginBtns.addEventListener("click",function(){
//     location.reload();
// })


