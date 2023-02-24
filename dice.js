const player_1_result = Math.floor(Math.random() * 6) + 1;
const player_2_result = Math.floor(Math.random() * 6) + 1;
function result(){
    if (player_1_result>player_2_result){
        console.log("player 1 is the winner")
    }
    else{
        console.log("player 2 is the winner")
    }
}
result();