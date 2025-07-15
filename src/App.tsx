import React from "react";
import "./App.css";
import About from "./components/About";
import { Header } from "./components/Header";
import ProductCard from "./components/ProductCard";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  type Product = (typeof products)[0];
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  const products = [
    {
      id: 1,
      name: "Pulseira de Miçangas",
      price: "29,90",
      image:
        "https://cdn.pixabay.com/photo/2019/08/10/03/56/pearl-4396157_1280.jpg",
    },
    {
      id: 2,
      name: "Colar de Pérolas",
      price: "49,90",
      image:
        "https://media.istockphoto.com/id/475672238/pt/foto/diamante-e-colar-de-p%C3%A9rolas.jpg?s=612x612&w=0&k=20&c=B9UMhhSIMYqttr9g5vUTbP6Zr9eYEzo0bg98wd-z7WA=",
    },
    {
      id: 3,
      name: "Brinco Dourado",
      price: "39,90",
      image:
        "https://media.istockphoto.com/id/1415774738/pt/foto/golden-earrings-with-gemstone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=zOLd4g9yShsNajcLqVqYBW6QAmXkhSJGICqjK3g-jYM=",
    },
    {
      id: 4,
      name: "Brinco com pérolas",
      price: "59,90",
      image:
        "https://cdn.pixabay.com/photo/2017/07/21/04/33/jewelry-2524643_1280.jpg",
    },
    {
      id: 5,
      name: "Anel de Prata",
      price: "89,90",
      image:
        "https://cdn.pixabay.com/photo/2016/02/02/15/53/ring-1175529_1280.jpg",
    },
    {
      id: 6,
      name: "Colar de Flor",
      price: "69,90",
      image:
        "https://cdn.pixabay.com/photo/2015/02/06/03/28/jewelry-625726_1280.jpg",
    },
  ];

  const handleSelectedProduct = (product: Product) => {
    console.log(`Produto selecionado: ${product.name}`);
    setSelectedProduct(product);
  };

  return (
    <>
      <Header />
      <div className="gallery">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={parseFloat(product.price)}
            image={product.image}
            onSelect={() => handleSelectedProduct(product)}
            active={selectedProduct?.id === product.id}
          />
        ))}
      </div>
      <About />
      <WhatsAppButton
        telephone={"+5511999999999"}
        message={
          selectedProduct
            ? `Olá, gostaria de saber mais sobre o produto: ${selectedProduct.name}.`
            : "Olá, gostaria de saber mais sobre os produtos da Joias da Isa."
        }
      />
    </>
  );
}

export default App;
