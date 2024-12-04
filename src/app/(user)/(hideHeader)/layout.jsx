import Footer from '@/layouts/Footer';

const HideHeader = ({ children }) => {
    return (
        <div className="main min-h-screen flex flex-col">
            <div className="content flex-1">{children}</div>
            <Footer />
        </div>
    );
};

export default HideHeader;
