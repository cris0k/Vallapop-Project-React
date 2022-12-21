import { Fragment, useEffect, useState } from "react"
import { Checkbox } from "../auth/FormField"
import { getTags } from "../adverts/service"

const TagsFilter= ({checkedTag,setSelected}) =>{
    const [tags, setTags] = useState([])
    const [checked, setCheckedState]= useState(checkedTag)
    
    useEffect( () => { //to control the render we use useEffecct()
        const execute = async () => {
            const tags = await getTags();
            setTags(tags)
        }
        execute();
        
    }, [])
    useEffect(()=>{

        setSelected((prevValue)=>({...prevValue, tags: checked}))
    },[checked,setSelected])
    
    const handleChecked=( event )=>{
        const tagValue = event.target.value
        const tagChecked = event.target.checked
        
        setCheckedState({...checked, [tagValue] : tagChecked})
        
    } 

    return(
        <Fragment>
            <h3>Tags</h3>
            {tags.map( (tag,id) =>( 
                <Checkbox
                label={tag}
                className='filter-tags'
                onChange={handleChecked}
                key={id}
                value={tag}
                checked={checked[tag]}
                ></Checkbox>
            ))}
            
        </Fragment>
    )
}


export default TagsFilter