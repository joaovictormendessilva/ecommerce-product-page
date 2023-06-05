import styles from './Header.module.css';

import Logo from '../../assets/img/logo.svg';
import CartIcon from '../../assets/img/icon-cart.svg';
import Avatar from '../../assets/img/image-avatar.png'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoAndMainMenu}>
                <div>
                    <img src={Logo} alt="Logomarca do ecommerce" />
                </div>

                <div>
                    <ul className={styles.mainMenu}>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div className={styles.cartButtonAndAvatar}>
                <div>
                    <img src={CartIcon} alt="Ícone de carrinho" />
                </div>
                <div>
                    <img className={styles.avatar} src={Avatar} alt="Imagem do usuário" />
                </div>
            </div>
        </header>
    )
}