import React, { Component} from 'react';
import { FormGroup, Input, Label, Button, Box } from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



class ExperienceForm extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
  state = {  }
    render() { 
        return ( 
            
                 <Box
                boxShadow = "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"
                p="35px 25px"
                borderRadius="5px"
                dispaly="flex"
            >
            <FontAwesomeIcon icon={faTimesCircle} onClick={ this.props.removeExperience }/>
        <FormGroup>
                    <Input control id="form-group-input-name" placeholder="Position"
                    size="sm"
                    display="block"
                    mt="10px"
                    />
                </FormGroup>

                <FormGroup>
                    <Input control id="form-group-input-name" placeholder="Organization"
                    size="sm"
                    display="block"
                    />
                
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="form-group-input-name">Start Date</Label>
                    <Input control id="form-group-input-name" type="Date"
                    size="sm"
                    display="block"
                    
                    />
                
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="form-group-input-name">End Date</Label>
                    <Input control id="form-group-input-name" type="Date"
                    size="sm"
                    display="block"
                    
                    />
                    <FormGroup mt="25px" display="flex"
                                justifyContent="space-between">
                    <Label>Job Description</Label>
                    <Button type="button"  variant="success" onClick={ this.props.addJob }><FontAwesomeIcon icon={faPlus} /></Button>
                    </FormGroup>
                    {
                        this.props.job.map((desc,index)=>{
                          
                            return(
                                
                                <FormGroup key={index}
                                display="flex"
                                justifyContent="space-between"
                                >
                                    <Input onChange={(e)=> this.props.handleChange(e, index)}
                                    name="description"
                                    value={desc.description}
                                    width="90%"
                                    
                                    />
                                    <Button type="button"  onClick={()=>this.props.handleRemove(index)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </FormGroup>
                                
                            )
                        })
                    }
                    
                    
                </FormGroup>
                
                
                </Box>
         );
    }
}
 
export default ExperienceForm;
 
