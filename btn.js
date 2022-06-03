// const click = document.querySelector(".push_button");
// const clicks = document.querySelector(".stop_button");

var inter;
var inter2;

function changecolor_click(a, btn){
    console.log(a);
    console.log(btn);

    // inter = setInterval(function color(){
    //     document.body.style.backgroundColor = "aqua"
    // },500);
    // inter2 = setInterval(function color(){
    //     document.body.style.backgroundColor = "pink"
    // },700);

    let textInput = document.getElementById('setColor');
    let colorValue = textInput.value;

    document.body.style.backgroundColor = colorValue;


} 

function stop_click(){
    clearInterval(inter)
    clearInterval(inter2)
    document.body.style.backgroundColor = "white"
}
