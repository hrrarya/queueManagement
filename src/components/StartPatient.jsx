const StartPatient = ({ patient, start }) => {
  if (!start) return null;
  const presentPatient = () => {
    if (Array.isArray(patient) && patient.length > 0) return patient[0];
    return null;
  };
  const nextPatient = () => {
    if (Array.isArray(patient) && patient.length > 1) return patient[1];

    return null;
  };
  const present = presentPatient();
  const next = nextPatient();
  return (
    <div className="patient-start w-4/12 md:w-full sm:w-full flex flex-col justify-start text-3xl font-bold mt-12 border shadow-md px-2 py-3 bg-green-300">
      {present && <h1>এখন দেখা হচ্ছে: {present.name}</h1>}
      {next && <h1>পরবর্তী রোগী: {next.name}</h1>}
    </div>
  );
};

export default StartPatient;
