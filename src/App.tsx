import HeaderNews from "./components/HeaderNews/HeaderNews"
import "./App.css"
import MainNews from "./components/MainNews/MainNews";
import FooterNews from "./components/FooterNews/FooterNews";
import TitleNews from "./components/TitleNews/TitleNews";


function App() {

  return (
    <>
      <div className="news_cont">
        <HeaderNews duplicate={false} />
        <TitleNews />
        <MainNews />
        <FooterNews />
      </div>
    </>
  )
}

export default App
