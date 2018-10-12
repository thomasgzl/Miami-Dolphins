import React,{Component} from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselCaption
  } from 'reactstrap';

const items = [
  {src: 'http://image.noelshack.com/fichiers/2018/41/3/1539199739-es4rcp2.png' ,
  },
  {src: 'http://image.noelshack.com/fichiers/2018/41/3/1539199369-timyqig-2.png' ,
  },
  {src: 'http://image.noelshack.com/fichiers/2018/41/3/1539199602-9vkrc7i.png',
  },
  {src: 'http://image.noelshack.com/fichiers/2018/41/3/1539199602-qcwunpr.png',
  },
  {src: 'https://image.noelshack.com/fichiers/2018/41/3/1539199602-timyqig-2.png',
  },
];

class Example extends Component {
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
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={2000}
      >
        {slides}
        
      </Carousel>
    );
  }
}


export default Example;