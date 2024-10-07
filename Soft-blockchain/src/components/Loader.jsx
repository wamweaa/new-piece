import React from 'react'
import Button from '@mui/material/Button';

function Loader() {
  return (
    <div>
    <div className='container'>
        <div className='holder'><div className='box'></div></div>
        <div className='holder'><div className='box'></div></div>
        <div className='holder'><div className='box'></div></div>
    </div>
    {/* <div className='beginning'>
    <Button variant="contained" disableElevation>
                Get Started
            </Button>
    </div> */}
    </div>
  )
}

export default Loader