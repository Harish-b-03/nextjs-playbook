import { useContext } from "react"
import { CartContext } from "../contexts/Cart/CartProvider"
import CartCard from "./CartCard.jsx"

const Cart = () => {
  const { isOpen, items, toggleCart } = useContext(CartContext)
  
  return (
    <div className={`${(isOpen)?'opacity-100':'opacity-0 pointer-events-none delay-300'} fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-50 transition-all`}>
        <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-fit h-fit">
                <div className={`absolute top-0 ${(isOpen)?"right-0":"-right-1/2 opacity-0 pointer-events-none"} w-2/5 h-screen flex flex-col justify-between items-center bg-white transition-all duration-500`}>
                    <div className="relative w-full h-fit py-5 flex justify-center items-center border-b border-gray-400">
                        <span className="font-semibold text-gray-600">
                            Cart
                        </span>
                        <button 
                            onClick={toggleCart}
                            className="absolute top-1/2 left-6 p-2 rounded-md -translate-y-1/2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full h-full">
                        {
                            (items.length > 0)?
                            <div className="pt-5 w-full h-[90%] flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto">
                                {
                                    items.map((item, index) => (
                                        <CartCard key={index} product={item}/>
                                    ))
                                }
                            </div>
                            :
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="mt-3 text-gray-500 font-medium">
                                    Please add products to your cart
                                </span>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart