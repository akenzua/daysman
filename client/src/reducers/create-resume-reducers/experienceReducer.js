import produce from "immer"

export const experienceReducer = (state, action) => 
    produce(state, draft => {
        switch(action.type){
            case 'ADD_EXPERIENCE':
                draft.push(
                    {
                        position: "",
                        organisation: "",
                        start: "",
                        end: "",
                        job: [
                                {description: ""},
                                  
                            ]
                    }
                )
                break;

            case 'ADD_JOB':
                draft[action.i].job.push({description: ""})
                break;
            
            
            case 'REMOVE_EXPERIENCE':
                delete draft[action.i]
                break;

            case 'REMOVE_JOB':
                draft[action.i].job.splice(action.k,1)
                break;

            case 'HANDLE_CHANGE':
                    // console.log(action.e.target.value)
                    const {name, value} = action.e.target
                    
                    if (action.k !== undefined){
                        draft[action.i].job[action.k].description = value
                       
                    }else{
                        draft[action.i][name] = action.e.target.value;
                    }

                    
                    break;     

            default:
                return state
        }
    })