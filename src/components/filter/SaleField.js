import { Fragment} from "react"
import { FormField } from "../auth/FormField"

const SaleFilter = ({checkedSale, setSelected}) =>{
   
    const handleSale=(event)=>{

        setSelected((prevValue)=>({...prevValue, sale: event.target.value}))

    }
   
    return(
        <Fragment >
            
            <FormField
            type='radio'
            label='Selling'
            name='radio'
            onChange={handleSale}
            checked={checkedSale ==='sale'}
            value='sale'
            ></FormField>
            
            <FormField
            type='radio'
            label='Searching'
            name='radio'
            onChange={handleSale}
            checked={checkedSale ==='search'}
            value='search'
            ></FormField>

            <FormField
            type='radio'
            label='Everything'
            name='radio'
            onChange={handleSale}
            checked={checkedSale ==='all'}
            value='all'
            >
            </FormField>
        </Fragment>
    )

}
export default SaleFilter
