import Link from 'next/link';
import { dataLembaga } from '../../data/lembaga'; // Import data baru
import styles from './lembaga.module.css'; // Kita buat CSS baru nanti

export default function LembagaPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Lembaga Negara Republik Federal Zirigan</h1>
                <p>Struktur organisasi pemerintahan dan institusi kenegaraan resmi.</p>
            </header>

            <div className={styles.contentWrapper}>
                {dataLembaga.map((kelompok) => (
                    <section key={kelompok.kategori} className={styles.categorySection}>
                        <div className={styles.categoryHeader}>
                            <h2>{kelompok.kategori}</h2>
                            <p>{kelompok.deskripsi}</p>
                        </div>

                        <div className={styles.grid}>
                            {kelompok.items.map((item) => (
                                <Link href={`/lembaga/${item.slug}`} key={item.id} className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        {/* Placeholder Icon Gedung */}
                                        🏛️
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>{item.nama}</h3>
                                        <span className={styles.leader}>Pimpinan: {item.pimpinan}</span>
                                    </div>
                                    <div className={styles.arrow}>&rarr;</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}