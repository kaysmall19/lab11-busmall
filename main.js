// sanity test
//console.log ("UNICORNS")

//Create a constructor function for:
//Name of the product
//File path of image
//Times the image has been shown

class busmallPictures
{
    // constructor function for the ENTIRE project.

    clicks = 0; //amount of clicks
    timeShown = 0; // amount of times of image

    // Initial constructor (Must be named CONSTUCTOR)
    constructor (name , imageSrc)
    {
        this.name = name; // image name
        this.imageSrc = imageSrc; // the source to the image
    };
}

// Add variables we need in multiple places
let leftImageOnThePage = null;
let middleImageOnThePage = null;
let rightImageOnThePage = null;
let totalClicks = 0;
const MAX_CLICKS_ALLOWED = 8;

// pictures that i want displayed
let AllbusmallPictures = 
{
    new busmallPictures('banana', 'busmall-project/busmall-pics/banana.jpg'),
    new busmallPictures('breakfast', 'busmall-project/busmall-pics/breakfast.jpg'),
    new busmallPictures('unicorn', 'busmall-project/busmall-pics/unicorn.jpg'),
    new busmallPictures('wine-glass', 'busmall-project/busmall-pics/wine-glass.jpg')
};

//Setup the element references in the DOM
const busmall_header = document.getElementById("busmall-header");
const busmall_section = document.getElementById("busmall-section");
//left image and text
const left_busmall_image = document.getElementById("left-busmall-img");
const left_busmall_text = document.getElementById("left-busmall-text");
//middle image and text
const middle_busmall_image = document.getElementById("middle-busmall-img");
const middle_busmall_image = document.getElementById("middle-busmall-text");
//right image and text
const right_busmall_image = document.getElementById("right-busmall-img");
const right_busmall_text = document.getElementById("right-busmall-text");
//displaying the final scores in the DOM
const final_score = document.getElementById("finalScores");
//results button for later
const results_button = document.createElement("button");
results_button.innerText = " CLICK ME FOR RESULTS!!";