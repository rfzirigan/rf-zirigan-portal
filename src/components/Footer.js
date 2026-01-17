import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                {/* Kolom 1: Identitas */}
                <div className={styles.col}>
                    <h3 className={styles.brand}>Republik Federal Zirigan</h3>
                    <p className={styles.address}>
                        Gedung Sekretariat Negara, Ibu Kota Zirigan.<br />
                        Melayani dengan integritas dan transparansi.
                    </p>
                    <div className={styles.emergency}>
                        Call Center Darurat: <strong>112</strong>
                    </div>
                </div>

                {/* Kolom 2: Link */}
                <div className={styles.col}>
                    <h4>Pemerintahan</h4>
                    <ul className={styles.links}>
                        <li><a href="#">Dewan Federal</a></li>
                        <li><a href="#">Mahkamah Konstitusi (MAKN)</a></li>
                        <li><a href="#">Arsip Nasional</a></li>
                        <li><a href="#">Karir & Rekrutmen</a></li>
                    </ul>
                </div>

                {/* Kolom 3: Social / Info */}
                <div className={styles.col}>
                    <h4>Media Sosial</h4>
                    <p className={styles.textSmall}>
                        Ikuti perkembangan terbaru melalui kanal resmi pemerintah RFZ.
                    </p>
                    {/* Nanti bisa tambah ikon sosmed disini */}
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className="container">
                    &copy; 2026 Pemerintah Republik Federal Zirigan. Dilindungi Undang-Undang.
                </div>
            </div>
        </footer>
    );
};

export default Footer;