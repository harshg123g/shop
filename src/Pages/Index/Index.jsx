import React, { useState } from 'react';
import HeroBanner from '../../Components/HeroBanner/HeroBanner';
import TrustBanner from '../../Components/TrustBanner/TrustBanner';
import CategoryBanner from '../../Components/CategoryBanner/CategoryBanner';
import Products from '../../Components/Products/Products';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Newsletter from '../../Components/Newsletter/Newsletter';
import CartSidebar from '../../Components/CartSidebar/CartSidebar';
import SearchOverlay from '../../Components/SearchOverlay/SearchOverlay';



const Index = () => {
    const [selectedProduct, setSelectedProduct] = useState(null); // initial value = null;
    console.log(selectedProduct)
    return (
        <div className='bg-background'>
            <HeroBanner />
            <TrustBanner />
            <CategoryBanner />
            <Products setSelectedProduct={setSelectedProduct} />

            {/* PRODUCT MODAL  */}
            {
                selectedProduct && (
                    // <ProductModal
                    //     
                    //     
                    // />
                    <ProductDetailsModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )
            }

            <Testimonial/>
            <Newsletter/>

            <CartSidebar/>
            <SearchOverlay onProductClick={setSelectedProduct} />
        </div>
    );
};

export default Index;