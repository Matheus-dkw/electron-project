import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


function CustomizedProgressBars({ total, livre, usado }) {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width:0,
    minWidth:200,
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  

  var x = ((100*usado)/total).toFixed(0)


  return (
      <div>
        <p>Memory Usage {x}%</p>
        <BorderLinearProgress variant="determinate"  value={x}/> 
        
      </div>
      
  );
}

export default CustomizedProgressBars