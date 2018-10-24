import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,

} from 'reactstrap';
import './Home.css';
import { NavLink } from 'react-router-dom';

const items = [
  {
    src: "Bobby McCain, l'homme volant",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet leo velit. Aliquam mattis finibus consequat. Suspendisse ullamcorper nunc ligula, fermentum ullamcorper tellus iaculis imperdiet. Sed est enim, faucibus quis suscipit quis, interdum sit amet ligula. Maecenas imperdiet tellus purus, eu condimentum nibh tincidunt sed. Curabitur in risus vel dolor auctor bibendum. Quisque viverra nisl id porta dapibus. Cras aliquam at est vitae condimentum. Donec nec consequat tellus, vel scelerisque elit. Pellentesque vitae justo tincidunt, rutrum lacus eu, elementum ipsum."
  },
  {
    src: "Le Hard Rock Stadium fait peau neuve !",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet leo velit. Aliquam mattis finibus consequat. Suspendisse ullamcorper nunc ligula, fermentum ullamcorper tellus iaculis imperdiet. Sed est enim, faucibus quis suscipit quis, interdum sit amet ligula. Maecenas imperdiet tellus purus, eu condimentum nibh tincidunt sed. Curabitur in risus vel dolor auctor bibendum. Quisque viverra nisl id porta dapibus. Cras aliquam at est vitae condimentum. Donec nec consequat tellus, vel scelerisque elit. Pellentesque vitae justo tincidunt, rutrum lacus eu, elementum ipsum."
  },
  {
    src: "Adam Mer-Gase, le nouveau coach !",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet leo velit. Aliquam mattis finibus consequat. Suspendisse ullamcorper nunc ligula, fermentum ullamcorper tellus iaculis imperdiet. Sed est enim, faucibus quis suscipit quis, interdum sit amet ligula. Maecenas imperdiet tellus purus, eu condimentum nibh tincidunt sed. Curabitur in risus vel dolor auctor bibendum. Quisque viverra nisl id porta dapibus. Cras aliquam at est vitae condimentum. Donec nec consequat tellus, vel scelerisque elit. Pellentesque vitae justo tincidunt, rutrum lacus eu, elementum ipsum."
  }
];

class CarouselHome extends Component {
    
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
      
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <h1 className="TitreCarousel">{item.src}</h1>
          <p className="TextCarousel"> {item.caption} </p>
          <NavLink to="/newszoom" className="linkNav"><button className="BoutonCarousel">Voir l'article</button></NavLink>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl  direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselHome;