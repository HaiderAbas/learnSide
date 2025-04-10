"use client"
import Header from "./components/Header";
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
        <Header/>
        {children}
      </body>
    </html>
  );    
}
