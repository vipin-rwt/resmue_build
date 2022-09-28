import Hersection from './component/Hersection';
import {Routes,Route} from 'react-router-dom';
import { createContext } from 'react';
import Output from './component/Output';
import React,{useState} from 'react';
 
const ValContext=createContext(null)                           /// this bloody usecontext was not working when i used it in other pages seems like it only wrks in root App.js file


function App () {

 const [datval,setDatval]=useState('');
 const [img,setImg]=useState(null);
  

  const suck=(data)=>{                                        // i had to create a function to bring all form values into this app.js plus then saving them in usestate
       setDatval(data);

  }

  const imag=(useimg)=>{                                      // bloody image had to be separately called ...image was not working when directly image was send to function from hersection
            
       setImg(useimg);                                        // --- so i had to assign imag when the image was being converted into setUrl.object,  whatever you can look into that

  }


  
  return (
    <>
    

    <ValContext.Provider value={[datval    ,   img]} >         {/* I was before trying to pass both value using value={datval,img} and it didn't work so had to tie them both into an array*/}

   
            <Routes>
                  
                  <Route exact path='/' element={<Hersection suck={suck} imag={imag} />}  />  {/*  sent both function suck and imag to fetch form data and image from hersection.js*/}
              
                  <Route exact path='/output' element={<Output />} />
              
            </Routes>



    </ValContext.Provider>

   </>
);

}


export default App;
export {ValContext};