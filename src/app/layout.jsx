import "./globals.css";
import localFont from 'next/font/local';
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "Ginox Web",
  description: "Join the future of crypto with a platform offering diverse crypto assets and products",
};

const myFont = localFont({
  src: './fonts/Geist-Medium.ttf',
  variable: '--font-geist-bold'
})

export default ({ children }) =>
{
  return <html lang="en">
    <body className={myFont.variable}>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </body>
  </html>
}
