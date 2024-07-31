const SectionHeader = ({ content }) => {
  return (
    <div className="inline-block section-header border-l-4 border-primary border-solid px-3 py-1 mb-3">
      <span className="text-primary text-[16px] font-bold">{content}</span>
    </div>
  );
};

export default SectionHeader;
