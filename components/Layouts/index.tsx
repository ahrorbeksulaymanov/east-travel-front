import HeaderClient from "../Header";
import Footer from "../footer";

export default function Layout({ children } : {children: JSX.Element}) {
  return (
    <>
        <HeaderClient />
        <main>{children}</main>
        <Footer />
    </>
  )
}