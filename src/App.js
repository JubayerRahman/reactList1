import React, {useState} from 'react';
import './App.css';
import InputForm from './Components/InputForm/InputForm';
import NamesList from './Components/nameList/NamesList';
import Dev from './Components/Devname/Dev';
const DummyList =[]

function App() {
  const [namelist, setNameList] = useState(DummyList)
  const [dev , setDev]= useState(false);

  const enteredata= storeData=>{
    const finalData ={
      ...storeData
    }
    setNameList(nameDatas=>{
      return [storeData, ...nameDatas]
    })
    console.log(finalData)
  }
  return (
    <div className='App'>
      <InputForm formInfo={enteredata}/>
      <NamesList items={namelist}/>
      
    </div>
  );
}

export default App;
