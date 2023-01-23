import BaseUrl from '../../axios/config';
import React, { useEffect, useState } from 'react'


const ApiComponent = () => {


  const [cpuData, setCpuData] = useState([])
  const [diskData, setDiskData] = useState([])



  const ApiCpuDada = async () => {

    try {
      const response = await BaseUrl.get('/cpu');
      const data = response.data
      // console.log(data);
      setCpuData(data)

    } catch (error) {
      console.error(error);
    }
  }


  const ApiDiskDada = async () => {

    try {
      const response = await BaseUrl.get('/disk');
      const data = response.data
      // console.log(data);
      setDiskData(data)

    } catch (error) {
      console.error(error);
    }
  }


 



  useEffect(() => {
    ApiCpuDada()
    // console.log(cpuData.manufacturer);
    //=======================================

    ApiDiskDada()
    // console.log(diskData.map( (nome) => { return nome.name}));
      // console.log(cpuData.speed);

  }, [cpuData.speed, diskData.name]);

  

  return (
    <div>
      <ul>
        {diskData.map((item) => { return <li key={item.name}>{item.name}</li> })}
      </ul>

      <ul>
        <li>{cpuData.brand}</li> 
        <li>{cpuData.speed}</li> 
      </ul>
    </div>
  )
}

export default ApiComponent