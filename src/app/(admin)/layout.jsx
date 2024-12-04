import { Provider } from './components/ui/provider';

export default function RootLayout({ children }) {
    return (
        <html lang="vi" suppressHydrationWarning>
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
