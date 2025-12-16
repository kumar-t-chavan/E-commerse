import { useEffect, useState } from "react";

function Wishlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setData(saved);
  }, []);

  // 🗑 REMOVE ITEM FUNCTION
  const removeItem = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (data.length === 0) {
    return <h2>No Items in Wishlist</h2>;
  }

  return (
    <div >
    

    <div className="main-home h-50   box512">
          {data.map((item, i) => (
        <div key={i} className=" p-3 m-2 combo w-60 h-110 box border-2 to-black inline-block  grid-cols-4">
          <img src={item.img} height={"250px"} width={"250px"} />
          <h3 className="padding512">{item.title}</h3>
          <p>Price: {item.price}</p> 

          {/* 🗑 REMOVE BUTTON */}

          <button 
            onClick={() => removeItem(i)} 
            className="bg-red-500 text-white p-1 rounded btn512"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Wishlist;
