import {useEffect, useState} from "react";

const url = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=queen&api_key=31c6a431b77159b2e385bc83d1be07db&format=json&limit=10&page=1';

export type Track = {
    name: string,
    playcount: number,
    listeners: number
}

export type ApiResponse = {
    toptracks: {
        track: Track[]
    }
}

export function HttpApp() {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then((data: ApiResponse) => setTracks(data.toptracks.track));
    }, []);

    return (
        <div>
            {tracks.map(track => (
                <p>{track.name} – {track.playcount}</p>
            ))}
        </div>
    )
}

