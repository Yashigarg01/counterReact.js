
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
    const [count , setCount ]= useState(0);
    const increment =()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
  return (
    <>
    <div>
        <h1 className='d-flex justify-content-center align-items-center mt-4'>Counter App</h1>
        <div>
            <button  className="btn btn-success mx-2" onClick={increment}>
              Increment
            </button>
            <span className="h3">{count}</span>

            <button className="btn btn-danger mx-2" onClick={decrement}>
             Decrement
            </button>
        </div>
    </div>
    </>
    
  )
}

export default Counter