import { useContext, useState } from "react";
import { FiCreditCard, FiShoppingCart } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPix } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import ToggleDetails from "./Details";
import ToggleComments from "./Comments";
import { GeneralContext } from "../../../../context/GeneralContext";
import FormModal from "./FormModal";

export default function Pricing() {
  const [cartAmount, setCartAmount] = useState(1);
  const [price, setPrice] = useState(147.9);
  const { cartItems, setCartItems } = useContext(GeneralContext);

  function handleDecrease() {
    if (cartAmount > 1) {
      setCartAmount(cartAmount - 1);
      setPrice((price * (cartAmount - 1)) / cartAmount);
    }
  }

  function handleIncrease() {
    if (cartAmount < 1) {
      setCartAmount(cartAmount + 1);
      setPrice((price * (cartAmount + 1)) / cartAmount);
    }
  }

  function handleAddProductToCart(number: number) {
    const storedCartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");

    if (cartAmount > 1 || storedCartItems.length >= 1) return;

    for (let i = 0; i <= number; i++) {
      setCartItems([...cartItems, "COMBO MAKITA - KIT 18 PEÇAS"]);
    }

    localStorage.setItem("cart-items", JSON.stringify([...cartItems, "COMBO MAKITA - KIT 18 PEÇAS"]));
  }

  return (
    <div className="md:w-[50%] md:px-10 p-2">
      {/* DETAILS */}
      <h1 className="text-2xl font-bold p-1 text-gray-700 mt-8">POUCAS UNIDADES - COMBO MAKITA - KIT 18 PEÇAS</h1>
      <div className="rating p-1 rating-xs items-center">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
        <span className="text-xs ml-1">(167)</span>
      </div>

      <div className="m-1 flex justify-start items-center gap-3 border border-purple-700 overflow-hidden rounded-lg w-[300px]">
        <div className="bg-purple-700 p-5">
          <FaPix className="text-white text-3xl" />
        </div>
        <div>
          <div className="text-3xl text-purple-700 font-bold p-1 flex items-center gap-2">
            R$ {(price - price * (5 / 100)).toFixed(2)}{" "}
            <span className="text-sm bg-purple-700 text-white p-1 rounded-lg">-5%</span>
          </div>
          <span className="font-bold text-purple-700 pl-1">no PIX</span>
        </div>
      </div>

      <div className="line-through p-1 text-gray-700">R$ {(790.87 * cartAmount).toFixed(2)}</div>

      <div className="text-3xl text-[#1ab794] font-bold p-1">R$ {price.toFixed(2)}</div>

      <div className="p-1 text-gray-700">
        <FiCreditCard class="inline-block" /> ou <span className="font-bold">3x</span> de{" "}
        <span className="font-bold text-[#1ab794]">R$ 49,30</span> sem juros
      </div>

      <div className="font-bold p-1 text-red-700">EM ESTOQUE: 1</div>

      <div className="flex justify-start items-center gap-2">
        <div className="ml-1 flex items-center ">
          <button className="bg-[#1ab794] h-10 text-white px-2 py-1 rounded" onClick={handleDecrease}>
            -
          </button>
          <span className="mx-2 text-lg">{cartAmount}</span>
          <button className="bg-[#1ab794] h-10 text-white px-2 py-1 rounded" onClick={handleIncrease}>
            +
          </button>
        </div>

        <button
          onClick={() => handleAddProductToCart(cartAmount)}
          className="p-2 flex w-full mr-1 justify-between items-center gap-2 rounded-lg font-bold text-[#1ab794] border-2 border-[#1ab794] hover:bg-base-200 cursor-pointer"
        >
          <span className="ml-3">
            <AiOutlinePlus />
          </span>{" "}
          <span className="text-sm md:text-base">
            Adicionar ao carrinho <FiShoppingCart class="inline-block" />
          </span>{" "}
          <span></span>
        </button>
      </div>

      <label
        htmlFor="form-modal"
        className="text-lg p-3 mx-1 my-2 flex justify-center items-center gap-2 rounded-lg font-bold bg-[#1ab794] text-slate-50 hover:bg-[#138f74] cursor-pointer"
      >
        COMPRAR
      </label>

      <FormModal url={"https://mpago.la/2nA6dpJ"} />

      <div className="ml-1 flex justify-start items-center gap-2 my-3">
        <div className="bg-[#1ab794] p-2 rounded-full">
          <TbTruckDelivery className="text-white text-xl" />
        </div>

        <div className="text-gray-700 text-sm font-bold">
          <span className="text-[#1ab794]">Frete Grátis</span> para todo o Brasil
        </div>
      </div>

      <div className="my-2">
        <ToggleDetails />
      </div>

      <div className="text-justify">
        <ToggleComments />
      </div>
    </div>
  );
}
