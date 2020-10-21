import { InputGroup, Field, TextArea } from "./InputFieldStyle";

const InputField = ({
  name,
  id,
  value,
  handleUpdate,
  type,
  required = true,
}) => {
  return (
    <InputGroup>
      {type === "textarea" ? (
        <TextArea
          placeholder={name}
          name={id}
          id={id}
          value={value}
          onChange={handleUpdate}
          required={required}
          type="textarea"
        />
      ) : (
        <Field
          placeholder={name}
          name={id}
          id={id}
          value={value}
          onChange={handleUpdate}
          required={required}
          type={type}
        />
      )}
    </InputGroup>
  );
};

export default InputField;
