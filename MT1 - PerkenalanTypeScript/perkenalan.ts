// Soal 1
let nama: string = "wildan";
let umur: number = 20;
let isActive: boolean = true;
let hobi: any = "main bola";

console.log({nama});
console.log({umur});
console.log({isActive});
console.log({hobi});

// Soal 2
function perkalian(a: number, b: number): number {
  return a * b;
}

console.log(perkalian(5, 5));

// Soal 3
interface Mahasiswa {
    nama: string;
    umur: number;
    jurusan: string;
}

const mhs1: Mahasiswa = {
    nama: "Muhammad Wildan",
    umur: 20,
    jurusan: "Informatika"
};

console.log(mhs1);
console.log(mhs1.nama);
console.log(mhs1.umur);
console.log(mhs1.jurusan);

// Soal 4
class Mobil {
    merk: string;
    tahun: number;

    constructor(merk: string, tahun: number) {
        this.merk = merk;
        this.tahun = tahun;
    }

    info(): string {
        return `Mobil ini adalah ${this.merk}, dibuat pada tahun ${this.tahun}.`;
    }
}

const mobil1 = new Mobil("Toyota", 2022);
console.log(mobil1.info());

