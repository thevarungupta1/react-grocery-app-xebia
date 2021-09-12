import React from 'react';
import Navbar from '../../components/Navbar/'
import SubCategory from './SubCategory';
import Products from './Products';

const ProductPage = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <SubCategory/>
                    </div>
                    <div className="col-lg-9">
                        <Products />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;