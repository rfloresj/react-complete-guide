import ConceptItem from "./ConceptItem";
import Card from "../UI/Card";
import "./Concepts.css";

const Concepts = (props) => {
  return (
    <>
      <ul id="concepts">
        <Card>
          <ConceptItem
            image={props.items[0].image}
            title={props.items[0].title}
            description={props.items[0].description}
          />
        </Card>
        <Card>
          <ConceptItem
            image={props.items[1].image}
            title={props.items[1].title}
            description={props.items[1].description}
          />
        </Card>
        <Card>
          <ConceptItem
            image={props.items[2].image}
            title={props.items[2].title}
            description={props.items[2].description}
          />
        </Card>
      </ul>
    </>
  );
};

export default Concepts;
