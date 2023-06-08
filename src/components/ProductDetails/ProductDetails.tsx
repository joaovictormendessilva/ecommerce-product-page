// CSS
import styles from './ProductDetails.module.css';

// Images
import MinusIcon from '../../assets/img/icon-minus.svg';
import PlusIcon from '../../assets/img/icon-plus.svg';
import CartIcon from '../../assets/img/icon-cart-button.svg'

// React
import { ChangeEvent, useContext, useEffect, useState } from 'react';

// Context API
import { CartContext } from '../../pages/Home/Home';
import { ProductImagesContainer } from '../ProductImagesContainer/ProductImagesContainer';

export function ProductDetails() {

    const [inputQuantity, setInputQuantity] = useState<number>(0)

    const cartContext = useContext(CartContext)

    // Quantity Buttons
    const handleReduceQuantity = () => {
        if (inputQuantity > 0) {
            setInputQuantity((prev) => {
                return prev = prev - 1
            })
        }
    }
    const handleAddQuantity = () => {
        if (inputQuantity < 99) {
            setInputQuantity((prev) => {
                return prev = prev + 1
            })
        }
    }

    const handleChangeInputQuantity = (e:ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value >= 0 || +e.target.value <= 99) {
            setInputQuantity(+e.target.value)
        }
    }

    // Add Cart
    const handleAddToCart = () => {

        if (inputQuantity > 0) {
            cartContext?.setCart({
                name: "Fall Limited Edition Sneakers",
                price: cartContext.cart.price,
                quantity: cartContext.cart.quantity + inputQuantity
            })
        }

    }

    useEffect(() => {
        if (cartContext?.cart) {
            cartContext.setCart({
                ...cartContext.cart,
                total: cartContext.cart.price * cartContext.cart.quantity
            })
        }
    }, [cartContext?.cart.quantity])


    return (
        <main className={styles.productDetails}>
            <ProductImagesContainer />

            <div className={styles.productInfo}>
                <h4 className={styles.companyTitle}>SNEAKER COMPANY</h4>
                <h1 className={styles.productTitle}>Fall Limited Edition Sneakers</h1>
                <p className={styles.productDescription}>
                    These low-profile sneakers are you perfect casual wear companion. Featuring a durable
                    rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                <div className={styles.priceBox}>
                    <div className={styles.priceAndPercentage}>
                        <b>$125.00</b>
                        <span>50%</span>
                    </div>
                    <div className={styles.oldPrice}>
                        <s>$250.00</s>
                    </div>
                </div>

                <div className={styles.quantityAndAddToCart}>
                    <div className={styles.chooseQuantity}>
                        <button onClick={handleReduceQuantity}>
                            <img src={MinusIcon} alt="Ícone de reduzir quantidade" />
                        </button>
                        <input 
                            name="quantity" 
                            type="text" 
                            min={0}
                            max={99}
                            minLength={1}
                            maxLength={2}
                            value={inputQuantity}
                            onChange={handleChangeInputQuantity}
                        />
                        <button onClick={handleAddQuantity}>
                            <img src={PlusIcon} alt="Ícone de adicionar quantidade" />
                        </button>
                    </div>
                    <div className={styles.addToCartButtonBox}>
                        <button onClick={handleAddToCart} className={styles.addToCartButton}>
                            <img src={CartIcon} alt="Ícone de carrinho para adicionar produto no carrinho" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}