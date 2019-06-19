import React, { Component} from 'react';
import { FormGroup, Button } from '@smooth-ui/core-sc';

import ExperienceForm from './ExperienceForm';



class Experience extends Component {

    constructor () {
        super();
        this.addJob = this.addJob.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.appendChild = this.appendChild.bind(this);
        this.removeExperience = this.removeExperience.bind(this);

        this.state = {
            children: [],
            position: "",
            organisation: "",
            start:"",
            end:"",
            job: [
                {
                    description: ""
                }
            ]
        }
    
      }


      appendChild(){
        this.setState({
            children: [
                ...this.state.children,
                < ExperienceForm addJob={this.addJob} {...this.state} handleRemove={this.handleRemove} handleChange={this.handleChange}  removeExperience={this.removeExperience} />
            ]
        });
        console.log(this.state.job)
    }
    
    
    addJob(){
        
        this.setState((state) =>({job: [...this.state.job, {description: ""}]}))
        console.log(this.state.job)
    }

    
    handleChange(e, index){
        
        const job =this.state.job;
        job[index].description = e.target.value;
        
        
    
        this.setState(
            
            {
                
               
                job
            }

            )
     
    };

  

    handleRemove(index){
        this.state.job.splice(index,1)
        // console.log(this.state.job, "$$$$");

        this.setState((state) =>({job: state.job}))

    }

    removeExperience(index){
        this.state.children.splice(index,1)
        // console.log(this.state.job, "$$$$");

        this.setState((state) =>({children: state.children}))
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log(this.state, "$$$$");
    }

    render() { 
        return ( 
            <form>
                <legend>Experience:</legend>
           
                
                <FormGroup>
                
                <div className="box-container">
                    {this.state.children.map((child, index )=>{
                        
                        return(
                            <FormGroup key={index}>
                               {child}
                            </FormGroup>
                        )
                    } )}
                </div>
            </FormGroup>
                {/* < ExperienceForm addJob={this.addJob} {...this.state} handleRemove={this.handleRemove} handleChange={this.handleChange} /> */}
                <FormGroup
                display="flex"
                justifyContent="space-between"
                >   
                <Button  variant="success" display="block" width="60%" type="button"  onClick={(e)=>this.handleSubmit(e)}>Save</Button>
                <Button type="button" variant="info" width="30%" onClick={() => this.appendChild()}>Add Experience</Button>
                </FormGroup>
                
           
        </form>
         );
    }
}
 
export default Experience;

