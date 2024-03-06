import styles from './PhoneLayout.module.css';

export default function PhoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
        <div className={styles.iphone}>
            <div className={styles.iphoneNotch}></div>
            
            <div className={styles.iphoneContent}>
                {children}
            </div>
        </div>
    </div>
  );
}
