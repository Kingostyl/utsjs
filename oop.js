class hewan {
  constructor(jenishwn, namahwn, hargahwn, warnahwn, makananhwn) {
    this.jenis = jenishwn;
    this.nama = namahwn;
    this.harga = hargahwn;
    this.warna = warnahwn;
    this.makan = makananhwn;
  }

  membeli(by) {
    return (
      "hewan ini di beli " +
      by +
      " jenis hewanya adalah " +
      this.jenis +
      " dengan harga " +
      this.harga +
      " warnanya " +
      this.warna +
      " dan dia mengasih nama " +
      this.nama
    );
  }
  merawat() {
    return "dia merawatnya dengan mengasih " + this.makan + " supaya cepat tumbuh kuat";
  }
}

var hewanjiro = new hewan("anggora", "ruby", 10000000, "hitam", "daging")
console.log(hewanjiro.jenis);
console.log(hewanjiro.nama);
console.log(hewanjiro.harga);
console.log(hewanjiro.warna);
console.log(hewanjiro.makan);

console.log(hewanjiro.membeli("jiro"));
console.log(hewanjiro.merawat());
