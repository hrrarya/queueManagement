import styled from "styled-components";
import { useState } from "react";
import uuid from "react-uuid";

const Form = ({ setPatient }) => {
  const [name, setName] = useState("");
  const [oldPatient, setOldPatient] = useState(false);
  const [emergencyPatient, setEmergencyPatient] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ("" === name) {
      setError("নামের ফিল্ড খালি, প্লিজ রোগীর নাম লিখুন।");
      return;
    }
    if ("" !== error) {
      setError("");
    }
    setPatient((current) => [
      ...current,
      { id: uuid(), name, oldPatient, emergencyPatient },
    ]);

    setName("");
    setOldPatient(false);
    setEmergencyPatient(false);
  };
  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const isOldPatient = (e) => {
    setOldPatient(e.target.checked);
  };
  const isEmergencyPatient = (e) => {
    setEmergencyPatient(e.target.checked);
  };
  return (
    <form onSubmit={handleSubmit} className="patient-form mb-4">
      <FormDiv>
        <input
          type="text"
          placeholder={error || "নাম এখানে লিখুন"}
          name="name"
          className={`border w-1/3 md:w-full px-2 py-3 ${
            "" !== error && "border-4 border-red-900"
          }`}
          value={name}
          onChange={handleChange}
        />
      </FormDiv>
      <FormDiv>
        <div>
          <input
            onChange={isOldPatient}
            type="checkbox"
            name="oldPatient"
            id="oldPatient"
            checked={oldPatient}
          />
          <label htmlFor="oldPatient">পুরাতন রোগী</label>
        </div>
        <div>
          <input
            onChange={isEmergencyPatient}
            type="checkbox"
            name="emergencyPatient"
            id="emergencyPatient"
            checked={emergencyPatient}
          />
          <label htmlFor="emergencyPatient">ইমারজেন্সী রোগী</label>
        </div>
      </FormDiv>
      <FormDiv>
        <button
          type="submit"
          className="border rounded-sm px-4 py-2 font-semibold"
        >
          Submit
        </button>
      </FormDiv>
    </form>
  );
};

export default Form;

const FormDiv = styled.div`
  margin-top: 10px;
  div {
    margin-bottom: 5px;
    input[type="checkbox"] {
      margin-right: 5px;
    }
  }
`;
