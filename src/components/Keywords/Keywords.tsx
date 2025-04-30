import data from "../../data/data"
import "./Keywords.css"

const Keywords = () => {
    return(
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
    )
}

export default Keywords;