// const click = document.querySelector(".push_button");
// const clicks = document.querySelector(".stop_button");




var inter;
var inter2;

function changecolor_click(){

    inter = setInterval(function color(){
        document.body.style.backgroundColor = "aqua"
    },500);
    inter2 = setInterval(function color(){
        document.body.style.backgroundColor = "pink"
    },700);

} 

function getInters() {
    return [inter, inter2];
}

function stop_click(){
    let inters = getInters();
    clearInterval(inters[0]);
    clearInterval(inters[1]);
    document.body.style.backgroundColor = "white"
}
// =======

//     setInterval(function changecolor_click(){
//         document.bgColor = "aqua";
//         console.log("blue");
//     },500)
//     setInterval(function changecolor_click(){
//             document.bgColor = "pink";
//             console.log("red");   
//     },800)
    
// }    


// function stop_click() {
//     clearInterval();
//     alert("dd");
// >>>>>>> Stashed changes
// }


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