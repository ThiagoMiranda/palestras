import React, { Fragment } from 'react'

import ProductInfo from '../components/Product/Product'
import Middle from '../components/Middle/Middle'

import '../assets/styles/product_styles.css';

const Product = () => (
    <Fragment>
        <Middle/>
        <ProductInfo />
    </Fragment>
)

export default Product
