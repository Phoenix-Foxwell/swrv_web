import { CusButton } from "../utils/buttont";
import { MarkatingCard } from "../utils/markatingcard";
import { CategoryCard } from "../utils/categorycard";
import { BlogsCard } from "../utils/blogscard";
import { DownloadApp } from "../utils/downloadapp";
import { Link } from "@remix-run/react";
import { useState } from "react";
import ProgressBar from "../progressbr";
type HomeIntroProps = {
  blogdata: any[];
};
export const HomeIntro: React.FC<HomeIntroProps> = (
  props: HomeIntroProps
): JSX.Element => (
  <>
    <div className="w-full px-2 sm:px-16">
      <HomeFirst></HomeFirst>
      <RelatatinoAndTrust></RelatatinoAndTrust>
      <Market></Market>
      <PowerfullInf></PowerfullInf>
      <ExploreCategory></ExploreCategory>
      <JoinSwrv></JoinSwrv>
      <Marketing></Marketing>
      <Blogs blogdata={props.blogdata}></Blogs>
      <SocialMedai></SocialMedai>
      <TopCategory></TopCategory>
    </div>
  </>
);

const RelatatinoAndTrust = () => {
  return (
    <>
      <div className="w-full md:w-3/5 lg:w-4/6 mx-auto lg:my-28">
        <h3 className="text-primary text-3xl font-bold">
          We strengthen relationships between
        </h3>
        <h3 className="text-secondary text-3xl font-bold">
          brands and creatives.
        </h3>
        <p className="text-gray-500 text-md font-normal">
          Our mission is to Make Waves, which stems from the fact that our
          creators tell stories that foster human relationships and generate
          waves of influence. These waves of influence create our data layers,
          and we use them to calculate the impact. Our clients and creators make
          a splash, and we track the results.
        </p>
      </div>

      <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-10">
        <h3 className="text-primary text-3xl font-bold">Trusted by</h3>
        <div className="h-[1px] bg-black w-full my-2"></div>
      </div>
      <div className="w-full my-6">
        <img
          src="/images/avatar/logostrip.png"
          alt="logos"
          className="h-[70px] w-[2640px] object-cover object-left-top hover:object-right-top transition-all duration-[4s]"
        />
      </div>
      {/* <div className="w-full grid palce-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-5xl text-center text-gray-600 gap-x-5 mb-10">
        <div>
          <h1>OGILVY</h1>
        </div>
        <div>
          <h1>McDonald's</h1>
        </div>
        <div>
          <h1>Shelter</h1>
        </div>
        <div>
          <h1>Playtika</h1>
        </div>
        <div>
          <h1>Starbucks</h1>
        </div>
      </div> */}
    </>
  );
};

