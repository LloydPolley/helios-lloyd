import "./Footer.css";

const listOne = [
  { label: "Medication", url: "" },
  { label: "About Us", url: "" },
  { label: "Reviews", url: "" },
  { label: "Calculator", url: "" },
];

const listTwo = [
  { label: "FAQs", url: "" },
  { label: "Support", url: "" },
  { label: "Blog", url: "" },
];

const lists = [listOne, listTwo];

const Footer = () => (
  <footer className="footer">
    {lists.map((list, i) => (
      <ul key={`footer-list-${i}`}>
        {list.map((item) => (
          <li key={item.label}>
            <a href={item.url || "#"}>{item.label}</a>
          </li>
        ))}
      </ul>
    ))}
  </footer>
);

export default Footer;
