const ConceptItem = (props) => {
  return (
    <>
        <img src={props.image} alt="components-img" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </>
  );
};

export default ConceptItem;
