import { Fragment } from "react"
import { Checkbox, FormField, SelectField } from "./auth/FormField"


const Filter = ({ title,children, props }) => {
    return (
        
        <Fragment>
        <p className="filter-title">{title}</p>
        <form className="filterForm">
            <FormField
            label='Name'
            type='text'
            ></FormField>
            <Checkbox
            label='Selling'></Checkbox>
            <Checkbox
            label='Searching'
            ></Checkbox>
            <Checkbox
            label='Everything'
            ></Checkbox>
            <FormField
            label='Min. Price'
            type='number'
            ></FormField>
            <FormField
            label='Max. Price'
            type='number'
            ></FormField>
            <SelectField
            label='Tags'
            multiple
            >
                {children}
            </SelectField>

        </form>
        </Fragment>
    )
}

export default Filter