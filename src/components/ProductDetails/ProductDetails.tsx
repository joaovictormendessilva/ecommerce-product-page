// CSS
import styles from './ProductDetails.module.css';

// Images
import FeaturedImage from '../../assets/img/image-product-1.jpg';
import ProductThumbnail1 from '../../assets/img/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from '../../assets/img/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from '../../assets/img/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from '../../assets/img/image-product-4-thumbnail.jpg';
import MinusIcon from '../../assets/img/icon-minus.svg';
import PlusIcon from '../../assets/img/icon-plus.svg';
import NextIcon from '../../assets/img/icon-next.svg';
import PreviousIcon from '../../assets/img/icon-previous.svg';
import CartIcon from '../../assets/img/icon-cart-button.svg'

// React
import { ChangeEvent, useContext, useEffect, useState } from 'react';

// Context API
import { CartContext } from '../../pages/Home/Home';

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
            <div className={styles.productImageAndSlides}>
                <div className={styles.productImage}>
                    <img src={FeaturedImage} alt="Imagem de destaque do produto" />
                    <div className={styles.prevAndNextButtons}>
                        <button className={styles.previousButton}>
                            <img src={PreviousIcon} alt="Ícone de voltar imagem" />
                        </button>
                        <button className={styles.nextButton}>
                            <img src={NextIcon} alt="Ícone de voltar imagem" />
                        </button>
                    </div>
                </div>
                <div className={styles.productThumbnails}>
                    <img src={ProductThumbnail1} alt="Foto do produto em minuatura" />
                    <img src={ProductThumbnail2} alt="Foto do produto em minuatura" />
                    <img src={ProductThumbnail3} alt="Foto do produto em minuatura" />
                    <img src={ProductThumbnail4} alt="Foto do produto em minuatura" />
                </div>
            </div>

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