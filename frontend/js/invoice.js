// --------------get commande detile from local storage ------------------------------


let xcart =  JSON.parse(localStorage.getItem("cart"));
let total = localStorage.getItem("total");
let table = document.getElementById('tabFacture');
let totalContainner = document.getElementById('total');
let dateContainner = document.getElementById('date');


let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;

totalContainner.innerText = total;
dateContainner.innerText = dateTime;




for (let i = 0; i < xcart.length; i++) {

    table.innerHTML += `<tr class="service">
    <td class="tableitem"><p class="itemtext">${xcart[i].nom}</p></td>
    <td class="tableitem"><p class="itemtext">${xcart[i].amount} </p></td>
    <td class="tableitem"><p class="itemtext">${xcart[i].prix} dh </p></td>
    </tr>`

}
