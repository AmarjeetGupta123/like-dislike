import React, { useState } from 'react';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { VscRefresh } from "react-icons/vsc";


function Amar() {
  const [Count, setCount] = useState(0);
  //  function handle(){
  //     setCount(Count+1)
  //  }
  return (
    <div className='project'>
      <h1>{Count}</h1>
      <button className='refres' onClick={() => setCount(0)}><VscRefresh /></button>
      
        <button className='btn' type='button' onClick={() => setCount(Count + 1)}><BiSolidLike /></button>
        <button className='btnn' type='button' onClick={() => setCount(Count - 1)}><BiSolidDislike /></button>
      
    </div>
  );
}

export default Amar;
