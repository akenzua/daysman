import {Input, Box, styled } from '@smooth-ui/core-sc';

export const FormBox = styled(Box)({
    boxShadow :"0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
    padding :"35px 25px",
    borderRadius :"5px",
    marginTop : "20px",
    dispaly : "flex",
})

export const FormInput = styled(Input)({
    size:"sm",
    display:"block",
    marginTop:"15px",
    type:"text",
    width:"100%"
})