const HomeFirst = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute h-[450px] md:h-[550px] lg:h-[700px] w-full inline-block mx-auto">
          <div className="h-full w-full bg-primary rounded-xl"></div>
        </div>
        <div className="w-full px-5 md:p-0 md:w-3/5 lg:w-4/6 relative mx-auto">
          <div className="pt-10 md:pt-24">
            <h3 className="text-white text-5xl font-bold">
              Reach the next billion
            </h3>
            <h3 className="text-white text-md font-normal mt-4">
              We connect brands with targeted audience through nano influencer
              marketing. Save time and improve performance. Take the guesswork
              out of Influencer analysis with data-driven audience insights,
              managed in one easy to use platform.
            </h3>
            <div className="flex flex-col sm:flex-row items-center ">
              <Link to="/register?isBrand=1">
                <CusButton
                  text="I'm a brand"
                  borderColor={"border-white"}
                ></CusButton>
              </Link>
              <div className="w-10"></div>
              <Link to="/register?isInf=1">
                <CusButton
                  text="I'm an Influencer"
                  background="bg-secondary"
                ></CusButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <div className="absolute w-full">
            <div className="px-2 sm:px-20 mx-auto grid place-items-center">
              <img
                src="/images/mast_group.svg"
                alt="error"
                className="w-[1200px] mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 lg:w-4/6 py-20 relative mx-auto grid place-content-center ">
            <div className="flex  gap-4 px-6 md:p-0">
              <div>
                <img src="/images/inf/inf4.png" alt="error" />
              </div>
              <div className="flex flex-col  gap-4">
                <div className="flex  gap-4 items-end">
                  <div>
                    <img src="/images/inf/inf2.png" alt="error" />
                  </div>
                  <div>
                    <img src="/images/inf/inf6.png" alt="error" />
                  </div>
                  <div>
                    <img src="/images/inf/inf5.png" alt="error" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <img src="/images/inf/inf7.png" alt="error" />
                  </div>
                  <div>
                    <img src="/images/inf/inf3.png" alt="error" />
                  </div>
                  <div>
                    <img src="/images/inf/inf1.png" alt="error" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Market = () => {
  return (
    <>
      <div className="w-full bg-[#EFEFEF]  rounded-xl md:p-0 p-6">
        <div className="mx-auto py-4 w-full md:w-3/5 lg:w-4/6">
          <div className="w-full  mx-auto my-6">
            <h3 className="text-primary text-3xl font-bold">
              An entire{" "}
              <span className="text-secondary">marketing platform</span>
              <br /> for influencers
            </h3>
            <p className="text-black text-md font-normal">
              All of the campaign's steps are smoothly integrated into a single
              user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:place-items-center my-10 ">
            <MarkatingCard
              imageUrl="/images/icons/icon1.png"
              title="Make a campaign"
              description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
              leftBorder={true}
            ></MarkatingCard>
            <MarkatingCard
              imageUrl="/images/icons/icon5.png"
              title="Look for influencers."
              description="Access a vast influencer database. It's simple to locate influencers thanks to advanced search criteria."
              leftBorder={true}
            ></MarkatingCard>
            <MarkatingCard
              imageUrl="/images/icons/icon4.png"
              title="Statistics"
              description="Real-time campaign performance analysis and sharing"
              leftBorder={true}
            ></MarkatingCard>
            <MarkatingCard
              imageUrl="/images/icons/icon3.png"
              title="Communication"
              description="For quick and easy connection with your influencers, there's an integrated chat option and a notification centre."
              leftBorder={true}
            ></MarkatingCard>
            <MarkatingCard
              imageUrl="/images/icons/icon2.png"
              title="Payments"
              description="Easily and securely manage payments from buyers to influencers."
              leftBorder={true}
            ></MarkatingCard>
          </div>
        </div>
      </div>
    </>
  );
};
const PowerfullInf = () => {
  return (
    <>
      <div className="w-full my-10 bg-[#b3b3b3] py-4 rounded-xl">
        <div className=" w-full md:w-3/5 lg:w-4/6 mx-auto md:p-0 p-6">
          <h3 className="text-white text-4xl font-bold">
            ARE YOU A POWERFUL
            <br /> INFLUENCER?
          </h3>
          <h3 className="text-white text-md font-normal mt-4">
            Stop looking for the ideal marketplace to join and simply join all
            of them.
          </h3>
          <div className="flex flex-col sm:flex-row">
            <Link to={"/register"}>
              <CusButton
                text="Join Now"
                background={"bg-secondary"}
              ></CusButton>
            </Link>
            <div className="w-10"></div>
            <Link to={"/whatyouget"}>
              <CusButton
                background="bg-transparent"
                text="Read More"
                textColor={"text-white"}
                borderColor={"border-white"}
              ></CusButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Marketing = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6">
        <div className=" py-4 w-full md:w-3/5 lg:w-4/6   mx-auto">
          <h3 className="text-primary text-4xl font-bold mt-20">
            We assist the influencer marketing sector in
          </h3>
          <h3 className="text-secondary text-4xl font-bold mb-10">
            becoming more efficient.
          </h3>
          <h3 className="text-gray-500 text-md font-normal mt-4">
            SWRV is a Danir AB project. Sigma, a major IT consulting
            organisation with 6,000 workers in 13 countries, is our sibling
            company. SWRV AB began as a celebrity app in 2011. The company
            expanded abroad, attracting hundreds of celebrities, bloggers, and
            users every day.
            <br />
            <br />
            United Influencers, the largest influencer marketing agency in
            Scandinavia, was launched in 2014. United Influencers, which has
            operations in Sweden and Norway, has run over 2,000 campaigns to
            date. <br />
            <br />
            SWRV has worked with dedicated developers for the past six years to
            create a full IT platform for influencer marketing. The goal was to
            assist United Influencers in lowering expenses, increasing income,
            and working more efficiently.
            <br />
            <br />
            We learned in September 2015 that numerous firms may utilise the
            same IT platform and save a lot of money. Furthermore, unified IT
            development is a critical business enabler for the industry's
            expansion. SWRV was conceived as an idea.
          </h3>

          <DownloadApp></DownloadApp>
          <div className="h-20"></div>
        </div>
      </div>
    </>
  );
};

