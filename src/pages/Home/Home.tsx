import { createContext, useState } from 'react';

import { Header } from "../../components/Header/Header";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";

import { ICart } from '../../interfaces/CartTypes';

interface ICartContext {
    cart: ICart
    setCart: React.Dispatch<React.SetStateAction<ICart>>
}

export const CartContext = createContext<ICartContext | null>(null)

export function Home(){

    const [cart, setCart] = useState<ICart>({
        name: "",
        price: 125.00,
        quantity: 0,
        total: 0
    })

    return (
        <div>
            <CartContext.Provider value={{cart, setCart}}>
                <Header />
                <ProductDetails />
            </CartContext.Provider>
        </div>
    )
}