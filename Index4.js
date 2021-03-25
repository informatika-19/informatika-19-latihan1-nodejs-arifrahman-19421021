// Array
// const listNilai = ['A', 'B', 'C']
// console.log(listNilai[2])

const dataMahasiswa = [
    {
        Nama: 'ARIF RAHMAN',
        NPM: '19421021',
        PRODI: 'INFORMATIKA'
    },
    {
        Nama: 'TERSERAH',
        NPM: '11111111',
        PRODI: 'KELAUTAN'
    },
    {
        Nama: 'TERSERAH',
        NPM: '11111111',
        PRODI: 'KELAUTAN'
    }
]

//console.log(dataMahasiswa[1].NPM)

for (let i in dataMahasiswa) {
    console.log(dataMahasiswa[i].Nama + ' - ' + dataMahasiswa[i].NPM + ' - ' + dataMahasiswa[i].PRODI)
}