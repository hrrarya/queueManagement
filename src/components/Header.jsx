import styled from "styled-components";
const Header = ({
  setStart,
  setShowForm,
  showNoticeForm,
  setNoticeForm,
  patientCount,
  showNoticeBoard,
  setShowNoticeBoard,
}) => {
  const handleForm = () => {
    if (showNoticeForm) setNoticeForm(false);
    if (showNoticeBoard) setShowNoticeBoard(false);
    setShowForm((showForm) => !showForm);
  };

  const handleStart = () => {
    if (showNoticeForm) setNoticeForm(false);
    if (showNoticeBoard) setShowNoticeBoard(false);
    setStart((start) => !start);
  };
  const handleNoticeForm = () => {
    if (showNoticeBoard) setShowNoticeBoard(false);
    setNoticeForm((showNoticeForm) => !showNoticeForm);
  };

  const handleShowNoticeBoard = () => {
    if (showNoticeForm) setNoticeForm(false);
    setShowNoticeBoard((current) => !current);
  };

  return (
    <div className="w-full flex justify-between patient-header">
      <ButtonGroup>
        <StyledButton onClick={handleForm}>Show Input Form</StyledButton>
        <StyledButton
          className={`${showNoticeForm && "bg-gray-300"}`}
          onClick={handleNoticeForm}
        >
          নোটিস
        </StyledButton>
        <StyledButton
          className={`${showNoticeBoard && "bg-gray-300"}`}
          onClick={handleShowNoticeBoard}
        >
          নোটিস বোর্ড দেখান
        </StyledButton>
      </ButtonGroup>
      {patientCount > 0 && (
        <StyledButton onClick={handleStart}>Start</StyledButton>
      )}
    </div>
  );
};

export default Header;

const ButtonGroup = styled.div`
  button:not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledButton = styled.button`
  //   background: red;
  color: #000;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid #000;
  border-radius: 20px;
  display: inline;
  // margin-right: 10px;
  @apply;
`;
