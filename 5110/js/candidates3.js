let candidateNamesOne = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore"]

let candidateNamesTwo = ["Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul"]

let candidateNamesThree = ["Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]


let candidatePixOne = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg"]

let candidatePixTwo = ["graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg"]

let candidatesPixThree = ["perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]


// Slideshow One 
let outputOne = document.querySelector('#alsoRanOne');
let nextOne = document.querySelector('#one-next');
let previousOne = document.querySelector('#one-previous')
let i = 0; 

function canShowOne(plusMinus) {
    outputOne.innerHTML = "<div class='cand'>" + candidateNamesOne[i] + "<br> <img src=pix/" + candidatePixOne[i] + "></div>";
    i += plusMinus;

    if (i == candidateNamesOne.length) {
        i = 0
    }

    if (i < 0) {
        i = candidateNamesOne.length - 1; 
    }
}

nextOne.onclick =  () =>  canShowOne(1);
previousOne.onclick = () => canShowOne(-1);

// Slideshow Two
let outputTwo = document.querySelector('#alsoRanTwo');
let nextTwo = document.querySelector('#two-next');
let previousTwo = document.querySelector('#two-previous')
let j = 0; 

function canShowTwo(plusMinus) {
    outputTwo.innerHTML = "<div class='cand'>" + candidateNamesTwo[j] + "<br> <img src=pix/" + candidatePixTwo[j] + "></div>";
    j += plusMinus;

    if (j == candidateNamesTwo.length) {
        j = 0
    }

    if (j < 0) {
        j = candidateNamesTwo.length - 1; 
    }
}

nextTwo.onclick =  () =>  canShowTwo(1);
previousTwo.onclick = () => canShowTwo(-1);

// Slideshow Three
let outputThree = document.querySelector('#alsoRanThree');
let nextThree = document.querySelector('#three-next');
let previousThree = document.querySelector('#three-previous')
let k = 0; 

function canShowThree(plusMinus) {
    outputThree.innerHTML = "<div class='cand'>" + candidateNamesThree[k] + "<br> <img src=pix/" + candidatesPixThree[k] + "></div>";
    k += plusMinus;

    if (k == candidateNamesThree.length) {
        k = 0
    }

    if (k < 0) {
        k = candidateNamesThree.length - 1; 
    }
}

nextThree.onclick =  () =>  canShowThree(1);
previousThree.onclick = () => canShowThree(-1);
