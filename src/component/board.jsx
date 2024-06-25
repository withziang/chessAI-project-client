// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState} from "react";
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------


const Board = ({boardIndex}) => {
    // ---------------------- hooks --------------------------------------------------
    //white
    const [wp1, setWp1] = useState("board-12");
    const [wp2, setWp2] = useState("board-22");
    const [wp3, setWp3] = useState("board-32");
    const [wp4, setWp4] = useState("board-42");
    const [wp5, setWp5] = useState("board-52");
    const [wp6, setWp6] = useState("board-62");
    const [wp7, setWp7] = useState("board-72");
    const [wp8, setWp8] = useState("board-82");

    const [wr1, setWr1] = useState("board-11");
    const [wh1, setWh1] = useState("board-21");
    const [wb1, setWb1] = useState("board-31");
    const [wq1, setWq1] = useState("board-41");
    const [wk1, setWk1] = useState("board-51");
    const [wb2, setWb2] = useState("board-61");
    const [wh2, setWh2] = useState("board-71");
    const [wr2, setWr2] = useState("board-81");

    //black
    const [bp1, setBp1] = useState("board-17");
    const [bp2, setBp2] = useState("board-27");
    const [bp3, setBp3] = useState("board-37");
    const [bp4, setBp4] = useState("board-47");
    const [bp5, setBp5] = useState("board-57");
    const [bp6, setBp6] = useState("board-67");
    const [bp7, setBp7] = useState("board-77");
    const [bp8, setBp8] = useState("board-87");

    const [br1, setBr1] = useState("board-18");
    const [bh1, setBh1] = useState("board-28");
    const [bb1, setBb1] = useState("board-38");
    const [bq1, setBq1] = useState("board-48");
    const [bk1, setBk1] = useState("board-58");
    const [bb2, setBb2] = useState("board-68");
    const [bh2, setBh2] = useState("board-78");
    const [br2, setBr2] = useState("board-88");
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------


    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <div className={`board${boardIndex} board`}>
                {/*white*/}
                <div className={`piece wp ${wp1}`}></div>
                <div className={`piece wp ${wp2}`}></div>
                <div className={`piece wp ${wp3}`}></div>
                <div className={`piece wp ${wp4}`}></div>
                <div className={`piece wp ${wp5}`}></div>
                <div className={`piece wp ${wp6}`}></div>
                <div className={`piece wp ${wp7}`}></div>
                <div className={`piece wp ${wp8}`}></div>

                <div className={`piece wr ${wr1}`}></div>
                <div className={`piece wh ${wh1}`}></div>
                <div className={`piece wb ${wb1}`}></div>
                <div className={`piece wk ${wk1}`}></div>
                <div className={`piece wq ${wq1}`}></div>
                <div className={`piece wb ${wb2}`}></div>
                <div className={`piece wh ${wh2}`}></div>
                <div className={`piece wr ${wr2}`}></div>
                {/*black*/}
                <div className={`piece bp ${bp1}`}></div>
                <div className={`piece bp ${bp2}`}></div>
                <div className={`piece bp ${bp3}`}></div>
                <div className={`piece bp ${bp4}`}></div>
                <div className={`piece bp ${bp5}`}></div>
                <div className={`piece bp ${bp6}`}></div>
                <div className={`piece bp ${bp7}`}></div>
                <div className={`piece bp ${bp8}`}></div>

                <div className={`piece br ${br1}`}></div>
                <div className={`piece bh ${bh1}`}></div>
                <div className={`piece bb ${bb1}`}></div>
                <div className={`piece bk ${bk1}`}></div>
                <div className={`piece bq ${bq1}`}></div>
                <div className={`piece bb ${bb2}`}></div>
                <div className={`piece bh ${bh2}`}></div>
                <div className={`piece br ${br2}`}></div>
            </div>

        </>
    );
};

export default Board;