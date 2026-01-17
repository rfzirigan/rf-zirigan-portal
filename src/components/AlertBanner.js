import styles from './AlertBanner.module.css';

const AlertBanner = () => {
    return (
        <div className={styles.alertBanner}>
            <div className="container">
                <span className={styles.badge}>SIPERIL INFO</span>
                <span className={styles.message}>
          Status Siaga: Hujan lebat diprediksi di wilayah Zirigan Selatan. Warga dimohon waspada.
        </span>
            </div>
        </div>
    );
};

export default AlertBanner;