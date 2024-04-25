import { URL } from "../../../link";
import Card from "./Card";
import Paganation from "./Paganation";

const getData = async (page, cat) => {
  const res = await fetch(`${URL}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Couldn't get posts");
  }
  return res.json();
};

const CardsContainer = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className=" basis-[67%]">
      <h2 className="text-[22px] font-extrabold my-[30px]">Recent Post</h2>
      <div className="flex items-start justify-center gap-6 flex-col">
        {posts.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              type={item.catSlug}
              date={item.createdAt}
              slug={item.slug}
            />
          );
        })}
      </div>
      <Paganation hasPrev={hasPrev} hasNext={hasNext} page={page} />
    </div>
  );
};

export default CardsContainer;
