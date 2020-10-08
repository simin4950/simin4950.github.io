let buildList = document.querySelector('#userInput');

for(var i = 0; i < 100; i++) {
    buildList.innerHTML += "<option value="+ i + ">" + i + "</option>";
}

function compare() {
    let answer = document.querySelector('#userInput');
    answer = answer.value;
    answer = Number(answer);

    let reaction = document.querySelector('#response');

    switch(true) {
        case (answer == 24):
            reaction.innerHTML = answer + " is correct";
            break;
        case (answer < 24 && answer > 20):
            reaction.innerHTML = answer + " is low but close."
            break;
        case (answer < 24):
            reaction.innerHTML = answer + " is too low."
            break;
        case (answer > 24 && answer < 28):
            reaction.innerHTML = answer + " is high but close."
            break;
        case (answer > 24):
            reaction.innerHTML = answer + " is too high."
            break;
    }

    /* if (answer == 24) {
        reaction.innerHTML = "THe answer " + answer + " is correct";
    } 

    if (answer < 24 && answer > 20) {
        reaction.innerHTML = answer + " is too low but close.";
    }

    if (answer < 24) {
        reaction.innerHTML = answer + " is too low"
    }

    if (answer < 24 ) {
        reaction.innerHTML = answer + " is too low.";
    }

    if (answer > 24 && answer < 28) {
        reaction.innerHTML = "That number is high but pretty close.";
    } */
}

