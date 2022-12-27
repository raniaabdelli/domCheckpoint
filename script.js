/* déclaration des variables*/ 

var btnm=document.querySelectorAll('.moins')
var btnp=document.querySelectorAll('.plus')
var quantity = document.querySelectorAll('.count')
var count = document.getElementsByClassName('count')
var tot = document.querySelector('.tot')
var trash=document.querySelectorAll('.trash')
var price = document.querySelectorAll('.price')
var fav=document.querySelectorAll('.fav')
/* fonction décrementation
 */for(let i = 0; i < btnm.length;i++)
{btnm[i].addEventListener('click',()=>{
    if(count[i].value > 0) {
        +(count[i].value--),
        console.log(typeof(+(count[i].value)))
        tot.value = +tot.value - (+(price[i].value))
        console.log("tot=")
        console.log(tot.value)

    }
})}
/* fonction incrémentation
 */for(let i = 0; i < btnp.length;i++){
btnp[i].addEventListener('click',()=>{
        +(count[i].value++);
        console.log(typeof(+(count[i].value)) )

        tot.value = +tot.value + (+(price[i].value))
      
        console.log("tot=")

        console.log(tot.value)

    
})}
/* fonction delete*/
for(let i = 0; i < trash.length;i++){
    trash[i].addEventListener('click',()=>{
        trash[i].parentElement.remove()
        /* update du total */
        tot.value = +tot.value - (+count[i].value * +(price[i].value))
    
    })}
/*     fonction favoris */
for(let i = 0; i < fav.length;i++){
    fav[i].addEventListener('click', () => {
console.log((fav[i].style.backgroundColor));

    if ((fav[i].style.backgroundColor) != "red") {
        fav[i].style.backgroundColor = "red";
    } else {
        fav[i].style.backgroundColor = "white";
    }

    })}