import styles from './PhoneLayout.module.css';
import React, { useState, useEffect } from 'react';

function PhoneLayout({
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

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
  
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    if (isMobile) {
      // On mobile screens, return children without PhoneLayout
      return <div className="flex justify-center">{children}</div>;
    } else {
      // On non-mobile screens, wrap children with PhoneLayout
      return <PhoneLayout>{children}</PhoneLayout>;
    }
  };



