
import { useState, useEffect } from 'react';

const ResizeComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        

        return () => {
            window.removeEventListener("resize", handleResize);
            
        }
    },[])
    
    function handleResize() {
        setWidth(window.innerWidth);
        setWidth(window.innerHeight);
    }

    return (
        <div>
            <p>
                window width: {innerWidth}px
            </p>
            <p>
                window height: {innerHeight}px
            </p>
        </div>
    );
}

export default ResizeComponent