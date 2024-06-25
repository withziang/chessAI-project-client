// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState, useEffect} from "react";
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Box, Stack, IconButton, Divider} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import GitHubIcon from '@mui/icons-material/GitHub';
// ---------------------------      Other Lib       ----------------------------------------------------------------
import '../../style/boardPosition.css'
import '../../style/board.css'
import '../../style/chessPiece.css'


// ---------------------------      Local Comp      ----------------------------------------------------------------
import Board from '../../component/board'
import Backdrop from './homePage-component/backdrop'

const HomePage = () => {
    // ---------------------- hooks --------------------------------------------------
    const [boardIndex, setBoardIndex] = useState(1);
    const [showBackdrop, setShowBackdrop] = useState(false);
    // eslint-disable-next-line
    const [backendConnected, setBackdropConnected] = useState(false);
    // --------------------- Handle Function -----------------------------------------
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------
    const handleHyperlink = (link) => {
        window.open(link, '_blank');
    }

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <div className="bs-form-customs-mainBackground" style={{overflow: 'hidden', minWidth:'300px'}}>
                <Backdrop showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} boardIndex={boardIndex} setBoardIndex={setBoardIndex} windowWidth={windowWidth}/>
                <Box sx={{height:'5%'}}>
                    <Stack direction="row">
                        <div className="d-flex justify-content-start m-2" style={{width:'20%'}}>
                            <IconButton aria-label="setting" onClick={()=>{setShowBackdrop(true)}}>
                                <SettingsIcon color="primary"/>
                            </IconButton>
                        </div>
                        <div className="d-flex justify-content-end align-items-center" style={{width:'80%', marginRight:'2rem'}}>
                            {(backendConnected) ?
                                <>
                                    <FiberManualRecordIcon color="successful" size="small"/>
                                    <h6 style={{color:'#2daf18', fontSize:'1rem', margin:0}}>server connected</h6>
                                </>
                                :
                                <>
                                    <FiberManualRecordIcon color="failed" size="small"/>
                                    <h6 style={{color: '#d50c0c', fontSize:'1rem', margin:0}}>connecting to the server ...</h6>
                                </>}
                        </div>
                    </Stack>
                </Box>
                <Box className="centerXY" sx={{height: '87%'}}>
                    <div className="centerXY position-relative" style={{
                        aspectRatio: 1,
                        ...(windowHeight < windowWidth ? {height: '65%'} : {width: '70%'}),
                    }}>
                        <Board boardIndex={boardIndex}/>
                    </div>
                </Box>
                <Box sx={{height: '8%'}} className="centerXY">
                    <Stack sx={{width: '70%'}} className="centerXY" spacing={1}>
                    <Divider variant="middle" color='white' sx={{width:'100%', height:'1px'}}/>
                        <Stack direction="row" sx={{width: '100%'}} spacing={1} className="d-flex align-items-center">
                            <IconButton aria-label="github" onClick={() => handleHyperlink('https://github.com/withziang/chessAI-project')}>
                                <GitHubIcon color="disabled"/>
                            </IconButton>
                            <p style={{fontSize: '0.8rem', color: '#cdcbcb'}}>Built in 2024, open source chess bot
                                project. Made by Ziang and Eric.</p>
                        </Stack>
                    </Stack>
                </Box>
            </div>
        </>
    );
};

export default HomePage;