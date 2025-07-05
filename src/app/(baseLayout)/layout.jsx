import config from '@/config/swr';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { SWRConfig } from 'swr';

const BaseLayout = ({ children }) => {
    return (
        <div className="main min-h-screen flex flex-col">
            <SWRConfig value={config}>
                <Header />
                <div className="content flex-1 flex flex-col">{children}</div>
                <Footer />
            </SWRConfig>
        </div>
    );
};

export default BaseLayout;
