// Notes:
// Code may break when adding more pictures to "Images/Showcase/".
// Will affect 'picCount', and 'showcaseIndex' variables.


// let fs = require('fs');
// let showcaseImagesAll = fs.readdirSync("./Images/Showcase");
// let picCount = showcaseImagesAll.length;


// Initiate variables
let showcasePrvIMG = document.getElementById("previous_img");
let showcaseCurIMG = document.getElementById("current_img");
let showcaseNxtIMG = document.getElementById("next_img");

let showcasePrvBTN = document.getElementById("previous_btn");
let showcaseNxtBTN = document.getElementById("next_btn");

let showcaseIndex = 0;
let picCount = 6;

let showcase_container = document.getElementById("image_list");



// Move/animate elements inplace
// showcasePrvIMG.style.marginTop = "-30vh";
// showcaseCurIMG.style.marginTop = "-30vh";
// showcaseNxtIMG.style.marginTop = "-30vh";

// showcaseNxtBTN.style.marginRight = "-30vw";
// showcasePrvBTN.style.marginLeft = "-30vw";


setShowcaseImages();

// showcaseSlideShow = setInterval(setShowcaseImages, 3000);

playShowcase = setInterval(setShowcaseImages, 3000);
// clearInterval(playShowcase);


function setShowcaseImages(){
    
    if(picCount<3){
        //set showcase imgs to default; display message in current img
        alert("add more pictures to the 'Showcase Folder'.");
    }
    else{

        showcasePrvIMG.src = "Images/Showcase/" + String(showcaseIndex % picCount) + ".jpg";
        showcaseCurIMG.src = "Images/Showcase/" + String((showcaseIndex % picCount) + 1) + ".jpg";
        showcaseNxtIMG.src = "Images/Showcase/" + String((showcaseIndex % picCount) + 2) + ".jpg";

        if((showcaseIndex % picCount) == 4){
            showcaseNxtIMG.src = "Images/Showcase/" + String(0) + ".jpg";
        }
        if((showcaseIndex % picCount) == 5){
            showcaseCurIMG.src = "Images/Showcase/" + String(0) + ".jpg";
            showcaseNxtIMG.src = "Images/Showcase/" + String(1) + ".jpg";
        }

        showcaseIndex++;
    }
}

function changePic(direction) {
    Showcase('stop'); 

    if (direction == 'next'){
        setShowcaseImages();
    }
    else if (direction == 'previous'){
        if(showcaseIndex < 2){
            showcaseIndex = picCount-1;
        }
        else{
            showcaseIndex -= 2;
        }
        setShowcaseImages();
    }
    else{
        alert("Wrong argument for 'changePic' function.")
    }

    Showcase('play'); 
}


function showMenu() {
    let x = document.getElementById("right_nav_ul");
    if (x.style.left == "-100%") {
        x.style.left = "10px";
    } 
    else {
        x.style.left = "-100%";
    }
}

function Showcase(show){
    playShowcase = setInterval(setShowcaseImages, 3000);

    if(show == 'stop'){
        clearInterval(playShowcase); 
    }
}

// let showcase_left = document.getElementById("showcase_left;");
// let showcase_right = document.getElementById("showcase_right;");

function Showcase_Scroll(left){
    if(left == "left"){
        // showcase_container.scrollBy(0, 300);
        showcase_container.scrollLeft(200);
    }
    else
    showcase_container.scrollRight(200);
    // top: 100,
    //     left: 100,
    //     behavior: "smooth",
    //   });
}





// #product_showcase{
//     /* background: lightgrey; */
    
//     width: 100%;
//     height: 40vh;


//     /* margin-top: 20px; */
//     /* margin-left: 5vw; */
//     /* padding-top: 10px; */
//     /* padding-left: 2%; */

//     display: flex;
    
//     justify-content: center;

//     align-items: center;

//     transition: all .5s;
// }

// #previous_product div{
// }


// #current_product{
// }

// #current_product div{

// }

// #previous_product, #next_product{
//     /* background: red; */

//     display: flex;
//     align-items: center;

//     margin: 30px;
// }


// #next_product div{
// }

// #previous_btn, #next_btn{
//     height: 40px;
//     width: 40px;
//     cursor: pointer;

// }
// #previous_btn{
//     margin-right: 20px;
// }

// #next_btn{
//     margin-left: 20px;
// }


// #previous_img, #next_img{
//     height: 300px;
//     width: 250px;
// }

// #previous_img{
//     /* margin-left: 30%; */
// }

// #next_img{
//     margin-right: 30%;
// }


// #previous_img, #current_img, #next_img{
//     border-radius: 15px;

// }


// #current_img{
//     height: 350px;
//     width: 300px;
// }


// #previous_img, #current_img, #next_img
// {
//     margin-top:0;
// } 

// #next_btn
// {
//     margin-right:0;
// }

// #previous_btn
// {
//     margin-left:0;
// }
 