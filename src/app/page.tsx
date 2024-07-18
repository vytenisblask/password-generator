import Header from "./sections/header";
import SubHeader from "./sections/subHeader";
import ContentBlock from "./sections/contentBlock";
import PasswordGenerator from "./components/PasswordGenerator";

export default function Home() {
  return (
    <main>
      <Header />
      <SubHeader />
      <PasswordGenerator />
      <ContentBlock
        imageUrl="/images/image1.svg"
        altText="What is a password generator?"
        title="What is a password generator?"
        text={
          <>
            A password generator is a tool that automatically generates strong,
            secure passwords. With its help, you don’t need to come up with your
            own passwords ever again.
            <br />
            <br />
            A single mouse click will generate you a sequence of random symbols.
            Copy and use it as a password for your device, email, social media
            account, or anything else that requires restricted access.
            <br />
            <br />
            Also, don’t use the same password for more than one account. Each
            time you need to sign up, create a new password using this free
            password generator. In this way, your data will be safer than ever
            before.
          </>
        }
        imageOnLeft={true}
      />
      <ContentBlock
        imageUrl="/images/image2.svg"
        altText="How does our password generator tool work?"
        title="How does our password generator tool work?"
        text={
          <>
            To create a truly unique character combination, this online password
            generator tool goes through random sequences of 26 uppercase
            letters, 26 lowercase letters, 10 numeric digits, and 32 special
            symbols. The result is a unique 12-character sequence. This number
            of characters makes your future password downright unbreakable,
            taking 1.4 billion years for a brute-force attack to crack it.
            <br />
            <br />
            This free password generator is compatible with Windows, Linux, and
            Mac operating systems, as well as with Android and iOS devices.
          </>
        }
        imageOnLeft={false}
      />
    </main>
  );
}
