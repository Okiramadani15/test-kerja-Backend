const harga = [100,90,80,75,65];
function profit(arr) {
  const nilai = [];
  for (let i = harga.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (harga[i] - harga[j] > 0) nilai.push(harga[i] - harga[j]);
    }
  }
  if (nilai.length == 0){
    return console.log("harga selalu turun")
  }
  nilai.sort((a,b)=> a-b )
  console.log(nilai[nilai.length -1]);
}
profit(harga)