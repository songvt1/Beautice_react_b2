import GoTOp from "../../assets/img/ToTopButton.png";
function GoToTop() {
  const handleGoToTOp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-[22%] right-[6%]" onClick={handleGoToTOp}>
      <img src={GoTOp} />
    </div>
  );
}

export default GoToTop;
