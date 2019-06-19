import React, {Fragment} from "react"
import {  Input, Label } from '@smooth-ui/core-sc';

const JobInputs = (props) => {
  return (
    props.cats.map((val, idx)=> {
      let catId = `cat-${idx}`
      return (
        <Fragment key={idx}>
          <Label htmlFor={catId}>{`Cat #${idx + 1}`}</Label>
          <Input
            type="text"
            name={catId}
            data-id={idx}
            id={catId}
            control
            size="sm"
            value={props.cats[idx].name} 
            className="name"
            display="block"
          />
          
        </Fragment>
      )
    })
  )
}


export default JobInputs