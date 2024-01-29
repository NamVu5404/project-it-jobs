import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./ScrollToTop.scss";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <Button
          type="primary"
          size="large"
          icon={<ArrowUpOutlined />}
          className="scroll-to-top"
          onClick={handleClick}
        />
      )}
    </>
  );
}

export default ScrollToTop;
