import styles from './App.module.css';


import { Home } from "./pages/Home/Home";
import { LightBox } from './components/LightBox/LightBox';

import { useState, createContext, SetStateAction } from 'react'
import { MobileSideMenu } from './components/MobileSideMenu/MobileSideMenu';

interface IContextLightBox{
  setActiveLightBox: React.Dispatch<SetStateAction<boolean>>
}

interface IContextMobileSideMenu{
  setActiveMobileSideMenu: React.Dispatch<SetStateAction<boolean>>
}

export const ContextLightBox = createContext<IContextLightBox | null>(null)
export const ContextMobileSideMenu = createContext<IContextMobileSideMenu | null>(null)

export function App(){

  const [activeLightBox, setActiveLightBox] = useState<boolean>(false);
  const [activeMobileSideMenu, setActiveMobileSideMenu] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      <ContextLightBox.Provider value={{setActiveLightBox}}>
        <ContextMobileSideMenu.Provider value={{setActiveMobileSideMenu}}>
          <Home />

          {activeLightBox && 
            <LightBox />
          }

          {activeMobileSideMenu && 
            <MobileSideMenu />
          }

        </ContextMobileSideMenu.Provider>
      </ContextLightBox.Provider>
      
      
      
    </div>
  )
}