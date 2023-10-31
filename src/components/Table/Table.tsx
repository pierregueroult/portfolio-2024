import styles from "./Table.module.scss";
import { Fragment } from "react";

interface TableProps {
  title: string;
  head: {
    info: string;
    value: string;
  };
  data: Array<{
    info: string;
    value: string;
  }>;
}

export default function Table({ title, head, data }: TableProps): JSX.Element {
  return (
    <Fragment>
      <h2 className={styles.title}>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{head.info}</th>
            <th>{head.value}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.info}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
