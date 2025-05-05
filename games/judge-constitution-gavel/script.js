// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  defi = document.querySelector(".defi"),
  optionImages = document.querySelectorAll(".option_image");

  document.getElementById('playAgainButton').addEventListener('click', function() {
    location.reload(); // Reloads the current page
});


  
// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/judge.png";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = ["images/judge.png", "images/constitution.png", "images/gavel.png"];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["J", "C", "G"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["J", "C", "G"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        "JJ": "Draw",
        "JC": "Cpu",
        "JG": "User",
        "CC": "Draw",
        "CJ": "User",
        "CG": "Cpu",
        "GG": "Draw",
        "GJ": "Cpu",
        "GC": "User"
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      //result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
      let ans = userValue === cpuValue ? "Match Draw<br>" : `${outComeValue} Won!!<br>`; 

      let ans1;
      if(userValue + cpuValue =="JJ"){
        ans+="Two Judges in agreement, the decision stands firm!";
        ans1="<br><br>Judge: A public official appointed to decide cases in a court of law";
       }
      if(userValue + cpuValue =="JC"){
       ans+="The Constitution is the supreme law that even the Judge must follow!";
       ans1="<br><br>Judge: A public official appointed to decide cases in a court of law";
      }
      if(userValue + cpuValue =="JG"){
        ans+="The Judge overrules the Gavel with authority!";
        ans1="<br><br>Judge: A public official appointed to decide cases in a court of law";
      }
      if(userValue + cpuValue =="CC"){
       ans+="The Constitution remains unchallenged, a stalemate";
       ans1="<br><br>Constitution: A set of fundamental principles or established precedents according to which a state or other organization is governed";
       }
      if(userValue + cpuValue =="CJ"){
        ans+="The Constitution is the supreme law that even the Judge must follow!";
        ans1="<br><br>Constitution: A set of fundamental principles or established precedents according to which a state or other organization is governed";
      }
      if(userValue + cpuValue =="CG"){
        ans+="The Gavel enforces the laws written in the Constitution!";
        ans1="<br><br>Constitution: A set of fundamental principles or established precedents according to which a state or other organization is governed";
      }
      if(userValue + cpuValue =="GG"){
        ans+="Two Gavels clash, the enforcement is balanced!";
        ans1="<br><br>Gavel: A small hammer used by a judge or an auctioneer to call for attention or to signal a decision";
      }
      if(userValue + cpuValue =="GJ"){
        ans+="The Judge overrules the Gavel with authority!";
        ans1="<br><br>Gavel: A small hammer used by a judge or an auctioneer to call for attention or to signal a decision";
       }
      if(userValue + cpuValue =="GC"){
        ans+="The Gavel enforces the laws written in the Constitution!";
        ans1="<br><br>Gavel: A small hammer used by a judge or an auctioneer to call for attention or to signal a decision";

      }

      result.innerHTML=ans;
      defi.innerHTML=ans1;
      
    }, 2500);
  });
});
