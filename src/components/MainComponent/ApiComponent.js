import BaseUrl from '../../axios/config';
import React, { useEffect, useState } from 'react'
import CircleMeditor from '../CircleMeditor';
import { Container, CpuBox, CpuBoxEl, CpuMemBox, MemBox, ProgressBar, SysBox } from './ApiStyle';
import CustomizedProgressBars from './CustomizedProgressBars';
import DiskDataComponent from './DiskDataComponet';
import { CircleBox } from './CircleBox';

const ApiComponent = () => {

  // ========= JSX variáveis (Limpando JSX)==================

  //SYSTEM
  const [system, setSystem] = useState([])
  const [baseboard, setBaseboard] = useState([])


  //CPU
  const [cpuData, setCpuData] = useState([])
  const [cpuSpeed, setCpuSpeed] = useState([])
  const [cpuCurrentLoad, setCpuCurrentLoad] = useState([])
  const [cpuTemp, setCpuTemp] = useState([])
  const modeloCpu = cpuData.brand
  const velocidadeCpu = cpuData.speed

  //DISK
  const [diskData, setDiskData] = useState([])
  


  // Memory
  const [memoryData, setMemoryData] = useState([])
  const [memoryLayout, setMemoryLayout] = useState([])
  const [memoryQuant, setMemoryQuant] = useState([])




  //GPU
  const [gpuData, setGpuData] = useState([])



  // =======================================================


  // ================= SISTEMA =======================

  const ApiSystem = async () => {
    try {
      const response = await BaseUrl.get('/system');
      const data = response.data
      // console.log(data);
      setSystem(data)

    } catch (error) {
      console.error(error);
    }
  }
  const ApiBaseboard = async () => {
    try {
      const response = await BaseUrl.get('/baseboard');
      const data = response.data
      // console.log(data);
      setBaseboard(data)

    } catch (error) {
      console.error(error);
    }
  }

  //==================================================

  // ==================CPU ==================

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

    } catch (error) {
      console.error(error);
    }
  }

  const ApiCpuTemp = async () => {
    try {
      const response = await BaseUrl.get('/cpuTemp');
      const data = response.data
      // console.log(data);
      setCpuTemp(data)

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
  //=====================================================

  //=======================GPU==============================

  const ApiGpu = async () => {
    try {
      const response = await BaseUrl.get('/gpu');
      const data = response.data
      // console.log(data.controllers);
      setGpuData(data)

    } catch (error) {
      console.error(error);
    }
  }

  //====================Memory=================================

  const ApiMemory = async () => {
    try {
      const response = await BaseUrl.get('/memory');
      const data = response.data
      // console.log(data);
      setMemoryData(data)

    } catch (error) {
      console.error(error);
    }
  }

  const ApiMemoryLayout = async () => {
    try {
      const response = await BaseUrl.get('/memLayout');
      const data = response.data
      setMemoryQuant(data.length)
      setMemoryLayout(data[0])

    } catch (error) {
      console.error(error);
    }
  }



  //========================Disco=============================

  const ApiDiskDada = async () => {
    try {
      const response = await BaseUrl.get('/disk');
      const data = response.data
      // console.log(data);
      setDiskData(data)


      //   data.forEach((item) => { 

      //   for(let i=0 ; i <= data.length; i++){
      //     setDiskTest([data[i].interfaceType,data[i].name,data[i].size,data[i].vendor]);
      //   }
      // })
      // 

    } catch (error) {
      console.error(error);
    }
  }
  // interfaceType - name - size - vendor


  // Object.keys(memory).forEach((item) => {
  //   console.log(item + " = " + memory[item]);
  // })


  useEffect(() => {

    ApiSystem()
    ApiBaseboard()

    ApiCpuDada()
    ApiCpuSpeed()
    ApiCpuCurrentLoad()
    ApiCpuTemp()

    ApiMemory()
    ApiMemoryLayout()

    ApiGpu()

    ApiDiskDada()

    setInterval(() => {
      ApiCpuCurrentLoad()
      ApiMemory()
    }, 1000);



  }, []);

  if(!memoryData || !system || !cpuData || !cpuCurrentLoad || !gpuData) return (<div/>)

  // memoryData != undefined

  return (
    <Container >
      <SysBox>
        <ul>
          <h3>MotherBoard</h3>
          <li>Manufacturer: {system.manufacturer}</li>
          <li>Model: {system.model}</li>
          <li>Baseboard Model:<br></br> {baseboard.model}</li>
        </ul>
        <div>
          <ul>
            <h3> Hard disk</h3>
            <div style={{maxWidth: 300}}>{diskData.map((item, index) => { return <DiskDataComponent key={index} data={item} />})}</div>
            {/* {diskData.map((item) => { return <li key={item.vendor}>Name: {item.vendor} interfaceType: {item.interfaceType}</li> })} */}
            
          </ul>
        </div>
        <div>
          <ul>
          <h3> GPU</h3>
            <li>Model: {gpuData.model}</li>
            <li>GPU Usage: {parseFloat(gpuData?.utilizationGpu || 0).toFixed(0)}</li>
            <li>Memory Usage: {parseFloat(gpuData?.utilizationMemory || 0).toFixed(0)}</li>
            <li>Memory: {gpuData.vram} gigas</li> 
          </ul>
        </div>
      </SysBox>
      <CpuBox>
        <CpuMemBox>
          <CpuBoxEl>
            <ul>
              <h3> Cpu Brand</h3>
              <li>Model: {modeloCpu}</li>
              <li>Cores: {cpuData.cores}</li>
              <li>PhysicalCores: {cpuData.physicalCores} </li>
              <li>Clook Speed: {velocidadeCpu}</li>
              <li>socket: {cpuData.socket}</li>
              <li>Cpu Temp: {parseFloat(cpuTemp?.main || 0).toFixed(0)}</li>
            </ul>
          </CpuBoxEl>
          <CircleBox>
            <h3> Cpu Usage</h3>
            <CircleMeditor
              percentage={parseFloat(cpuCurrentLoad?.currentLoad || 0).toFixed(0)}
              circleWidth="200"
              nome=""
            />
          </CircleBox>
        </CpuMemBox>


        <MemBox>
          <div>
           
            <ul>
            <h3>Memory</h3>
              <li>Total: {Math.floor((memoryData.total) / 1000000000)} gigas</li>
              <li>Free: {Math.floor((memoryData.free) / 1000000000)} gigas</li>
              <li>Used: {Math.floor((memoryData.used) / 1000000000)} gigas</li>

              <li>ClockSpeed: {Math.floor((memoryLayout.clockSpeed))} Mhs</li>
              <li>Manufacturer: {memoryLayout.manufacturer}</li>
              <li>PartNum: {memoryLayout.partNum}</li>
              <li>Size: {Math.floor((memoryLayout.size) / 1000000000)} gigas</li>
              <li>Type: {memoryLayout.type}</li>
              <li>Memory Quant: {memoryQuant}</li>
            </ul>
          </div>
          <ProgressBar>
            <CustomizedProgressBars 
            total={Math.floor((memoryData?.total || 0))}
            livre={Math.floor((memoryData?.free || 0))}
            usado={Math.floor((memoryData?.used || 0))}
            />
          </ProgressBar>
        </MemBox>

      </CpuBox>

      {/* <div>
        <CircleMeditor
          percentage={parseFloat(cpuCurrentLoad.currentLoad).toFixed(0)}
          circleWidth="200"
          nome="Usage"
        />
      </div> */}
    </Container>
  )
}

export default ApiComponent