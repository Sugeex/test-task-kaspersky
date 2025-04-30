import { DownOutlined } from '@ant-design/icons';
import "./FooterNews.css"
import Duplicates from '../Duplicates/Duplicates';

const FooterNews = () => {
    return(
        <div className='news__footer'>
            <div className='news__dup'>
                <span>Duplicates: <strong>192</strong></span>
                <span>By Relevance <DownOutlined /></span>
            </div>
            <Duplicates />
        </div>
    )
}

export default FooterNews;