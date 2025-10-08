import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./CookiesBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const portalRoot = document.getElementById("cookies");

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!portalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className={classes.cookiesBanner}
        >
          <p className={classes.cookiesText}>
            Користиме само аналитички колачиња (Google Analytics) за подобрување
            на страницата. Не собираме лични податоци.
          </p>
          <div className={classes.cookiesActions}>
            <Link
              to="/cookies-policy"
              className={classes.cookiesMoreInfoLink}
            >
              Повеќе информации
            </Link>
            <button
              onClick={handleAccept}
             
             
            >
              Прифати
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
}
