import { notFound } from "next/navigation";

export interface Product {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  id: string;
}

interface FetchProductsResponse {
  total: number;
  products: Product[];
}

interface FetchProductsParams {
  currentPage?: number;
  limit?: number;
}

const baseURL = "https://dummyjson.com/products";

export const getAllProducts = async ({
  currentPage = 1,
  limit = 24,
}: FetchProductsParams): Promise<FetchProductsResponse> => {
  const skip = (currentPage - 1) * limit;

  const res = await fetch(
    `${baseURL}?limit=${limit}&skip=${skip}&select=title,tags,description,thumbnail`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: FetchProductsResponse = await res.json();

  return data;
};

export const getProductById = async ({
  productId,
}: {
  productId: string;
}): Promise<Product> => {
  const res = await fetch(
    `${baseURL}/${productId}?select=title,tags,description,thumbnail`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    } else {
      throw new Error(`Failed to fetch data for product ID: ${productId}`);
    }
  }

  const data: Product = await res.json();
  return data;
};
