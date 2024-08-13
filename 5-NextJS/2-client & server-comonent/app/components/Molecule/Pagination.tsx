import React from "react";
import PaginationButton from "../Atomic/PaginationButton";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface PaginationProps {
  total: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, limit }) => {
  const totalPages = Math.ceil(total / limit);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index}
          pageNumber={index + 1}
          isActive={currentPage === index + 1}
          onClick={handlePageChange}
        />
      ))}
    </div>
  );
};

export default Pagination;
