import Link from 'next/link';
import styles from './NewsPreview.module.css';

const NewsPreview = () => {
    const newsItems = [
        {
            id: 1,
            date: "14 Jan 2026",
            category: "Pembangunan",
            title: "Presiden Resmikan Jalan Tol Trans-Zirigan Tahap I",
            excerpt: "Pembangunan infrastruktur penghubung antar negara bagian telah mencapai 90% dan siap beroperasi bulan depan.",
            image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            date: "12 Jan 2026",
            category: "Diplomasi",
            title: "Kunjungan Kenegaraan Dewan Federal ke Asia Tenggara",
            excerpt: "Memperkuat hubungan bilateral dan kerjasama ekonomi digital dengan negara-negara tetangga.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            date: "10 Jan 2026",
            category: "Edukasi",
            title: "Kurikulum Digital Nasional Resmi Diterapkan",
            excerpt: "Kementerian Pendidikan meluncurkan platform OPAR terbaru untuk mendukung pembelajaran hibrida.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Berita Terkini</h2>
                    <Link href="/news" className={styles.viewAll}>Lihat Semua &rarr;</Link>
                </div>

                <div className={styles.grid}>
                    {newsItems.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* Menggunakan img biasa dulu agar mudah */}
                                <img src={item.image} alt={item.title} className={styles.image} />
                                <span className={styles.category}>{item.category}</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{item.date}</span>
                                <h3 className={styles.title}>
                                    <Link href={`/news/${item.id}`}>{item.title}</Link>
                                </h3>
                                <p className={styles.excerpt}>{item.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsPreview;