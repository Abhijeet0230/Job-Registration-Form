import "./index.css";
import InputField from "./components/InputField";
import CheckboxField from "./components/CheckBoxField";
import DropdownField from "./components/DropDownField";
import DateTimePickerField from "./components/DateTimePickerField";
import SubmissionSummary from "./components/SubmissionSummary";
import useForm from "./hooks/useForm";
import validate from "./utils/validation";

const initialFormState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  position: "",
  relevantExperience: "",
  portfolioURL: "",
  managementExperience: "",
  additionalSkills: [],
  preferredInterviewTime: "",
};

const JobApplicationForm = () => {
  const {
    formData,
    errors,
    handleChange,
    handleCheckboxChange,
    handleDropdownChange,
    handleSubmit,
    submittedData,
  } = useForm(initialFormState, validate);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen px-4">
      <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl py-6 px-4 md:px-6 lg:px-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Job Application Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Phone Number"
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
          />
          <DropdownField
            label="Applying for Position"
            name="position"
            value={formData.position}
            options={["Developer", "Designer", "Manager"]}
            onChange={handleDropdownChange}
            error={errors.position}
          />
          {(formData.position === "Developer" ||
            formData.position === "Designer") && (
            <InputField
              label="Relevant Experience (years)"
              type="number"
              name="relevantExperience"
              value={formData.relevantExperience}
              onChange={handleChange}
              error={errors.relevantExperience}
            />
          )}
          {formData.position === "Designer" && (
            <InputField
              label="Portfolio URL"
              type="text"
              name="portfolioURL"
              value={formData.portfolioURL}
              onChange={handleChange}
              error={errors.portfolioURL}
            />
          )}
          {formData.position === "Manager" && (
            <InputField
              label="Management Experience"
              type="text"
              name="managementExperience"
              value={formData.managementExperience}
              onChange={handleChange}
              error={errors.managementExperience}
            />
          )}
          <div>
            <label className="block font-medium">Additional Skills:</label>
            <CheckboxField
              label="JavaScript"
              name="JavaScript"
              checked={formData.additionalSkills.includes("JavaScript")}
              onChange={handleCheckboxChange}
            />
            <CheckboxField
              label="CSS"
              name="CSS"
              checked={formData.additionalSkills.includes("CSS")}
              onChange={handleCheckboxChange}
            />
            <CheckboxField
              label="Python"
              name="Python"
              checked={formData.additionalSkills.includes("Python")}
              onChange={handleCheckboxChange}
            />
            {errors.additionalSkills && (
              <p className="text-red-500">{errors.additionalSkills}</p>
            )}
          </div>
          <DateTimePickerField
            label="Preferred Interview Time"
            name="preferredInterviewTime"
            value={formData.preferredInterviewTime}
            onChange={handleChange}
            error={errors.preferredInterviewTime}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
        {submittedData && <SubmissionSummary data={submittedData} />}
      </div>
    </div>
  );
};

export default JobApplicationForm;
