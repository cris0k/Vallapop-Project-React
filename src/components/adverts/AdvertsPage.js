import { useEffect, useState } from "react"
import { getLatestAds } from "./auth/service"

const noPhotoImg = "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"

const AdsPage = () => {
    const [ads, setAds] = useState([])

    
    useEffect( () => {
        getLatestAds().then(ads => {
            setAds(ads.reverse())
            })
        
    }, [])

    return (
    <div className = "adsPage">
        {ads.map(ad => (
            <div key={ad.id} className = "ad">
                <img src={ad.photo || noPhotoImg} alt={ad.name}></img>
                <p>{ad.name}</p>
                <p>{ad.price} €</p>
                <p>{ad.sale}</p>
            </div>
        ))}
    </div>
    )}

export default AdsPage;