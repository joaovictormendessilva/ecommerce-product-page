import styles from './LightBox.module.css';

import ProductImage1 from '../../assets/image-product-1.jpg';
import ProductThumbnail1 from '../../assets/image-product-1-thumbnail.jpg';
import ProductImage2 from '../../assets/image-product-2.jpg'
import ProductThumbnail2 from '../../assets/image-product-2-thumbnail.jpg';
import ProductImage3 from '../../assets/image-product-3.jpg'
import ProductThumbnail3 from '../../assets/image-product-3-thumbnail.jpg';
import ProductImage4 from '../../assets/image-product-4.jpg'
import ProductThumbnail4 from '../../assets/image-product-4-thumbnail.jpg';
import NextIcon from '../../assets/icon-next.svg';
import PreviousIcon from '../../assets/icon-previous.svg';
import CloseButton from '../../assets/icon-close.svg';

import { useState, useEffect, useContext } from 'react'
import { ContextLightBox } from '../../App';

export function LightBox() {

    const [featuredImage, setFeaturedImage] = useState<string>(ProductImage1)
    const [count, setCount] = useState<number>(1)

    const contextLightBox = useContext(ContextLightBox);

    const handleNextImage = () => {
        count <= 3 ? setCount((prev) => prev + 1) : setCount(1);
    }

    const handlePrevImage = () => {
        count > 1 ? setCount((prev) => prev - 1) : setCount(4);
        console.log("Voltou");
    }

    useEffect(() => {
        count === 1 && setFeaturedImage(ProductImage1)
        count === 2 && setFeaturedImage(ProductImage2)
        count === 3 && setFeaturedImage(ProductImage3)
        count === 4 && setFeaturedImage(ProductImage4)
    }, [count])


    useEffect(() => {

        const img = document.getElementById("featuredImage2") as HTMLImageElement;

        const imgSlide = document.getElementById("firstImage2") as HTMLImageElement;
        imgSlide.classList.remove("activeImage")
        const imgSlide2 = document.getElementById("secondImage2") as HTMLImageElement;
        imgSlide2.classList.remove("activeImage")
        const imgSlide3 = document.getElementById("thirdImage2") as HTMLImageElement;
        imgSlide3.classList.remove("activeImage")
        const imgSlide4 = document.getElementById("fourthImage2") as HTMLImageElement;
        imgSlide4.classList.remove("activeImage")
        

        if (img.src.includes(ProductImage1)) {
            imgSlide.classList.add("activeImage")
            setCount(1)
        }else if(img.src.includes(ProductImage2)){
            imgSlide2.classList.add("activeImage")
            setCount(2)
        }else if(img.src.includes(ProductImage3)){
            imgSlide3.classList.add("activeImage")
            setCount(3)
        }else if(img.src.includes(ProductImage4)){
            imgSlide4.classList.add("activeImage")
            setCount(4)
        }

    }, [featuredImage])


    return(
        <div className={styles.lightBox}>
            <div className={styles.lightBoxContent}>
                <div className={styles.lightBoxCloseButton}>
                    <button onClick={() => contextLightBox?.setActiveLightBox(false)}>
                        <img src={CloseButton} alt="Botão de fechar lightbox" />
                    </button>
                </div>

                <div className={styles.productImageAndSlides}>
                    <div className={styles.productImage}>
                        <img id='featuredImage2' src={featuredImage} alt="Imagem de destaque do produto" />
                        <div className={styles.prevAndNextButtons}>
                            <button className={styles.previousButton} onClick={handlePrevImage}>
                                <img src={PreviousIcon} alt="Ícone de voltar imagem" />
                            </button>
                            <button className={styles.nextButton} onClick={handleNextImage}>
                                <img src={NextIcon} alt="Ícone de voltar imagem" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.productThumbnails} id='productThumbnails2'>
                        <img className={styles.slideImg} id='firstImage2' onClick={() => setFeaturedImage(ProductImage1)} src={ProductThumbnail1} alt="Foto do produto em minuatura" />
                        <img className={styles.slideImg} id='secondImage2' onClick={() => setFeaturedImage(ProductImage2)} src={ProductThumbnail2} alt="Foto do produto em minuatura" />
                        <img className={styles.slideImg} id='thirdImage2' onClick={() => setFeaturedImage(ProductImage3)} src={ProductThumbnail3} alt="Foto do produto em minuatura" />
                        <img className={styles.slideImg} id='fourthImage2' onClick={() => setFeaturedImage(ProductImage4)} src={ProductThumbnail4} alt="Foto do produto em minuatura" />
                    </div>
                </div>
            </div>
        </div>
    )
}