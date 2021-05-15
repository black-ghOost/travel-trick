import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import locations from '../../fakeData/locations';
import HotelItem from './HotelItem';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Search = () => {
  const { id } = useParams();
  const { bookingInfo } = useContext(UserContext)
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const bookingLocation = locations.find(location => location.id.toString() === id)
    setHotels(previousState => ([...previousState, ...bookingLocation.hotels]))
  }, [id])

  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col sm={6} xl={7}>
          <p>252 stays
            {"  " + new Date(bookingInfo.formDate).toLocaleString('default', { month: 'long' })}

            {"  " + new Date(bookingInfo.formDate).getDate()}
             -
            {"  " + new Date(bookingInfo.toDate).toLocaleString('default', { month: 'long' })}
            {"  " + new Date(bookingInfo.toDate).getDate() + "  "}
               guests(3)</p>
          <h4>Stay in {bookingInfo.destination}</h4>
          {hotels.map(hotel => <HotelItem key={hotel.id} hotel={hotel} />)}
        </Col>
        <Col sm={6} xl={5} className="mt-4">
          <Card className="mt-5">
            <Card.Body>
              <LoadScript googleMapsApiKey="AIzaSyCE1oI9UN7X2VYS0UFVRKBdWd3TzyxT-tE">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                >
                </GoogleMap>
              </LoadScript>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;