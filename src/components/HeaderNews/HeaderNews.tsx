import { FC } from "react";
import data from "../../data/data"
import HeaderNewsRight from "../HeaderNewsRight/HeaderNewsRight";
import "./HeaderNews.css"
import {IDuplicate} from "../../interface/interface"


const HeaderNews: FC<IDuplicate> = ({ duplicate }) => {

  const formatDate = (dateStr: string) => {
    let date = new Date(dateStr);
    let day = date.getDate();
    let month = date.toLocaleString("en-US", { month: "short" });
    let year = date.getFullYear();

    return { day, month, year };
  };
  const dateParts = formatDate(data.DP);

  const formatReach = (reach: number) => {
    const newReach = Number((reach / 1000).toFixed(1));
    return ` ${newReach}K`;
  };

  const abbreviation = (country: string) => {
    switch (country) {
      case "United States of America":
        return "USA";
      default:
        return country;
    }
  };

  return (
    <div className="infoHeader">
      <div className="infoHeader__left">
        <span>
          {!duplicate ? <strong>{dateParts.day}</strong> : dateParts.day}
          &nbsp;
          {dateParts.month} {dateParts.year}
        </span>
        <span>
          <strong>{formatReach(data.REACH)}</strong>
          {!duplicate ? " Reach" : <strong>&nbsp;Top Reach</strong>}
        </span>
        {!duplicate && (
          <div className="infoHeader__traffic">
            Top Traffic:
            <div className="infoHeader__countries">
              {data.TRAFFIC.map((country, index) => {
                return (
                  <span key={index}>
                    {abbreviation(country.value)}
                    <span className="infoHeader__percent">
                      <strong>{Math.round(country.count * 100)}%</strong>
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <HeaderNewsRight duplicate={duplicate} />
    </div>
  );
};

export default HeaderNews;