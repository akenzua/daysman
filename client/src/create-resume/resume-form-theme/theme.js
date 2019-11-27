import {Input, Box, styled } from '@smooth-ui/core-sc';
import { makeStyles } from '@material-ui/styles';



export const useStyles = makeStyles({
   box: {
     padding: "70px",
     paddingBottom: "40px",
     borderBottom: "1px solid #e4e4e4",
     position: "relative"
    },
    justifySpace:{
      display: "flex",
      justifyContent : "space-between"
    },
    justifyEnd:{
      display: "flex",
      justifyContent : "flex-end"
      
    },
    action: {
      padding: "70px",
      paddingTop: "30px"
    },
    container: {
      paddingBottom: "70px",
    },
    link:{
        textDecoration: "none",
       
    },
    duration: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "35px",
      paddingBottom: "35px"
    },
    paper: {
      padding: "20px",
      margin: "5px",
      marginBottom: "10px"
    },
    multiple: {
      marginBottom: "13px",
      borderBottom: "1px solid #e4e4e4",
      paddingBottom: "10px"
    },
    summary: {
      padding: "20px",
      margin: "5px",
      marginBottom: "10px",
      paddingTop: "40px",
      paddingBottom: "40px"
    }
    
  });

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