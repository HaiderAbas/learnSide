"use client"
import Navbar from "./components/navbar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en"
     data-arp=""  
    >
      <body
          data-new-gr-c-s-check-loaded="14.1229.0"
          data-gr-ext-installed=""
          >
        <Navbar />
        {children}
      </body>
    </html>
  );    
}
