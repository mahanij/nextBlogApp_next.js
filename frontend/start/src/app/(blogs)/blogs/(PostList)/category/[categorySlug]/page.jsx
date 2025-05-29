import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "../../../_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = await params;

  const queries = `${queryString.stringify(
    await searchParams
  )}&categorySlug=${categorySlug}`;

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);





  return (
    <div>
      <br />
      <br />
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600 ">
          پستی موجود نیست
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
