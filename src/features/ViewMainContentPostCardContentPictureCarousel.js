import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { view } from '@risingstack/react-easy-state';

function ViewMainContentPostCardContentPictureCarousel(props) {
    const items = props.items.map(item => {
        return (
            <Carousel.Item key={item}>
                <img src={item} style={{ width: '100%' }} alt={""} />
            </Carousel.Item>
        );
    });

    return (
        <Carousel
            nextLabel={null}
            prevLabel={null}
            interval={null}
            keyboard={false}
        >
            {items}
        </Carousel>
    );
}

export default view(ViewMainContentPostCardContentPictureCarousel);