import React, { Component } from 'react';
import { FormGroup, Input, Textarea, Box } from '@smooth-ui/core-sc';



export default class LoginForm extends Component {
  state = { 
      
      
 };

 

  render() {
    return (
      
        <form>
          

            <Box
                boxShadow = "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"
                p="15px 10px"
                mb="20px"
            >
            <FormGroup>
              <Input control id="form-group-input-name" placeholder="Title"
                size="sm"
                display="block"
                />
              </FormGroup>
              <FormGroup>
                <Textarea size="md"
                placeholder="Summary"
                display="block"
                width="100%"
                 />
              </FormGroup>
              
            </Box>

          
         

          
          
        </form>
     
    );
  }
}

