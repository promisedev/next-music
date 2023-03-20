import Styles from "./headers.module.css";
import { ArrowBackIos, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const link = [
    { id: "1", link: "/support", name: "Support" },
    { id: "2", link: "/advertise", name: "Advertise" },
  ];

  const history = useRouter();
  const Back = () => {
    history.push("/");
  };
  return (
    <article className={Styles.header_nav}>
      <div className={Styles.nav1}>
        <IconButton className={Styles.header_button} onClick={Back}>
          <ArrowBackIos className={Styles.header_arrow} />
        </IconButton>
        {/* --------------------------------------------------------- */}
        <Link href="/" className={Styles.header_link}>
          {" "}
          <img
            src="../../../assets/logo.png"
            alt="logo"
            className={Styles.header_logo}
          />
        </Link>
      </div>
      {/* ---------------------------- */}
      <div className={Styles.nav3}>
        <IconButton className={Styles.header_button} onClick={Back}>
          <PlayArrowIcon className={Styles.nav3_icon} />
        </IconButton>
      </div>
    </article>
  );
};
export default Header;
