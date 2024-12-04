import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import React from 'react';

const BaseLayout = ({ children }) => {
    return (
        <div className="main min-h-screen flex flex-col">
            <Header />
            <div className="content flex-1 flex flex-col">{children}</div>
            <Footer />
        </div>
    );
};

export default BaseLayout;
