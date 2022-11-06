import { useEffect, useState } from "react"
import { getLatestAds } from "./auth/service"


const AdsPage = () => {
    const [ads, setAds] = useState([])

    
    useEffect( () => {
        getLatestAds().then(ads => {
            console.log(ads)
            setAds(ads)
            })
        
    }, [])

    return (
    <div className="adsPage">
        {ads.map(ad => (
            <div key={ad.id}>
                <img src={ad.photo} alt={ad.name}></img>
                <p>{ad.name}</p>
                <p>{ad.price} €</p>
                <p>{ad.sale}</p>
            </div>
        ))}
    </div>
    )}

export default AdsPage;