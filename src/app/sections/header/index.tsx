import Image from "next/image";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Image src="/images/cb_logo.svg" alt="Logo" width={150} height={50} />
      </div>
    </header>
  );
};

export default Header;
