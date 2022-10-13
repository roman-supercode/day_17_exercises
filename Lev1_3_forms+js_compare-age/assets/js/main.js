function altersDifferenz(event) {
    // Website Reload wird verhindert
    event.preventDefault();
    const alterPersonOne = document.getElementById("person_one").value;
    const alterPersonTwo = document.getElementById("person_two").value;

    let differenz = alterPersonOne - alterPersonTwo;
    differenz *= -1;

    // spricht das element mit der Id "result" und beschreibt diese mit Inhalt aus Variable number.
    document.getElementById("result").innerHTML = differenz;

}