interface Image {
  desktop: string;
  mobile: string;
  tablet: string;
}

export default interface Card {
  image: Image;
  title: string;
  author: string;
  date: string | Date;
}
