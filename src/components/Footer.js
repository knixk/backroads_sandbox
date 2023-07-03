import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
      </ul>

      <SocialLinks />

      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
