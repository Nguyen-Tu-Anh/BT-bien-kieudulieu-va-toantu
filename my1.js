function tinh_diem_trung_binh() {
    let markLy = +document.getElementById('diemly').value;
    let markSinh = +document.getElementById('diemsinh').value;
    let markHoa = +document.getElementById('diemhoa').value;
    let markTB = (markSinh + markHoa + markLy) / 3;
    document.getElementById('result').innerHTML = 'Điểm TB của bạn là:' + ' ' + markTB;
}