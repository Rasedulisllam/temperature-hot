
// Teams details
const teamDelails=async (teamId)=>{
    const res=await fetch(`https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchteams.php?sname=Arsenal`)
    const data=await res.json();
    console.log(data)
}

// display fetch teams data
const displayFetchData=data=>{
    const displayField=document.getElementById('display-teams')
    console.log(data.teams)
    const teams=data.teams;
    if(data.teams==null){
        console.log("enter valid input")
    }
    else{
        teams.forEach(team =>{
            const div =document.createElement('div');
            div.classList.add('col')
            div.innerHTML=`
                  <div class="card h-100">
                    <img src="${team.strTeamBadge}" class="card-img-top" alt="team image">
                    <div class="card-body">
                      <h5 class="card-title">${team.strAlternate}</h5>
                      <a href="#" onclick="teamDelails(${team.idTeam})" class="btn btn-outline-danger fw-bold">Team delails</a>
                    </div>
                  </div>
            `
            displayField.appendChild(div)
        })
    }
    
}


//  load search input 
const loadSearchInput=async ()=>{
    const searchInput=document.getElementById("search-field");
    const searchinputValue=searchInput.value;
    if(searchinputValue=="" || searchinputValue==null){
        console.log("plasse enter some thing search field")
    }
    else{
       const res=await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchinputValue}`);
       const data=await res.json();
       displayFetchData(data);
    }
}