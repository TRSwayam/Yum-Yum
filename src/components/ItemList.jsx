import { useDispatch } from "react-redux";
import { addItem, decreaseItem } from "../Utils/CartSlices";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseItem = (item) => {
    dispatch(decreaseItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              {item.quantity > 1 && (
                <p className="text-xs font-semibold">Quantity: {item.quantity}</p>
              )}
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 flex items-center">
            <button
              className="p-2 rounded-lg bg-black text-white shadow-lg mx-1"
              onClick={() => handleDecreaseItem(item)}
            >
              -
            </button>
            <button
              className="p-2 rounded-lg bg-black text-white shadow-lg mx-1"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
