let count =0;
document.getElementById("coin").onclick =function(){
    let decision =Math.round(Math.random())
    count++;
    let name = decision===0? "Head" : "Tail";
    for (i=0; i<=100; i++){
        console.log(i)

   

    }
    
    document.getElementById("coin").src = `${decision}.png`
    document.getElementById("d").textContent = name
    document.getElementById("head").textContent = count




}