import React, { useRef, RefObject } from 'react';
import ReactHlsPlayer from 'react-hls-player';

export const PlayerContainer = ({ streamUrl }: { streamUrl: string }) => {
    var playerRef = useRef<HTMLVideoElement>() as RefObject<HTMLVideoElement>;
    return (
        <React.Fragment>
            <ReactHlsPlayer
                src={`http://139.162.230.224/${streamUrl}` as string}
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
            />
        </React.Fragment>
    );
}
