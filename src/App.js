
// import axios from 'axios';

import {  useState } from 'react';
import './App.css';
import CircleMeditor from './components/CircleMeditor';
import ApiComponent from './components/MainComponent/ApiComponent';







function App() {


  const [percentage, setPercentage] = useState(20)

  


  return (
    <div className="App">

      {/* <PersonList/> */}

      <ApiComponent/>
      

      



      {/* valor - escala  - nome */}
      {/* <CircleMeditor
        percentage={percentage}
        circleWidth="200"
      /> */}
      

      {/* <CircleMeditor
        percentage={percentage}
        circleWidth="200"
      />  */}

    </div>
  );
}

export default App;
