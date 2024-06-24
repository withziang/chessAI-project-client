// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState} from "react";
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
    const [backendConnected, setBackdropConnected] = useState(false);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------
    const handleHyperlink = (link) => {
        window.open(link, '_blank');
    }

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Backdrop showBackdrop={showBackdrop} setShowBackdrop={setShowBackdrop} boardIndex={boardIndex} setBoardIndex={setBoardIndex}/>
            <div className="bs-form-customs-mainBackground">
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
                                    <h6 style={{color:'#2daf18', fontSize:'10px', margin:0}}>server connected</h6>
                                </>
                                :
                                <>
                                    <FiberManualRecordIcon color="failed" size="small"/>
                                    <h6 style={{color: '#d50c0c', fontSize:'10px', margin:0}}>connecting to the server ...</h6>
                                </>}
                        </div>
                    </Stack>
                </Box>
                <Box className="centerXY" sx={{height: '87%'}}>
                    <div className="centerXY" style={{width: '70%', height: '70%'}}>
                        <Board boardIndex={boardIndex}/>
                    </div>
                </Box>
                <Box sx={{height: '8%'}} className="centerXY">
                    <Stack sx={{width:'70%'}} className="centerXY" spacing={1}>
                        <Divider variant="middle" color='white' sx={{width:'100%', height:'1px'}}/>
                        <Stack direction="row" sx={{width: '100%'}} spacing={1} className="d-flex align-items-center">
                            <IconButton aria-label="github" onClick={() => handleHyperlink('https://github.com/withziang/chessAI-project')}>
                                <GitHubIcon color="disabled"/>
                            </IconButton>
                            <p style={{fontSize: '10px', color: '#cdcbcb'}}>Built in 2024, open source chess bot
                                project. By Ziang and Eric</p>
                        </Stack>
                    </Stack>
                </Box>
            </div>
        </>
    );
};

export default HomePage;