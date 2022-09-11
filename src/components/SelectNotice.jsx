import { FcDisapprove } from "react-icons/fc";
import styled from "styled-components";
import AddNotice from "./AddNotice";
const SelectNotice = ({
  notices,
  setNotice,
  selectedNotices,
  setSelectedNotice,
}) => {
  const handleDelete = (noticeId) => {
    setNotice((current) => current.filter((notice) => notice.id !== noticeId));
  };

  const selectNotice = (noticeId) => {
    if (isSelected(noticeId)) {
      setSelectedNotice((current) =>
        current.filter((item) => item.id !== noticeId)
      );
      return;
    }
    const notice = notices.filter((item) => item.id === noticeId)[0];

    setSelectedNotice((current) => [
      ...current,
      { id: notice.id, message: notice.message },
    ]);
  };

  const isSelected = (noticeId) => {
    return selectedNotices.filter((item) => item.id === noticeId).length > 0;
  };

  return (
    <div className="patient-notice absolute top-16 bg-slate-500 w-11/12 px-4 py-3 text-white rounded-md shadow-lg">
      <TagGroup>
        {Array.isArray(notices) && notices.length > 0 ? (
          notices.map((notice) => (
            <Tag
              key={notice.id}
              isSelected={() => isSelected(notice.id)}
              className={`${
                isSelected(notice.id) ? "bg-slate-400" : "bg-slate-600"
              }`}
            >
              <p
                className="cursor-pointer"
                onClick={() => selectNotice(notice.id)}
              >
                {notice.message}
              </p>
              <button onClick={() => handleDelete(notice.id)}>
                <FcDisapprove />
              </button>
            </Tag>
          ))
        ) : (
          <h1 className="text-lg">কোন সেভ করা নোটিস নেই।</h1>
        )}
      </TagGroup>
      <AddNotice setNotice={setNotice} />
    </div>
  );
};

export default SelectNotice;

const Tag = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 10px;
  button {
    font-size: 20px;
  }
`;

const TagGroup = styled.div`
  display: inline-flex;
  border-radius: 10px;
  margin-bottom: 20px;
`;
