// console.log('burdayaiz')


// // let deger = +prompt('Fahren bur deger giriniz')
// // const sou = (gelen)=>{
// //     let fgh =  (gelen*9/5)+35
// //     return  fgh
// // }
// // console.log(sou(deger))



// // const der = (d)=>{
// //     console.log(d)
// //      let son = ''
// //     for(i = son.length-1 ;i>=0 ; i--){
// //         console.log(i)
// //        son += son[i]
// //        console.log(son)
// //     }
// //     return son
// // }

// // // console.log(der('bbbkkkkkwwwwwwwwwerrrr'))function tersCeviri (str) {
// //     let yeni = "";
// //     for (let i = str.length -1 ; i>=0 ; i--) {
// //         yeni += str[i];
// //     }
// //     return yeni

// // }

// // console.log(tersCeviri("daha cok calis"));





// // const mju = (op)=>{
// //     debugger
// //     let der = ''
// //     for(i= op.length - 1 ;i>=0 ; i--){
// //         der += op[i]
// //     }
// //     return der === op
// // }
// // console.log(mju('masum'))


// // const toplam = (ger)=>{
// //     console.log(typeof ger)
// //     let topla = 0
// //     for(i = 1 ; i <ger ;i++){
// //         console.log(i)
// //         if(ger%i === 0){
// //             topla+= i
// //         }

// //     }
// //    return topla 
// // }

// // console.log(toplam(25))

// // const der = (r)=>{
// //   let alan = ( Math.PI*r*r).toFixed(2)
// //   let cev = (2*Math.PI*r).toFixed(2)
// //     return `alan ${alan} cev${cev}`


// // }

// // console.log(der(3))


// // const der = (a,b,c)=>{

// //     return  Math.pow(a*b,c)
// // }

// // console.log(der(5,8,3))

// // const gh = (er)=>{
// //     let d = er.toString()
// //     let son = ''
// //   for(i = d.length-1 ; i >= 0  ; i--){
// //     son += d[i]

// //   }
// //   return son
// // }

// // console.log(gh(231))

// // mukemmel sayi 

// //! 12- Mükemmel sayıyı bulan fonksiyonu yazınız.

// //? Bölen sayıları toplamı orjinal sayının 2 katına eşitse bu mükemmel sayıdır...(6,28,496)
// //? 6   = 1, 2, 3, 6 = 12  = 6*2
// //? 28  = 1, 2, 4, 7, 14, 28   = 56   = 28*2;	


// // const dere = (der) => {
// //     // console.log(der)

// //     let sen = 0
// //     for (i = 0; i <= der; i++) {
// //         if (der % i === 0) {
// //             sen += i
// //         }
// //     }
// //     return sen === der * 2
// // }

// // console.log(dere())

// const str1 ='clarusway'
// const str2 ='hello'
// const srt3 = 'all the world'


// console.log(str1.toLowerCase())
// console.log(str2.toUpperCase())


// const kelime = 'dere delen adam buLunamadi'

// console.log(kelime.toUpperCase().includes('DERE'))
// console.log(kelime.search(/[A-Z]/))


// //* ----------------------------------------------------------
// //*  slice(beginIndex, endIndex)
// //*  substring(beginIndex, endIndex)
// //* ----------------------------------------------------------

// const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

// console.log(veysel.slice(10,21))

// console.log(veysel.split(''))
// console.log(veysel.split())


// let acc = '                  derse katilim          '

// console.log(acc.trim().toUpperCase().slice(0,5))

// //recursive foksutom kenddi kendi cagirir dikkatli olmak grekir


// let toplam = 0 
// const add = (say)=>{
//     for(i = 1 ;i<=6 ;i++){
//         toplam += i
//     }
//      return toplam
// }


// add(6)

// //* ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.
// console.log("************ 5- RECURSION *************");

// //? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// //!fibonacci dizisindeki  n. terimi  bulma fonksiyonu

// const fibo = (n) => {
//     if (n < 2) {
//       return n;
//     } else return fibo(n - 1) + fibo(n - 2);
//   };
  
//   console.log(fibo(6));
  

//   const dt = 'deren'
//   console.log(dt)
//   console.log(dt.split('').reverse().join(''))

//   const tr = 'deneme deneme deneme'

//   console.log(tr.split(' ').length)


//   const uy = 'deneme@gmail.com'


// console.log(uy.split('@')[0])

// const fg= 'adana'

// console.log(fg.split('').reverse().join(''))


// const gh = 'ana'

// console.log(gh.split('').reverse().join('') === gh ? 'polimdor' :'baba yokuz')

// const derem  = 'deneme deneme deneme'

// console.log(derem.split(' ').join(''))


// const ku = 'adana birini '

// //////////////
// //////////////////////////////////
// ///////////////
// //////match bak 


// const po= 'XXV'


console.log('deremeeeee')


const data = [
  {
    title:'elma',
    price:30,
    text:'With supporting text below as a natural lead-in to additional content.'
  },
  {
    title:'armut',
    price:20,
    text:'With supporting text below as a natural lead-in to additional content.'
  },
  {
    title:'ayva',
    price:5,
    text:'With supporting text below as a natural lead-in to additional content.'
  },
  {
    title:'karpuz',
    price:75,
    text:'With supporting text below as a natural lead-in to additional content.'
  }
]

const ilk = document.querySelector('.ilk')
const box = document.querySelector('.box')
//////////////// buton 
const iki = document.querySelector('.iki')
const card1 = document.querySelector('.card')

let rtt = true

const deg = ()=>{
 rtt = !rtt
 if(rtt == true){
iki.style.background="red"
 }else{
  iki.style.background='white'
 }
}

box.addEventListener("click", deg)

/////////////////////////////
const ekran = () => {
  data.map((er) => {
  
    let newDiv2 = document.createElement('div')
    newDiv2.setAttribute('class','card-body')
    let h5 = document.createElement('h')
    h5.setAttribute('class','card-title')
    h5.innerText = er.title
    console.log(er.title)
    let p1 = document.createElement('p')
    p1.setAttribute('class','card-text')
    p1.innerText = er.text
    console.log(er.text)
    let p = document.createElement('p')
    p.setAttribute('class','price')
    p.innerText= er.price
    let a = document.createElement('a')
    a.setAttribute('class','btn btn-primary')

    newDiv2.appendChild(h5)
    newDiv2.appendChild(p1)
    newDiv2.appendChild(p)
    newDiv2.appendChild(a)
   
    card1.appendChild(newDiv2)
   
  });
}


ekran();










{/* <div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Special title treatment</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <p>150$</p>
  <a href="#" class="btn btn-primary">Add</a>
</div>
</div> */}