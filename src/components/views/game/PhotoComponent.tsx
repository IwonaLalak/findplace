interface Props {
  url: string;
}

/** Displays view of searching place */
const PhotoComponent = ({ url }: Props): JSX.Element => {
  return (
    <div>
      <img src={url} alt="Photo of place to guess" />
    </div>
  );
};

export default PhotoComponent;

