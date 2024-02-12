import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { mediumFetcher } from "../utils/medium";
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
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="px-[18px] mt-[50px] md:mt-[120px] md:px-[120px] "
        id="blogs"
      >
        <div className="bg-slate-100/90 rounded-[45px] px-[35px] pt-[28px] pb-[45px]">
          <div className="bg-slate-100 relative top-[-50px] h-[40px] mb-[-35px] text-[black] pt-1 mx-auto rounded-[25px] w-[280px] text-center shadow-md">
            <h1 className="align-middle font-bold text-[20px]">My Blogs</h1>
          </div>

          <div className="flex flex-col overflow-x-auto gap-6 h-[400px] md:p-[35px] ">
            {blogList}
          </div>
        </div>
      </div>
    );

    function blogBox(data) {
      return (
<div className="relative mx-auto bg-cover bg-center md:w-full">
  <img className="absolute h-full shadow-md duration-300 hover:shadow-lg w-full object-cover rounded-[25px]" src={data.image} />
  <div className="text-white md:w-1/2 ">
    <div className="bg-slate-600 duration-300 hover:bg-slate-700 bg-opacity-95 p-5 opacity-90 backdrop-blur-lg md:p-12 rounded-[25px] md:rounded-l-[25px] md:rounded-r-none">
      <p className="mb-4">{data.pubDate}</p>
      <h2 className="text-4xl font-bold">{data.title}</h2>
      <a href={data.link} target='_blank' className="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600"> Read Now </a>
    
    <div className="mt-4">
    {push_badge(data.category)}
    </div>
    
    </div>
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
