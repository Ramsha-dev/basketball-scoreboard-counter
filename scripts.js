let homecount = 0;
let guestCount = 0;

function add1(){

    guestCount += 1;
    let guestCountEl = document.getElementById('guestCount');

    guestCountEl.textContent = guestCount;

}

function add2(){
    guestCount += 2;
    let guestCountEl = document.getElementById('guestCount');

    guestCountEl.textContent = guestCount;
}

function add3(){
    guestCount += 3;
    let guestCountEl = document.getElementById('guestCount');

    guestCountEl.textContent = guestCount;
}

function homeadd1(){

    homecount += 1;
    let homeCountEl = document.getElementById('homeCount');

    homeCountEl.textContent = homecount;

}

function homeadd2(){
    homecount += 2;
    let homeCountEl = document.getElementById('homeCount');

    homeCountEl.textContent = homecount;
}

function homeadd3(){
    homecount += 3;
    let homeCountEl = document.getElementById('homeCount');

    homeCountEl.textContent = homecount;
}

function reset(){
    homecount = 0;
    guestCount = 0;

    let homeCountEl = document.getElementById('homeCount');
    let guestCountEl = document.getElementById('guestCount');

    homeCountEl.textContent = homecount;
    guestCountEl.textContent = guestCount;

}