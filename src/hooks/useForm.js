import { useState } from "react";

const useForm = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const updatedSkills = checked
        ? [...prevData.additionalSkills, name]
        : prevData.additionalSkills.filter((skill) => skill !== name);
      return { ...prevData, additionalSkills: updatedSkills };
    });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleCheckboxChange,
    handleDropdownChange,
    handleSubmit,
    submittedData,
  };
};

export default useForm;
