import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Page from "../layout/Page";
import { noPhotoImg } from "./AdvertsPage";
import ConfirmationDialog,{  DeleteButton } from "../common/confirmation";
import { deleteAdvert, getAdsDetail } from "./service";

const AdDetail = ( props) => {
    const [ad, setAd] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const unmounteRef = useRef(false);
    const [error, setError] = useState(null);
    const resetError = () => setError(null);
    
    

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

    
    const handleDelete = () =>{
        
        try {
            deleteAdvert(id)
            alert('Advert deleted successfully')
            navigate('/')
        } catch (error) {
            setError(error);
        }
    } 

    return(
        <Page title='Advert Detail' {...props}>
            <div className="ad-details"> 
                <img src={ad.photo || noPhotoImg} alt={ad.name}></img>
                <div>
                    <p>{ad.name}</p>
                    <p>{ad.price} €</p>
                    <p>{ad.sale ? 'Selling' : 'Searching'}</p>
                    <p>Tags : {ad.tags}</p>
                    <time>{Date(ad.createdAt)}</time>
                    <div>
                        <DeleteButton
                        handleDelete ={handleDelete}
                        >
                            <ConfirmationDialog>

                            </ConfirmationDialog>

                        </DeleteButton>
                        
    
                    </div>
                
                </div>
                
                <Link to ='/' className="go-back-bttn">
                    <button > Back </button>
                </Link>
                {error && (
                <div onClick={resetError} className="page-error">
                {error.message = 'Sorry but the advert deleted'}</div>)}
            </div>
        </Page>
    ) 
                    
    
}

export default AdDetail