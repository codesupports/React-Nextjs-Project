
import Header from "./src/components/header";
import Product from "./src/components/product";
import Data from "./src/data/data.json";

interface MyComponentProps {
  data: any;
}

const Home: React.FC<MyComponentProps> = ({ data }) => {

  return (
    <div >
      <div className="container mx-auto px-4">
      {/* <About /> */}
      <Header />
      
      <Product data={Data} />
      </div>
    </div>
  );
}

export default Home;
