
var cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"]

let deck = document.querySelector('#deck');
let deckTwo = document.querySelector('#deck2')

function shuffle(deckNo) {
    deck.innerHTML = "";
    switch(deckNo){
        case 1:
            for(var i = 0; i < 5; i++){
                let outcome = Math.floor(Math.random() * cards.length);
                deck.innerHTML += "<img src=cards/"+ cards[outcome]+">";
                cards.splice(outcome, 1);
            }
            break;
        case 2:
            for(var i = 0; i < 5; i++){
                let outcomeTwo = Math.floor(Math.random() * cards.length);
                deckTwo.innerHTML += "<img src=cards/"+ cards[outcomeTwo]+">";
                cards.splice(outcomeTwo, 1);
            }
            break;
    }

    $(function(){
        $("img").draggable();
    })

    $("img").dblclick(function() {
        $(this).css("display", "none");
    })
    
}

function add(deckNo) {
    switch(deckNo){
        case 1:
            let addOutcomeOne = Math.floor(Math.random() * cards.length);
            deck.innerHTML += "<img src=cards/"+ cards[addOutcomeOne]+">";
            cards.splice(addOutcomeOne, 1);
            break;
        case 2:
            let addOutcomeTwo = Math.floor(Math.random() * cards.length);
            deckTwo.innerHTML += "<img src=cards/"+ cards[addOutcomeTwo]+">";
            cards.splice(addOutcomeTwo, 1);
            break;
    }
}

function reset() {
    cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"]
}