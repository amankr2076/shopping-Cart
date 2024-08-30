import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (
      <div className="flex">
  {/* Left side: Cart Items */}
  <div className="w-full md:w-2/3 lg:w-1/3 px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {cart.map((item, index) => {
      return <CartItem key={item.id} item={item} itemIndex={index} />
    })}
  </div>

  {/* Right side: Cart Summary (Fixed Position) */}
  <div className="w-full md:w-1/3 lg:w-1/3 px-4 ml-[120px] mt-[150px]">
    <div className="sticky top-0 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-2xl font-bold mb-4 text-gray-800">Your Cart</div>
      <div className="text-lg font-semibold mb-2 text-gray-600">Summary</div>
      <p className="mb-6 text-gray-500">
        <span>Total Items: <span className="font-medium">{cart.length}</span></span>
      </p>

      <p className="text-lg font-semibold mb-6 text-gray-700">
        Total Amount: <span className="font-medium">${totalAmount}</span>
      </p>
      
      <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Check Out Now
      </button>
    </div>
  </div>
</div>

    ) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
