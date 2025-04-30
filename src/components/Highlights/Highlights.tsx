import data from "../../data/data";
import { Typography, Button } from "antd";
import { useState } from "react";
import "./Highlights.css";

const Highlights = () => {
  const [expanded, setExpanded] = useState(false);
  const rows = 3;

  const parseHighlight = (text: string) => {
    const parts = text.split(/(<kw>|<\/kw>)/);

    return parts.map((part, index) => {
      if (part === "<kw>") return null;
      if (part === "</kw>") return null;

      if (index > 0 && parts[index - 1] === "<kw>") {
        return <mark key={index}>{part}</mark>;
      }

      return part;
    });
  };

  return (
    <div className="news__highlights">
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
  );
};

export default Highlights;
