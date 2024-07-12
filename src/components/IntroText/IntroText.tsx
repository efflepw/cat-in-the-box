import { useContext } from "react";
import { INTRO_TEXT } from "../../const/text";
import MovesContext from "../../context/moves";

const IntroText = () => {
  const { catBox } = useContext(MovesContext);

  if (catBox != null) return <></>;

  return (
    <div className="absolute top-12 text-2xl text-slate-500 px-8 text-center">
      {INTRO_TEXT}
    </div>
  );
};

export default IntroText;
