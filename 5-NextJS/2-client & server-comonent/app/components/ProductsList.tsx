import Link from "next/link";
import { getAllProducts } from "../api/products/data";
import ProductCard from "./ProductCard";

interface ProductListProps {
  currentPage?: number;
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = async ({
  currentPage,
  limit,
}) => {
  const { products } = await getAllProducts({ currentPage, limit });

  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((item, index) => (
        <div key={index} className="mx-auto m-2">
          <Link href={`products/${item.id}`}>
            <ProductCard item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
