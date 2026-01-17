import Link from 'next/link';
import styles from './NewsPreview.module.css';

// URL Google Script (Sama persis dengan yang ada di halaman news/page.js)
const API_URL = "https://script.google.com/macros/s/AKfycbzmEhbXbYYBjUJV6gpzXhw2y7OcVOyXMMCgwsIEsXgrG-fRPfgVXPbx0-dv_pi1-g3Z/exec";

// Fungsi untuk ambil data (Server Side Fetching)
async function getNews() {
    try {
        // next: { revalidate: 60 } artinya data di-update tiap 60 detik (biar ga berat loading terus)
        const res = await fetch(API_URL, { next: { revalidate: 60 } });
        if (!res.ok) {
            throw new Error('Gagal mengambil data');
        }
        return res.json();
    } catch (error) {
        console.error("Error Fetching:", error);
        return [];
    }
}

const NewsPreview = async () => {
    // 1. Ambil semua berita dari Google Sheet
    const allNews = await getNews();

    // 2. Ambil cuma 3 berita pertama (terbaru) untuk halaman depan
    const latestNews = allNews.slice(0, 3);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Berita Terkini</h2>
                    <Link href="/news" className={styles.viewAll}>Lihat Semua &rarr;</Link>
                </div>

                {/* Tampilkan Loading/Kosong jika data belum masuk */}
                {latestNews.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>
                        Sedang memuat kabar terbaru dari Zirigan...
                    </p>
                ) : (
                    <div className={styles.grid}>
                        {latestNews.map((item) => {
                            // Logic Slug: Pakai slug dari sheet, kalau kosong pakai ID
                            const linkSlug = item.slug ? item.slug : item.id;

                            return (
                                <article key={item.id} className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        {/* Cek apakah ada foto. Jika kosong, tampilkan Placeholder Abu-abu */}
                                        {item.foto && item.foto !== "" ? (
                                            <img src={item.foto} alt={item.judul} className={styles.image} />
                                        ) : (
                                            <div style={{
                                                width: '100%', height: '200px', background: '#e0e0e0',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#888', fontWeight: 'bold'
                                            }}>
                                                RFZ News
                                            </div>
                                        )}
                                        <span className={styles.category}>{item.kategori || "Info"}</span>
                                    </div>

                                    <div className={styles.content}>
                    <span className={styles.date}>
                      {item.tanggal ? new Date(item.tanggal).toLocaleDateString('id-ID', {
                          day: 'numeric', month: 'short', year: 'numeric'
                      }) : "-"}
                    </span>

                                        <h3 className={styles.title}>
                                            <Link href={`/news/${linkSlug}`}>
                                                {item.judul}
                                            </Link>
                                        </h3>

                                        {/* Tombol Baca Selengkapnya */}
                                        <Link href={`/news/${linkSlug}`} style={{
                                            display: 'inline-block',
                                            marginTop: '10px',
                                            color: '#1F8A4C',
                                            fontWeight: '600',
                                            fontSize: '0.9rem',
                                            textDecoration: 'none'
                                        }}>
                                            Baca Selengkapnya &rarr;
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsPreview;