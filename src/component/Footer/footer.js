import "./style/footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="social-network">
      <div class="footer-dark">
        <div class="col-sm-6 col-md-3 item">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="col item social">
          <a href="#top">
            <SocialIcon url="" network="twitter" />
          </a>
          <a href="#top">
            <SocialIcon url="" network="instagram" />
          </a>
          <a href="#top">
            <SocialIcon url="" network="linkedin" />
          </a>
          <a href="#top">
            <SocialIcon url="https://github.com/zzaku" />
          </a>
        </div>

        <p class="copyright">Enzo MAKKED</p>
      </div>
    </div>
  );
};

export default Footer;
