import { Fragment, useEffect, useState } from "react"
import { Checkbox } from "../adverts/auth/FormField"
import { getTags } from "../adverts/service"

const TagsFilter= ({selectedTag,setSelected}) =>{
    const [tags, setTags] = useState([])
    const [selected, setSelectedState]= useState(selectedTag)
    
    useEffect( () => { //to control the render we use useEffecct()
        const execute = async () => {
            const tags = await getTags();
            setTags(tags)
        }
        execute();
        
    }, [])
    useEffect(()=>{

        setSelected((prevValue)=>({...prevValue, tags: selected}))
    },[selected,setSelected])
    
    const handleSelected=( event )=>{
        const tagValue = event.target.value
        const tagChecked = event.target.checked
        
        setSelectedState({...selected, [tagValue] : tagChecked})
        
    } 

    return(
        <Fragment>
            <h3>Tags</h3>
            {tags.map( (tag,id) =>( 
                <Checkbox
                label={tag}
                className='filter-tags'
                onChange={handleSelected}
                key={id}
                value={tag}
                checked={selected[tag]}
                ></Checkbox>
            ))}
            
        </Fragment>
    )
}


export default TagsFilter