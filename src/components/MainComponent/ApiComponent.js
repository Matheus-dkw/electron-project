import BaseUrl from '../../axios/config';
import React, { useEffect, useState } from 'react'
import CircleMeditor from '../CircleMeditor';


const ApiComponent = () => {


  const [cpuData, setCpuData] = useState([])
  const [diskData, setDiskData] = useState([])
  const [cpuSpeed, setCpuSpeed] = useState([])
  const [cpuCurrentLoad, setCpuCurrentLoad] = useState([])


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

  const ApiCpuCurrentLoad = async () => {

    try {
      const response = await BaseUrl.get('/cpuAvgLoad');
      const data = response.data
      // console.log(data);
      setCpuCurrentLoad(data)

      return cpuCurrentLoad
      

    } catch (error) {
      console.error(error);
    }
  }


  const ApiCpuSpeed = async () => {

    try {
      const response = await BaseUrl.get('/cpuSpeed');
      const data = response.data
      // console.log(data);
      setCpuSpeed(data)

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
    // =====================================

    ApiCpuSpeed()

    ApiCpuCurrentLoad()
      
    setInterval(() => {
      ApiCpuCurrentLoad()
    }, 1000);
    
     

  }, []);

  

  return (
    <div >
      <ul>
        <h3> Name of hard disk</h3>
        {diskData.map((item) => { return <li key={item.name}>{item.name}</li> })}
      </ul>

      <ul>
        <h3> Cpu Speed and Brand</h3>
        <li>{cpuData.brand}</li> 
        <li>{cpuData.speed}</li> 
      </ul>

      <ul>
      <h3> Cpu Averge Load</h3>
        <li>{parseFloat(cpuCurrentLoad.currentLoad).toFixed(0) }</li> 
        
      </ul>

      <div>
      <CircleMeditor
        percentage={parseFloat(cpuCurrentLoad.currentLoad).toFixed(0) }
        circleWidth="200"
        nome="Usage"
      />
      {/* <CircleMeditor
        percentage={parseFloat(cpuCurrentLoad.currentLoad).toFixed(0) }
        circleWidth="200"
        nome="temperatura"
      /> */}
      </div>
    </div>
  )
}

export default ApiComponent