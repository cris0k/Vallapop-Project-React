import { useEffect, useState } from "react"
import { SelectField } from "../auth/FormField"
import { getTags } from "./service"

const TagSelector = ({tagSelected,setSelected})=> {

    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState(tagSelected)
    
    useEffect( () => { 
        const execute = async () => {
            const tags = await getTags();
            setTags(tags)
        }
        execute();
        
    }, [])
    
    useEffect(()=>{
        setSelected((prevValue)=>({...prevValue, tags : tagsSelected}))
       
    
    },[tagsSelected, setSelected])

    const hadleTagsChange = (event)=>{
        setTagsSelected([...tagsSelected, event.target.value]);
        } 

    return (
        <SelectField
            label='Tags' 
            name='tags' 
            onChange={hadleTagsChange}
            multiple={true}
            required
            >
                {tags.map( (tag,id) =>( 
                <option
                label={tag}
                name ={tag}
                className='tags'
                key={id}
                value={tag}
                />
        ))}
        
        </SelectField>
    )
}
export default TagSelector
