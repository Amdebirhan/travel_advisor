import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={'AIzaSyBIc-6KKWEq-MNQgiC2UINYQS536KkDtDE'}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={() => { }}
            >
                {places?.map((place, index) => (
                    <div className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longtiude)}
                        key={index}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color='primary' fontSize='large' />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant='subtitle2' className={classes.typography}>
                                        {place.name}
                                    </Typography>
                                    <img src={place.photo ? place.photo.images.large.url : ''} alt={place.name} />
                                    <Rating size='small' value={Number(place.Rating)} readOnly />

                                </Paper>
                            )}
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    );
};

export default Map;


