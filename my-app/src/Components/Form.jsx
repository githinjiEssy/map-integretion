import React from 'react'

function Form() {
    const location = {
        address: 'unnamed road, Kiambu, 00608, Kenya',
        lat:  -1.210115 ,
        lng: 36.925061,
      }

  return (
    <div className='m-4'>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
            <br/>
            <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
        </div> 
    </div>
  )
}

export default Form