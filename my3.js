function tinh_dien_tich_hinh_tron() {
    const PI = 3.14;
    let r = +document.getElementById('banKinh').value;
    let S = r * r * PI;
    let P = 2 * r * PI;
    document.getElementById('result').innerHTML = 'Diện tích hình tròn =' + ' ' + S + '(dvdt)';
    document.getElementById('result2').innerHTML = 'Chu vi hình tròn =' + ' ' + P + '(dvcv)'
}
