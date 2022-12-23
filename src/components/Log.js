import React from "react";
import styles from "../styles/Log.module.css";

const Log = ({ data }) => {
  return (
    <section className={styles.log}>
      <div>
        <img
          src={data.image}
          width="125px"
          height="168px"
          style={{ borderRadius: "10px" }}
          alt="place"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.location}>{data.location}</h3>
        <h1 className={styles.title}>{data.title}</h1>
        <span>
          {data.starting_Date}-{data.ending_Date}
        </span>
        <p className={styles.paragraph}>{data.description}</p>
      </div>
    </section>
  );
};

export default Log;
