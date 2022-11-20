import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Test1 = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('Hello React');

  const handleChange = event => setValue(event.target.value);

  return (
    <div>
      <label>
        My still uncontrolled Input:
        <input type="text" value={value} onChange={handleChange} />
      </label>

      <p>
        <strong>Output:</strong> {value}
      </p>
    </div>
  );
};

export default Test1;