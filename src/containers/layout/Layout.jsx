import Cart from "@/components/Cart"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center bg-white box-border text-black">
      <Header/>
      <div className="w-full h-fit px-5 lg:px-10 my-[70px]">
        {children}
      </div>
      <Footer/>
      <Cart/>
    </div>
  )
}

export default Layout