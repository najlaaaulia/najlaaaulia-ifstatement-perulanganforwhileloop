// Program menggunakan if statement dengan operasi logika (AND dan OR)
var kondisi1 = true;
var kondisi2 = false;

if (kondisi1 && kondisi2) {
  console.log("Kondisi 1 DAN Kondisi 2 terpenuhi.");
} else if (kondisi1 || kondisi2) {
  console.log("Kondisi 1 ATAU Kondisi 2 terpenuhi.");
} else {
  console.log("Kondisi 1 DAN Kondisi 2 tidak terpenuhi.");
}

// Program menggunakan perulangan for
console.log("Menggunakan for loop:");
for (var i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Program menggunakan perulangan while
console.log("Menggunakan while loop:");
var j = 1;
while (j <= 5) {
  console.log("Iterasi ke-" + j);
  j++;
}
