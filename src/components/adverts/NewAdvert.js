import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Page from "../layout/Page"
import { FormField, SelectField } from "../auth/FormField"
import { createAdvert } from "./service"
import TagSelector from "./TagsSelector"

const NewAd = () => {
   
    const [formData, setFormData] = useState({
        name : '',
        price : '',
        sale : false,
        tags : [],
        photo : null
    })
    
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const resetError = () => setError(null);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const hadleFileChange = (event) =>{
        setFormData({...formData,[event.target.name] : event.target.files[0]})
    }
    
    const handleSubmit = async event =>{
        event.preventDefault();
        const data = formData
        try {
            
            const {id} = await createAdvert(data)
            alert('Advert created successfully')
            navigate(`/adverts/${id}`);
        } catch (error) {
            setError(error);
        }
        
    }
    const formTags = String(formData.tags)
    return(
        <Page title='Create your advert' >
            <form className="newAd-form" onSubmit={handleSubmit}>
                <FormField
                label='Name'
                name='name'
                type= 'text'
                onChange={handleChange}
                required
                />
                <FormField
                label='Price'
                name='price'
                type='number'
                onChange={handleChange}
                required
                />
                <SelectField 
                label='Sale' 
                name='sale' 
                onChange={handleChange}
                required
                >
                    <option></option>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                </SelectField>
                <TagSelector
                tagSelected={formData.tags}
                setSelected={setFormData}
                required
                />
                
                <span className="selected-tags">Selected tags : {formTags}</span>
                
                <FormField
                type="file"
                name='photo'
                onChange={hadleFileChange}
                />
                <div>
                    <button 
                    type="submit"> 
                    Post Advert 
                    </button>
                    <Link to ='/'>
                        <button >Cancel</button>
                    </Link>
                </div>
                
            </form>
            {error && (
            <div onClick={resetError} className="page-error">
            {error.message = 'Sorry but the advert was not created'}
            </div>)}
        </Page>
    ) 
}

export default NewAd