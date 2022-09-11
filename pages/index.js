import Head from "next/head";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Form from "../src/components/Form";
import PatientList from "../src/components/PatientList";
import StartPatient from "../src/components/StartPatient";
import SelectNotice from "../src/components/SelectNotice";
import NoticeBoard from "../src/components/NoticeBoard";

const darkModeAtom = atomWithStorage("theme", "light");
const patientList = atomWithStorage("patientList", []);
const startSeeingPatient = atomWithStorage("startSeeingPatient", false);

const noticeList = atomWithStorage("noticeList", []);
const selectedNotice = atomWithStorage("selectedNotice", []);

const noticeBoard = atomWithStorage("noticeBoard", false);

export default function Home() {
  const [theme, setTheme] = useAtom(darkModeAtom);
  const [patient, setPatient] = useAtom(patientList);
  const [notices, setNotice] = useAtom(noticeList);
  const [selectedNotices, setSelectedNotice] = useAtom(selectedNotice);
  const [start, setStart] = useAtom(startSeeingPatient);
  const [showNoticeBoard, setShowNoticeBoard] = useAtom(noticeBoard);

  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showNoticeForm, setNoticeForm] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = (val) => {
    setTheme(val);
  };

  if (!mounted) return null;
  return (
    <div
      className={`flex flex-col min-h-screen px-4 py-2 ${
        theme === "primary"
          ? "theme-primary"
          : theme === "swiss"
          ? "theme-swiss"
          : "theme-neon"
      }`}
    >
      <Head>
        <title>Patient Queue</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header
        setStart={setStart}
        setShowForm={setShowForm}
        patientCount={patient?.length}
        showNoticeForm={showNoticeForm}
        setNoticeForm={setNoticeForm}
        showNoticeBoard={showNoticeBoard}
        setShowNoticeBoard={setShowNoticeBoard}
      />
      {showForm && <Form setPatient={setPatient} />}
      <div className="flex justify-between md:block sm:block">
        <PatientList patient={patient} setPatient={setPatient} />
        <StartPatient patient={patient} start={start} />
      </div>
      {showNoticeForm && (
        <SelectNotice
          notices={notices}
          setNotice={setNotice}
          selectedNotices={selectedNotices}
          setSelectedNotice={setSelectedNotice}
        />
      )}

      {showNoticeBoard && <NoticeBoard selectedNotices={selectedNotices} />}
    </div>
  );
}

// const StyledButton = styled.button`
//   background: red;
//   color: white;
//   font-size: 1em;
//   text-align: center;
//   padding: 0.25em 1em;
//   border: 2px solid #000;
//   display: inline;
//   // margin-right: 10px;
// `;
