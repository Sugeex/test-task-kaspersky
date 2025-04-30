import data from "../../data/data"
import {IDuplicate} from "../../interface/interface"
import "./SubTitleNews.css"
import { GlobalOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import flag from "../../assets/franceflag.svg"
import { Typography} from 'antd';
import { FC } from "react";
const { Link } = Typography;

const SubTitleNews:FC<IDuplicate> = ({duplicate}) => {

  const authors = (author: string[]) => {
    if (author.length === 0) {
      return "Authors unknown";
    } else {
      return author;
    }
  };

  return (
    <div className="news__subtitle">
      <div>
        <GlobalOutlined />
        <Link
          underline
          className="subtitle__info"
          href={data.URL}
          target="_blank"
        >
          {data.DOM}
        </Link>
      </div>
      <div>
        <img className="subtitle__flag " src={flag} alt="flag" />
        <span className="subtitle__info">{data.CNTR}</span>
      </div>
      {!duplicate && (
        <div>
          <BookOutlined />
          <span className="subtitle__info">{data.LANG.toUpperCase()}</span>
        </div>
      )}
      <div>
        <UserOutlined />
        <span className="subtitle__info">{authors(data.AU)}</span>
      </div>
    </div>
  );
};

export default SubTitleNews;