function MakeArr(){
let array=[];
for(let i=0;i<10;i++){
array[i]=Math.floor(Math.random()*(150-(-150)+1))+(-150);
}
document.getElementById("arr").innerText="Array: "+array.join(", ");
let negatives=[];
for(let i=0;i<10;i++){
    if(array[i]<0){
    negatives.push(array[i]);
    }
}
document.getElementById("negative").innerText="Negative numbers: "+negatives.join(", ");
}