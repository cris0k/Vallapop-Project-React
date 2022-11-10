import { Link } from "react-router-dom"
import Page from "../layout/Page"
import { Checkbox, FormField } from "./auth/FormField"

const NewAd = props => {
    return(
        <Page title='Create your advert' {...props}>
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
                <div>
                    <button type="submit"> 
                    Post Advert 
                    </button>
                    <Link to ='/'>
                        <button >Cancel</button>
                    </Link>
                </div>
            </form>
        </Page>
    ) 
}

export default NewAd