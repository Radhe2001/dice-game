let plr1 = prompt("what is player1 name ?");
let plr2 = prompt("what is player2 name ?");

document.querySelector(".player1").textContent = plr1;
document.querySelector(".player2").textContent = plr2;
function dice() {
    let num1 = Math.floor(Math.random() * 6) +1;
    let num2 = Math.floor(Math.random() * 6) +1;
    
    let image1 = "dice" + num1 + ".png";
    let image2 = "dice" + num2 + ".png";
    
    document.querySelector(".img1").src = image1;
    document.querySelector(".img2").src = image2;
    
    if (num1 < num2)
    {
         document.querySelector(".winner").textContent = plr2  + " won";
    }
    else if (num1 > num2)
    {
        document.querySelector(".winner").textContent = plr1  + " won";
    }
    else
    {
        document.querySelector(".winner").textContent = "draw , roll again";
    }
}
