// CSS
import styles from './Basket.module.css'

// Images
import TrashIcon from '../../assets/img/icon-delete.svg';
import ProductThumbnail from '../../assets/img/image-product-1-thumbnail.jpg';

// React
import { useContext } from 'react'

// Context API
import { CartContext } from '../../pages/Home/Home';

export function Basket(){

    const cartContext = useContext(CartContext)

    const handleCartPorductRemover = () => {
        cartContext?.setCart({
            name: "",
            price: cartContext.cart.price,
            quantity: 0,
            total: 0
        })
    }

    return (
        <div className={styles.basket}>
            <h4 className={styles.cartTitle}>Cart</h4>

            {cartContext?.cart.name !== "" ? (
                <div className={styles.productsInCart}>
                <div className={styles.productThumbnail}>
                    <img src={ProductThumbnail} alt="Miniatura do produto no carrinho" />
                </div>
                <div>
                    <p>{cartContext?.cart.name}</p>
                    <span className={styles.priceTotal}>${cartContext?.cart.price.toFixed(2)} x {cartContext?.cart.quantity} <b>{ cartContext?.cart.total && cartContext?.cart.total.toFixed(2)}</b></span>
                </div>
                <div className={styles.trashButtonCart}>
                    <button onClick={handleCartPorductRemover}>
                        <img src={TrashIcon} alt="Ícone de lixeira para remove produto" />
                    </button>
                </div>
            </div>
            ) : (
            <div className={styles.emptyBasket}>
                <h4>Your cart is empty.</h4>
            </div>
            )}
        </div>
    )
}