import styles from './Header.module.css';

import Logo from '../../assets/img/logo.svg';
import CartIcon from '../../assets/img/icon-cart.svg';
import Avatar from '../../assets/img/image-avatar.png'
import MenuIcon from '../../assets/img/icon-menu.svg';

export function Header() {
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
                    <button className={styles.cartButton}>
                        <img src={CartIcon} alt="Ícone de carrinho" />
                    </button>
                    <div className={styles.basket}>
                        <h4>Cart</h4>
                    </div>
                </div>
                <div>
                    <img className={styles.avatar} src={Avatar} alt="Imagem do usuário" />
                </div>
            </div>
        </header>
    )
}