import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {listaTareas.map((tarea, index) => (
        <ItemTarea
          key={index}
          tarea={tarea}
          borrarTarea={borrarTarea}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
