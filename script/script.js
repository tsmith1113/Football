"use strict";


let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
   ];
   //input
   const teamList = document.getElementById("teamList");

   //output
   const outputTeam = document.getElementById("outputTeam");

   //button
   const TeamSelectButton = document.getElementById("TeamSelectButton");


   window.onload = function(){
    
    TeamSelectButton.onclick = onClickedTeamSelectButton;
    populateTeamList()
   };
    
   // once the button is clicked 
   function onClickedTeamSelectButton(){
    console.log(teamList.value);
    
    let selectedValue = teamList.value;
    let TeamSelected = getTeamByCode(selectedValue);
    
    


    // adds the outout once a team is selected and the button is clicked
    if(TeamSelected){
        let message = `You selected: ${TeamSelected.name} ${TeamSelected.code} who plays in ${TeamSelected.plays}.`;
        outputTeam.innerHTML = message;
    }else{
        alert("No team was selected");
    }

    
   };
 

   function populateTeamList(){
    console.log("populate");

    // Add default option
    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a team";
    defaultOption.value = '';
    teamList.appendChild(defaultOption);


    // Add team option
    for(let i = 0; i < teams.length; i++){
        let newOption = document.createElement("option");
        newOption.textContent = teams[i].name;
        newOption.value = teams[i].code;
        teamList.appendChild(newOption);

    }
   
   } 
   // add code
    function getTeamByCode(teamCode) {
    for(let i = 0; i < teams.length; i++){
        if(teams[i].code == teamCode){
            return teams[i];
        }
    }
    return t;
}