//Global Scope
const name = 'Ron';

const logName = () =>{
    console.log(name);
}
logName();
//Local Scope

const name2='Shu';

const someFunction = ()=>{
    const name3 = 'Shub';
    console.log(name3);

}
someFunction();