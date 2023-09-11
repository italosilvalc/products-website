import ProductCarousel from "./ProductCarousel";

import Img from '../../../../assets/imgs/main-kit.png'
import Img2 from '../../../../assets/imgs/rBVaV11HGc-ADPrfAALXm5rH7UE201_fe468d97-7a1d-4a69-b9da-b87570ad6cb0_540x.jpg'
import Img3 from '../../../../assets/imgs/rBVaV11HGc6AI3D1AAHP5c3YLCU583_cc9fd188-50fa-4fed-a78a-b36771ae2856_540x.jpg'
import Img4 from '../../../../assets/imgs/rBVaV11HGc6AeCKqAAQQNZwSPj8613_e4d12a40-51ae-4d93-ad19-03a00cf73e48_540x.jpg'
import Img5 from '../../../../assets/imgs/rBVaVF1HGc2ATopDAANF0W4NNM4576_40d28fcb-0349-4b82-a242-90cc9230c253_540x.jpg'
import Img6 from '../../../../assets/imgs/rBVaVF1HGc6AaN_8AAKG_OEE_IY500_031a39dd-0041-40e9-a14a-7a30d3e0910d_540x.jpg'
import Img7 from '../../../../assets/imgs/rBVaVF1HGc6AcF2ZAALVF5cBiVU602_1b5afe30-6981-40b3-8002-296b23476a70_540x.jpg'

export default function Presentation() {
  const products = [
    {
      id: 1,
      imageUrl: Img,
    },
    {
      id: 2,
      imageUrl: Img2,
    },
    {
      id: 3,
      imageUrl: Img3,
    },
    {
      id: 4,
      imageUrl: Img4,
    },
    {
      id: 5,
      imageUrl: Img5,
    },
    {
      id: 6,
      imageUrl: Img6,
    },
    {
      id: 7,
      imageUrl: Img7,
    },
  ];

  return (
    <div className="md:w-[50%]">
      <ProductCarousel products={products} />
    </div>
  );
}
