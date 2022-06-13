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
    var div = document.querySelector(".message");
    var div2 = document.querySelector(".messages");
    div.innerHTML = div2.innerHTML = ''; //초기화



    let LOGIN = {
        ID : "alta",
        PW : "alta0204",
    }

    let newID = document.querySelector('#login_ID').value;
    let newPW = document.querySelector("#login_PW").value;

    let {ID: oldID, PW : oldPW} = LOGIN;
    // if(oldID === newID){
    //     console.log("login!");
    // }else {
    //     console.log("fail!");
    // }
    //var sole = oldID === newID;
    // sole ? console.log("login!") : console.log("fail!");
    // sole이 true면 왼쪽 fals면 오른쪽 실행
    //삼항 연산자
    // console.log(sole)
    // if(oldPW === newPW){
    //     console.log("login!!");
    // }else{
    //     console.log("fail!!")
    // }
    //var soled = oldPW === newPW;
    // soled ? console.log("login!!") : console.log("fail!!!!!!");
    // console.log(soled)
    // 삼항 연산자
    

    // let val = newID;
    // let vals = newPW;
    
    // if (LOGIN === ){
    //     location.href = "btn2.html";
    // }
    
    // if (oldID != newID){
    //     var div = document.querySelector(".message");
    //     div.innerHTML = '<div>ID가 틀렸습니다</div>'
    // }else{
    //     document.querySelector('.message').style.display = 'none';
    // }
    //var con = oldID != newID;
    //var div = document.querySelector(".message");
    //con ? div.innerHTML = '<div>ID가 틀렸습니다</div>' : document.querySelector('.message').style.display = 'none';
    // 삼항 연산자 사용

    // if (oldPW != newPW){
    //     var divs = document.querySelector(".messages");
    //     divs.innerHTML = '<div>PASSWORD가 틀렸습니다</div>'
    // }else{
    //     document.querySelector('.messages').style.display = 'none';
    // }
    //var cons = oldPW != newPW;
    //var divs = document.querySelector(".messages");
    //cons ? divs.innerHTML = '<div>PASSWORD가 틀렸습니다</div>' : document.querySelector('.messages').style.display = 'none'; 
    // 삼항 연산자 사용

    // location.reload(); = 새로고침 location.href 페이지 이동
    // 왜 반복이 안될까?????????????????????? 조건 실행 반복은 어떻게? for문?

    // if (oldID === LOGIN.ID){
    //     let div = document.createElement('div');
    //     div.innerHTML = '<h1>heee</h1>'
    //     document.body.append(div);
    //     console.log(div)
    // }

    if(oldID === newID) {
        // 아이디 일치
        if(oldPW === newPW) {
            //아이디, 비밀번호 모두 일치
            type = 'all'
        } else {
            // 아이디 일치, 비밀번호 불일치
            type = 'pw_not'
        }
    } else {
        // 아이디 불일치
        if(oldPW === newPW) {
            // 아이디 불일치, 비밀번호는일치
            type = 'id_not'
        } else {
            // 아이디,비밀번호 모두 불일치
            type = 'all_not'
        }
    }



    // swtich case문으로 변경
    if(type === 'all') {
        console.log('다음 페이지 이동')
    } else if(type === 'all_not') {
        console.log('모두 틀림')
        document.querySelector('#login_ID').value = '';
        document.querySelector('#login_PW').value = '';
        div.innerHTML = '아이디 틀림';
        div2.innerHTML = '비밀번호 틀림';

    } else if(type === 'id_not') {
        document.querySelector('#login_ID').value = '';
        div.innerHTML = '아이디 틀림';

    } else if(type === 'pw_not') {
        document.querySelector('#login_PW').value = '';
        div2.innerHTML = '비밀번호 틀림';
    }
})

// loginBtns.addEventListener("click",function(){
//     location.reload();
// })

var input = document.getElementById("login_PW");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("login").click();
    console.log(event)
  }
})
// PW input 자리에  enter키 적용