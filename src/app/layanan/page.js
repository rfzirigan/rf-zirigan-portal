import styles from './layanan.module.css';
import { dataLayanan } from '../../data/layanan';

export default function LayananPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Layanan Publik Terpadu</h1>
                <p>Katalog resmi pelayanan negara untuk kesejahteraan rakyat Republik Federal Zirigan.</p>
            </header>

            {/* Looping per Kategori Utama (I - IX) */}
            {dataLayanan.map((kategori, index) => (
                <section key={index} className={styles.categoryBlock}>

                    <h2 className={styles.categoryTitle}>{kategori.kategori}</h2>
                    <p className={styles.categoryDesc}>{kategori.deskripsi}</p>

                    {/* Jika ada Quote/Catatan Keras, tampilkan di sini */}
                    {kategori.quote && (
                        <div className={styles.quoteBox}>
                            <span className={styles.quoteIcon}>⚠️</span>
                            <p>"{kategori.quote}"</p>
                        </div>
                    )}

                    {/* Grid Item Layanan */}
                    <div className={styles.grid}>
                        {kategori.items.map((item, idx) => (
                            <div key={idx} className={styles.card}>
                                <h3>{item.judul}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </section>
            ))}

            {/* Footer Note */}
            <div style={{ textAlign: 'center', marginTop: '60px', color: '#888', fontSize: '0.9rem' }}>
                <p>Tidak menemukan layanan yang Anda cari?</p>
                <p>Hubungi <a href="/contact" style={{ color: '#1F8A4C', fontWeight: 'bold' }}>Pusat Bantuan</a> atau gunakan fitur pencarian.</p>
            </div>
        </div>
    );
}