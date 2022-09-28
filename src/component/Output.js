import React,{useContext} from "react";
 import { MdEmail } from 'react-icons/md/';   //can alsio use import {FaEmail} from react-icons/fa  there was no email logo in fa hence we use md
 import {MdPhone} from 'react-icons/md/';      // link to remember and refer-   https://react-icons.github.io/react-icons
 import {HiLink} from 'react-icons/hi';
 import './Output.css';
import Skill from "./Skill";
import { ValContext } from "../App";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


export default function Output(){

    const [val , img] = useContext(ValContext);
    
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    
    const backgroundcolor=(e)=>{
        const color=e.target.value;
        document.getElementById("downlodp").style.backgroundColor=color;
     

    }

    const foregroundcolor=(e)=>{
        const color2=e.target.value;
        document.getElementById("fore").style.backgroundColor=color2;
        document.getElementById("fore2").style.backgroundColor=color2;
        document.getElementsByClassName("bottomContent")[0].style.setProperty("--check-primary", color2);

    }

    const textcolor=(e)=>{
        const color3=e.target.value;
         document.getElementById("downlodp").style.color=color3;
         
        
    }
  
   const headingrightcolor=(e)=>{

           const color=e.target.value;
          const data= document.getElementsByClassName("head");
           for(let i = 0; i < data.length; i++){
              data[i].style.color=color;
           }

   }

   const leftfontcolor = (e)=>{
    const color=e.target.value;
    document.getElementById("fore2").style.color=color;
                
}
    
const headingleftcolor = (e)=>{
    const color=e.target.value;
    const data= document.getElementsByTagName("h2");
    for(let i = 0; i < data.length; i++){
       data[i].style.color=color;
    }




}


    return(

        <>
             
             <button type="button" id="btnprint" onClick={handlePrint}>Download</button>


            <div className="container" id="downlodp"  ref={componentRef}>

                    <div>
                            {/* <h1>{val.Name}</h1> */}
                            {/* <h1>{val.DOB}</h1>
                            <h1>{val.skills}</h1>
                            <h1>{val.secondary}</h1>
                            <h1>{val.seniorSecondary}</h1>
                            <h1>{val.hobby}</h1>
                            <h1>{val.language}</h1>
                            <img src={props.image} alt="" width="300px" height="400px" />
                            <h1>{val.phone}</h1> 
                            <h1>{val.university}</h1>
                            <h1>{val.sitelink}</h1> */}
                            
                            
                    </div>
      

                    <div className="topContent">
                            <div className="imagediv" id="fore"><img src={img} alt=""  width="150px" height="140px"/></div>
                            <div className="name1">  <p> {val.Name} </p>  <br/>    <p> {val.short_description} </p>  </div>
                    </div>


                    <div className="bottomContent">
                                
                        <div className="company" id="fore2">
                                    
                             <h2>EXPERIENCE</h2>
                                            
                                            

                                     <ul>
                                        <li>
                                            <h2>Description</h2>
                                            <p>
                                                
                                                {val.description} 
                                                
                                            </p>
                    
                                        </li>

                                        <li>
                                            <h2>Internship</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Veritatis ea delectus nihil assumenda nemo asperiores, dicta 
                                                excepturi enim odio rerum suscipit cupiditate obcaecati
                                            
                                            </p>
                    
                                        </li>

                                        <li>
                                            <h2> PREVIOUS JOB | The company </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Veritatis ea delectus nihil assumenda nemo asperiores, dicta 
                                                excepturi enim odio rerum suscipit cupiditate obcaecati
                                                
                                            </p>
                    
                                        </li>

                                    </ul>

                         </div>
                                        
                         <div className="conEdu">

                                    <div className="contact">
                                        <p className="head">CONTACTS</p>
                                        <ul>
                                                <li><MdPhone/> &nbsp;&nbsp;  <p> {val.phone} </p> </li>
                                                <li>< MdEmail /> &nbsp;&nbsp; <p> {val.mail} </p> </li>
                                                <li><HiLink/> &nbsp;&nbsp;   <p> {val.sitelink} </p></li>
                                        </ul>
                                    </div>

                                    <div className="education">
                                        <p className="head">EDUCATION</p>
                                        <ul>
                                            <li>
                                                <p>Secondary school:-</p>
                                                <p> &#8226; {val.secondary}</p>
                                            
                                            </li>
                                            <li>
                                                <p>Senior Secondary School :-</p>
                                                <p> &#8226; {val.seniorSecondary}</p>
                                            
                                            </li>
                                            <li>
                                                <p>University Attended:-</p>
                                                <p > &#8226; {val.university}</p>
                                            
                                            </li>
                                        </ul>


                                    </div>

                                    <div className="expertise">
                                        <p className="head"> EXPERTISE </p>
                                        <ul>
                                            <Skill  list={val.skills} />
                                        </ul>

                                    </div>


                                </div>
                            
                            </div>


                  
                    
                    </div> 
         

                  

         
                     <h1>Choose your own colors !</h1> <br/>

         <div className="colorbox">
                    
              
               <div className="one">
                <input type="color" name="colr" id="colr"   onChange={backgroundcolor}  /><br/>
                <label htmlFor="colr">Background color</label>
               </div>
                
                <div className="two">
                <input type="color" name="colr" id="colr2"  onChange={foregroundcolor} /><br/>
                <label htmlFor="colr2">Foreground color</label>
                </div>

                <div className="three">
                <input type="color" name="colr"  id="colr3"  onChange={textcolor} /><br/>
                <label htmlFor="colr3">Font color right</label>
                </div>

                <div className="four">
                <input type="color" name="colr" id="colr2"   onChange={headingrightcolor} /><br/>
                <label htmlFor="colr2">Heading right</label>
                </div>

                <div className="five">
                <input type="color" name="colr" id="colr"   onChange={leftfontcolor}  /><br/>
                <label htmlFor="colr">font color left</label>
               </div>
                
               <div className="six">
                <input type="color" name="colr" id="colr2"   onChange={headingleftcolor} /><br/>
                <label htmlFor="colr2">Heading left</label>
               </div>
             

              


         </div>




        </>




    );

}