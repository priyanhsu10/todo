import { useState } from "react";
import { config } from "../config";
import axios from "axios";
function CreateTodo(props) {
  const baseUrl = config.baseurl;

  const [todo, setTodo] = useState({});
  const [iscompleted, setIscompleted] = useState(false);
  const save = () => {
    axios.post(baseUrl, { ...todo }).then((x) => {
      console.log("save todo successfully");
      setTodo({});
      // eslint-disable-next-line react/prop-types
      console.log(x);
      props.fetchList();
    });
    console.log(todo);
  };
  const handleChange = (event, feild) => {
    setTodo((todo1) => {
      if (feild == "isCompleted") {
        setIscompleted(!iscompleted);
        return { ...todo1, [`${feild}`]: !iscompleted };
      }
      return { ...todo1, [`${feild}`]: event.target.value };
    });
  };
  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            placeholder="name"
            value={todo.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <input
            type="text"
            placeholder="description"
            value={todo.description}
            onChange={(e) => handleChange(e, "decription")}
          />
          is complated{" "}
          <input
            type="checkbox"
            name="isCompleted"
            onChange={(e) => handleChange(e, "isCompleted")}
          />
          <button
            type="button"
            onClick={() => {
              save();
            }}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
