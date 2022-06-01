const click = document.querySelector(".push_button");
const clicks = document.querySelector(".stop_click");


function changecolor_click(){


    setInterval(function changecolor_click(){
        document.bgColor = "aqua";
        console.log("blue");
    },500)
        setInterval(function changecolor_click(){
            document.bgColor = "pink";
            console.log("red");   
    },600)
    
}    


function stop_click() {
    clearInterval();
    alert("dd");
}


