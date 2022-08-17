import React, { useEffect, useState, useRef, RefObject } from 'react';
import axios from 'axios'
import ReactHlsPlayer from 'react-hls-player';
import { useLocation } from "react-router-dom";

export function ViewStreamComponent() {
    const [fileDetected, setFileDetected] = useState(false);
    const [url, setUrl] = useState('');
    var playerRef = useRef<HTMLVideoElement>() as RefObject<HTMLVideoElement>;
    const location = useLocation();

    useEffect(() => {
        setUrl((location.state as any).streamUrl);
        console.log(location.state); // result: 'some_value'
    }, [location]);

    // useEffect(() => {
    //     axios.get("/video").then(res => {
    //         console.log("res status: " + res.status)

    //         // look out for a status 200 to set state variable
    //         // this will toggle visibility for player
    //         if (res.status === 200) {
    //             console.log("res status is 200")

    //             setFileDetected(true)
    //         }
    //     })
    // }, []);
    return (
        <React.Fragment>
            <div id="video-player" className="App">

                {/* only initiate the player when the output file is ready */}
                {/* using a state variable here to toggle visibility */}

                {url ? <ReactHlsPlayer
                    src={`http://139.162.230.224/${url}` as string}
                    autoPlay={true}
                    hlsConfig={{
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0,
                        lowLatencyMode: true,
                    }}
                    playerRef={playerRef}
                    controls={true}
                // width={640}
                // height={480}
                // muted={true}
                /> : <></>}


            </div>
        </React.Fragment>
    );
}
