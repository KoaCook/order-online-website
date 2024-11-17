'use client';

import React from 'react';
import ProductDetailsModal from './ProductDetailsModal';
import useLayoutStore from '@/stores/useLayoutStore';

const ProductDetails = () => {
    const isOpenProductModal = useLayoutStore(state => state.isOpenProductModal);

    return <>{isOpenProductModal && <ProductDetailsModal />}</>;
};

export default ProductDetails;
