function berechneAlter(event) {
    // Website Reload wird verhindert
    event.preventDefault();
    const geburtsJahr = document.getElementById("geburtsjahr").value;

    let berechnung = 2022 - geburtsJahr;

    // spricht das element mit der Id "result" und beschreibt diese mit Inhalt aus Variable number.
    document.getElementById("result").innerHTML = berechnung;

}