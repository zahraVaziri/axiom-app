import React from "react";
import Select from "react-select";
import styles from "./Filter.module.css";

const SelectComponentcolor = ({ title, ...rest }) => {
  return (
    <div className={styles.selectContainer}>
      <span> {title}</span>

      <Select className={styles.select} {...rest} />
    </div>
  );
};

export default SelectComponentcolor;
