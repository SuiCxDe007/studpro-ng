import React, {useCallback, useEffect, useState} from 'react';


// import optional lightbox plugins
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {getStorage} from "firebase/storage";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";

const GalleryComponent = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    const [sponsordataState, setSponsorData] = useState(null);

    const storage = getStorage();

    /**
     *
     * DB Path is set with a new collection per iteration under PhotoGallery collection. If required add a new collection
     * under the same path with a new collection name under "StudProIteration" collection.
     */
    const fetchPost = async () => {
        await getDocs(collection(db, "PhotoGallery/StudProIteration/studpro5"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setSponsorData(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, []);

    return (sponsordataState && <div style={{marginTop: "20px", marginRight: "50px", marginLeft: "50px"}}>
            <Gallery photos={sponsordataState} onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (<Modal onClose={closeLightbox}>
                        <Carousel
                            key={Math.random()}
                            currentIndex={currentImage}
                            views={sponsordataState.map(x => ({
                                ...x, srcset: x.srcSet, caption: x.title
                            }))}
                        />
                    </Modal>) : null}
            </ModalGateway>
        </div>);
};

export default GalleryComponent;
