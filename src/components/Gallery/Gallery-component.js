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

    const fetchPost = async () => {
        await getDocs(collection(db, "PhotoGallery"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setSponsorData(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, []);

    useEffect(() => {
    if (sponsordataState!==null){

       // setSponsorData([...sponsordataState,photos])
    }
    }, [sponsordataState]);




    return (
        sponsordataState && <div>
            <Gallery photos={sponsordataState} onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            key={Math.random()}
                            currentIndex={currentImage}
                            views={sponsordataState.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
};

export default GalleryComponent;
