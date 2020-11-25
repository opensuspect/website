function printconsole(){
    fetch("ascii.txt")
    .then(a => a.text())
    .then(result => {
        console.log(result)
    })
}