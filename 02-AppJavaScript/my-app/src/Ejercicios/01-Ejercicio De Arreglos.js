function computeClosestToZero(ts) {
    let aux, sol;
    if(ts[0]>0)
    sol = ts[0];
    else
    sol = -ts[0]

    ts.map(element=>{
    if(element<0){
        aux = -element;
    }
    else{
        aux = element;
    }
 
 if(sol < 0){
    console.log(`${aux} <= ${sol}`);
    if(aux<= -sol){
        sol = element;
        console.log(aux);
    }
 }else{
    console.log(`${aux} <= ${sol}`);
    if(aux<= sol){
        sol = element;
        console.log(aux);
    }
 }
   
    });

    if(ts.length===0){
        sol = 0;
    }
    ts.map(element=>{
        if(sol<0){
            if(element === -sol){
                sol = element;
            }
        }
        
    });
    return sol;
}
const ts = [-15, -7, -9, -14, 12]
console.log(computeClosestToZero(ts));
