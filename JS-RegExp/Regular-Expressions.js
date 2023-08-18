//! RegExp constructor


//  Düzenli İfadeler (Regular Expressions veya kısaca RegEx),
//  metin içinde desenleri tanımlamak ve eşleştirmek için kullanılan 
//  güçlü bir araçtır. RegEx, metin işleme, veri doğrulama, desen eşleştirme
//  , metin arama/yerine koyma gibi birçok durumda kullanılır. 
//  Düzenli ifadeler, belirli bir kalıbı tanımlamak ve bu kalıbı içeren 
//  metinleri bulmak veya değiştirmek için kullanılır.



let pattern = 'love';
let regEx = new RegExp(pattern);  //--> Bu şekilde bir desen RegExp tanımlamış olduk

//--------------------------------------------------------------------

let patternnew = 'ask';
let ex1 = 'fire';
let regEx2 = new RegExp(patternnew + ex1)  //--> Bu şekilde iki desen RegExp tanımlamış olduk


//--------------------------------------------------------------------

//! let regEx = new RegExp('love','fire') -> Bu şekilde de tanımlayabiliriz.

//--------------------------------------------------------------------

let regex = /love/gi  //--> /x/ iki yan çizgi arasında bir değer varsa bu RegExp dir

//--------------------------------------------------------------------

let word = /aptal/
let comment = 'sen aptal misin dostum'

console.log(word.test(comment)) //--> İçinde argo içeren word değişkenini comment de test et word değişkenin de tanımlanan pattern desen comment içinde var mı?
// True - False döner ve bu örnek true dönecektir.

let word2 = /salak/
let commentyaz = prompt('Yorumunu yaz');

if(word2.test(commentyaz)){
 alert("Argo kullanma lütfen.")
}

//!------- Büyük küçük harf duyarlılığını ortadan kaldırmak istersek

// i değerini /x/i bu şekilde kullanabiliriz. Örnek

let word3 = /Gerizekalı/i  //--> Büyük küçük harf duyarlılığı artık yok.
let commentyaz2 = prompt('Yorumunu yaz');

if(word3.test(commentyaz2)){
 alert(`Argo kullanma lütfen.`)
}


//--------------------------------------------------


let str = 'I love Javascript'

console.log(
    str.match(/love/) //--> str cümlemizin içinde love varsa ilk yakaladığının bilgilerini bize verir(index number,type gibi);
//! str.match(/love/)ig ---> Burada eklediğimiz "g" love içeren bütün kelimeleri taradı.
//  ve cümlemizde geçen bütün lovelerin verilerini bize verir.
    )



//---------------------------------------------------------------

//? İndex numarasını bulmasını istersek
//! Search kullanımı


const str2 = 'I like Javascript'
const patternthis = /like/
const result = str2.search(patternthis); //---> aradı ve cümlede kaçıncı indeks den başladığını bize verdi.
console.log(result) //


//---------------------------------------------------------------
//! Replace kullanımı

const txt =  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat architecto, sed quasi ut officiis ipsum numquam molestias, ducimus accusamus itaque cumque, quis quas sint illum dolorem repudiandae ipsum laborum beatae quam id'
 matchReplaced = txt.replace(/Ipsum/ig,'*****')  // replace---> Ipsum olanları yakaladı ve HamzaBey ile değiştirdi.
 console.log(matchReplaced);








// //todo //////// SET OF CHARACTERS /////// KARAKTERLERİN KULLANIMI


//[a-z] a ile z arasındaki latin harfler
//[A-Z] a ile z arasındaki  büyük latin harfler
//[0-3] 0 ile 3 arasındaki rakamlar
//[0-9] 0 ile 9 arasındaki rakamlar

//[A-Za-z0-9] A dan Z ye kadar a dan z ye kadar 0 dan 9 a kadar demektir.


let cumle = 'Ben 19 yaşında Web Developer olmak için çabalıyorum 2004 de doğdum.'

console.log(
    cumle.match(/\d/g)  //--> "d" ile bütün numbersleri yakaladık 0-9
    )


console.log(
  cumle.match(/\D/g)  //--> "D" ile bütün harfleri yakaladık a-z
 )


 //------------------------------------------------

 let firstName = 'hamza';
 console.log(
    /^[a-z]+$/.test(firstName) 
    // "^" ile mi başlıyor demek aslında (a dan z ye kadar ve 0-9 arası)
    //+ sembolü en az 1 harfin olması gerektiğini bildiir sonrasında gelen diğer şartı yazdık yani "$" son şartları
    )
 
// Başka bir örnek daha

let isim = 'hamza';

console.log(
   /z?a$/.test(isim)  
    //---> /z ile de başlayabilir başka harfle de "?" olada bilir olmayada bilir anlamındadır.
    // "a$" ifadesi ise sonu mutlaka a harfi ile biticek demek oluyor.
    // ve isim değişkenimiz değeri hamza olduğundan şartlar sağlanmış olur ve true döner.
)

//!özel karakter bulma

let str3 = 'Ben hamza doğan $ ] nasılsın * £ @';
console.log(
   str3.match(/\W+/gi) //----> Özel Karakterleri bulur. "\W"
)


// Ve devam eden bir çok RegExp olayı var. Ne tür bir desene ihtiyacınız varsa ChatGPT veya internet üzerinden araştırmalar ile bulabilirsiniz.
