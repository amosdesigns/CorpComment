type HashtagItemProps = {
  company: string;
  onDisplayHash: (company:string) => void;
};

export default function HashtagItem({ company, onDisplayHash}: HashtagItemProps) {
  return (
    <li>
      {company === "All Companies" ?
        (<button onClick={() => onDisplayHash("")}>All Companies</button>)
        : (<button onClick={() => onDisplayHash(company)}>#{company}</button>)}
    </li>
  );
}
