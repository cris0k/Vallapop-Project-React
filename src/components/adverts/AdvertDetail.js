import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Page from "../layout/Page";
import { noPhotoImg } from "./AdvertsPage";
import { getAdsDetail } from "./service";

const AdDetail = props => {
    const [ad, setAd] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const unmounteRef = useRef(false);

    useEffect(() => {
        getAdsDetail(id)
        .then(ad => {

            setAd(ad);
        })
        .catch(error => {
            if (error.status === 404) {
            navigate('404');
            }
        });
    }, [id, navigate]);

    useEffect(() => {
        return () => {
        unmounteRef.current = true;
        };
    }, []);

    return(
        <Page title='Advert Detail' {...props}>
            <div className="ad-details"> 
                <img src={ad.photo || noPhotoImg} alt={ad.name}></img>
                <p>{ad.name}</p>
                <p>{ad.price} €</p>
                <p>{ad.sale}</p>
                <p>{ad.tags}</p>
                <Link to ='/'>
                    <button >Go back</button>
                </Link>
            </div>
        </Page>
    ) 
}

export default AdDetail