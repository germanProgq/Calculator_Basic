let numbersPossible = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let equals = '=';
let ans = 'wassup';


let output = document.getElementById('output');
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {     
        output.value = output.value.slice(0, -1);
    }
    else if (event.key === 'Delete') {
        output.value = '';
    }
    else if (event.key === 'Enter') {       
            let ik = output.value             
                output.value = '';           
            setTimeout(() => {
                solve(ik);  
            }, 100);   
    }
});

let numsDiv = document.getElementsByClassName('keyboard-div');
Array.from(numsDiv).forEach((div) => {
    div.addEventListener('click', () => {       
        if (div.textContent.includes(equals)) {
            let ik = output.value;
            if (ik.includes('Ans')) {
                if (ans = 'wassup') {
                    output.value = 'Ans is not defined';
                    let signs = document.getElementById('signs')
                    let numbers = document.getElementById('numbers')
                    setTimeout(() => {                        
                        output.value = '';
                        signs.disabled = true;
                        numbers.disabled = true
                    }, 2000);
                    setTimeout(() => {
                    signs.disabled = false;
                    numbers.disabled = false;  
                    }, 2200);   
                }
                else {
                    ik = ik.replace('Ans', ans);
                    output.value = '';                    
                    }                             
                }                       
                         
            setTimeout(() => {
                solve(ik);  
            }, 100);                                 
        }
        else {
        output.value += div.textContent;
        }
    });
});

function solve (eq) 
{   
        try {
            let result = eval(eq);
            roundToNDecimalPlaces(result);
            output.value = result;
            ans==result;
        } catch (error) {
            output.textContent = 'Error';
        }  
        
}

function roundToNDecimalPlaces(number, n = 9) {   
    let numStr = number.toString();   
    let decimalPos = numStr.indexOf('.');   
    if (decimalPos === -1) {
        return number;
    }  
    let roundedNum = parseFloat(number.toFixed(n));
    return roundedNum;
}


