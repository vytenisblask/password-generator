import Image from "next/image";
import { ReactNode } from "react";
import "./ContentBlock.scss";

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
    <div className="container content-block">
      <div className={`content-wrapper ${imageOnLeft ? "" : "image-right"}`}>
        <div className="image-container">
          <Image src={imageUrl} alt={altText} width={300} height={300} />
        </div>
        <div className="text-container">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
