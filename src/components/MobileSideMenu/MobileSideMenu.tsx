// CSS
import styles from './MobileSideMenu.module.css'

// React
import { useContext } from 'react'

// Components
import { Menu } from '../Menu/Menu'
import { ContextMobileSideMenu } from '../../App'

export function MobileSideMenu() {

    const contextMobileSideMenu = useContext(ContextMobileSideMenu)

    return (
        <div className={styles.mobileSideMenu}>
            <div className={styles.sideMenuContent}>
                <div className={styles.closeButton}>
                    <button onClick={() => contextMobileSideMenu?.setActiveMobileSideMenu(false)}>
                        x
                    </button>
                </div>

                <nav>
                    <ul>
                        <Menu />
                    </ul>
                </nav>
            </div>
        </div>
    )
}