// function sum(a,b){
//     return a+b;
// }

//arrow functions
const sum = (a,b) => {
    return a+b;
}

// //coba export fungsi agar bisa dipakai di file lain
module.exports = {
    sum
}

//simplified export. tinggal tambah exports
// exports.sum = (a,b) => a+b;
//function arrow tanpa {} bisa jika hanya ada 1 statement