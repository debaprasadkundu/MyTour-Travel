import { ReactNode } from "react";
import "./commonHeader.scss";
import { arrowBack } from "../../assets";

interface Props {
  children: ReactNode;
  back(): void;
}

function CommonHeader(props: Props) {
  const { children, back } = props;
  return (
    <header className="header flex">
      <div className="back-icon" onClick={back}>
        <img src={arrowBack} alt="arrow back Logo" />
      </div>

      {children}
    </header>
  );
}

export default CommonHeader;
