import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>헤더입니다</header>
                {children}
            </body>
        </html>
    );
}
