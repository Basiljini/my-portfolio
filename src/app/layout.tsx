import Navbar from './components/Navbar';
import './globals.css'; // Path relative to src\app
export const metadata = {
  title: 'My Portfolio',
  description: 'Personal web portfolio built with Next.js and Tailwind CSS',
  viewport: 'width=device-width, initial-scale=1', // Ensures proper scaling on mobile devices
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
        {/* 👇 explicitly ensure viewport meta is injected */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}