const ExploreCategory = () => {
  return (
    <>
      <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4">
        <h3 className="text-primary text-3xl font-bold">Explore by category</h3>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 my-6 ">
        <CategoryCard
          imageUrl="/images/icons/education.png"
          title="Education"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
        <CategoryCard
          imageUrl="/images/icons/food.png"
          title="Food"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
        <CategoryCard
          imageUrl="/images/icons/photography.png"
          title="Photography"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
        <CategoryCard
          imageUrl="/images/icons/travel.png"
          title="Travel"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
        <CategoryCard
          imageUrl="/images/icons/motivation.png"
          title="Motivation"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
        <CategoryCard
          imageUrl="/images/icons/beauty.png"
          title="Beauty"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
        <CategoryCard
          imageUrl="/images/icons/automotive.png"
          title="Automotive"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
        <CategoryCard
          imageUrl="/images/icons/health.png"
          title="Health"
          description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."
        ></CategoryCard>
      </div>
    </>
  );
};

const JoinSwrv = () => {
  const [index, setIndex] = useState<number>(0);
  const title = [
    "Time and money are saved.",
    "The new standard.",
    "SWRV market",
  ];
  const description = [
    "The expense of using analytic tools to find and evaluate millions of influencers is prohibitive. Manual processes are significantly more  expensice. We can save you time and money by using automatic procedures. However, Establishing in-house solutions to asssist current influencer marketing it time-consuming and costly. SWRV exists for this reason.",
    "Influencer marketing is becoming an important aspec of most companies' marketing strategies. Data-driven decisions are made, and identifying the proper influencers necessitates the use of advanced IT technologies. To be competitive, we need to simplify our procedures as influencer marketing takes a place at the media purchasing table.",
    "SWRV Market is SWRV's entire influencer marketing solution. The whole campaign flow -- discovery. activation, tracking, payouts, and more - is supported by our influencer marketing platform. Users have access to complete automation and a transaction - based business model  that is available to any brand or purchasing agency for free. SWRV is a free assistance programme that may help you grow faster and get a competitive advantage.",
  ];
  return (
    <>
      <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-14 mb-4">
        <h3 className="text-primary text-3xl font-bold">Join SWRV</h3>
        <h3 className="text-gray-600 text-md font-normal">
          There are no commissions or membership costs for brands or buyer
          agencies.
        </h3>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center my-6">
          <div className="w-40 xl:w-60 h-40 m-4">
            <Link to={"/users"}>
              <img
                src="/images/inf/inf2.png"
                className="cursor-pointer w-full h-full object-cover bg-top rounded-2xl object-top"
              />
            </Link>
          </div>
          <div className="w-40 xl:w-60 h-40  m-4">
            <Link to={"/users/youtubers"}>
              <img
                src="/images/inf/inf3.png"
                className="cursor-pointer w-full h-full object-cover bg-top rounded-2xl object-top"
              />
            </Link>
          </div>
          <div className="w-40 xl:w-60 h-40 hidden lg:block  m-4">
            <Link to={"/users/instagrams"}>
              <img
                src="/images/inf/inf4.png"
                className="cursor-pointer w-full h-full object-cover bg-top rounded-2xl object-top"
              />
            </Link>
          </div>
        </div> */}

        <div className="w-full hidden lg:block">
          <div className="flex gap-6 my-6">
            <img
              onClick={() => setIndex(0)}
              src="/images/avatar/clock.jpg"
              alt="clock"
              className={`cursor-pointer w-72 object-center object-cover rounded-md transition-all duration-1000 ${index == 0 ? "h-60 order-1" : "h-52 order-2"
                }`}
            />
            <img
              onClick={() => setIndex(1)}
              src="/images/avatar/laptop.png"
              alt="laptop"
              className={`cursor-pointer w-72 object-center object-cover rounded-md transition-all duration-1000 ${index == 1 ? "h-60 order-1" : "h-52 order-2"
                }`}
            />
            <img
              onClick={() => setIndex(2)}
              src="/images/avatar/media.jpg"
              alt="media"
              className={`cursor-pointer w-72 object-center object-cover rounded-md transition-all duration-1000 ${index == 2 ? "h-60 order-1" : "h-52 order-2"
                }`}
            />
          </div>
          <h3 className="text-gray-600 text-lg font-semibold">
            {title[index]}
          </h3>
          <h3 className="text-gray-500 text-md font-normal w-4/5">
            {description[index]}
          </h3>
        </div>

        <div className="lg:hidden">
          <JoinSwrvCard
            image="/images/avatar/clock.jpg"
            title="Time and money are saved."
            description="The expense of using analytic tools to find and evaluate millions of
          influencers is prohibitive. Manual processes are significantly more
          expensice. We can save you time and money by using automatic
          procedures. However, Establishing in-house solutions to asssist
          current influencer marketing it time-consuming and costly. SWRV exists
          for this reason."
          ></JoinSwrvCard>

          <JoinSwrvCard
            image="/images/avatar/laptop.png"
            title="The new standard."
            description="Influencer marketing is becoming an important aspec of most companies' marketing strategies. Data-driven decisions are made, and identifying the proper influencers necessitates the use of advanced IT technologies. To be competitive, we need to simplify our procedures as influencer marketing takes a place at the media purchasing table."
          ></JoinSwrvCard>

          <JoinSwrvCard
            image="/images/avatar/media.jpg"
            title="SWRV market"
            description="SWRV Market is SWRV's entire influencer marketing solution. The whole campaign flow -- discovery. activation, tracking, payouts, and more - is supported by our influencer marketing platform. Users have access to complete automation and a transaction - based business model  that is available to any brand or purchasing agency for free. SWRV is a free assistance programme that may help you grow faster and get a competitive advantage."
          ></JoinSwrvCard>
        </div>
      </div>
    </>
  );
};

