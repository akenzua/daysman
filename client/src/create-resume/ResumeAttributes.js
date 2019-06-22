import React, { Component } from 'react';
import { FormGroup, Input, Textarea, Box } from '@smooth-ui/core-sc';
import update from 'immutability-helper';



export default class LoginForm extends Component {
state = { }

 handleClick(e){
    const state2 = update(this.state, {
        foo: foo =>
          update(foo || [], {
            0: fooZero =>
              update(fooZero || {}, {
                bar: bar => update(bar || [], { $push: ["x", "y", "z"] })
              })
          })
          
      }
      
      );

  this.setState(state2)
      
     
 }
 

  render() {
    var state = {}
    var desiredState = {
      foo: [
        {
          bar: ['x', 'y', 'z']
        },
      ],
    };
    console.log(this.state)
  
    
    // const state2 = update(state, {
    //   foo: foo =>
    //     update(foo || [], {
    //       2: fooZero =>
    //         update(fooZero || {}, {
    //           bar: bar => update(bar || [], { $push: ["x", "y", "z"] })
    //         })
    //     })
    // });

    // console.log(state2)
    // console.log(desiredState)

    
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
              <button type="button" onClick={(e)=>this.handleClick(e)}>Click</button>
              
            </Box>

          
         

          
          
        </form>
     
    );
  }
}

