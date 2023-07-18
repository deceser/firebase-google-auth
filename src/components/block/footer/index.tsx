import React from "react";

import styles from "./index.module.scss";

type Props = {};

const TheFooter: React.FC<Props> = ({ ...props }) => {
  const {} = props;

  // ---
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    const updateYear = () => {
      const year = new Date().getFullYear();

      if (year !== currentYear) {
        setCurrentYear(year);
      }

      requestAnimationFrame(updateYear);
    };

    const requestId = requestAnimationFrame(updateYear);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [currentYear]);
  // ---

  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer_up}>{/*some code should be added in the future */}</div>
        <div className={styles.footer_bottom}>
          <h4>© {currentYear}. All Rights Reserved </h4>
          <h4>Terms of service | Privacy policy</h4>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
