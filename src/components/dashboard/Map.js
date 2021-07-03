import React from 'react';
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';

const MapG = () => {
      
    return (
        <div>
            <YMaps>
                <Map defaultState={{ center: [45.24732342138606, 19.832377209934805], zoom: 12.5 }} style={{ height: 480, width: 990 }} >
                    <Clusterer options={{
                            preset: "islands#invertedVioletClusterIcons",
                            groupByCoordinates: false,
                            clusterDisableClickZoom: true,
                            clusterHideIconOnBalloonOpen: false,
                            geoObjectHideIconOnBalloonOpen: false
                    }}>
                        <Placemark
                            key={'42'}
                            geometry={ [45.24732342138606, 19.832377209934805] }
                        />

                    </Clusterer>
                    
                </Map>
            </YMaps>
        </div>
    )
}

export default MapG;