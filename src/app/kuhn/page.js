"use client";

import { useState, useEffect } from 'react';
import styles from './kuhn.module.css';

export default function KuhnPage() {
    // Masukkan URL Web App Google Script kamu di sini
    const API_URL = "https://script.google.com/macros/s/AKfycbyDDMvTVMFEaq2fR8kNY1VL0P5tT5wDgAsgogW9k0AHaSL_EKZlRTMpNYrCa0Q8E5NCFw/exec";

    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    // State Filter
    const [searchTerm, setSearchTerm] = useState("");
    const [filterYear, setFilterYear] = useState("Semua");

    // 1. Ambil Data Otomatis saat halaman dibuka
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setDocuments(data);
                setLoading(false);
            } catch (error) {
                console.error("Gagal mengambil data:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // 2. Logika Filter
    const filteredDocs = documents.filter((doc) => {
        // Filter Teks (Nama File)
        const matchText = doc.tentang.toLowerCase().includes(searchTerm.toLowerCase());
        // Filter Tahun (Ubah angka tahun jadi string dulu biar aman)
        const matchYear = filterYear === "Semua" ? true : String(doc.tahun) === filterYear;

        return matchText && matchYear;
    });

    return (
        <div className="container">
            <header className={styles.header}>
                <h1>E-Legislative (KUHN)</h1>
                <p>Database Hukum Otomatis - Terhubung ke Cloud Storage</p>
            </header>

            <div className={styles.layout}>
                {/* SIDEBAR */}
                <aside className={styles.sidebar}>
                    <div className={styles.filterBox}>
                        <h3>🔍 Cari Dokumen</h3>
                        <input
                            type="text"
                            placeholder="Cari nama dokumen..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className={styles.filterBox}>
                        <h3>📅 Tahun Upload</h3>
                        <select
                            className={styles.selectInput}
                            value={filterYear}
                            onChange={(e) => setFilterYear(e.target.value)}
                        >
                            <option value="Semua">Semua Tahun</option>
                            <option value="2026">2026</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className={styles.main}>
                    <div className={styles.resultsInfo}>
                        Menampilkan <strong>{filteredDocs.length}</strong> dokumen dari Google Drive.
                    </div>

                    {loading ? (
                        <p style={{textAlign:'center', padding:'20px'}}>Sedang menghubungkan ke Arsip Negara...</p>
                    ) : filteredDocs.length > 0 ? (
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                <tr>
                                    <th>Nama Dokumen / Tentang</th>
                                    <th width="15%">Tahun</th>
                                    <th width="15%">Aksi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredDocs.map((doc) => (
                                    <tr key={doc.id}>
                                        <td className={styles.colTentang}>
                                            <strong>{doc.tentang}</strong>
                                            <div style={{fontSize:'0.8rem', color:'#888', marginTop:'4px'}}>
                                                ID: {doc.id.substring(0,8)}...
                                            </div>
                                        </td>
                                        <td>{doc.tahun}</td>
                                        <td>
                                            <a href={doc.driveLink} target="_blank" className={styles.btnDownload}>
                                                Buka PDF 📄
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Belum ada dokumen yang ditemukan.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}