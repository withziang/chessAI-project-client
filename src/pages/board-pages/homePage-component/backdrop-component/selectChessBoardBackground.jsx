// ---------------------------      React Lib       ----------------------------------------------------------------
import React, {useState} from 'react';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------
import Carousel from 'react-bootstrap/Carousel';
// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Box,Stack, Button} from '@mui/material'
import Board from "../../../../component/board";
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------




const SelectChessBoardBackground = ({boardIndex, setBoardIndex}) => {
    // ---------------------- hooks --------------------------------------------------
    const [index, setIndex] = useState(0);
    // --------------------- Handle Function -----------------------------------------
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Box className="w100 h100 align-items-center" sx={{p:1, color:'white'}}>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className='h100 w100 centerXY'>
                    <Carousel.Item className="h100 centerXY">
                        <Stack spacing={4} className="h100 centerXY">
                            <Box className="centerXY flex-column" sx={{ width: '15rem', height: '15rem' }}>
                                <Board boardIndex={1} />
                            </Box>
                            <Button variant="contained" color="secondary" disabled={boardIndex === 1}
                                    onClick={()=>{setBoardIndex(1)}}>{(boardIndex === 1)?"current":"change"}</Button>
                        </Stack>
                    </Carousel.Item>
                    <Carousel.Item className="h100 centerXY">
                        <Stack spacing={4} className="h100 centerXY">
                            <Box className="centerXY flex-column" sx={{ width: '15rem', height: '15rem' }}>
                                <Board boardIndex={2} />
                            </Box>
                            <Button variant="contained" color="secondary" disabled={boardIndex === 2}
                                    onClick={()=>{setBoardIndex(2)}}>{(boardIndex === 2)?"current":"change"}</Button>
                        </Stack>
                    </Carousel.Item>
                </Carousel>
            </Box>
        </>
    );
};

export default SelectChessBoardBackground;