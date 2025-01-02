import Image from "next/image";
import About from "./src/pages/about";
import Header from "./src/components/header";
import Product from "./src/components/product";
import Data from "./src/data/data.json";


interface MyComponentProps {
  data: any;
}

const Home: React.FC<MyComponentProps> = ({ data }) => {

  return (
    <div >
      {/* <About /> */}
      <Header />
      <div className="container mx-auto ">
      <Product data={Data} />
      </div>
    </div>
  );
}

export default Home;
