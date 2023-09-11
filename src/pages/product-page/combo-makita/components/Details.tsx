import { useState } from "react";
import { FaNewspaper } from "react-icons/fa";
import Img1 from "../../../../assets/imgs/main-kit.png";
import Img2 from "../../../../assets/imgs/rBVaV11HGc6AeCKqAAQQNZwSPj8613_e4d12a40-51ae-4d93-ad19-03a00cf73e48_540x.jpg";
import Img3 from "../../../../assets/imgs/rBVaVF1HGc2ATopDAANF0W4NNM4576_40d28fcb-0349-4b82-a242-90cc9230c253_540x.jpg";
import Img4 from "../../../../assets/imgs/rBVaV11HGc-ADPrfAALXm5rH7UE201_fe468d97-7a1d-4a69-b9da-b87570ad6cb0_540x.jpg";
import Img5 from "../../../../assets/imgs/Garantiade7dias_480x480_d12206e9-c8b4-4f23-8dfc-92382edc1d4f_480x480.jpg";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function ToggleDetails() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="mx-1 p-3 shadow-lg flex justify-start items-center gap-2 bg-base-200 w-full m-auto border-b border-gray-300"
      >
        <FaNewspaper /> Informações do Produto {isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </button>
      {isOpen && (
        <div className="mx-1 w-full">
          {/* Add the elements you want to toggle here */}
          <h1 className="p-5 text-xl text-purple-700 text-center font-bold">COMBO MAKITA - KIT COM 18 PEÇAS!</h1>
          <p className="px-5">🔥Especial por tempo limitado. 🔥98,9% dos clientes recomendam este produto🔥</p>
          <p className="px-5">🔥Clique em "COMPRAR" para adquirir o seu agora!</p>
          <p className="px-5">
            🔥A quantidade é limitada. Depois que 2000 unidades forem vendidas, restauraremos para o preço original de R$799,90
          </p>

          <h2 className="text-lg font-bold text-center text-gray-700 p-5">
            APENAS HOJE ATÉ ÁS 23:59 VOCÊ GARANTE UM KIT DE FERRAMENTAS COM 18 PEÇAS POR APENAS R$147,90!
          </h2>

          <p className="p-5 text-sm text-center">
            São mais de <span className="font-bold">R$500</span> de desconto apenas hoje. Não pague por valores absurdos em
            Ferramentas!
          </p>

          <img src={Img1} className="p-2 my-2 m-auto w-full" />

          <h2 className="text-lg font-bold text-center text-gray-700 p-5">🔥Por que preço está baixo?🔥</h2>

          <p className="p-5 text-justify">
            rabalhamos diretamente com sites de comércio eletrônico como Amazon e lojas de departamento para ajudar a eliminar seu
            excesso de estoque. Como compramos devoluções limpas de clientes, bem como estoque em excesso em massa, podemos
            repassar esses grandes descontos para nossos clientes. Nossos caminhões de desembaraço da Amazon têm preços
            incrivelmente baixos! Também cooperamos com revendedores usando Ebay, swaps, lojas de desconto no mercado de pulgas,
            leilões e canais de exportação. As categorias que oferecemos incluem mercadorias em geral, mercadorias leves,
            mercadorias duras, móveis, brinquedos, eletrônicos, artigos esportivos e muito mais. Os produtos que fornecemos estão
            a uma fração do preço original.
          </p>

          <img src={Img2} className="p-2 my-2 m-auto w-full" />

          <p className="p-5 text-justify">
            Martelo de perfuração variável de 1/2" de 2 velocidades (0-600 e 0-1.900 RPM) com motor de 4 polos integrado Makita
            fornece 480 libras de torque máximo e pesa apenas 4,0 libras com bateria Serra circular de 6-1/2" fornece 3700 RPM
            para corte e corte mais rápidos de madeira e pesa apenas 7,3 libras com bateria A serra cruzada fornece 0-2800 SPM com
            troca de lâmina "sem ferramentas" e pesa apenas 8,3 libras. com bateria Motor de impacto de velocidade variável
            (0-2900 RPM e 0-3500 IPM) oferece 1460 pol.lbs. de torque máximo e pesa apenas 2,8 lbs. com bateria O cortador /
            rebarbadora angular sem escova de 4-1/2" oferece 8.500 RPM e pesa apenas 5,5 libras. com bateria
          </p>

          <img src={Img3} className="p-2 my-2 m-auto w-full" />

          <p className="p-5 text-justify">
            O kit é o máximo para o usuário profissional que exige uma gama completa de soluções sem fio de classe mundial. O
            XT1501 é o maior kit combinado da Makita com 18 ferramentas de íons de lítio sem fio para perfuração, condução,
            fixação, corte, retificação e muito mais. Faz parte do sistema Makita de íon de lítio em expansão de 18V, o maior
            sistema de ferramentas sem fio do mundo alimentado por baterias deslizantes de íon de lítio de 18V.
          </p>

          <img src={Img4} className="p-2 my-2 m-auto w-full" />

          <p className="p-5 text-justify">
            As baterias de íon de lítio Makita 18V têm os tempos de carga mais rápidos de sua classe, então passam mais tempo
            trabalhando e menos tempo sentados no carregador. Makita XT1501 inclui uma serra de corte de metal de 5-3/8" com
            velocidade de corte de metal de 3600 RPM, uma chave de impacto High Torque com torque máximo de 325 ft.lbs. e um
            martelo de perfuração de ½" com 480 in.lbs. de Torque Máximo. O XT1501 também inclui um poderoso motor de impacto que
            pesa apenas 2,8 libras (com bateria), uma serra circular de 6-1/2" com 3700 RPM completo, uma serra alternativa com
            0-2800 golpes por minuto (SPM), um 4-1 /Rebarbadora angular sem escova de 2" a 8.500 RPM, uma chave de impacto de ½"
            com 2.040 pol. lbs. de torque máximo, um martelo rotativo SDS-PLUS de 7/8" a 0-1.100 RPM, um ângulo de perfuração de
            3/8" a 0 -1.800 RPM e uma chave de fenda sem escova a 4.000 RPM.
          </p>

          <h2 className="text-lg font-bold text-center text-gray-700 p-5">FAQ - DÚVIDAS FREQUENTES</h2>

          <p className="p-5 text-justify">
            <span className="font-bold block text-center text-gray-700 mb-2">
              A PROMOÇÃO ESTÁ CORRETA MESMO, POSSO CONFIAR EM VOCÊS?
            </span>
            Sim, nossos produtos são de sites, comercio eletrônico e despachantes internacionais. Temos parcerias com essas
            empresas e comércios, com isso nós repassamos esses super descontos exclusivos aos nossos clientes.
          </p>

          <p className="p-5 text-justify">
            <span className="font-bold block text-center text-gray-700 mb-2">COMO COMPRAR?</span>
            Basta clicar no botão comprar, preencher todas as informações, logo em seguida finalizar a compra, escolhendo a forma
            de pagamento de sua preferência.
          </p>

          <p className="p-5 text-justify">
            <span className="font-bold block text-center text-gray-700 mb-2">COMO É A FORMA DE PAGAMENTO?</span>
            Temos 3 opções de pagamento: Cartão de Crédito, Boleto Pix. O pagamento via cartão de crédito é em até 12x (em até 4x
            sem juros), boleto e você também pode optar por pix! OBS: para pagamentos no pix e cartão o envio é imediato!
          </p>

          <p className="p-5 text-justify">
            <span className="font-bold block text-center text-gray-700 mb-2">QUAL O PRAZO DE ENTREGA?</span>
            O prazo de entrega gira em torno de 5 a 16 dias úteis para maioria das regiões!
            <br />
            Todos os produtos vendidos no site estão disponíveis à pronta entrega, o envio é imediato. Para compras no boleto,
            pode levar até 3 dias úteis até ser enviado.
          </p>

          <p className="p-5 text-justify">
            <span className="font-bold block text-center text-gray-700 mb-2">VOCÊS ENVIAM O RASTREIO?</span>
            Sim, o rastreio é enviado no e-mail cadastrado em nosso site. Caso precise de algum auxílio estamos à disposição pelo
            WhatsApp.
          </p>

          <p className="p-5 text-justify">
            <span className="font-bold block text-center text-gray-700 mb-2">ESTE SITE É SEGURO?</span>
            Nosso site é 100% seguro, pois utilizamos sistemas de criptografia avançada, utilizamos o certificado de segurança SSL
            (o famoso cadeado no navegador), e nenhuma informação sobre cartões de crédito são armazenadas, já possuímos mais de
            14.000 clientes satisfeitas.
          </p>

          <img src={Img5} className="p-2 my-2 m-auto w-full" />

          <p className="p-5 text-justify">
            <span className="font-bold block text-center text-gray-700 mb-2">Garantia de Satisfação</span>
            Nosso compromisso é com a sua satisfação, por isso caso não fique contente com a compra, em até 7 dias devolveremos o
            seu dinheiro!
          </p>
        </div>
      )}
    </div>
  );
}
