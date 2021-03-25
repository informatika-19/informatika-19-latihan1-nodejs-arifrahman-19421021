function hitungNilai (Nilai1, Nilai2) {
    return Nilai1 + Nilai2
}

const hasil = hitungNilai(14, 8)
//console.log(hasil)

const buatNasi = (Beras, Air) =>{
if(Beras){
    console.log('Beras OK')
}else{
    console.log('Mohon Masukkan Beras 10 KG')
}
if (Air){
    console.log('Air OK')
}else{
    console.log('Mohon Masukkan Air 10 Liter')
}
}

buatNasi('Beras', 'Air')