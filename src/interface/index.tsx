interface Image {
  desktop: string;
  mobile: string;
  tablet: string;
}

export default interface Card {
  image: Image;
  title: string;
  author: string;
  date: string;
}

export interface Feature {
  icon: Image;
  header: string;
  description: string;
}
