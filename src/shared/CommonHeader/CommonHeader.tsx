import { ReactNode } from "react";
import "./commonHeader.scss";
import { IoMdArrowBack } from "react-icons/io";

interface Props {
  children: ReactNode;
  back(): void;
}

function CommonHeader(props: Props) {
  const { children, back } = props;
  return (
    <header className="header flex">
      <div className="back-icon" onClick={back}>
        <IoMdArrowBack className="icon" />
      </div>

      {children}
    </header>
  );
}

export default CommonHeader;
