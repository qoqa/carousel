import { CarouselModal } from './CarouselModal';
import { CarouselModalContent } from './CarouselModalContent';
import { CarouselType } from './Carousel.type';

export function CarouselWithModal(props: CarouselType): JSX.Element {
  return (
    <CarouselModal isInitiallyOpen={props.isInitiallyOpen}>
      <CarouselModalContent {...props} />
    </CarouselModal>
  );
}
