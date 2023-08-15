import { Residencies } from "./Residencies";

const products = [
  {
    name: "Aliva Priva Jardin",
    price: 47043,
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      imgg:"https://images.adsttc.com/media/images/6037/0ef6/f91c/812d/a000/03d9/medium_jpg/3_EXTERIOR_CORNER_DETAIL.jpg?1614221027"
    // imgg: "r1.png",
  },
  {
    name: "Asatti Garden City",
    price: 66353,
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      imgg:"https://images.adsttc.com/media/images/6037/0f2b/f91c/812d/a000/03dc/medium_jpg/5_EXTERIOR_5.jpg?1614221069"
    //imgg: "r1.png",
  },
  {
    name: "Citralan Puri Serang",
    price: 35853,
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      imgg:"https://images.adsttc.com/media/images/6037/0f90/f91c/8122/3000/03e1/medium_jpg/7_TERRACE.jpg?1614221185"
    // imgg: "r1.png",
  },
  {
    name: "Aliva Priva Jardin",
    price: 47043,
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      imgg:"https://images.adsttc.com/media/images/6037/0eea/f91c/8122/3000/03d6/medium_jpg/3_EXTERIOR_3.jpg?1614221016"
    // imgg: "r1.png",
  },
  {
    name: "Asatti Garden City",
    price: 66353,
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      imgg:"https://images.adsttc.com/media/images/6037/0f47/f91c/8122/3000/03dc/medium_jpg/5_EXTERIOR.jpg?1614221100"
    // imgg: "r1.png",
  },
  {
    name: "Citralan Puri Serang",
    price: 35853,
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      imgg:"https://images.adsttc.com/media/images/6037/0f17/f91c/8122/3000/03d9/medium_jpg/4_EXTERIOR_4.jpg?1614221054"
    // imgg: "r1.png",
  },
];

export function Productss() {
  return (
    <div className="products">
      {products.map((product, index) =>{
        return <Residencies key={index} productt={product} />
      })
      }
    </div>
  );
}
