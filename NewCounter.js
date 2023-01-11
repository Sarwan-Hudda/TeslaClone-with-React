import { useState } from "react"

    export default Counter    
    function Counter(){
        
       let [number ,setnumber] = useState(0); 

        function update (e,start){
            e.preventDefault();
            // if(start ==='increase'){
            //     setnumber(number+1);
            // }
            // else(setnumber(number-1))
            start==='increase'?setnumber(number+1)&& e<10:setnumber(number-1)&&e>0
        }



       return(
        <>
        <a href = '' onClick = {(e)=>update(e,'increase')}>Increment</a>
        <p>{number}</p>
        <a href = '' onClick = {(e)=>update(e,'Decrement')}>decrement</a>
        
        
        </>
       )

    }







 