import data from "../../data/data"
import SubTitleNews from "../SubTitleNews/SubTitleNews";
import "./MainNews.css"
import { Typography, Button  } from 'antd';
const { Link } = Typography;

import { useState } from "react";

const MainNews = () => {
    const [expanded, setExpanded] = useState(false);
    const rows = 3;

    const parseHighlight = (text: string) => {
        const parts = text.split(/(<kw>|<\/kw>)/);
        
        return parts.map((part, index) => {
          if (part === '<kw>') return null;
          if (part === '</kw>') return null;
          
          if (index > 0 && parts[index - 1] === '<kw>') {
            return <mark key={index}>{part}</mark>;
          }
          
          return part;
        });
      };

    return (
      <>
        <SubTitleNews duplicate={false} />
        <div>
          <Typography.Paragraph
            style={{ margin: 0 }}
            ellipsis={{
              rows,
              expanded,
              onExpand: (_, info) => setExpanded(info.expanded),
            }}
          >
            {data.HIGHLIGHTS.map((highlight, index) => {
              return (
                <Typography.Text className="highlight" key={index}>
                  {parseHighlight(highlight)}
                  <br />
                  <br />
                </Typography.Text>
              );
            })}
          </Typography.Paragraph>

          <Button
            className="highlight_btn"
            type="link"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less ▲" : "Show more ▼"}
          </Button>
        </div>
        <div className="news__keywords">
          {data.KW.map((keyword, index) => {
            return (
              <div className="keyword" key={index}>
                <span>{keyword.value}</span>
                <span>
                  <strong>{keyword.count}</strong>
                </span>
              </div>
            );
          })}
        </div>
        <div className="news__sourse">
          <Link className="sourse__link" href={data.URL} target="_blank">
            Original source
          </Link>
        </div>
      </>
    );
}

export default MainNews;