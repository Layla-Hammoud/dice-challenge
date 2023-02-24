const select_image_1 = document.getElementById("image_one");
const select_image_2=document.getElementById("image_two");
let view_result = document.getElementById("result")

const player_1_result = Math.floor(Math.random() * 6) + 1;
const player_2_result = Math.floor(Math.random() * 6) + 1;
console.log(player_1_result)
const dice_images={
    1:"./images/dice-one.svg",
    2:"./images/dice-two.svg",
    3:"./images/dice-three.svg",
    4:"./images/dice-four.svg",
    5:"./images/dice-five.svg",
    6:"./images/dice-six.svg",
}
select_image_1.src=`${dice_images[player_1_result]}`
select_image_2.src=`${dice_images[player_2_result]}`

function result(){
    if (player_1_result>player_2_result){
       view_result.innerText="player 1 is the winner";
    }
    else if(player_1_result<player_2_result){
        view_result.innerText="player 2 is the winner";
    }
    else{
        view_result.innerHTML="Draw!";
    }
}
result();