import { FC } from "react";
import "./HeaderNewsRight.css"
import {IDuplicate} from "../../interface/interface"

const HeaderNewsRight:FC<IDuplicate> = ({duplicate}) => {
    return (
        <div className="infoHeader__right">
            {!duplicate && <div className="infoHeader__positive">Positive</div>}
            <div className="infoHeader__i">i</div>
            <div className="infoHeader__box"></div>
        </div>
    )
}

export default HeaderNewsRight;