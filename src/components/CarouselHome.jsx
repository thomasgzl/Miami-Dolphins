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
    caption: "Bobby McCain le récidiviste. On joue la 19 ème minute quand Bobby McCain s'envole litéralement par dessus la défense des Broncos pour inscrire le premier Touchdown de la partie.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra, ex sed vulputate efficitur, nisl elit consectetur augue, porttitor aliquet arcu eros sed ante. Sed odio dolor, malesuada nec velit quis, convallis scelerisque tellus. Curabitur interdum nibh et arcu cursus eleifend. Donec eu sollicitudin turpis. Proin placerat rutrum odio, sed commodo erat. Aliquam non mi eros."
  },
  {
    src: "Huitième Touchdown pour Kenyan Drake",
    caption: "Kenyan Drake enflamme les statistiques de la ligue cette saison avec déjà son huitième Touchdown. Aliquam mattis finibus consequat. Suspendisse ullamcorper nunc ligula, fermentum ullamcorper tellus iaculis imperdiet. Sed est enim, faucibus quis suscipit quis, interdum sit amet ligula. Maecenas imperdiet tellus purus, eu condimentum nibh tincidunt sed. Curabitur in risus vel dolor auctor bibendum. Quisque viverra nisl id porta dapibus. Cras aliquam at est vitae condimentum. Donec nec consequat tellus, vel scelerisque elit. Pellentesque vitae justo tincidunt, rutrum lacus eu, elementum ipsum."
  },
  {
    src: "Adam Gase, le nouveau coach !",
    caption: "Parmis les nouveautés de cette saison à venir c'est peut être la plus excitante, l'arrivée du nouveau coach qui sucite quelques intérrogations chez nos supporters. Suspendisse ullamcorper nunc ligula, fermentum ullamcorper tellus iaculis imperdiet. Sed est enim, faucibus quis suscipit quis, interdum sit amet ligula. Maecenas imperdiet tellus purus, eu condimentum nibh tincidunt sed. Curabitur in risus vel dolor auctor bibendum. Quisque viverra nisl id porta dapibus. Cras aliquam at est vitae condimentum. Donec nec consequat tellus, vel scelerisque elit."
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