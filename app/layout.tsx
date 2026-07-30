import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const display = Newsreader({subsets:["latin"],weight:["400","500"],style:["normal","italic"],variable:"--font-display-next",display:"swap"});
const body = Manrope({subsets:["latin"],weight:["400","500","600","700"],variable:"--font-body-next",display:"swap"});

export const metadata:Metadata={metadataBase:new URL("https://imkaransangoi.com"),title:{default:"Websites in 48 Hours · Custom Software MVPs in 21 Days",template:"%s — Karan Sangoi"},description:"Complete your website preview in 48 hours, or turn your business bottleneck into a working custom software MVP in 21 days.",openGraph:{title:"Websites in 48 Hours · Custom Software MVPs in 21 Days",description:"Your website in 48 hours. Your custom software MVP in 21 days.",url:"https://imkaransangoi.com",siteName:"Karan Sangoi",type:"website",images:["/og-placeholder.svg"]}};
export default function RootLayout({children}:{children:React.ReactNode}){const schema={"@context":"https://schema.org","@type":"Person",name:"Karan Sangoi",url:"https://imkaransangoi.com",jobTitle:"Independent website and software developer"};return <html lang="en" className={`${display.variable} ${body.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>{children}</body></html>}
