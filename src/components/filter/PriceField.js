import { Fragment, useState } from "react"
import { FormField } from "../adverts/auth/FormField"

const PriceFilter =({priceFilter,setSelected})=>{
    const[price, setPrice ]=useState(priceFilter)
    const handleChange =(event)=>{
        setPrice({...price,[event.target.name]: event.target.value})
        setSelected((prevValue)=>({...prevValue, price: price}))
       
    }
    
    return(
        <Fragment>
            <FormField
                label='Min. Price'
                name='min'
                type='number'
                onChange={handleChange}
                value={priceFilter.min}
                ></FormField>
                
                <FormField
                label='Max. Price'
                name='max'
                type='number'
                onChange={handleChange}
                value={priceFilter.max}
                ></FormField>
        </Fragment>
    )
}

export default PriceFilter