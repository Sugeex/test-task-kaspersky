import data from "../../data/data";
import Highlights from "../Highlights/Highlights";
import Keywords from "../Keywords/Keywords";
import SubTitleNews from "../SubTitleNews/SubTitleNews";
import "./MainNews.css";
import { Typography } from "antd";
const { Link } = Typography;

const MainNews = () => {
  return (
    <>
      <SubTitleNews duplicate={false} />
      <Highlights />
      <Keywords />
      <div className="news__sourse">
        <Link className="sourse__link" href={data.URL} target="_blank">
          Original source
        </Link>
      </div>
    </>
  );
};

export default MainNews;
