const c = document.querySelector('.celsius');
const f = document.querySelector('.fahrenheit');
const k = document.querySelector('.kelvin');


    
document.addEventListener('DOMContentLoaded', () => 
    {
    setTimeout(() =>
        {
           alert('Are you enjoying the converte? Please Follow me on Github! Tks :)')
        }, 20000)
     });

     

function TempG(e)
{
    let valorAtual = +e.target.value;

    if(e.target.name === "c")
    {
        k.value = (valorAtual + 273.32).toFixed(2);
        f.value = ((valorAtual * 9/5)+32).toFixed(2);
    }

    else if(e.target.name === "f")
    {
        c.value = ((valorAtual-32)*(5/9)).toFixed(2);
        k.value = ((valorAtual-32)*(5/9)+275.15).toFixed(2);
    }

    
    else if(e.target.name === "k")
        {
            c.value = (valorAtual-273.15).toFixed(2);
            f.value = ((valorAtual-273.15)*(9/5)+32).toFixed(2);
        }
    c.value < 0 ? c.style.color = "red" : c.style.color = "black";
    f.value < 0 ? f.style.color = "red" : f.style.color = "black";
    k.value < 0 ? k.style.color = "red" : k.style.color = "black";
}


