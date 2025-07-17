import type { Product } from "../Types/Product";

type ProductCardProps = {
  product: Product;
  onSelect?: () => void;
  active: boolean;
};

const ProductCard = ({ product, onSelect, active }: ProductCardProps) => {
  const { name, price, image } = product;
  return (
    <div className={`product-card ${active ? "ativo" : ""}`} onClick={onSelect}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
