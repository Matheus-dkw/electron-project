import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    /* min-height: 700px;
    min-width: 1060px; */
    
    display: flex;
    flex-direction: row;
    
    justify-content: space-around;
    color: white;
    

    background: #0F2027;  
    background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  
    background: linear-gradient(to top, #2C5364, #203A43, #0F2027); 

`

export const SysBox = styled.div`

    /* background-color: rgba(4, 83, 255, 0.2); */
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`

export const CpuBox = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
`

export const CpuBoxEl = styled.div`

`

export const MemBox = styled.div`
    display: flex;
    flex-direction: row;
`

export const CpuMemBox = styled.div`
    display: flex;
    justify-content: space-around;
`


export const ProgressBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 200px;
    margin-left: auto;
    /* text-align: center; */
    
`