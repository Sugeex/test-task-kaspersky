import HeaderNews from "../HeaderNews/HeaderNews"
import SubTitleNews from "../SubTitleNews/SubTitleNews"
import TitleNews from "../TitleNews/TitleNews"
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "./Duplicates.css"

const Duplicates = () => {
  return (
    <>
      <div className="news__duplicat">
        <HeaderNews duplicate={true} />
        <TitleNews />
        <SubTitleNews duplicate={true} />
      </div>
      <Button className="duplicat__btn" block><DownOutlined />View Duplicates</Button>
    </>
  );
};

export default Duplicates