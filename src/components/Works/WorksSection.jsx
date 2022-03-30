import React from "react";
import { useSelector } from "react-redux";
import { Parallax } from "react-parallax";
import CleanDesktopImg from "../../assets/img/clean-desktop.jpg";

const WorksSection = () => {
  const state = useSelector((state) => state.selectedData);
  const { title, text1 } = state.worksData;
  return (
    <Parallax
      bgImage={CleanDesktopImg}
      bgImageAlt="Clean Desktop"
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            background: `rgba(253, 126, 20, ${percentage * 1})`,
            left: "50%",
            top: "50%",
            width: percentage * 500,
            height: percentage * 500,
          }}
        />
      )}
    >
      <div id="works" className="pt-5">
        <div
          className="container text-secondary"
          style={{ height: "350px", marginTop: "150px" }}
        >
          <h1 className="display-5 text-center">{title}</h1>
          <h1 className="display-6 text-center">{text1}</h1>
        </div>
      </div>
      <div style={{ height: "100px" }} />
    </Parallax>
  );
};

export default WorksSection;
