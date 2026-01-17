import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                {/* Judul Utama */}
                <h2 className={styles.title}>25 Tahun Zirigan</h2>

                {/* Subjudul / Deskripsi */}
                <p className={styles.subtitle}>
                    Bersatu, Berdaulat, Maju. Selamat datang di portal resmi Pemerintahan RFZ.
                    Akses kebijakan, layanan digital, dan perundang-undangan negara.
                </p>

                {/* Tombol Aksi (CTA) */}
                <div className={styles.ctaGroup}>
                    <Link href="/services" className={styles.btnPrimary}>
                        Layanan Publik
                    </Link>
                    <Link href="/kuhn" className={styles.btnOutline}>
                        Unduh KUHN (PDF)
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;