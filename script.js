let btnRef = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newgameBtn = document.getElementById("newgame");
let msg = document.getElementById("message");
let restart = document.getElementById("restart");
let wrapper = document.querySelector(".wrapper");
let showmsg = document.getElementById("showmsg");
let showturn = document.querySelector(".showturn");

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let turnX = true;
let count = 0;

const offButton = () =>{
    btnRef.forEach((element) => {
        element.disabled = true;
    });
    popup.classList.remove("hide");
    wrapper.classList.add("hide");
    showturn.classList.add("hide");
}

const onButton = () =>{
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popup.classList.add("hide");
    wrapper.classList.remove("hide");
    showturn.classList.remove("hide");
};

const youWon = (letter) =>{
    offButton();
    if(letter == "X"){
        msg.innerText = "X  won!!"
    }else{
        msg.innerText = "O  won!!"
    }
}

const winCheck = () =>{
    for(let i of winPattern){
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if((element1 != "") && (element2 != "") && (element3 != "")){
            if(element1 == element2 && element2 == element3){
                youWon(element1);
            }
        }
    }
}

const drawCheck = () =>{
    offButton();
    msg.innerText = "Draw";
}

newgameBtn.addEventListener("click", () => {
    count = 0;
    onButton();
});

restart.addEventListener("click", () => {
    count = 0;
    onButton();
});

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if(turnX) {
            showmsg.innerText = "O turn"
            turnX = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else{
            showmsg.innerText = "X turn"
            turnX = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if(count == 9){
            drawCheck();
        }
        winCheck();
    })
});