import { CSSProperties, useContext } from "react";

import noImage from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}
export const ProductImage = ({ img = '', className, style } : Props) => {

    const { product } = useContext( ProductContext );
    let imageToShow: string;

    if ( img ) {
        imageToShow = img;
    } else if (product.img) {
        imageToShow = product.img;
    } else {
        imageToShow = noImage;
    }
    return (
        <img 
            className={ `${styles.productImg} ${className}` } 
            src={ imageToShow } 
            alt='Product Iamge'
            style={ style } 
        />
    )
}