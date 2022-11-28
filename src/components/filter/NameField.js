import { FormField } from "../auth/FormField"


const NameFilter = ({nameFilter, setSelected})=>{
    //const [nameFilter, setFilterName] = useState('')
    
    const handleNameFilter =(event)=>{
        setSelected((prevValue)=>({...prevValue, name: event.target.value}))
    }

    return (
        <FormField
        label='Name'
        name='name'
        type='text'
        onChange={handleNameFilter}
        value={nameFilter}
        >

        </FormField>
    )
   
    

}

export default NameFilter