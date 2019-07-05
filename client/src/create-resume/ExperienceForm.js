import React, { Component} from 'react';
import { FormGroup, Input, Label, Button, Box } from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



class ExperienceForm extends Component {
    
    state = {  } 

    componentWillUpdate() {
        console.log( "updaTED")
      }
    render() { 
        return ( 
            
                 <Box
                boxShadow = "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"
                p="35px 25px"
                borderRadius="5px"
                dispaly="flex"
            >
            <FontAwesomeIcon icon={faTimesCircle} onClick={(index) => this.props.removeExperience(this.props.sit, index) }
            
            />
                <FormGroup>
                    <Input control id="form-group-input-name" placeholder="Position"
                    size="sm"
                    display="block"
                    mt="10px"
                    type="text"
                    // value={this.props.but[0].position}
                    name='position'
                    onChange= { (e) =>this.props.otherChange(e, this.props.sit)}
                    />
                </FormGroup>

               

                <FormGroup>
                    <Input control id="form-group-input-name" placeholder="Organization"
                    size="sm"
                    display="block"
                    name="organisation"
                    onChange= { (e) =>this.props.otherChange(e, this.props.sit)}
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
                    display="block"/>

                <FormGroup mt="25px" display="flex"
                                justifyContent="space-between">
                        <Label>Job Description</Label>
                        <Button type="button"  variant="success"  
                            onClick={()=>this.props.addJob(this.props.sit)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                </FormGroup>
            
                    {/* {
                        this.props.but.map((obq, i)=> obq.job[this.props.sit].map((desc, index) => {
                            console.log(this.props.but)
                            return(
                                
                                <FormGroup key={index}
                                display="flex"
                                justifyContent="space-between"
                                >
                                    <Input 
                                    onChange={(e, index)=> this.props.handleChange(e, index)}
                                    name="description"
                                    value={desc.description}
                                    width="90%"
                                    
                                    />
                                    <Button type="button"  onClick={()=>this.props.handleRemove(index)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </FormGroup>
                                
                            )
                        }))

                        
                    }  */}
                    

                    {
                        this.props.but[this.props.sit] &&
                        this.props.but[this.props.sit].job.map((desc, i)=>{
                            console.log(this.props.but[this.props.sit].job.length)
                            return(
                                
                                <FormGroup key={i}
                                display="flex"
                                justifyContent="space-between"
                                >
                                    
                                    <Input 
                                    onChange={(e, index)=> this.props.handleChange(e, index)}
                                    name="description"
                                    value={desc.description}
                                    width="90%"
                                    
                                    />
                                    <Button type="button"  onClick={()=>this.props.handleRemove()}><FontAwesomeIcon icon={faTrashAlt} /></Button>
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
 
