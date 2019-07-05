import React, { Component} from 'react';
import { FormGroup, Button } from '@smooth-ui/core-sc';
import update from 'immutability-helper';

import ExperienceForm from './ExperienceForm';



class Experience extends Component {

    constructor () {
        super();
        this.addJob = this.addJob.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.otherChange = this.otherChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.appendChild = this.appendChild.bind(this);
        this.removeExperience = this.removeExperience.bind(this);

     
    }
    state = {
           
        experience: [
          
            // < ExperienceForm addJob={this.addJob} sit={0} {...this.state} handleRemove={this.handleRemove} handleChange={this.handleChange}  removeExperience={this.removeExperience}/>
        ],
        
        but: [
            {position: "",
            organisation: "",
            start: "",
            end: "",
            job:  [
                {
                   description: "first"
                 },
                 {
                    description: "second"
                  }
              ]}
        ]

}

   
    
      appendChild = (e,index, l) => {
        
        
     
       let k = this.state.experience.length;
       this.setState((prevState, props) => update(prevState, {
            
            but: {
              [k]:{ 
                $set: {
                  position: "",
                  organisation: "",
                  start: "",
                  end: "",
                  job:  [
                      {
                         description: "third"
                       },
                       {
                        description: "fourth"
                      },
                      {
                        description: ""
                      }
                    ]
                  
                }
      
              }
            }
          }))

        this.setState({
            
            experience: [
                ...this.state.experience,
                
                < ExperienceForm addJob={this.addJob} sit={this.state.experience.length} {...this.state} handleRemove={this.handleRemove} handleChange={this.handleChange} otherChange={this.otherChange}  removeExperience={this.removeExperience}/>,
                
            ]
            
            
        });
        
      
        
        console.log(this.state)
        
        console.log(e)
    }
    
    
    addJob = (number) =>{
           this.setState((prevState, props) => update(prevState, {
            but: {
              [number]: { 
                job: {$push: [
                  {
                    description: ""
                  }
                ]}
              }
            },
         
          }))
          this.forceUpdate();
        console.log(number)
         console.log( this.state)
         
         
    }

    otherChange = (e, i) => {
        
        this.state.but[i][e.target.name] = e.target.value;
        this.setState({
            
        but: this.state.but
        })
        console.log(this.state)
    };

    
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

