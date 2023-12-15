const bilangan = [2,7,11,15] 
 function detect(params) {
    let angka = params
    const nilai = []
    for(let i = bilangan.length -1;  i  >=  0; i--){
        console.log(params)
        if (angka >= bilangan[i] ){
            nilai.unshift(i) 
            angka -= bilangan[i]
        }
    }
    if(nilai.length > 2 || nilai.length < 2 || angka !== 0  ) return console.log("no way")
    return console.log(nilai)
 }
 detect(9)

