var rotationCount = 0;
var infiniteCounter = 0;

function count(){
    var inputText = document.getElementById("userValue").value;
    var count = inputText.length;
    document.getElementById("result").textContent = count;
};

var inputElement = document.getElementById("userValue");

inputElement.addEventListener("keydown", count);



document.getElementById('roundButton').addEventListener("click", function(){
    rotationCount += 1;
    infiniteCounter += 1;

    const rotation = document.getElementById('marcille');
    const buttonRotation = document.getElementById('roundButton');

    const funnyBox = document.getElementById('textBoxContainer');

    if (rotationCount === 1){
        rotation.style.transform = 'rotate(90deg)';
        buttonRotation.style.transform = 'rotate(90deg)';
    }
    else if (rotationCount === 2){
        rotation.style.transform = 'rotate(180deg)';
        buttonRotation.style.transform = 'rotate(180deg)';
    }
    else if (rotationCount === 3){
        rotation.style.transform = 'rotate(270deg)';
        buttonRotation.style.transform = 'rotate(270deg)';
    }
    else if(rotationCount === 4){
        rotation.style.transform = 'rotate(360deg)';
        buttonRotation.style.transform = 'rotate(360deg)';
        rotationCount = 0;
    }

    funnyBox.textContent = 'Marcille has spun ' +  infiniteCounter + ' Times';
});