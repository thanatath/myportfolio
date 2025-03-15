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
    mediumFetcher()
      .then((data) => {
        this.setState({ blogList: data.item });
        this.setState({ blogDetail: data });
      })
      .catch((error) => {
        console.error("Error fetching Medium data:", error);
        this.setState({ blogList: [] }); // Fallback to empty list on error
      });
  }

  render() {
    const { blogList } = this.state;

    return (
      <div className="pt-[50px] pb-[100px] md:pt-[120px] md:px-[120px] bg-[#101010] text-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white mb-4">
            BLOG
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Sharing Knowledge
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="px-4 md:px-0"
          id="blogs"
        >
          <div className="bg-transparent rounded-[45px] px-4 md:px-8 pt-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogList && blogList.length > 0
                ? blogList.map((data) => blogCard(data))
                : handleMediumErr()}
            </div>
          </div>
        </div>
      </div>
    );

    function blogCard(data) {
      return (
        <div
          key={data.title}
          className="relative bg-white/10 backdrop-blur-md rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
            {data.image ? (
              <img
                className="w-full h-full object-cover rounded-t-[20px]"
                src={data.image}
                alt={data.title}
              />
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-2">{data.pubDate}</p>
            <h3 className="text-xl font-bold mb-2">{data.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {pushBadge(data.category)}
            </div>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 font-semibold transition-colors duration-300"
            >
              Read Now
            </a>
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
        <div className="text-center p-10 bg-gray-800 rounded-[20px] shadow-md col-span-full">
          <div className="mb-6">
            <span className="text-4xl">😕</span>
            <h3 className="text-2xl font-semibold mt-2">Oops! Sorry!</h3>
            <p className="text-gray-400 mt-2">
              We couldn’t connect to the Medium API.
            </p>
            <p className="text-gray-400">Follow me on Medium instead!</p>
          </div>
          <button
            onClick={handleButtonClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            <span className="mr-2">Follow on Medium</span>
          </button>
        </div>
      );
    }

    function pushBadge(stack) {
      return stack.map((id) => (
        <span
          key={id}
          className="bg-white/10 text-white text-xs font-medium px-2.5 py-1 rounded-full"
        >
          {id}
        </span>
      ));
    }
  }
}

export default Blogs;
