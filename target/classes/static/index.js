
function movisList() {
    $.get("/hentAlleData", function(data) {
        formaterData(data);
    }).fail(function() {
        alert('Failed to retrieve tickets from the server.');
    });
}

function formaterData(tickets) {
    let show_ticket = "";
    for (const ticket of tickets) {
        show_ticket += `<tr>
                   <td>${ticket.film}</td>
                   <td>${ticket.antall}</td>
                   <td>${ticket.fornavn}</td>
                   <td>${ticket.etternavn}</td>
                   <td>${ticket.tlf}</td>
                   <td>${ticket.epost}</td>
               </tr>`;
    }
    $("#tickets").html(show_ticket);
}
function FjernBestillingen(){
    $.get("/fjernaData", function () {
        movisList();
    });
}
$(document).ready(function() {
    movisList();
});
