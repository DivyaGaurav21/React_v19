import React from 'react'
import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Map = () => {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    return (
        <div className={styles.mapContainer} onClick={() => navigate("form")}>
            <h1>Map</h1>
            <p>Position</p>
            <p>X: {lat}</p>
            <p>Y: {lng}</p>
            <button onClick={() => setSearchParams({ lat: 10000, lng: 20000 })}>setsearchparams</button>
        </div>
    )
}

export default Map