import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsFillChatTextFill } from "react-icons/bs";

export default function ToggleComments() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const comments = [
    {
      name: "Emanoel",
      comment: "Ótimo material, gostei",
    },
    {
      name: "Ricado",
      comment: "Top demais, comprei e chegou rapidinho, gostei demais dessa maleta, vai ser de grande utilidade",
    },
    {
      name: "Breno E",
      comment: "Ótimo kit de ferramentas vem com uma variedade e tanto de ferramentas, agora com ela aqui é adeus gambiarras",
    },
    {
      name: "Carlos",
    },
    {
      name: "João V",
    },
    {
      name: "Rafael N",
      comment: "Uma das mais completas que já vi, vem de tudo nela, com ela realmente você ta preparado pra tudo",
    },
    {
      name: "Pedro",
      comment: "bom",
    },
    {
      name: "Martones",
    },
    {
      name: "Lucas M",
    },
    {
      name: "Sandriele",
      bad: true,
    },
    {
      name: "Glauber",
    },
    {
      name: "Cadu",
      comment: "Rapaz! to feliz com a compra",
    },
    {
      name: "Thalis",
    },
    {
      name: "João",
      comment: "Tudo de ótima qualidade estou surpreso com o tanto de ferramente e chave que vem nesse negócio",
    },
    {
      name: "Gabriel A",
    },
    {
      name: "Nelson R",
      comment: "Super recomendo essa loja comprei como indicação e gostei demais dessa maleta, vai ser muito útil para mim",
    },
    {
      name: "Murilo",
      comment:
        "Legal pra caramba, maleta vem com tudo, ta doido até to meio perdido com algumas aqui que não sei nem pra onde que ela é [...]",
    },
    {
      name: 'Milena',
    },
    {
      name: 'Cassio R',
      comment: 'Eu daria 5 estrelas, mas chegou 2 dias depois, mas gostei bastante.',
      bad: true
    },
    {
      name: 'Paulo M',
    }
  ];

  return (
    <div>
      <button
        onClick={toggle}
        className="mx-1 p-3 shadow-lg flex justify-start items-center gap-2 bg-base-200 w-full m-auto border-b border-gray-300"
      >
        <BsFillChatTextFill /> Comentários {isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </button>
      {isOpen && (
        <div className="mx-1 w-full p-5">
          {/* Add the elements you want to toggle here */}
          <div className="text-6xl font-bold text-center text-gray-600 m-2 mt-10">4.9</div>

          <div className="font-bold text-xs text-gray-400 text-center mb-2">167 revisões</div>

          <div className="flex justify-center items-center mb-10">
            <div className="rating rating-lg">
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
            </div>
          </div>

          {comments.map((user, index) => {
            const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-yellow-500", "bg-gray-500"];

            const currentColor = colors[Math.floor(Math.random() * colors.length)];

            return (
              <div className="m-2 mt-4" key={index}>
                <div className="flex justify-start items-center gap-3 bg-base-200 rounded-full relative">
                  <div className={`${currentColor} rounded-full h-10 w-10 flex justify-center items-center`}>
                    <span className="text-white text-lg font-bold">{user.name[0]?.toUpperCase()}</span>
                  </div>

                  <span className="font-bold text-gray-600">{user.name}</span>

                  {user.bad ? (
                    <div className="flex justify-center items-center absolute right-2">
                      <div className="rating rating-xs">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-gray-400" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center absolute right-2">
                      <div className="rating rating-xs">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                      </div>
                    </div>
                  )}
                </div>

                {user?.comment ? <div className="ml-5 mt-1 p-2 rounded-lg bg-base-200 text-start">{user.comment}</div> : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
