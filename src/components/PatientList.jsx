import { FcFullTrash } from "react-icons/fc";

const PatientList = ({ patient, setPatient }) => {
  const handleDelete = (patientId) => {
    setPatient((current) => current.filter((item) => item.id !== patientId));
  };

  const patientTagDefineer = (item) => {
    if (item?.oldPatient && item?.emergencyPatient)
      return (
        <span className="patient-tag">
          {item.oldPatient && (
            <span className="bg-green-300 text-xs ml-1 p-1 rounded-lg">
              পুরাতন রোগী
            </span>
          )}
          <span className="text-sm">+</span>
          {item.emergencyPatient && (
            <span className="bg-red-600 text-white text-xs ml-1 p-1 rounded-lg">
              ইমারজেন্সী রোগী
            </span>
          )}
        </span>
      );
    else
      return (
        <span
          className={`patient-tag text-xs ml-1 p-1 rounded-lg ${
            item.oldPatient && "bg-green-300"
          } ${item.emergencyPatient && "bg-red-600 text-white"}`}
        >
          {item.oldPatient && "পুরাতন রোগী"}
          {item.emergencyPatient && "ইমারজেন্সী রোগী"}
        </span>
      );
  };

  if (!Array.isArray(patient) || patient.length <= 0)
    return (
      <div className="mt-8">
        <h1 className="text-xl">খালি লিস্ট।</h1>
      </div>
    );

  return (
    <ul className="patient-list w-6/12 md:w-full sm:w-full mr-3 mt-4">
      <h1 className="font-semibold text-xl mb-4">
        {patient?.length?.toLocaleString("bn-bd")} জন আছেন লিস্টে।
      </h1>
      {patient?.map((item, index) => (
        <li
          key={item.id}
          className={`w-full flex justify-between px-2 py-3 mb-2 font-semibold text-2xl border-solid border border-slate-200 rounded-md shadow-sm ${
            index % 2 === 0 ? "bg-slate-100" : ""
          }`}
        >
          <div className="flex items-center">
            <span className="patient-name">{item.name}</span>
            {patientTagDefineer(item)}
          </div>
          <button onClick={() => handleDelete(item.id)}>
            <FcFullTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PatientList;
