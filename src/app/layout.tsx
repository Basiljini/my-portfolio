import Navbar from './components/Navbar';
import './globals.css'; // Path relative to src\app
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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