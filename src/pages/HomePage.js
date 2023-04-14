import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";
import { getApi } from "../services/api";

export default function HomePage(props) {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const data = await getApi("https://dummyjson.com/", "", "products");
      setProducts(data.products);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const productList = products.map((product) => (
    <div key={product.id} className="col">
      <CardItem product={product} />
    </div>
  ));

  return (
    <div className="container">
      <div className="row mt-3">
        {productList.length > 0 ? (
          productList
        ) : (
          <Loading className="position-center" />
        )}
      </div>
    </div>
  );
}

class ExampleClass extends React.Component {
  state = {
    name: "ahmed",
  };

  constructor() {
    super();
    console.log("Example Class [Constructor]");
  }

  render() {
    console.log("Example Class [Render]");

    return <h1>Example Life Cycle {this.state.name}</h1>;
  }

  componentDidMount() {
    console.log("Example Class [DidMount]");
    this.setState({ name: "mohammed" });
  }
  componentDidUpdate() {
    console.log("Example Class [DidUpdate]");
  }
  componentWillUnmount() {
    console.log("Example Class [WillUnmount]");
  }
}

// const [name, setName] = useState("ahmed");

// useEffect(() => {
//   console.log("Home page [useEffect]");
// }) // component did mount

// useEffect(() => {
//   console.log("Home page [useEffect]");
// }, []) // component did update
// useEffect(() => {
//   return () => {
//     console.log("Home page [component will unmount]");
//   }
// }, []) // component will  unmount
