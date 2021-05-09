import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import locations from '../../fakeData/locations';
import PlaceItem from './PlaceItem';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Home.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Home() {

	return (
  <Container className="pr-0 mt-5 pt-5">
    <Row>
      <Col sm={4} xl={4}>
        <Jumbotron className="bg-transparent px-0">
          <h1 className="font-weight-bold"></h1>
          <p>...</p>
          <Button className="px-4 py-2" variant="warning" >Booking </Button>
        </Jumbotron>
      </Col>
      <Col sm={8} xl={8}>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          loop={true}
        >
          {locations.map(location => {
            return (<SwiperSlide key={location.id}>
              
            </SwiperSlide>)
          })}
        </Swiper>
      </Col>
    </Row>
  </Container>
    );
}