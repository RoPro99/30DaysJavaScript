//Closure in JavaScript
const outer = ()=>{
    const outerVar='Hello!';
    const inner = ()=>{
        const innerVar='Girigoud!!';
        console.log(outerVar,innerVar);
    }
    return inner;
}

const innerFun = outer();

innerFun();