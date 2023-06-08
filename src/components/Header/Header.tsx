// CSS
import styles from './Header.module.css';

// Images
import Logo from '../../assets/img/logo.svg';
import CartIcon from '../../assets/img/icon-cart.svg';
import Avatar from '../../assets/img/image-avatar.png'
import MenuIcon from '../../assets/img/icon-menu.svg';

// React
import { useContext, useState } from 'react';

// Components
import { Basket } from '../Basket/Basket';

// Context API
import { CartContext } from '../../pages/Home/Home';

export function Header() {

    const [showBasket, setShowBasket] = useState<boolean>(false);

    const cartContext = useContext(CartContext);

    return (
        <header className={styles.header}>
            <div className={styles.logoAndMainMenu}>
                <div>
                    <img src={Logo} alt="Logomarca do ecommerce" />
                </div>

                <div>
                    <ul className={styles.mainMenu}>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button className={styles.mobileMenu}>
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