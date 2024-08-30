
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex flex-col items-center 
      gap-3 p-4 mt-10 ml-5 rounded-l outline">

        <div>
          <img src={item.image} alt="abc" className="h-[140px] w-[140px]"/>
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-m text-left mt-1">{item.title.slice(0, 15)}{item.title.length > 15 && '...'}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.slice(0, 150)}{item.description.length > 150 && '...'}</h1>
          <div>
            <p className="text-green-600 font-semibold">{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
