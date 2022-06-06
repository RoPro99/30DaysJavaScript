const age =12;
if(age>18){
    console.log("You Enter");
}
else if(age===18){
    console.log("You are WelCome");
}
else{
    console.log("Grow Up Kiddo!!!");
}
//Falsy value
// false
// 0
// ''
// null
// undefined
// NaN
///Logicsl operator
console.log('True' && 0 &&'test' && 99);
console.log('Truthy' || 1 || 'right' || 99);
console.log(!true);

///Switch

const superhero = 'Iron men';
switch(superhero){
    case 'Thor':
        console.log('My Hammer');
        break;
    case 'Captain':
        console.log('My Captain');
        break;
    case 'Iron men':
        console.log('My Suit');
        break;
    default:
        console.log('thanos');
}

//Ternary oprator
const roll=18;
roll>=18 ? console.log('You Get it!!'):console.log('You Not Get it')