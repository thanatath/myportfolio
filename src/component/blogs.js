import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { mediumFetcher } from "../utils/medium";
import { me_info } from "../component/data";
class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogList: null,
      blogDetail: null,
    };
  }
  componentDidMount() {
    mediumFetcher().then((data) => {
      this.setState({ blogList: data.item });
      this.setState({ blogDetail: data });
    });
  }

  render() {
    const blogList =
      this.state.blogList != null
        ? this.state.blogList.map((data) => blogBox(data))
        : null;
    return (
      <div className="pt-[50px] pb-[100px] md:pt-[120px] md:px-[120px] bg-[#101010]">
        <div className="text-center mb-16 ">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-4">
            BLOG
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Sharing Knowledge
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <div class="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="px-[18px] "
          id="blogs"
        >
          <div className="bg-slate-100/90 rounded-[45px] px-[35px] pt-[28px] pb-[45px]">
            <div className="flex flex-col overflow-x-auto gap-6 h-[400px] md:p-[35px] ">
              {blogList != null ? blogList : handleMediumErr()}
            </div>
          </div>
        </div>
      </div>
    );

    function blogBox(data) {
      return (
        <div
          key={data.title}
          className="relative mx-auto bg-cover bg-center md:w-full"
        >
          <img
            className="absolute h-full shadow-md duration-300 hover:shadow-lg w-full object-cover rounded-[25px]"
            src={data.image}
          />
          <div className="text-white md:w-1/2 ">
            <div className="bg-slate-600 duration-300 hover:bg-slate-700 bg-opacity-95 p-5 opacity-90 backdrop-blur-lg md:p-12 rounded-[25px] md:rounded-l-[25px] md:rounded-r-none">
              <p className="mb-4">{data.pubDate}</p>
              <h2 className="text-4xl font-bold">{data.title}</h2>
              <a
                href={data.link}
                target="_blank"
                className="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600"
              >
                {" "}
                Read Now{" "}
              </a>

              <div className="mt-4">{push_badge(data.category)}</div>
            </div>
          </div>
        </div>
      );
    }
    function handleMediumErr() {
      const handleButtonClick = () => {
        const link = `https://medium.com/@${me_info.medium}`;
        window.open(link, "_blank");
      };
      return (
        <div className="text-lg text-black my-auto mx-auto text-center">
          <div className="mb-4">
            <div>
              <FontAwesomeIcon
                className="px-1 hover:scale-125 duration-300 z-40 mt-3 h-[55px]"
                icon={solid("triangle-exclamation")}
              />
            </div>
            <span className="text-[40px]">Oh, sorry !</span>
            <span className="block">We cannot connect to the Medium API.</span>
          </div>
          <div className="mb-4">
            <span className="block">You can still follow it from here!</span>
          </div>
          <div>
            <button
              className="md:bg-blue-500 hover:bg-blue-600 bg-blue-600 duration-300 hover:scale-110 rounded-lg text-white px-4 py-2 rounded"
              onClick={handleButtonClick}
            >
              <FontAwesomeIcon
                className="px-1 hover:scale-125 duration-300 z-40 h-[15px]"
                icon={brands("medium")}
              />
              Follow me on MEDIUM !
            </button>
          </div>
        </div>
      );
    }
    function push_badge(stack) {
      let badge_render = stack.map((id) => (
        <span
          key={id}
          className="bg-white text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
        >
          {id}
        </span>
      ));

      return badge_render;
    }
  }
}

export default Blogs;
