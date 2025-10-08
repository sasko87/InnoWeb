import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./CookiesBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const portalRoot = document.getElementById("cookies");

  useEffect(() => {
    const stored = localStorage.getItem("cookiesAccepted");
    const timestamp = localStorage.getItem("cookiesAcceptedAt");

    if (stored && timestamp) {
      const acceptedTime = parseInt(timestamp, 10);
      const oneDay = 24 * 60 * 60 * 1000; // 1 ден во милисекунди
      const now = Date.now();

      // ако поминал еден ден -> избриши и прикажи банер повторно
      if (now - acceptedTime > oneDay) {
        localStorage.removeItem("cookiesAccepted");
        localStorage.removeItem("cookiesAcceptedAt");
        setVisible(true);
      }
    } else if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.setItem("cookiesAcceptedAt", Date.now().toString());
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
            Користиме само аналитички колачиња за подобрување
            на страницата. Не собираме лични податоци.
          </p>
          <div className={classes.cookiesActions}>
            <Link to="/cookies" className={classes.cookiesMoreInfoLink}>
              Повеќе информации
            </Link>
            <button onClick={handleAccept}>Прифати</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
}
