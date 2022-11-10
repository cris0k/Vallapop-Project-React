import { useEffect, useState } from "react"
import { getLatestAds } from "./service"
import Layout from '../layout/Layout'
import { Link } from "react-router-dom"

export const noPhotoImg = "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"

const AdsPage = props => {
    const [ads, setAds] = useState([])

    
    useEffect( () => { //to control the render we use useEffecct()
        const execute = async () => {
            const adverts = await getLatestAds();
            setAds(adverts.reverse())
        }
        execute();
        
    }, []) //[] means that it will render just one time

    return (
        <Layout title='Adverts' {...props}>
            <div>
                {ads.length ? (
                    <div className = "adsPage">
                    {ads.map(ad => (
                        <div key={ad.id} className = "ad">
                            <Link to={`/api/v1/adverts/${ad.id}`}>
                                <img src={ad.photo || noPhotoImg} alt={ad.name}></img>
                            </Link>
                                <p>{ad.name}</p>
                                <p>{ad.price} €</p>
                                <p>{ad.sale}</p>
                        </div>
                        ))}
                    </div>
                        ):(
                            <Link to='/api/v1/adverts/new'>
                                <button className="fistAd-bttn">Post First Advert</button>
                            </Link>
                            )}
            </div>      
        </Layout>
    )
}

export default AdsPage;