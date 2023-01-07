import React from 'react';
import Box from "@mui/material/Box";
import {Skeleton} from "@mui/material";

const UISkeleton = () => {
    return (
        <>
            <Box sx={{pt: 0.5}}>
                <Skeleton animation="wave" height={120} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={30}/>
                <Skeleton animation="wave" height={30}/>
                <Skeleton animation="wave" height={30}/>
            </Box>
            <Box sx={{pt: 0.5}}>
                <Skeleton animation="wave" height={120} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={30}/>
                <Skeleton animation="wave" height={30}/>
                <Skeleton animation="wave" height={30}/>
            </Box>
            <Box sx={{pt: 0.5}}>
                <Skeleton animation="wave" height={120} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={30}/>
                <Skeleton animation="wave" height={30}/>
                <Skeleton animation="wave" height={30}/>
            </Box>
        </>
    );
};

export default UISkeleton;
