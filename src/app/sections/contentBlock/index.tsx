import Image from "next/image";
import { ReactNode } from "react";

interface ContentBlockProps {
  imageUrl: string;
  altText: string;
  text: ReactNode;
  title: string;
  imageOnLeft?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  imageUrl,
  altText,
  text,
  title,
  imageOnLeft = true,
}) => {
  return (
    <div className="container mx-auto py-8 px-4 my-10">
      <div
        className={`flex flex-col ${
          imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8`}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt={altText}
            width={300}
            height={300}
            className="rounded-lg"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-8">{title}</h2>
          <p className="text-gray-500 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
