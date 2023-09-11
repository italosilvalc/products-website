import { useContext, useState } from "react";
import Img from "../../../../assets/imgs/Garantiade7dias_480x480_d12206e9-c8b4-4f23-8dfc-92382edc1d4f_480x480.jpg";
import { GeneralContext } from "../../../../context/GeneralContext";
import { TbTruckDelivery } from "react-icons/tb";

type FormData = {
  name: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  state: string;
};

export default function FormModal({ url }: { url: string }) {
  const [formData, setFormData] = useState({} as FormData);
  const { urls } = useContext(GeneralContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.address || !formData.city || !formData.name || !formData.postalCode || !formData.state) {
      return alert("Preencha Todos os Campos");
    }

    if (formData.name.includes('@')) {
      return alert('Você colocou seu email no campo do nome')
    }

    if (urls) {
      console.log("urls");
    }

    window.location.replace(url);
  }

  return (
    <>
      <input type="checkbox" id="form-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box !w-full !max-w-4xl relative">
          <label htmlFor="form-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </label>

          <h1 className="text-2xl text-center text-gray-600 font-bold mb-4">Formulário de Entrega</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold">
                Nome Completo:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700 font-bold">
                Endereço:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="postalCode" className="block text-gray-700 font-bold">
                  CEP:
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode || ""}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="city" className="block text-gray-700 font-bold">
                  Cidade:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city || ""}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="state" className="block text-gray-700 font-bold">
                  Estado:
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state || ""}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>

            <div className="w-full">
              <h2 className="font-bold text-gray-700 mb-4 flex justify-start items-center gap-2">
                <span className="text-xl">Método de envio</span> <TbTruckDelivery className="text-[#1ab794] text-4xl" />
              </h2>

              <div>
                <label className="flex justify-between items-center mb-2 border-2 border-[#1ab794] rounded-lg p-5">
                  <span>
                    <input type="radio" name="deliveryType" value="free" className="mr-2" defaultChecked />
                    Frete Padrão
                  </span>
                  <span>Grátis</span>
                </label>
                <label className="flex text-gray-400 justify-between items-center mb-2 border-2 border-gray-400 rounded-lg p-5">
                  <span>
                    <input type="radio" name="deliveryType" value="free" className="mr-2" disabled />
                    Frete Express (indisponível)
                  </span>
                  <span>53,90</span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn bg-[#1ab794] text-white px-4 py-2 rounded-md hover:bg-[#138f74] block w-full">
              Salvar
            </button>
          </form>

          <img src={Img} className="p-2 my-2 m-auto w-full max-w-[15rem]" />

          <p className="p-5 text-justify max-w-lg text-xs m-auto">
            <span className="font-bold block text-center text-gray-700 mb-2">Garantia de Satisfação</span>
            Nosso compromisso é com a sua satisfação, por isso caso não fique contente com a compra, em até 7 dias devolveremos o
            seu dinheiro!
          </p>
        </div>
        <label className="modal-backdrop" htmlFor="form-modal">
          Close
        </label>
      </div>
    </>
  );
}
