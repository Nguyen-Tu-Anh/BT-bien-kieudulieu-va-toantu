function chuyen_doi_nhiet_do() {
    let c = +document.getElementById('doC').value;
    let f = 9*c / 5 +32;
    document.getElementById('result').innerHTML = 'Nhiệt độ hiện tại là' + ' ' + f +'F'
}