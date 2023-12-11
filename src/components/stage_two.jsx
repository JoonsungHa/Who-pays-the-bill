import { useContext, useRef, useState} from "react";

import { MyContext } from "../context";


const Stage2 = () => {

    const context = useContext(MyContext);


    return (
        <>
            <div className="result_wrapper">
                <h3>The loser is:</h3>
                {context.result}


            </div>
        </>
    )
}

export default Stage2;