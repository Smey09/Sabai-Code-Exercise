import React from "react";
import Pagination from "../Molecule/Pagination";

const PostsPage: React.FC = () => {
  const totalPosts = 100;
  const postsPerPage = 10;
  return (
    <div>
      <Pagination total={totalPosts} limit={postsPerPage} />
    </div>
  );
};
export default PostsPage;
