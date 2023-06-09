import styles from './App.module.css';


import { Home } from "./pages/Home/Home";
import { LightBox } from './components/LightBox/LightBox';

import { useState, createContext, SetStateAction } from 'react'

interface IContextLightBox{
  setActiveLightBox: React.Dispatch<SetStateAction<boolean>>
}

export const ContextLightBox = createContext<IContextLightBox | null>(null)

export function App(){

  const [activeLightBox, setActiveLightBox] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      <ContextLightBox.Provider value={{setActiveLightBox}}>
        <Home />

        {activeLightBox && <LightBox />}
      </ContextLightBox.Provider>
      
      
      
    </div>
  )
}