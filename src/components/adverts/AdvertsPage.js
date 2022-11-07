import { useEffect, useState } from "react"
import { getLatestAds } from "./auth/service"
import Layout from '../layout/Layout'

const noPhotoImg = "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"

const AdsPage = () => {
    const [ads, setAds] = useState([])

    
    useEffect( () => { //to control the render we use useEffecct()
        const execute = async () => {
            const adverts = await getLatestAds();
            setAds(adverts.reverse())
        }
        execute();
        
    }, [ads]) //[] means that it will render just one time

    return (
        <Layout title='Adverts' >
            <div>
                {ads.length ? (
                    <div className = "adsPage">
                        {ads.map(ad => (
                            <div key={ad.id} className = "ad">
                                <img src={ad.photo || noPhotoImg} alt={ad.name}></img>
                                <p>{ad.name}</p>
                                <p>{ad.price} €</p>
                                <p>{ad.sale}</p>
                                </div>))}
                            </div>
                        ):(
                        <button>Post First Advert</button>
                )}
            </div>      
        </Layout>
    )
}

export default AdsPage;