import styles from "./layout.module.scss";
import Link from "next/link";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps): React.ReactNode {
  return <main className={styles.main}>{children}</main>;
}
