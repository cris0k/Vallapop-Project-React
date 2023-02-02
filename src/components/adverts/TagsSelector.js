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
        const newSelected = !tagsSelected.includes(event.target.value) ? 
        [...tagsSelected, event.target.value] : 
        tagsSelected.filter(tag => tag !== event.target.value)
        
        setTagsSelected(newSelected)
    }
       
    const resetTags = (event) => {
        event.preventDefault();
        setTagsSelected([])};
        
    return (
        <>
        <SelectField
            label='Tags' 
            name='tags' 
            onChange={hadleTagsChange}
            multiple={true}
            value={tagsSelected}
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
        <button className="tags-delete" onClick={resetTags} >X</button>
        </>
    )
}
export default TagSelector
