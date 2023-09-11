import { useContext, useEffect } from "react";
import { GeneralContext } from "../context/GeneralContext";
import Logo from '../assets/imgs/logo.png'

export default function NavbarDesktop() {
  const { cartItems, setCartItems } = useContext(GeneralContext);
  const price = 147.9;

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");

    setCartItems(storedCartItems);
  }, []);

  function handleRemoveFromCart(index: number) {
    let newArr = [...cartItems].filter((_, idx) => idx != index);

    setCartItems([...newArr]);

    localStorage.setItem("cart-items", JSON.stringify([...newArr]));
  }

  return (
    <div className="navbar bg-yellow-300 shadow-lg sticky top-0 z-10">
      <div className="flex-1 justify-start items-center ">
          <img className="md:pl-5" src={Logo} />
      </div>
      <div className="flex-none md:mr-10">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item p-1 rounded-lg">{cartItems.length}</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">{cartItems.length} Items</span>

              <ul>
                {cartItems.map((item, index) => {
                  return (
                    <li className="font-bold flex justify-between items-center border rounded-lg p-4" key={index}>
                      <span>{item}</span>
                      <button className="text-lg" onClick={() => handleRemoveFromCart(index)}>
                        &times;
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-2">
                <span className="font-bold text-gray-700">Total:</span>{" "}
                <span className="text-[#1ab794] font-bold border-b-2">R$ {(price * cartItems.length).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
