interface Props {
  image: string;
  path: string;
  alt: string;
}

export default function ImageContainer(props: Props) {
  return (
    <div className="picture-container">
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet={props.path + "/mobile/" + props.image}
        />
        <source
          media="(max-width: 864px)"
          srcSet={props.path + "/tablet/" + props.image}
        />
        <source
          media="(min-width: 865px)"
          srcSet={props.path + "/desktop/" + props.image}
        />
        <img
          className="tile-image object-fill"
          srcSet={props.path + "/desktop/" + props.image}
          alt={props.alt}
        ></img>
      </picture>
    </div>
  );
}
