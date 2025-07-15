type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  onSelect?: () => void;
  active: boolean;
};

const ProductCard = ({
  name,
  price,
  image,
  onSelect,
  active,
}: ProductCardProps) => {
  return (
    <div className={`product-card ${active ? "ativo" : ""}`} onClick={onSelect}>
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">R$ {price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
