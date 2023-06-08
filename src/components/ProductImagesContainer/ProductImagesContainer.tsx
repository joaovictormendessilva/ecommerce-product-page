import styles from './ProductImagesContainer.module.css'

import ProductImage1 from '../../assets/img/image-product-1.jpg';
import ProductThumbnail1 from '../../assets/img/image-product-1-thumbnail.jpg';
import ProductImage2 from '../../assets/img/image-product-2.jpg'
import ProductThumbnail2 from '../../assets/img/image-product-2-thumbnail.jpg';
import ProductImage3 from '../../assets/img/image-product-3.jpg'
import ProductThumbnail3 from '../../assets/img/image-product-3-thumbnail.jpg';
import ProductImage4 from '../../assets/img/image-product-4.jpg'
import ProductThumbnail4 from '../../assets/img/image-product-4-thumbnail.jpg';
import NextIcon from '../../assets/img/icon-next.svg';
import PreviousIcon from '../../assets/img/icon-previous.svg';

// React
import { useState, useEffect } from 'react'

export function ProductImagesContainer() {

    const [featuredImage, setFeaturedImage] = useState<string>(ProductImage1)

    useEffect(() => {

        const img = document.getElementById("featuredImage") as HTMLImageElement;

        const imgSlide = document.getElementById("firstImage") as HTMLImageElement;
        imgSlide.classList.remove("activeImage")
        const imgSlide2 = document.getElementById("secondImage") as HTMLImageElement;
        imgSlide2.classList.remove("activeImage")
        const imgSlide3 = document.getElementById("thirdImage") as HTMLImageElement;
        imgSlide3.classList.remove("activeImage")
        const imgSlide4 = document.getElementById("fourthImage") as HTMLImageElement;
        imgSlide4.classList.remove("activeImage")

        if (img.src.includes(ProductImage1)) {
            imgSlide.classList.add("activeImage")
        }else if(img.src.includes(ProductImage2)){
            imgSlide2.classList.add("activeImage")
        }else if(img.src.includes(ProductImage3)){
            imgSlide3.classList.add("activeImage")
        }else if(img.src.includes(ProductImage4)){
            imgSlide4.classList.add("activeImage")
        }

    }, [featuredImage])

    return (
        <div className={styles.productImageAndSlides}>
            <div className={styles.productImage}>
                <img id='featuredImage' src={featuredImage} alt="Imagem de destaque do produto" />
                <div className={styles.prevAndNextButtons}>
                    <button className={styles.previousButton}>
                        <img src={PreviousIcon} alt="Ícone de voltar imagem" />
                    </button>
                    <button className={styles.nextButton}>
                        <img src={NextIcon} alt="Ícone de voltar imagem" />
                    </button>
                </div>
            </div>
            <div className={styles.productThumbnails} id='productThumbnails'>
                <img className={styles.slideImg} id='firstImage' onClick={() => setFeaturedImage(ProductImage1)} src={ProductThumbnail1} alt="Foto do produto em minuatura" />
                <img className={styles.slideImg} id='secondImage' onClick={() => setFeaturedImage(ProductImage2)} src={ProductThumbnail2} alt="Foto do produto em minuatura" />
                <img className={styles.slideImg} id='thirdImage' onClick={() => setFeaturedImage(ProductImage3)} src={ProductThumbnail3} alt="Foto do produto em minuatura" />
                <img className={styles.slideImg} id='fourthImage' onClick={() => setFeaturedImage(ProductImage4)} src={ProductThumbnail4} alt="Foto do produto em minuatura" />
            </div>
        </div>
    )
}