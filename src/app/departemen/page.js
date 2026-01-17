import Link from 'next/link';
import { departemenList } from '../../data/departemen'; //Import data yang tadi kita buat
import styles from './departemen.module.css';

export default function DepartemenList() {
    return (
        <div className="container">
            <header className={styles.header}>
                <h1>Dapartemen Pusat</h1>
                <p>Daftar Dapartemen Pusat Republik Federal Zirigan.</p>
            </header>

            <div className={styles.grid}>
                {departemenList.map((dept) => (
                    <Link href={`/departemen/${dept.slug}`} key={dept.slug} className={styles.card}>
                        <div className={styles.icon}>🏛️</div>
                        <div>
                            <h3>{dept.name}</h3>
                            <p>{dept.desc}</p>
                            <span className={styles.linkText}>Lihat Profil & Layanan &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}