// Arithmetic operator
//+,-,*,/,%(modulus),**(exponent),++(increment)
// ,--(decrement)
let a=25
let b=10
document.write('<br>Addition is '+(a+b))
document.write('<br>Minus is '+(a-b))
document.write('<br>Multiply is '+(a*b))
document.write('<br>Division is '+(a/b))
document.write('<br>Modulus is '+(a%b))
c = b**3 //b*b*b
document.write('<br>C is '+c)
let x=20
//++ +1 -- -1
document.write('<br>X is '+x) //20
b = x++ //postfix - old value
document.write('<br>X is '+x) //21
document.write('<br>B is '+b) //20
b = ++x //prefix - newvalue
document.write('<br>X is '+x) //22
document.write('<br>B is '+b) //22


