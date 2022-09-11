import { FcAdvertising } from "react-icons/fc";
const NoticeBoard = ({ selectedNotices }) => {
  return (
    <div className="patient-notice-board absolute top-16 bg-slate-500 w-11/12 px-4 py-3 text-white rounded-md shadow-lg h-96 flex items-center justify-center text-5xl">
      <ul>
        {Array.isArray(selectedNotices) && selectedNotices.length > 0 ? (
          selectedNotices.map((item) => (
            <li
              key={item.id}
              className="flex mb-3 border-b-2 border-slate-200 pb-2"
            >
              <FcAdvertising className="mr-4" /> {item.message}
            </li>
          ))
        ) : (
          <h1 className="text-5xl">কোন নোটিস নেই</h1>
        )}
      </ul>
    </div>
  );
};

export default NoticeBoard;
