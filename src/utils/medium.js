import { me_info } from "../component/data";
import { convertXmlToJson } from "../utils/xml2json";

const mediumFetcher = async () => {
  const mediumUser = me_info.medium;

  const url = `https://medium.com/feed/@${mediumUser}`;

  const proxyCors = `https://corsbypass.thanatuth-euro.workers.dev/proxy?modify&proxyUrl=${url}`; // <- dont try to use it. i protected with cors ^_^ 

  const response = await fetch(proxyCors, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((body) => body.text());

  const json = convertXmlToJson(response);
  const data = prepareData(json);
  return data;
};

const prepareData = (data) => {
  const blogs = {
    title: data.channel.title["#cdata-section"],
    image: data.channel.image.url["#text"],
    item: data.channel.item,
  };

  var blogsDetails = [];

  blogs.item.map((blog) => {
    const content = blog["content:encoded"]["#cdata-section"];
    var parser = new DOMParser();
    var doc = parser.parseFromString(content, "text/html");
    var firstImageSrc = doc.querySelector("img").src;
    const blogsDetail = {
      title: blog.title["#cdata-section"],
      pubDate: blog.pubDate["#text"],
      link: blog.link["#text"],
      category: blog.category,
      image: firstImageSrc,
    };
    var blogsDetailCategory = [];
    blogsDetail.category.map((blog) => {
      blogsDetailCategory.push(blog["#cdata-section"]);
    });
    blogsDetail.category = blogsDetailCategory;
    blogsDetails.push(blogsDetail);
  });
  blogs.item = blogsDetails;
  return blogs;
};

export { mediumFetcher };
