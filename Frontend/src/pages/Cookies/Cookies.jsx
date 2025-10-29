import classes from "./Cookies.module.css";
import { useTranslation } from "react-i18next";

const Cookies = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.cookiesPageContainer}>
      <h2>{t("cookies.cookies_title")}</h2>
      <p style={{textAlign: "center"}}>{t("cookies.cookies_intro")}</p>
      <div className={
classes.cookiesContent
      }>
      <h5>{t("cookies.what_are_cookies")}</h5>
      <p>{t("cookies.what_are_cookies_text")}</p>
      <h5>{t("cookies.which_cookies")}</h5>
      <p>{t("cookies.which_cookies_text")}</p>
      <h5>{t("cookies.cookie_control")}</h5>
      <p>{t("cookies.cookie_control_text")}</p>
      <p><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className={classes.cookiesGoogleLink}>{t("cookies.google_link_text")}</a></p>
      <p>{t("cookies.cookie_delete_text")}</p>
      </div>
    </div>
  );
};

export default Cookies;