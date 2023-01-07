import React, {useEffect} from 'react';
import './ErrorPage-styles.css'

const ErrorPage = () => {

    useEffect(() => {
// Applying on mount
        document.body.style.overflow = "hidden";
// Applying on unmount
        return () => {
            document.body.style.overflow = "visible";
        }
    }, [])

    return (
        <div style={{overflowX: "hidden"}} className="space">
            <div className="texts font">
                <div>ERROR</div>
                <h1 className="h11">404</h1>
                <hr/>
                <div>How did you get lost in <br/>IEEE Volunteering Space?</div>
                <br/>

            </div>

            <div className="astronaut">
                <img
                    src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
                    alt="" className="src"/>
            </div>
        </div>
    );
};

export default ErrorPage;
