export default function Header(props: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="header">
      <div>
        <p>
          {props.title}
          <span>{props.description}</span>
        </p>
      </div>
      <div>
        <img src={props.image} alt="hero" />
      </div>
    </div>
  );
}
