import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout"
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
        <Layout title='Advert Detail' {...props}>
            <div className="ad-details"> 
                <img src={ad.photo || noPhotoImg} alt={ad.name}></img>
                <p>{ad.name}</p>
                <p>{ad.price} €</p>
                <p>{ad.sale}</p>
                <p>{ad.tags}</p>
            </div>
        </Layout>
    ) 
}

export default AdDetail