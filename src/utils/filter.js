export const useFilter=(adverts,{name,price,sale,tags })=>{
    const filtered= adverts
    .filter(filterByName(name))
    .filter(filterByPrice(price))
    .filter(filterBySale(sale))
    .filter(filterByTags(tags))

  return filtered
}

const filterByName = 
(param)=>
  ({name})=>{
      if( param==='') return true
      return name.includes(param)}

const filterByPrice =
  ({ min, max }) =>
  ({ price }) => {
    if (min === "" && max === "") return true
    if (min <= price && max === "") return true
    if (min === "" && price <= max) return true

    return price >= min && price <= max
  }

const filterByTags =
  (chosenTags) =>
  ({ tags }) => {
    const filterTags = []
    for (const [key, value] of Object.entries(chosenTags)) {
      if (value === true) filterTags.push(key)
    }

    if (filterTags.length === 0) return true
    return filterTags.every((tag) => tags.includes(tag))
  }

const filterBySale =
  (filterParam) =>
  ({ sale }) => {
    let condition = false

    if (filterParam === "all") return true
    filterParam === "selling" ? (condition = true) : (condition = false)

    return condition === sale
  }