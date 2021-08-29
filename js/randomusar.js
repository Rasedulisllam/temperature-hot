

// display usars details
const displayUsar=data=>{
    const user=data.results[0];
    const users=document.getElementById('usars');
    users.innerHTML=`
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.large}">
        <p>Gender: ${user.gender}</p>
        <p>Location: ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
        <p>Coordinates: latitude: ${user.location.coordinates.latitude}, longitude: ${user.location.coordinates.longitude}</p>
        <span>Postcode: ${user.location.postcode},</span>
        <p>Phone: ${user.phone}</p>
        <p>Email: ${user.email}</p>
    `
}

// load usar details
const loadUsar=async ()=>{
    const usarField=document.getElementById("usars");
    const res=await fetch('https://randomuser.me/api/');
    const data= await res.json();
    displayUsar(data);
}