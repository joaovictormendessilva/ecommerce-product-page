import styles from './App.module.css';

import { Home } from "./pages/Home/Home";

export function App(){
  return (
    <div className={styles.app}>
      <Home />
    </div>
  )
}