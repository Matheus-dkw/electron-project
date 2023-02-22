import React from 'react'

const DiskDataComponent = ({ data }) => {
 

  const getSize = () =>{
    if(data.size > 1000000000000){
      return `${(data.size)} Tb`
    }else{
      return `${data.size} Gb`
    }
  }



  return (
  <>
    <li>
    {data.device} <br></br>| {data.name} | {data.interfaceType} | {data.vendor} | {getSize()}
    </li>
    <>-----------------------------------------</>
  </>
  )
}

export default DiskDataComponent