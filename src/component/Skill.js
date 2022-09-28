 import React from "react";
 import {nanoid} from 'nanoid';
 export default function Skills({list}){

  let pill=list;
  const num=pill.toString().split(',');

   return(
<div>                                                {/* earlier i was writing  10 to17 line without div and curly braces (num.map.... till 16) but found something was wrong although output was right */}
                                 {/* the file name in top was was showing in italics which suggest something wrong moreover when checked console in displayed some warning */}
                                                      {/* hence then i applied div and curly braces which resorted all issues */}
   
     {num.map((index)=>{ 
      return < li key={nanoid()} >{index}</li>;       
    

 })}

 </div>

 
   );




 }