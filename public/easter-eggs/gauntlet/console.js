function printconsole() {
    fetch("ascii.txt")
        .then(a => a.text())
        .then(result => {
            console.log(result)
        })
}
function ajjYYgnmB7754fd(input) {
    var d = "error password was wrong";
    fetch("https://script.google.com/macros/s/AKfycbx3R0Htg6kEjBZMU4BBluMXSZAQPmFXP7tnswhnJ2qaVtGoO35a/exec?checkpass=yes&secretcode=" + input)
        .then(a => a.json())
        .then(result => {
            if (result.success) {
                d = result.message
            }
            putmessageinp(d);
        })
}