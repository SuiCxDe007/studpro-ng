/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Created by Kaveen Abeyrathne for StudPro 5.0 as a place for students to look
 *  into What they can learn,companies to understand what to expect. This website
 *  was developed as a first step to taking StudPro to a higher elevation. You are
 *  free to update,share & modify the work for IEEE purposes ONLY.
 *
 *  Content of the source code is not authorized to use for any commercial purpose.
 *
 *  SuiCxDe007 | https://github.com/SuiCxDe007 | kaveenmadawa@gmail.com
 *
 *  ~ Copyright © 2023 SuiCxDe
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

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
