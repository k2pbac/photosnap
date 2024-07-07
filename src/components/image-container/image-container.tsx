export default function ImageContainer(props: { image: string }) {
  return (
    <div className="picture-container">
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet={`/home/mobile/${props.image}`}
        />
        <source
          media="(max-width: 864px)"
          srcSet={`/home/tablet/${props.image}`}
        />
        <source
          media="(min-width: 865px)"
          srcSet={`/home/desktop/${props.image}`}
        />
        <img
          className="tile-image object-fill"
          src={`/home/desktop/${props.image}`}
          alt={props.image}
        ></img>
      </picture>
    </div>
  );
}
