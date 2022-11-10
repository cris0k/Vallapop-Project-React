import Layout from "../layout/Layout"
import { Checkbox, FormField } from "./auth/FormField"

const NewAd = props => {
    return(
        <Layout title='Create your advert' {...props}>
            <form>
                <FormField
                label='Name'/>
                <FormField
                label='Price'/>
                <Checkbox
                label='sale'/>
                <Checkbox
                label='search'/>
                <select value='tags'>
                    <option value='lifestyle'>Lifestyle</option>
                    <option value='mobile'>Mobile</option>
                    <option value='motor'>Motor</option>
                    <option value='work'>Work</option>
                </select>
                <input
                type="file"
                onChange={event => console.log(event.target.files)}/>
                <button 
                type="submit" 
                > Post Advert </button>
            </form>
        </Layout>
    ) 
}

export default NewAd