function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let aleko = document.querySelector("#aleko");
let alekoname = document.querySelector("#alekoname");
let tbmove = 0;
let lrmove = 40;
let scorenum = document.querySelector("#scorenum");
let score = 5;
scorenum.innerHTML = score;



// washashleliiii 

let menubutton2 = document.querySelector("#menubutton2");

//
function MyGamestart() {
    let scoreh2 = document.querySelector("#scoreh2");
    let menuh2 = document.querySelector("#menuh2");
    let menubutton = document.querySelector("#menubutton");
    let section = document.querySelector("#section");
    section.style.display = "flex";
    let menu = document.querySelector("#menu");
    menu.style.display = "none";
    function poopbomb() {
        let img = document.createElement('img');
        section.appendChild(img);
        img.id = 'poop';
        img.src = 'gameimg/poop.png';
        let Randompoop = getRandomInt(9);
        console.log(Randompoop);
        let poopdown = 0;
        let pooplr = Randompoop * 10;
        let poop = document.querySelector("#poop");
        img.style.left = pooplr + "%";
        img.style.top = poopdown + "%";
        if(poopdown == 0){
            for(let i = 0; i <= 22; i++){
                setTimeout(() => {
                    poopdown += 4;
                    poop.style.top = poopdown + "%";
                    if(lrmove == pooplr && poopdown > 87){
                        section.removeChild(img);
                        score -= 5;
                        scorenum.innerHTML = score;
                        poopbomb();
                        if(score == 0){
                            window.location.reload();
                        }
                    }
                    else if(poopdown > 88){
                        section.removeChild(img);
                        poopbomb();
                    }
                }, i * 300);
            }
        }   
    }
     poopbomb();
     function foodbomb() {
        let imgf = document.createElement('img');
        let section = document.querySelector("#section");
        section.appendChild(imgf);
        imgf.id = 'food';
        imgf.src = 'gameimg/food.png';
        let Randompoop = getRandomInt(9);
        let fooddown = 0;
        let foodlr = Randompoop * 10;
        let food = document.querySelector("#food");
        imgf.style.left = foodlr + "%";
        imgf.style.top = fooddown + "%";
        if(fooddown == 0){
            for(let i = 0; i <= 22; i++){
                setTimeout(() => {
                    fooddown += 4;
                    food.style.top = fooddown + "%";
                    if(lrmove == foodlr && fooddown > 87){
                        section.removeChild(imgf);
                        score += 5;
                        scorenum.innerHTML = score;
                        foodbomb();
                        if(score == 20){
                            section.style.display = "none";
                            menu.style.display = "flex";
                            menuh2.innerHTML = "You გადახვედი Wave N2";
                            scoreh2.innerHTML = "Your Score: " +  score;
                            menubutton.style.display = "none";
                            menubutton2.style.display = "flex";
                        }
                    }
                    else if(fooddown > 88){
                        section.removeChild(imgf);
                        foodbomb();
                    }
                }, i * 300);
            }
        }   
    }
    foodbomb();
    function moveright() {
        lrmove += 10;
        aleko.style.left = lrmove + "%";
        console.log(lrmove);
        aleko.style.transform = "rotateY(0deg)";
        alekoname.style.transform = "rotateY(0deg)";
        if(lrmove > 80){
            lrmove = 80;
            console.log(lrmove);
        }
    }
    function moveleft() {
        lrmove -= 10;
        aleko.style.left = lrmove + "%";
        console.log(lrmove);
        aleko.style.transform = "rotateY(180deg)";
        alekoname.style.transform = "rotateY(180deg)";
        if(lrmove < 10){
            lrmove = 10;
            console.log(lrmove);
        }
    }
    
    
    /*document.addEventListener('keypress', function(event){
        console.log('Строковый код: ', event.code);
        console.log('ASCII код: ', event.charCode);
    });*/
    document.addEventListener('keypress', function(event){
        if (event.charCode == 97){
            moveleft();
        }
        else if (event.charCode == 100){
            moveright();
        }
    });
}

function moveright() {
    lrmove += 10;
    aleko.style.left = lrmove + "%";
    console.log(lrmove);
    aleko.style.transform = "rotateY(0deg)";
    alekoname.style.transform = "rotateY(0deg)";
    if(lrmove > 80){
        lrmove = 80;
        console.log(lrmove);
    }
}
function moveleft() {
    lrmove -= 10;
    aleko.style.left = lrmove + "%";
    console.log(lrmove);
    aleko.style.transform = "rotateY(180deg)";
    alekoname.style.transform = "rotateY(180deg)";
    if(lrmove < 10){
        lrmove = 10;
        console.log(lrmove);
    }
} 
