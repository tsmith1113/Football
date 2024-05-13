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
    

   function onClickedTeamSelectButton(){
    console.log(teamList.value);
    
    let selectedValue = teamList.value;
    let TeamSelected = getTeamByCode(teamCode);
    message = `You selected: ${TeamSelected.name} (Code: ${TeamSelected.code}) who plays in ${TeamSelected.plays}.`;
    outputTeam.innerHTML = message;



    if (selectedValue == null) {
        alert("No state was selected");
        return; // exit the event handler
       }

    // addParagraph(selectedCode, selectedName);
   };
 

   function populateTeamList(){
    console.log("populate");
    
    function getTeamByCode(teamCode) {
    let t;
    for(let i = 0; i < teams.length; i++){
        if(teams[i].code == teamCode){
            t = teams[i];
        }
    }
    return t;
}
    for(let i = 0; i < teams.length; i++){
        let newOption = document.createElement("option");
        newOption.textContent = teams[i].name;
        newOption.value = teams[i].code;
        teamList.appendChild(newOption);

    }
   
   } 
