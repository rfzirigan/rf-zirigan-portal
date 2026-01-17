import styles from './about.module.css';

export default function About() {
    return (
        <div className="container">
            {/* Header */}
            <header className={styles.header}>
                <h1>Tentang Republik Federal Zirigan</h1>
                <p>Sejarah, Simbol, dan Struktur Pemerintahan</p>
            </header>

            {/* Sejarah */}
            <section className={styles.section}>
                <h2>Sejarah Singkat</h2>
                <p>
                    Didirikan 25 tahun yang lalu, Republik Federal Zirigan lahir dari semangat persatuan
                    antar wilayah yang menginginkan kedaulatan mandiri namun tetap bersatu dalam visi
                    Dasanagara. Perjalanan panjang dari masa transisi hingga menjadi negara federal modern
                    adalah bukti ketangguhan rakyat Zirigan.
                </p>
            </section>

            {/* Simbol Negara */}
            <section className={styles.section}>
                <h2>Lambang & Bendera</h2>
                <div className={styles.symbolGrid}>
                    <div className={styles.symbolCard}>
                        <div className={styles.flagPlaceholder}></div>
                        <h3>Sang Saka Zirigan</h3>
                        <p>Warna Hijau melambangkan kesuburan, Emas melambangkan kejayaan.</p>
                    </div>
                    <div className={styles.symbolCard}>
                        <div className={styles.emblemPlaceholder}>★</div>
                        <h3>Emblem Federal</h3>
                        <p>Bintang tujuh sudut melambangkan 7 negara bagian yang bersatu.</p>
                    </div>
                </div>
            </section>

            {/* Struktur Pemerintahan (Diagram Sederhana) */}
            <section className={styles.section}>
                <h2>Struktur Pemerintahan</h2>
                <div className={styles.orgChart}>
                    <div className={styles.boxTop}>Dewan Diraja / Presiden</div>
                    <div className={styles.line}></div>
                    <div className={styles.row}>
                        <div className={styles.box}>Mahkamah Konstitusi (MAKN)</div>
                        <div className={styles.box}>Dewan Federal (Legislatif)</div>
                        <div className={styles.box}>Kabinet Departemen (Eksekutif)</div>
                    </div>
                </div>
            </section>
        </div>
    );
}