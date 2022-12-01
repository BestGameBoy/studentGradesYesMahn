function randomDec(low, high){
    return Math.random() * (high - low) + low;
}

function randomInt(low, high){
    return Math.floor(Math.random() * (high - low) +low);
}


function randomRGB(){
    let r = randomInt(0, 256);
    let g = randomInt(0, 256);
    let b = randomInt(0, 256);
    return "rgb("+ r +", "+ g +","+ b +")"
}

// Returns a random element from the provided array
function randomElement(anArray){
    return anArray[randomInt(0, anArray.length)]
}