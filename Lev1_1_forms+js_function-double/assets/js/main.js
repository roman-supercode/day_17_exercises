function zahlVerdoppeln(event) {
    // Website Reload wird verhindert
    event.preventDefault();
    // Inhalt von id "verdoppeln" wird mit 2 multipliziert und variable number gespeichert.
    const number = document.getElementById("verdoppeln").value * 2;
    // Optional: Rechnung auslagern
    // let multiplizieren = number * 2;

    // spricht das element mit der Id "result" und beschreibt diese mit Inhalt aus Variable number.
    document.getElementById("result").innerHTML = number;

}