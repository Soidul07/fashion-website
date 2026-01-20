"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import FreeShiping from "../Widgets/Homepage/FreeShiping";
import FooterBackground from "./FooterBackground";

export default function Layouts({children}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="main_div">
       <Header/>
          <main className={isHome ? "home_main" : "inner_main"}>
            {children}
            <FreeShiping />
          </main>
       <Footer/>
       <FooterBackground />
    </div>
  );
}