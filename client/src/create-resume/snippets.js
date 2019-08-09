import React from 'react';

import {Box} from '@material-ui/core';


let socials;
export const socialsIterate = socials.map(({site, account}, i) =>(
        
    <Box  key={i}>
      <span> {site}</span> | <span>{account}</span>
    </Box>
));