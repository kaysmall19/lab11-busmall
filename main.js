// sanity test
//console.log ("UNICORNS")

//As a user, I would like to display three unique products by chance
// so that the viewers can pick a favorite.

// 3 projects = 3 images, 3 names (constructor)
// viewers pick a favorite = event handler where viewers can clicked a picture

// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image
// Times the image has been shown
// Create an algorithm that will randomly generate three unique product images from the images directory
// and display them side-by-side-by-side in the browser window.

//============== CREATING OUR CONSTRUCTOR FUNCTION================//
class BusMallPictures {
    //This is a class constructor function we will be the base of the ENTIRE project
  
    // properties that i will want to use outside of the parameters.
    clicks = 0; // amount of clicks for one image
    timesShown = 0; // amounst of times for said image
  
    //encapsulated inside of class
    // keep up with a name
    // keep up with source of image
  
    // Initial constructor (MUST BE NAME 'CONSTRUCTOR')
    constructor(
      nameofPicture,
      imageSrc // another method
    ) {
      this.nameofPicture = nameofPicture;
      this.imageSrc = imageSrc;
    }
  }
  // console.log(BusMallPictures); //debugger for our class!
  // This class above is basically a template to where we would store ALL of our pictures.
  
  //Lets fill in the template with the pictures we want
  
  let allBusmallPics = [
    //     // you can put all of your new objects inside of your array
    // Below, we have constructed 10 new objects that each have a picture name and url to pull it up!
  
    new BusMallPictures("bag", "Pictures/bag.jpg"),
    new BusMallPictures("banana", "Pictures/banana.jpg"),
    new BusMallPictures("boots", "Pictures/boots.jpg"),
    new BusMallPictures("breakast", "Pictures/breakfast.jpg"),
    new BusMallPictures("chair", "Pictures/chair.jpg"),
    new BusMallPictures("dragon", "Pictures/dragon.jpg"),
    new BusMallPictures("pen", "Pictures/pen.jpg"),
    new BusMallPictures("shark", "Pictures/shark.jpg"),
    new BusMallPictures("sweep", "Pictures/sweep.png"),
    new BusMallPictures("unicorn", "Pictures/unicorn.jpg"),
  ];
  //  console.log(allBusmallPics); // Sanity test to figure out if the objects show up on the console.
  
  //=========================== END OF CONSTRUCTOR FUNCTION ==============================//
  
  //================== ALL OF THE VARIABLES THAT WILL BE USED ===================== //
  
  let leftBusMallPic = null; //What image would appear on the left.
  
  let middleBusMallPic = null; // What image will appear in the middle.
  
  let rightBusMallPic = null; // what image would appear on the right
  
  let totalClicks = 0; //total amount of clicks
  
  const MAX_CLICKS = 5; // amount of clicks allowed
  
  // We will randomly pull from lsit of  image objects and display them
  // We need an array to keep up with the objects!
  
  // ==================== END OF VARIABLE ================================= //
  
  // ================== SET UP OUR ELEMENTS IN THE DOM ======================= //
  // Setting up all of our elements in the DOM to manipulate them
  const BUSMALL_HEADER = document.getElementById("busmall-header");
  const BUSMALL_SECTION = document.getElementById("all-busmall-section");
  
  //LEFT BUSMALL IMAGE AND TEXT
  const LEFT_BUSMALL_IMAGE = document.getElementById("left-busmall-img");
  const LEFT_BUSMALL_TEXT = document.getElementById("left-busmall-text");
  
  //MIDDLE BUSMALL IMAGE AND TEXT
  const MIDDLE_BUSMALL_IMAGE = document.getElementById("middle-busmall-img");
  const MIDDLE_BUSMALL_TEXT = document.getElementById("middle-busmall-text");
  
  //RIGHT BUSMALL IMAGE AND TEXT
  const RIGHT_BUSMALL_IMAGE = document.getElementById("right-busmall-img");
  const RIGHT_BUSMALL_TEXT = document.getElementById("right-busmall-text");
  
  //will display our final scores in the browser
  const FINAL_SCORE = document.getElementById("finalScores");
  
  // create our button in the JAVASCRIPT because we don't want it to show up right now
  const RESULTS_BUTTON = document.createElement("button");
  RESULTS_BUTTON.className = "btn btn-primary";
  RESULTS_BUTTON.innerText = "Click me to see results!";
   
  
  //  Q: What do we want to do now that we have targeted our image and text ids?
  //  A: We want to connect the image ids with the images and the text ids with the text.
  
  // ======================= CREATE A FUNCTION THAT WILL RANDOMLY GENERATE OUR PICTURES ======================== //
  // out of the 10 photos we have in the 'allBusmallPics' array, we want to generate only three at a time that are chosen by the computer.
  let randomPhotoClick = function () {
    // this is an ANON function. 
    let randomPhotoLeft = Math.floor(Math.random() * allBusmallPics.length); // generates a random photo on the left side of the page
    let randomPhotoMiddle = Math.floor(Math.random() * allBusmallPics.length); // generates a random photo in the middle of the page
    let randomPhotoRight = Math.floor(Math.random() * allBusmallPics.length); // generates a random photo on the right side of the page
  
    // =============== CHECKING FOR DUPLICATE PHOTOS =================== //
  
  for (i = 0; i < MAX_CLICKS; i++) //We want to randomize between 0 to the given clicks
  {
    if(randomPhotoLeft === randomPhotoMiddle)
    {
     randomPhotoMiddle = Math.floor(Math.random() * allBusmallPics.length); // middle is set to another random pic
  
    }
    
    
      else if (randomPhotoRight === randomPhotoLeft)
      {
        randomPhotoLeft = Math.floor(Math.random() * allBusmallPics.length); // right is set to another random pic
      }
      
      else if (randomPhotoMiddle === randomPhotoRight)
      {
        randomPhotoRight = Math.floor(Math.random() * allBusmallPics.length); // right is set to another random pic
      }
    
  
  }
  
    // We should check to make sure we dont display the same image
    // randomPhotoLeft = randomPhotoRight; // Let's start by setting the 2nd image array index equal to the first
    // // // Then we can just loop until we get a different index value. we use a for loop because we dont know how many we times we want to loop to get a new picture
    // while (randomPhotoLeft === randomPhotoRight) {
    //   //   // while left is equal to right, randomize the left photo again
    //   randomPhotoLeft = Math.floor(Math.random() * allBusmallPics.length);
    // }
  
    // while (randomPhotoRight === randomPhotoMiddle) {
    //   randomPhotoRight = Math.floor(Math.random() * allBusmallPics.length);
    //   // while right pic is equal to middle, loop the right photo again
    // }
    // while (randomPhotoLeft === randomPhotoMiddle) {
    //   randomPhotoRight = Math.floor(Math.random() * allBusmallPics.length);
    //   // while left is equal to middle, loop the right photo again
    // }
    // =========== END OF CHECKING DUPLICATE PHOTOS ================== //
  
    // Update left busmall picutres to show up in DOM. the random photo is generated inside of the square brackets
    LEFT_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoLeft].imageSrc;
    LEFT_BUSMALL_TEXT.innerText = allBusmallPics[randomPhotoLeft].nameofPicture;
  
    // Update Middle busmall picutres to show up in DOM. the random photo is generated inside of the square brackets
    MIDDLE_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoMiddle].imageSrc;
    MIDDLE_BUSMALL_TEXT.innerText =
      allBusmallPics[randomPhotoMiddle].nameofPicture;
  
    // Update Right busmall picutres to show up in DOM. the random photo is generated inside of the square brackets
    RIGHT_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoRight].imageSrc;
    RIGHT_BUSMALL_TEXT.innerText = allBusmallPics[randomPhotoRight].nameofPicture;
  
    // We store our busmall pics inside of our variables!!
    leftBusMallPic = allBusmallPics[randomPhotoLeft];
    middleBusMallPic = allBusmallPics[randomPhotoMiddle];
    rightBusMallPic = allBusmallPics[randomPhotoRight];
  
   
  };
  
  // ======================= END OF OUR RANDOM GENERATOR FUNCITON ================================== //
  
  // We have managed to get the random photos to show up on the screen!!
  
  //================== END OF DOM SETUP ============================ //
  
  
  //============= EVENT LISTENER=================//
  
  // Handle clicks on the product pictures
  // Get which picture clicked on from the EVENT TARGET.
  const handleClickOnPicture = function (evt) {
    // a function is stored inside of a variable we use to handle the picture clicked
    console.log(`You clicked this target element id ${evt.target.id}`);
    // if they can still click, do clicky things
    if (totalClicks < MAX_CLICKS) {
      // condition to check if the total clicks the user generates is less than the amount WE SPECIFY.
  
      const thingWeClickedOn = evt.target; //.notation;
      const id = thingWeClickedOn.id; // to check what we have clicked! it checks the 'ID' of each PICTURE!
  
      // Mark that they were shown
      leftBusMallPic.timesShown++; //increments the amount of times it has been clicked on the page!
      middleBusMallPic.timesShown++; //increments the amount of times it has been clicked on the page!
      rightBusMallPic.timesShown++; //increments the amount of times it has been clicked on the page!
  
      //console log to check if the numbers are incrementing each time we click:
  
      console.log(
        `Left pic ${leftBusMallPic.nameofPicture} has been shown ${leftBusMallPic.timesShown}, middle pic ${middleBusMallPic.nameofPicture} has been shown ${middleBusMallPic.timesShown}, and the right pic ${rightBusMallPic.nameofPicture} has been shown ${rightBusMallPic.timesShown} so far.`
      );
  
      // Check which was clicked and update counter
      if (
        id === "left-busmall-img" ||
        id === "right-busmall-img" ||
        id === "middle-busmall-img"
      ) {
        //track the pcitures from the ids we recieved from the DOM.
  
        if (id === "left-busmall-img") {
          // clicked on the left image
          leftBusMallPic.clicks++; // adds to the amount of clicks!
          console.log(
            `Left pic ${leftBusMallPic.nameofPicture} has ${leftBusMallPic.clicks} so far`
          );
        }
  
        if (id === "middle-busmall-img") {
          // clicked on the middle image
          middleBusMallPic.clicks++; //adds to the amount of clicks!
          console.log(
            `Middle pic ${middleBusMallPic.nameofPicture} has ${middleBusMallPic.clicks} so far`
          );
        }
  
        if (id === "right-busmall-img") {
          // clicked on the right image
          rightBusMallPic.clicks++; //adds to the amount of clicks!
          console.log(
            `Right pic ${rightBusMallPic.nameofPicture} has ${rightBusMallPic.clicks} so far`
          );
        }
  
        //after we update the old, pick new pictures to reset!
      }
      randomPhotoClick();
    }
  
    // increments amount of total clicks in all.
    totalClicks++;
    //when they reach total max clicks, remove the click function
    if (totalClicks === MAX_CLICKS) {
      BUSMALL_SECTION.removeEventListener("click", handleClickOnPicture); // stops the user from clicking any more pictures in the section.
      console.log("You picked 5 pictures, thanks!"); //sanity test to check if the max amount of clicks is documented
  
      // button to click to show results
      // button appears in if statement
      BUSMALL_SECTION.appendChild(RESULTS_BUTTON); // make the button appear in our DOM.
      RESULTS_BUTTON.addEventListener("click", finalResultsTotal); // Wrap the total results in a function and use an addevent listener to call the button!
      function finalResultsTotal() {
        makeAChart(); // call the function make a chart
        updateLocalData();
  
        // display the clicks to the page
        for (let index = 0; index < allBusmallPics.length; index++) {
          //for loop to go through all of the pictures to see what was clicked
          // Probably can do this on one line with dot notation/nesting
          let newLiScore = document.createElement("li");
          newLiScore.className = "list-group-item"
          newLiScore.innerText = `${allBusmallPics[index].nameofPicture}: ${allBusmallPics[index].clicks}`; // the name of the pic, and how many times it was clicked
          FINAL_SCORE.appendChild(newLiScore); // Add score
        }
      }
    }
  };
  
  //================ LAB 2 ==================================//
  
  // As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.
  // Update your algorithm to randomly generate three unique product images from the images directory.
  // Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
  
  // Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the <canvas> tags)
  // Place the bar chart in the section located beneath your three product images
  // The bar charts should only appear after all voting data has been collected.
  
  // ======================== CHART.JS TABLE DATA ============================ //
  function makeAChart() {
    // ============= CREATING OUR ARRAY VALUES  ===================== //
    // We placed all the table chart data inside of a function!
    // FIrst, we need two arrays to hold our values
    let storeTheNamesArray = [];
    let storeTheTotalsArray = []; // empty array because we will push all the totals inside of this.
    let timesShownArray = [];
  
    // lets start with our names for loop because we want to iterate through the object array and grab all the names.
    // ======= storing the names array ========= //
    for (i = 0; i < allBusmallPics.length; i++) {
      // what do we want to do next?
      // we want to push ALL of our names inside of our 'storeTheNameArray'
  
      storeTheTotalsArray.push(allBusmallPics[i].clicks); //lets try storing that array as soon as the button is clicked
      storeTheNamesArray.push(allBusmallPics[i].nameofPicture); // ets store all the names inside of our array!
      timesShownArray.push(allBusmallPics[i].timesShown); // let's store all of the timesshown inside of our array!
    }
  
    console.log(storeTheNamesArray); //debugging
    console.log(storeTheTotalsArray); //debugging
    console.log(timesShownArray); //debugging
  
    // ==== END OF STORING OUR ARRAY VALUES ===== //
  
    // Now that we have our data, we can make a chart for it!
  
    // ============ CREATING THE BAR CHART ================//
  
    // we create a label which is our array of names!
    const labelsForChart = storeTheNamesArray;
    //MATCHING VALUES THAT APPLY FOR OUR LABELS
  
    const data = {
      labels: labelsForChart, // refrence your array that you stored your names!
      datasets: [
        {
          label: "Clicks", // This will show up as text in our chart
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: storeTheTotalsArray, // store your click totals array here!
        },
        {
          label: "Times Image Is Shown", // This will show up as text in our chart
          backgroundColor: "#99FF99",
          borderColor: "#99FF99",
          data: timesShownArray, // store your times shown totals array here!
        },
      ],
    };
  
    const configTheData = {
      type: "bar",
      data,
      options: {},
    };
  
    //   POE:
    let myBusMallChart = new Chart( //creating a new busmall chart object! (remember that everything really IS an object)
      document.getElementById("myChart"),
      configTheData
    );
  
    // I have to have an array of product image objects to get this chart working!
    //   iterate through objects name and counts and push it into two arrays
  
    // =================END OF CHART.JS ==================================== //
  }
  
  BUSMALL_SECTION.addEventListener("click", handleClickOnPicture); // adding the event listener to the section!
  randomPhotoClick(); //starts us off when the user first loads the page.
  
  // ============= WORKING ON LOCAL STORAGE ========== //
  
  // TODO:
  
  // As a user, I would like my data to persistently track totals between page refreshes,
  //  so that I can keep track of the aggregate number of votes.
  
  //we want to store all the generated data inside the page so we can keep adding more!
  
  // Implement local storage into your current application
  // Make sure the data persists across both browser refreshes and resets
  // Hints:
  
  // Store the products array into local storage as a formatted JSON string
  // Retrieve the products array from local storage and then utilize the JSON.Parse() function.
  
  function updateLocalData() {
    // function we will use to store the data we want
    const arrayString = JSON.stringify(allBusmallPics); // global array set to a JSON string to transfer data.
    //  console.log(`${arrayString}`) //debugging works. shows up in console.
    // using key/ value pairs to show up in local storage
    localStorage.setItem("allproducts", arrayString); // we are using the power local storage to save our objects.
  
    //  summary so far:
    //we have made a variable to transfer our array into a string
    // we have JSON stringified our array of data.
    // we have set our data into a local storage for reuse!
  }
  
  // NEXT STEPS:
  // where would we want to call our 'get local storage'?
  
  function getLocalStorage() {
    // getting the stored data from the local storage
  
    // Here, we are retriving the data from the local storage
    const oldData = localStorage.getItem("allproducts");
  
    // console.log(` old data is ${oldData}`); // debugger works
  
    // Here, we create another variable that uses JSON parse. this makes sure that all the string data is turned back into something we use for our JS.
    const allProductData = JSON.parse(oldData);
  
    // if product data is null, we can throw an error
    if (allProductData !== null) {
      allBusmallPics = allProductData;
    } else {
      console.log("Local Storage ready...");
    }
  }
  
  getLocalStorage(); // lets call it here. It retrieves all the data and saves it
  
  //TODO: REFRESH ON EVENT LISTENERS
  // TODO: Research more on why we use ANON functions.