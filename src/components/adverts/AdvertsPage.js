import { useEffect, useState } from "react"
import { getLatestAds } from "./service"
import { Link } from "react-router-dom"
import Page from "../layout/Page"
import Filter from "../filter/Filter"

export const noPhotoImg = "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"

const AdsPage = props => {
    const [ads, setAds] = useState([])
    const [filteredAdverts , setfilteredAdverts] = useState([])
    
    useEffect( () => { 
        const execute = async () => {
            const adverts = await getLatestAds();
            setAds(adverts.reverse())
        }
        execute();
        
    }, [])
    const onFilter = (ads)=>{
        setfilteredAdverts(ads)
    }

    return (
        <Page title='Adverts' {...props} >
            <section className="indexPage">
                <div>
                    {ads.length ? (
                        <div className = "adsPage">
                        {filteredAdverts.map(ad => (
                            <div key={ad.id} className = "ad">
                                <Link to={`/adverts/${ad.id}`}>
                                    <img src={ad.photo || noPhotoImg} alt={ad.name}></img>
                                </Link>
                                    <p>{ad.name}</p>
                                    <p>{ad.price} €</p>
                                    <p>{ad.sale ? 'Selling' : 'Searching'}</p>
                            </div>
                            ))}
                        </div>
                            ):(
                                <Link to='/adverts/new'>
                                    <button className="fistAd-bttn">Post First Advert</button>
                                </Link>
                                )}
                </div>
            <div>
                <Filter title='Filter' adverts={ads} onFilter={onFilter}>
                
                </Filter>
            </div>
        </section>   
        </Page>
    )
}

export default AdsPage;