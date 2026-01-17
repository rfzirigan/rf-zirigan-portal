import Link from 'next/link';
import styles from './news.module.css';

// URL Google Script kamu
const API_URL = "https://script.google.com/macros/s/AKfycbzmEhbXbYYBjUJV6gpzXhw2y7OcVOyXMMCgwsIEsXgrG-fRPfgVXPbx0-dv_pi1-g3Z/exec";

async function getNews() {
    try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Gagal mengambil data');
        }
        return res.json();
    } catch (error) {
        console.error("Error Fetching:", error);
        return [];
    }
}

export default async function NewsIndex() {
    const news = await getNews();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Newsroom Pemerintah</h1>
                <p>Kabar terkini dari seluruh penjuru Republik Federal Zirigan.</p>
            </header>

            {news.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666' }}>
                    Belum ada berita yang dipublikasikan.
                </p>
            ) : (
                <div className={styles.grid}>
                    {news.map((item) => {
                        // FIX 1: Pastikan ada slug. Kalau script belum generate slug, kita pakai ID saja sementara.
                        const linkSlug = item.slug ? item.slug : item.id;

                        return (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    {/* FIX 2: Cek apakah ada foto. Jika kosong, tampilkan Placeholder */}
                                    {item.foto && item.foto !== "" ? (
                                        <img src={item.foto} alt={item.judul} />
                                    ) : (
                                        <div style={{
                                            width:'100%', height:'100%', background:'#e0e0e0',
                                            display:'flex', alignItems:'center', justifyContent:'center',
                                            color:'#888', fontWeight:'bold'
                                        }}>
                                            RFZ News
                                        </div>
                                    )}
                                </div>

                                <div className={styles.cardContent}>
                                    <div className={styles.meta}>
                                        <span className={styles.category}>{item.kategori || "Umum"}</span>
                                        <span className={styles.date}>
                      {item.tanggal ? new Date(item.tanggal).toLocaleDateString() : "-"}
                    </span>
                                    </div>

                                    <h3 className={styles.title}>
                                        <Link href={`/news/${linkSlug}`}>
                                            {item.judul}
                                        </Link>
                                    </h3>

                                    <Link href={`/news/${linkSlug}`} className={styles.readMore}>
                                        Baca Selengkapnya &rarr;
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}