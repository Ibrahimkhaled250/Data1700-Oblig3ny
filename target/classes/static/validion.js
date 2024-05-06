


function validForm() {
    // Initialize ticket information
    let ticket = {
        film: $("#filmer").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#tel").val(),
        epost: $("#epost").val()
    };


    // Clear previous error messages
    $(".error").text("").css('color', '');
    const phonePattern = /^\d{8}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;


    // Validate fields and update error messages
    if (!ticket.fornavn) {
        $("#fornavnError").text("Må skrive fornavn").css('color', 'red');
        valid = false;
    }
    if (!ticket.etternavn) {
        $("#etternavnError").text("Må skrive etternavn").css('color', 'red');
        valid = false;
    }
    if (!phonePattern.test(ticket.tlf)) {
        $("#talError").text("Ugyldig telefonnummerformat").css('color', 'red');
        valid = false;
    }
    if (!emailPattern.test(ticket.epost)) {
        $("#epostError").text("Ugyldig e-postadresseformat").css('color', 'red');
        valid = false;
    }
    if (Number(ticket.antall) <= 0) {
        $("#antallError").text("Du må bestille en eller flere filmer").css('color', 'red');
        valid = false;
    }
    if (!ticket.film) {
        $("#filmError").text("Choose a movie").css('color', 'red');
        valid = false;
    }


    // Submit hvis valid
    if (valid) {
        $.post("/save", ticket, function () {
            movisList();  // Update ticket list
            // Clear form
            $("#filmer").val("");
            $("#antall").val(1);
            $("#fornavn, #etternavn, #tel, #epost").val("");
        });
    }
}

