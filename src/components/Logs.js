import { datas } from "./Data";
import Log from "./Log";
import styles from "../styles/Logs.module.css";

const Logs = () => {
  return (
    <div className={styles.logs}>
      {datas.map((data) => {
        return <Log data={data} />;
      })}
    </div>
  );
};

export default Logs;
