const PrimaryButton = ({ content = "Button text" }) => {
  return (
    <button className="px-6 py-3 bg-primary font-medium text-white transition-colors hover:bg-primary-dark">
      {content}
    </button>
  );
};

export default PrimaryButton;
