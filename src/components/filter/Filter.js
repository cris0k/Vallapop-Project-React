import { Fragment, useEffect, useState } from "react"
import { useFilter } from "../../utils/filter"
import NameFilter from "./NameField"
import PriceFilter from "./PriceField"
import SaleFilter from "./SaleField"
import TagsFilter from "./TagsFields"


const Filter = ({ title, children, adverts,onFilter, ...props }) => {
    
    const [filterState, setFilterState] = useState({
        name: '',
        sale: 'all',
        price: { min : '', max :''},
        tags: false
    })
    const[filtered, setFiltered]=useState(useFilter(adverts,filterState))
    const filter= useFilter

    useEffect (()=>{
        setFiltered (filter( adverts, filterState))
    },[adverts,filterState,filter])

    useEffect(()=>{
        onFilter(filtered)
    },[onFilter,filtered])

    return (
        
        <Fragment>
        <p className="filter-title">{title}</p>
        <form className="filterForm">
            <NameFilter nameFilter={filterState.name} setSelected={setFilterState}/>

            <SaleFilter checkedSale={filterState.sale}  setSelected={setFilterState}/>

            <PriceFilter priceFilter={filterState.price} setSelected={setFilterState}/>
            
            <TagsFilter  selectedTag={filterState.tags} setSelected={setFilterState}/>

        </form>
        </Fragment>
    )
}

export default Filter