interface JoinSwrvCardProps {
  title: string;
  image: string;
  description: string;
}

const JoinSwrvCard: React.FC<JoinSwrvCardProps> = (
  props: JoinSwrvCardProps
): JSX.Element => {
  return (
    <div className="mt-10 mb-6">
      <img
        src={props.image}
        alt="join swrv image"
        className="w-44 h-44 object-cover object-top rounded-md"
      />
      <h3 className="text-gray-600 text-xl font-semibold">{props.title}</h3>
      <h3 className="text-gray-500 text-md font-normal w-4/5">
        {props.description}
      </h3>
    </div>
  );
};

type BlogIntroProps = {
  blogdata: any[];
};
const Blogs: React.FC<BlogIntroProps> = (
  props: BlogIntroProps
): JSX.Element => {
  return (
    <>
      <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-14 mb-4">
        <div className="flex">
          <h3 className="text-primary text-3xl font-bold grid place-items-center">
            Blogs
          </h3>
          <div className="grow"></div>
          <Link to={"/blogs"}>
            <CusButton
              text={"Read More"}
              textColor="text-primary"
              background="bg-transparent"
              border="border-2"
              borderColor={"border-secondary"}
            ></CusButton>
          </Link>
        </div>
        <div className="h-[1px] bg-black w-full my-2"></div>
      </div>

      <div className="grid place-items-center gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-6 items-start gap-y-6">
        {props.blogdata.map((val: any, index: number) => {
          return index < 5 ? (
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
        {/* <BlogsCard
          title="App Store stopped nearly $1.5 billion in fraudulent transactions in 2021"
          time="June 1, 2022"
          imageUrl="/images/blogs/blog5.png"
        ></BlogsCard>
        <BlogsCard
          title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision"
          time="June 1, 2022"
          imageUrl="/images/blogs/blog4.png"
        ></BlogsCard>
        <BlogsCard
          title="New report highlights global success of small businesses and entrepreneurs on the"
          time="June 1, 2022"
          imageUrl="/images/blogs/blog3.png"
        ></BlogsCard>
        <BlogsCard
          title="Three AAPI founders building apps on the App Store that cultivate community"
          time="June 1, 2022"
          imageUrl="/images/blogs/blog2.png"
        ></BlogsCard>
        <BlogsCard
          title="From farm to sea: Conserving mangroves to protect local livelihoods and the planet"
          time="June 1, 2022"
          imageUrl="/images/blogs/blog1.png"
        ></BlogsCard> */}
      </div>
    </>
  );
};

const SocialMedai = (): JSX.Element => {
  return (
    <>
      <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4">
        <div className="flex">
          <h3 className="text-primary text-3xl font-bold grid place-items-center">
            Notable topics
          </h3>
          <div className="grow"></div>
        </div>
        {/* <div className="flex gap-4 flex-wrap justify-center mt-6"> */}
      </div>
      <div className="grid place-items-center gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-6 items-start gap-y-6">
        <Link
          to={"/media/5"}
          className={`w-44 text-left shadow-xl rounded-xl pb-4`}
        >
          <img
            src={"/images/media/facebook.png"}
            alt="err"
            className="w-full rounded-md object-fill object-center h-44"
          />
          <h1 className="text-xl font-bold text-primary text-center mt-2">
            Facebook
          </h1>
        </Link>
        <Link
          to={"/media/1"}
          className={`w-44 text-left shadow-xl rounded-xl pb-4`}
        >
          <img
            src={"/images/media/instagram.png"}
            alt="err"
            className="w-full rounded-md object-fill object-center h-44"
          />
          <h1 className="text-xl font-bold text-primary text-center mt-2">
            Instagram
          </h1>
        </Link>
        <Link
          to={"/media/8"}
          className={`w-44 text-left shadow-xl rounded-xl pb-4`}
        >
          <img
            src={"/images/media/twitter.png"}
            alt="err"
            className="w-full rounded-md object-fill object-center h-44"
          />
          <h1 className="text-xl font-bold text-primary text-center mt-2">
            Twitter
          </h1>
        </Link>
        <Link
          to={"/media/3"}
          className={`w-44 text-left shadow-xl rounded-xl pb-4`}
        >
          <img
            src={"/images/media/snapchat.png"}
            alt="err"
            className="w-full rounded-md object-fill object-center h-44"
          />
          <h1 className="text-xl font-bold text-primary text-center mt-2">
            Snapchat
          </h1>
        </Link>
        <Link
          to={"/media/4"}
          className={`w-44 text-left shadow-xl rounded-xl pb-4`}
        >
          <img
            src={"/images/media/youtube.png"}
            alt="err"
            className="w-full rounded-md object-fill object-center h-44"
          />
          <h1 className="text-xl font-bold text-primary text-center mt-2">
            Youtube
          </h1>
        </Link>
      </div>
    </>
  );
};

const TopCategory = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-wrap justify-around w-full py-4">
        <Link
          to={"/notableinf"}
          className="text-white rounded-md py-2 px-4 bg-blue-500 text-xl font-semibold"
        >
          Notable influencer
        </Link>
        <Link
          to={"/notablebrand"}
          className="text-white rounded-md py-2 px-4 bg-blue-500 text-xl font-semibold"
        >
          Notable brand
        </Link>
      </div>
    </>
  );
};
