"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../news.module.css'; // Pastikan import CSS ini benar

export default function NewsDetail({ params }) {
    // GANTI DENGAN URL SCRIPT GOOGLE SHEETS KAMU YANG SUDAH DEPLOY "ANYONE"
    const API_URL = "https://script.google.com/macros/s/AKfycbzmEhbXbYYBjUJV6gpzXhw2y7OcVOyXMMCgwsIEsXgrG-fRPfgVXPbx0-dv_pi1-g3Z/exec";

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [unwrappedParams, setUnwrappedParams] = useState(null);

    // 1. Unwrap params (Aturan Next.js 15)
    useEffect(() => {
        params.then(res => setUnwrappedParams(res));
    }, [params]);

    // 2. Fetch data
    useEffect(() => {
        if (!unwrappedParams) return;

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                // Cari berita yang slug-nya cocok (atau ID jika slug belum ada)
                const found = data.find(item =>
                    item.slug === unwrappedParams.slug || item.id.toString() === unwrappedParams.slug
                );
                setArticle(found);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, [unwrappedParams]);

    if (loading || !unwrappedParams) return <div className={styles.container} style={{textAlign:'center'}}>Memuat Artikel...</div>;
    if (!article) return <div className={styles.container} style={{textAlign:'center'}}>Berita tidak ditemukan.</div>;

    return (
        <article className={styles.detailContainer}>
            <Link href="/news" className={styles.backLink}>&larr; Kembali ke Newsroom</Link>

            <header className={styles.detailHeader}>
                <span className={styles.category}>{article.kategori || "Berita"}</span>
                <h1 className={styles.detailTitle}>{article.judul}</h1>
                <p className={styles.date}>
                    Diposting pada {article.tanggal ? new Date(article.tanggal).toLocaleDateString() : "-"}
                </p>
            </header>

            {/* --- BAGIAN PERBAIKAN --- */}
            {/* Cek dulu: Apakah article.foto ada isinya? */}
            {article.foto && article.foto !== "" ? (
                <img src={article.foto} alt={article.judul} className={styles.detailImage} />
            ) : null}
            {/* Kalau kosong, img tidak dirender sama sekali (null), jadi tidak error */}
            {/* ------------------------ */}

            <div className={styles.articleBody}>
                <div dangerouslySetInnerHTML={{ __html: article.isi }} />
            </div>
        </article>
    );
}