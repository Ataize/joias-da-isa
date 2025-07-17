import React from "react";
import type { Product } from "./Types/Product";
import About from "./components/About";
import { Header } from "./components/Header";
import ProductCard from "./components/ProductCard";
import WhatsAppButton from "./components/WhatsAppButton";
import products from "./data/products.json";
function App() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  // Simulating fetching products from an API
  // const [products, setProducts] = React.useState<Product[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao buscar produtos:", error);
  //     });
  // }, []);

  const handleSelectedProduct = (product: Product) => {
    console.log(`Produto selecionado: ${product.name}`);
    setSelectedProduct(product);
  };

  return (
    <>
      <Header />
      <div className="gallery-grid">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
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
