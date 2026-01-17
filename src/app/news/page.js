import Link from 'next/link';
import styles from './news.module.css';

// URL Google Script (Sama persis dengan yang ada di halaman news/page.js)
const API_URL = "https://script.google.com/macros/s/AKfycbzmEhbXbYYBjUJV6gpzXhw2y7OcVOyXMMCgwsIEsXgrG-fRPfgVXPbx0-dv_pi1-g3Z/exec";

// Fungsi untuk ambil data (Sama seperti di news page)
async function getNews() {
    try {
        const res = await fetch(API_URL, { next: { revalidate: 60 } }); // Update tiap 60 detik
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
    // 1. Ambil semua berita
    const allNews = await getNews();

    // 2. Ambil cuma 3 berita pertama untuk halaman depan
    const latestNews = allNews.slice(0, 3);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Berita Terkini</h2>
                    <Link href="/news" className={styles.viewAll}>Lihat Semua &rarr;</Link>
                </div>

                {latestNews.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#888' }}>Sedang memuat kabar terbaru...</p>
                ) : (
                    <div className={styles.grid}>
                        {latestNews.map((item) => {
                            // Logic Slug & Foto (Sama seperti di halaman News)
                            const linkSlug = item.slug ? item.slug : item.id;

                            return (
                                <article key={item.id} className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        {/* Cek apakah ada foto */}
                                        {item.foto && item.foto !== "" ? (
                                            <img src={item.foto} alt={item.judul} className={styles.image} />
                                        ) : (
                                            <div style={{
                                                width:'100%', height:'100%', background:'#e0e0e0',
                                                display:'flex', alignItems:'center', justifyContent:'center',
                                                color:'#888', fontWeight:'bold'
                                            }}>
                                                RFZ News
                                            </div>
                                        )}
                                        <span className={styles.category}>{item.kategori || "Info"}</span>
                                    </div>

                                    <div className={styles.content}>
                                        <span className={styles.date}>
                                            {item.tanggal ? new Date(item.tanggal).toLocaleDateString() : "-"}
                                        </span>
                                        <h3 className={styles.title}>
                                            <Link href={`/news/${linkSlug}`}>{item.judul}</Link>
                                        </h3>
                                        {/* Excerpt dihapus karena data sheet biasanya isi full html,
                                            kita ganti jadi tombol baca selengkapnya saja biar rapi */}
                                        <Link href={`/news/${linkSlug}`} style={{
                                            color: '#1F8A4C',
                                            fontWeight: '600',
                                            marginTop: '10px',
                                            display: 'inline-block',
                                            fontSize: '0.9rem'
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