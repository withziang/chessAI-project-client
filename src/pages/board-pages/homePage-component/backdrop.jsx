// ---------------------------      React Lib       ----------------------------------------------------------------
import {useState} from "react";
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Box,Stack, IconButton, Divider, List, ListItem, ListItemButton, ListItemText} from '@mui/material'
import BackdropMUI from '@mui/material/Backdrop'
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------
import GameMode from "./backdrop-component/gameMode";
import SelectChessBoardBackground from "./backdrop-component/selectChessBoardBackground";


const Backdrop = ({showBackdrop, setShowBackdrop, boardIndex, setBoardIndex,windowWidth}) => {
    // ---------------------- hooks --------------------------------------------------
    const [selectedIndex, setSelectedIndex] = useState(0);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <BackdropMUI open={showBackdrop}  sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }} >
                <Box sx={{width:'50%', height:'70%', backgroundColor:'var(--bs-form-customs-bg-main)',
                    boxShadow:'0 0 6px var(--bs-form-customs-box-shadow)',
                    borderRadius:'1rem', borderWidth:0, overflow:'hidden','@media (max-width: 1400px)': {
                        width: '80%',
                    },}}>
                    <Stack direction="row" sx={{height:'12%', minHeight:'60px'}}>
                        <Box className="d-flex justify-content-start align-items-center"
                             sx={{m:3, width:'50%', color:'#d9e7f3'}}>
                            <SettingsIcon sx={{mr:1}}/>
                            <h4 className="m-0">Settings</h4>
                        </Box>
                        <Box className="d-flex justify-content-end" sx={{m:3, width:'50%'}}>
                            <IconButton aria-label="setting" onClick={()=>{setShowBackdrop(false)}}>
                                <CloseIcon color="primary" size="large"/>
                            </IconButton>
                        </Box>
                    </Stack>
                    <Box sx={{height:'2%'}}>
                        <Divider variant="middle" color="#ffffff"/>
                    </Box>
                    <Box sx={{height:'86%'}}>
                        <Stack className="h100 w100 d-flex justify-content-around" direction="row">
                            <Box sx={{width: '30%', overflowY: 'auto', color:'white', mx:1}}>
                                <nav>
                                    <List disablePadding>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                selected={selectedIndex === 0}
                                                onClick={(event) => handleListItemClick(event, 0)}>
                                                <ListItemText primaryTypographyProps={{fontSize: '1rem'}}>Board background</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                selected={selectedIndex === 1}
                                                onClick={(event) => handleListItemClick(event, 1)}>
                                                <ListItemText primaryTypographyProps={{fontSize: '1rem'}}>Game mode</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            </Box>
                            <div style={{height:'100%'}}>
                                <Divider orientation="vertical" variant="middle" color="#ffffff"/>
                            </div>
                            <Box sx={{width:'65%', overflowY:'auto'}}>
                                {(() => {
                                    switch (selectedIndex) {
                                        case 0:
                                            return <SelectChessBoardBackground boardIndex={boardIndex} setBoardIndex={setBoardIndex} windowWidth={windowWidth}/>;
                                        case 1:
                                            return <GameMode/>;
                                        default:
                                            return <></>;
                                    }
                                })()}
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </BackdropMUI>
        </>
    );
};

export default Backdrop;