// const click = document.querySelector(".push_button");
// const clicks = document.querySelector(".stop_button");







var inter
var inter2

function changecolor_click(){

    inter = setInterval(function color(){
        document.body.style.backgroundColor = "aqua"
    },500)
    inter2 = setInterval(function color(){
        document.body.style.backgroundColor = "pink"
    },1000)

    console.log(changecolor_click)
} 

function stop_click(){
    clearInterval(inter)
    clearInterval(inter2)
    document.body.style.backgroundColor = "white"
}


// function stop_click(){
//     clearInterval(inter)
//     clearInterval(inter2)
// }



// setInterval(function changecolor_click(){
//     document.bgColor = "aqua";
// },500)

// setInterval(function changecolor_click(){
//     document.bgColor = "pink";
// },700)