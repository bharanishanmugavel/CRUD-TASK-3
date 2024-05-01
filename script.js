document.addEventListener("DOMContentLoaded", function(){
    fetchUsers();
})
let users=[];

async function fetchUsers(){
    const response=await fetch("https://api.openbrewerydb.org/v1/breweries")
    users=await response.json();
    renderUsers();
}

function renderUsers(){
    const userList=document.getElementById("userList");
    userList.innerHTML="";
    users.forEach((user,index)=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td style="color:black">${index + 1}</td>
        <td style="color:blue">${user.name}</td>
        <td style="color:black" >${user.city}</td>
        <td style="color:blue">${user.country}</td>
        <td style="color:black">${user.state_province}</td>
        <td style="color:blue">${user.website_url}</td>`
        userList.appendChild(row);
    });
}