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
           
                experience: [
                  
                    
                ],
                
                but: [{
                    position: "",
                    organisation: "",
                    start:"",
                    end:"",
                    job: [
                        {
                            description: ""
                        }
        ]
                }],
        //             position: "",
        //             organisation: "",
        //             start:"",
        //             end:"",
                    job: [
                        {
                            description: ""
                        }
        ]
            
            
            
    
      }
    }

      appendChild(e,index){
        
        this.setState({
            experience: [
                ...this.state.experience,
                
                < ExperienceForm addJob={this.addJob} sit={this.state.experience.length} {...this.state} handleRemove={this.handleRemove} handleChange={this.handleChange}  removeExperience={this.removeExperience}/>
            ]
        });
        console.log(this.state)
    }
    
    
    addJob(){
        // console.log( this.state)
        
        // this.setState((state) =>({job: [...state.job, {description: ""}]}))

        // this.setState((state) => ({
        //     but: state.but.map(job => {
        //         return job[0].job.push(this.state.job);
        //     })
        // }))
        // this.setState((state) =>({but: [...state.but, 
        //     job: [...job, {description: ""}]
        
        // ]}));
        // this.setState({but: [...this.state.but, job:[{description:""}]
    
    // ]})
        // let temp = but;
        // this.state.but.job.push({description:""})
        // this.setState({but:this.state.but.job.push({description:""})})
        console.log(this.state)
        console.log( this.state.but[0])
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

    removeExperience(e,index){
        delete this.state.experience[e];

        // this.state.experience.splice(e,1)
        console.log(this.state.experience);

        this.setState((state) =>({experience: state.experience}))
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state, "$$$$");
    }

    render() { 
        return ( 
            <form>
                <legend>Experience:</legend>
           
                
                <FormGroup>
                
                <div>
                    {this.state.experience.map((child, index )=>{
                        
                        return(
                            <FormGroup key={index}>
                            {child }
                            </FormGroup>
                        )
                    } )}
                </div>
            </FormGroup>
                {/* < ExperienceForm addJob={this.addJob} {...this.state} handleRemove={this.handleRemove} handleChange={this.handleChange} removeExperience={this.removeExperience} /> */}
                <FormGroup
                display="flex"
                justifyContent="space-between"
                >   
                <Button  variant="success" display="block" width="60%" type="button"  onClick={(e)=>this.handleSubmit(e)}>Save</Button>
                <Button type="button" variant="info" width="30%" onClick={(e,index) => this.appendChild(e, index)}>Add Experience</Button>
                </FormGroup>
                
           
        </form>
         );
    }
}
 
export default Experience;

