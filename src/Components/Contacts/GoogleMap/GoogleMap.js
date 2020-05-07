import React, {Component} from "react";
import style from "./GoogleMap.module.css";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {

    render() {
        return (
            <>
                <div className={style.map}>
                    <Map google={this.props.google} zoom={15}
                         initialCenter={{
                             lat: 53.881143,
                             lng: 27.493048
                         }}>
                        <Marker name={"Current location"}/>
                    </Map>
                </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDNdctzg0b572pjv0APXoVOmfsIYOVNuJk")
})(GoogleMap)
