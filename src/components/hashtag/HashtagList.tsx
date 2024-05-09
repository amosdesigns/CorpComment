import HashtagItem from "./HashtagItem";


type HashtagListProps = {
  companyList: string[];
  handleDisplayHash: (company:string) => void;
};
export default function HashtagList({ companyList, handleDisplayHash }: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onDisplayHash={handleDisplayHash}
        />
      ))}
      <HashtagItem
        company="All Companies"
        onDisplayHash={handleDisplayHash}
      />
    </ul>
  );
}
