function tampilkanNama() {
    var nama = document.getElementById("inputNama").value;
  
    if (nama.trim() === "") {
      document.getElementById("output").textContent = "Silakan masukkan nama terlebih dahulu.";
    } else {
      document.getElementById("output").textContent = "Selamat Ulang Tahun, " + nama + " cantik";
    }
  }
  
