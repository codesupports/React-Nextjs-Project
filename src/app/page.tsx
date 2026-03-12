

import Product from "./components/product";
import Data from "./data/data.json";

const Home = () => {
  return (
    <>
      <Product data={Data} />
    </>
  );
}

export default Home;
