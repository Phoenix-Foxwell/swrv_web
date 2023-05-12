import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BigBlogCard, BlogsCard } from "../utils/blogscard";
import { Link } from "@remix-run/react";

type BlogsIntroProps = {
  blogdata: any[];
};
const BlogsIntro = (props: BlogsIntroProps) => {
  return (
    <>
      <div className="w-full px-6 sm:px-16 relative">
        <div className=" absolute w-full h-screen box-border left-0 px-6 sm:px-16">
          <div className=" bg-[#EFEFEF] box-border w-full h-screen rounded-xl"></div>
        </div>
        <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 relative pt-8 px-6 mdLpx-0">
          {props.blogdata.slice(2, 4).map((val: any, index: number) => {
            return (
              <div key={index}>
                <Link key={index} to={`/blogs/bloginfo/${val.id}`}>
                  <BigBlogCard
                    title={`${val.shortDesc.toString().substring(0, 50)}...`}
                    time={val.dateTime}
                    imageUrl={val.imageUrl}
                  ></BigBlogCard>
                </Link>
              </div>
            );
          })}

          <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center mt-32 gap-y-8">
            {props.blogdata.map((val: any, index: number) => {
              return index < 6 ? (
                <Link key={index} to={`/blogs/bloginfo/${val.id}`}>
                  <BlogsCard
                    title={`${val.shortDesc.toString().substring(0, 50)}...`}
                    time={val.dateTime}
                    imageUrl={val.imageUrl}
                  ></BlogsCard>
                </Link>
              ) : (
                <div key={index}></div>
              );
            })}
          </div>

          {props.blogdata.slice(4, 6).map((val: any, index: number) => {
            return (
              <div key={index}>
                <Link key={index} to={`/blogs/bloginfo/${val.id}`}>
                  <BigBlogCard
                    title={`${val.shortDesc.toString().substring(0, 50)}...`}
                    time={val.dateTime}
                    imageUrl={val.imageUrl}
                  ></BigBlogCard>
                </Link>
              </div>
            );
          })}

          <div className="flex flex-wrap justify-center my-10 gap-8">
            {props.blogdata.map((val: any, index: number) => {
              return index < 6 ? (
                <Link key={index} to={`/blogs/bloginfo/${val.id}`}>
                  <BlogsCard
                    title={`${val.shortDesc.toString().substring(0, 50)}...`}
                    time={val.dateTime}
                    imageUrl={val.imageUrl}
                  ></BlogsCard>
                </Link>
              ) : (
                <div key={index}></div>
              );
            })}
          </div>

          {/* <div className="grid place-items-center my-10">
                        <div className="flex">
                            <div className="w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center"> <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> </div>
                            <div className="text-primary text-md font-normal grid place-items-center mx-10">1  of 20</div>
                            <div className="w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center"> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};
export default BlogsIntro;
