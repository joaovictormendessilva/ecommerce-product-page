// CSS
import styles from './Header.module.css';

// Images
import Logo from '../../assets/logo.svg';
import CartIcon from '../../assets/icon-cart.svg';
import Avatar from '../../assets/image-avatar.png'
import MenuIcon from '../../assets/icon-menu.svg';

// React
import { useContext, useState } from 'react';

// Components
import { Basket } from '../Basket/Basket';

// Context API
import { CartContext } from '../../pages/Home/Home';
import { Menu } from '../Menu/Menu';
import { ContextMobileSideMenu } from '../../App';

export function Header() {

    const [showBasket, setShowBasket] = useState<boolean>(false);

    const cartContext = useContext(CartContext);
    const contextMobileSideMenu = useContext(ContextMobileSideMenu);

    return (
        <header className={styles.header}>
            <div className={styles.logoAndMainMenu}>
                <div>
                    <img src={Logo} alt="Logomarca do ecommerce" />
                </div>

                <div>
                    <ul className={styles.mainMenu}>
                        <Menu />
                    </ul>
                    <button onClick={() => contextMobileSideMenu?.setActiveMobileSideMenu(true)} className={styles.mobileMenu}>
                        <img src={MenuIcon} alt="Ícone menu mobile" />
                    </button>
                </div>
            </div>

            <div className={styles.cartButtonAndAvatar}>
                <div className={styles.cartButtonAndBasket}>
                    <button 
                        className={styles.cartButton} 
                        onClick={() => setShowBasket(!showBasket)}
                    >
                        <img src={CartIcon} alt="Ícone de carrinho" />
                        {cartContext?.cart.quantity !== 0 && (<span className={styles.quantityBadge}>{cartContext?.cart.quantity}</span>)}
                    </button>
                    
                    
                    {showBasket && <Basket />}
                    
                </div>
                <div>
                    <img className={styles.avatar} src={Avatar} alt="Imagem do usuário" />
                </div>
            </div>
        </header>
    )
}