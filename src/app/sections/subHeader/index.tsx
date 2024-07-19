import './SubHeader.scss';

const SubHeader = () => {
  return (
      <div className="container sub-header">
        <p>
          Our readers help us create quality content. If you purchase via links on
          our site, we may receive affiliate commissions.
          <a
          href="https://cybernews.com/about-us/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn more
        </a>
      </p>
</div>
);
};

export default SubHeader;