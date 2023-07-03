import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul class={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
