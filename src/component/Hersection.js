import React,{ useState} from "react";
import './Hersection.css';
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";



export default function Hersection(props){
    

    const [image,setImage]=useState(null);
    const [state,setState]=useState({
                   
        Name:"",
        short_description:"",
        DOB:"",
        skills:"",
        secondary:"",
        secondBatch:"",
        seniorSecondary:"",
        seniorBatch:"",
        hobby:"",
        language:"",
        phone:"",
        mail:"",
        university:"",
        uniBatch:"",
        sitelink:"",
        second_year:"",
        description:"",

   });







   const handle=(e)=>{


         const name=e.target.name;
         const value=e.target.value;
         setState({...state,[name]:value})

         

   }

//========================================================================================================================
// const [show,setShow]=useState(false);         {/* Before routing the button to output.js file the output file was imported here in this only                                */}
                                                 //  The [show setshow] was mainly created for showning the output file if its valus was true output file will show up on button click
//    const handel=(e)=>{                           so the ALL set button had a onclick function handel ...
//     e.preventDefault();
//  setShow(true);
                                                 // so in as soon the button was clicked handel function would be called where the value of show was set to true in order to show output

                                                 //  you can see at the end of form we have something like {show && </Output>} which means both have to be true to finishthe job .
                                              // as default value of show was false it would not perform the task but as soon on button click we set Show to true we get the output file below form

//    }

//============================================================================================================



  //  const imge=(e)=>{                                                      // was done before sending image to other file here we check event on click and file we choose was converted into set of string or url with  URL.createObjectUrl(event clicked file)
  //    if (e.target.files && e.target.files[0]) {                        //  and was assigned to useStatehook [image,setImage]
  //      setImage(URL.createObjectURL(e.target.files[0]));
  //    }
  //   }





    // /===============================================================================/ 

                                               // when i was designing form , i had to design my choose file button also which cannot be done so i thought of creataing an custom button and link it to choose file input.... 
                                              // which means whenever i would click custom buttom it will automatically click input choose file button for me to choose file
const fileinput=useRef(null);                 // so how did i link this custom button to input choose file its simeple???
                                              // i had to use a hook called useRef which by name suggest some reference so i initiated it with const someValue here  const fileinput=useRef(null);
const handleclick=(e)=>{                     // in the input choose file i put the reference that  fileinput point to in this case how     -- <input type="file" ref={fileinput} />
  fileinput.current.click();                 // creating link between fileinput and input with ref
                                             // Now in button we put function onClick={handleclick}  that will instigate handleclick functin when clicked upon
}                                            // where we will point the click to fileinput by--> fileinput.current.click();


                                              
const handleChange=(e)=>{                                        // in the input iamge tag we had set up a listener that what will happen on change so we created a function                                           
    
    if (e.target.files && e.target.files[0]) {                   // for what should happen on change onChange={handlechange}

        setImage(URL.createObjectURL(e.target.files[0]));          // as soon as we select the file handlechange gets called and starts executing task inside it 
        props.imag(URL.createObjectURL(e.target.files[0]));       // where we check are there any files in target by e.target.files and are there any file at index[0]
    }                                                             // if its true then we assign the image hook with setImage the target file by converting into a url set by-- setImage((URL.createObjectURL(e.target.files[0]))
                                                                  // here we have second line props.imag ....it comes from output.js this image is being sent there to be displayed in resume
  console.log((URL.createObjectURL(e.target.files[0])));          // we did not do props.imag(image) because it was not accepting it may be there could be another way but i just send the url.converted image to output.js and it worked finely
 

}


  
// ===================================================================================


const sent=()=>{                               // this is from All set button when onclick sent function is called to assign props.suck from output.js the entire state value to be shown in output file or resume file
  props.suck(state);                      

  
}
   

return(
                
             

    <>


    <Navbar />



    <h1>Enter your detail ,and leave rest in our hand</h1>

 <form>   

<div className="what">
      <div className="Basics">
        
          <div>
            
              <input type="text" name="Name" id="name" value={state.Name} autoComplete="off"  onChange={handle} placeholder="Enter your name here..."   />
              <label htmlFor="name">Name</label>
          </div>

      

          <div>
            
             <input type="date" name="DOB" id="dob" value={state.DOB} onChange={handle}  />
             <label htmlFor="dob">Date of birth</label>
          </div>

          
  
          


         <div id="lang" >

      
                <select onChange={handle} name="language" value={state.language} id="lang">
                    <option  defaultValue="Choose Language">Choose Language...</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="other">other</option>
                </select>
                <label htmlFor="lang"   >
                    Language
                  </label>
                 
                
            </div>

       </div>  

         
         
  
  <div className="Education">
        
      
        <div>
          <label htmlFor="universe">University Attended</label><br/>
          <input type="text"  name="university" id="universe"  value={state.university} onChange={handle} />
        </div>


        <div>
          <label htmlFor="seconary">Secondary Education</label><br/>
          <input type="text"  name="secondary" id="seconary" value={state.secondary} onChange={handle} />
        </div>

      
        <div>
            <label htmlFor="senior-secondary">Senior-Secondary Education</label><br/>
            <input type="text" name="seniorSecondary" id="senior-secondary"  value={state.seniorSecondary}  onChange={handle} />
        </div>

          

    </div>

    


    <div className="contacts">

                      <div>
                          <label htmlFor="pone">Phone number</label><br/>
                          <input type="tel"  name="phone" id="pone" size="10" value={state.phone} onChange={handle} />
                        </div>

                      
                      
                        
                        <div>
                          <label htmlFor="mail1">Email:</label><br/>
                          <input type="email"  name="mail" id="mail1"  value={state.mail} onChange={handle} />
                      </div>


                      <div>
                             <label htmlFor="sitelink">Site/Twitter/Linkedin link : </label><br/> 
                             <input type="url" name="sitelink" id="sitelink" value={state.sitelink} onChange={handle} />
                      </div>

                         



    </div>



        
        

  
  <div className="desc">

                        <div>  
                          <label htmlFor="desc">Short description</label><br/>
                          <input type="text" name="short_description" id="desc" value={state.short_description} onChange={handle} placeholder=" marketing manager, frontend developer etc" />
                        </div>


                     

                        <div>
                          <label htmlFor="skill">Expertise-:</label><br/>
                          <textarea rows={4} cols={40} id="skill" value={state.skills} name="skills"  onChange={handle}></textarea>
                        </div>


                          


                      <div> 
                        <label htmlFor="desc">long_description-:</label><br/>
                        <textarea name="description" id="desc" cols="40" rows="15" value={state.description} onChange={handle}></textarea>
                      </div> 


       
      </div>

 

                         

       <div className="upload">
                   <input type="file" id="formclick"  onChange={handleChange} style={{display:"none"}}  ref={fileinput} accept="image/*"  />      {/* this accept="image/* "  for accepting file type that are image only not any pdf or ppt whatever */}
                   <div className="svg">
                       <img src={image} id="output" alt="" width="100%" height="100%" />
                   </div>
                   <center><button type="button" className="btnup" onClick={handleclick} > Upload file </button></center>
              
        </div>


</div>

                        
     
     
<Link to='/output'> <input type="button" value="All set" onClick={sent} /> </Link>   {/* Routed this page to output to show the resume i.e being designed in output.js file*/}


</form>







    

    {/* {show && <Output state={state} image={image}  />} */}  {/* this is what is being mentioned in comment line no 60 */}



    

     


    
    </>





);

};

