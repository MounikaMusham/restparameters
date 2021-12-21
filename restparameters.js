function show(...args){
    let mul=1;
    for(let i of args){
        mul *= i;
    }
    console.log("multiplication =" +mul);

}
show(3*4*5*6*7*3*2);