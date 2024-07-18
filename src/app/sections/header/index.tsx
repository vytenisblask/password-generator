import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black p-4">
      <div className="container mx-auto">
        <Image
          src="/images/cb_logo.svg"
          alt="Logo"
          width={150}
          height={50}
          className="w-auto h-8"
        />
      </div>
    </header>
  );
};

export default Header;
