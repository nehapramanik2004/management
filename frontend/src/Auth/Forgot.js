import React from "react";
import {Box, Button, TextField} from "@mui/material"

const Forget=()=>
{
      return (
        <>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off" className="register">

            <Box className="header_title">Forgot Password</Box>     

            <Box className="signIn">  

           <TextField
           type="email"
           required
           id="email"
           variant="standard"
           label="Enter Email Id to recover your password"
        />

         <TextField
          type="password"
          required
           variant="standard"
          id="password"
          label="Enter new Password"
        />
            
          
          <Button className="primary_button">submit</Button>
            
        
          </Box> 
        
        </Box> 
        </>
      )
}

export default Forget;