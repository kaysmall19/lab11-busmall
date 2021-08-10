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

// pictures that i want displayed
let AllbusmallPictures = 
{
    new busmallPictures("banana", "busmall-project/busmall-pics/banana.jpg"),
    new busmallPictures("breakfast", "busmall-project/busmall-pics/breakfast.jpg"),
    new busmallPictures("unicorn", "busmall-project/busmall-pics/unicorn.jpg"),
    new busmallPictures("wine-glass", "busmall-project/busmall-pics/wine-glass.jpg")
}