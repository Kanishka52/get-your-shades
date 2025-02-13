import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' 

function App() {
  const [color, setColor]= useState('');  
  const[error, setError]= useState(false);
  const [list, setList]= useState(new Values ('#f15025').all(10));

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log('hello');
    try{
      let colors = new Values(color).all(10);
      //number of colors = 100/10 (i.e. parameter in all())
      // console.log(colors); 
      setList (colors)
      console.log("hello");
    }
    catch (error){
      setError(true)
      console.log(error)
    }
  } 

  return( 
    <>
    <section className='container'>
      <h3>Color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' 
        value={color} 
        onChange={(e)=>setColor(e.target.value)} 
        placeholder="your color" 
        className={`${error ? 'error' : null}`}
        />
        <button className='btn' type='submit'>Submit</button >
      </form>
    </section>

    <section className="colors">
      
      {list.map((color, index)=>{
         
        return <SingleColor key = {index} {...color} index = {index} hexColor={color.hex}/>
      })}

      
    </section>

    
    </>
  )
}

export default App 
