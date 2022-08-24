import React, { useEffect, useState, useRef, RefObject } from 'react';
import { PlayerContainer } from '../containers/playerController';
import { useLocation } from "react-router-dom";

export function ViewStreamComponent() {
    const [urls, setUrls] = useState(Array<any>());
    const location = useLocation();

    useEffect(() => {
        setUrls((location.state as Array<any>));
    }, [location]);

    return (
        <React.Fragment>
            {Object.entries(urls).map(([key, value]) => {
                return value ?
                    <PlayerContainer streamUrl={value as string} /> : <></>

            })}
        </React.Fragment>
    );
}
