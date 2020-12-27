import React from "react";
import styles from "./Section.modul.css";

const Section = ({ title, children }) => (
  <section className="sectionWrp">
    <h1 className="sectionTittle">{title}</h1>
    <div className="sectionContent">{children}</div>
  </section>
);
export default Section;
