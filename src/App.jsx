import "./App.css";
import Card from "./components/Card";
import catLogo from "./assets/images/catLogo.webp";
import {
  Lilies,
  Philodendron,
  Oleander,
  Aloe,
  Chrysanthemum,
  Hyacinth,
  Jadeplant,
  Sagopalm,
  Daffodil,
} from "./assets/images/toxicPlants";

const toxicPlants = [
  {
    name: "Lilies",
    location: "Beautiful though they may be, lilies are one of the most toxic house plants for cats. Ingesting even a small amount or licking a bit of pollen off their coat can cause kidney failure and death.",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Lilies,
  },
  {
    name: "Philodendron",
    location: "These resilient, easy-to-grow houseplants contain high levels of calcium oxalate crystals. If ingested, this plant can cause burns to the mouth, excessive drooling and vomiting. Other houseplants with high levels of calcium oxalate include the snake plant and pothos (devil’s ivy).",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Philodendron,
  },
  {
    name: "Oleander",
    location: "Also known as Nerium, oleander is more commonly found in outdoor gardens, but some gardeners bring them inside for the winter. These plants contain cardiac glycosides, which can cause drooling, diarrhea, abdominal pain, abnormal heart rhythm and neurologic signs.",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Oleander,
  },
  {
    name: "Aloe",
    location: "Both beautiful and functional, aloe is often used for its medicinal properties. But chewing on the plant can lead to vomiting, diarrhea and lethargy. While the inner gel is generally considered non-toxic and is often used on scrapes and burns, do not use it on your pet.",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Aloe,
  },
  {
    name: "Chrysanthemum",
    location: "These bright fall flowers contain several toxic components that can cause illness in pets if ingested, including vomiting and incoordination. Luckily, symptoms are often mild as long as your pet has only eaten a small amount of the plant.",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Chrysanthemum,
  },
  {
    name: "Hyacinth",
    location: "The toxins in this spring-blooming perennial are concentrated in the roots and bulbs. Chewing on the bulbs can cause severe vomiting and diarrhea, profuse drooling and burns to the mouth. Tulips also belong to the same plant family and can cause similar symptoms if the bulbs are ingested.",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Hyacinth,
  },
  {
    name: "Jade Plant",
    location: "Common among succulent-lovers, the jade plant is also known as the money plant or lucky plant. Chewing on these succulents can lead to vomiting, depression and loss of balance. Not so lucky after all!",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Jadeplant,
  },
  {
    name: "Sago Palm",
    location: "These leafy green ornamentals are highly toxic to pets! They contain cycasin, a toxin that causes severe liver failure within a few days of ingestion. All parts of the plant are toxic and ingestion can be fatal if not treated immediately.",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Sagopalm,
  },
  {
    name: "Daffodil",
    location: "These beautiful yellow and white flowers are a herald of spring. But ingestion of any part of the plant can trigger severe vomiting, diarrhea, abdominal pain, convulsions and abnormal heart rhythm.",
    link: "top-10-toxic-household-plants-for-pets",
    imgUrl: Daffodil,
  },
];

const App = () => {
  return (
    <div className="App">
      <img
        src={catLogo}
        alt="Cat Logo"
        style={{ width: "200px" }}
      />
      <h1>Plants That Are Toxic For Cats</h1>
      <div className="card-container">
        {toxicPlants.map((toxicPlants) => (
          <Card key={toxicPlants.name} {...toxicPlants} />
        ))}
      </div>
    </div>
  );
};

export default App;