import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Image src="/images/passgen_logo.svg" alt="Logo" width={100} height={20} />
      </div>
    </header>
  );
};

export default Header;
