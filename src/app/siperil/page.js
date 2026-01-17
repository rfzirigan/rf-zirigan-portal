"use client";
import styles from './siperil.module.css';

export default function SiperilPage() {
    // Data Dummy Orang Hilang
    const missingPersons = [
        { id: 1, nama: "Budi Zirigan", umur: "10 Tahun", lokasi: "Zirigan Selatan", tanggal: "12 Jan 2026" },
        { id: 2, nama: "Siti Rahma", umur: "65 Tahun", lokasi: "Ibukota", tanggal: "14 Jan 2026" },
        { id: 3, nama: "Anak Tidak Dikenal", umur: "± 5 Tahun", lokasi: "Pasar Raya", tanggal: "15 Jan 2026" },
    ];

    const handleSimulasiSubmit = (e) => {
        e.preventDefault();
        alert("Simulasi: Laporan berhasil dikirim ke Pusat Komando SIPERIL.");
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>SIPERIL</h1>
                <p>Sistem Peringatan & Informasi Darurat Sipil</p>
            </header>

            {/* Bagian 1: Daftar Orang Hilang */}
            <section>
                <h2 style={{ marginBottom: '20px', color: '#c0392b' }}>Daftar Pencarian Orang (DPO)</h2>
                <div className={styles.grid}>
                    {missingPersons.map((p) => (
                        <div key={p.id} className={styles.card}>
                            <div className={styles.badge}>HILANG</div>
                            <div className={styles.photoPlaceholder}>FOTO</div>
                            <div className={styles.details}>
                                <h3>{p.nama}</h3>
                                <p>Umur: {p.umur}</p>
                                <p>Hilang di: {p.lokasi}</p>
                                <p style={{marginTop:'10px', fontSize:'0.75rem', color:'red'}}>Sejak: {p.tanggal}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bagian 2: Formulir Pelaporan */}
            <section className={styles.formSection}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Lapor Orang Hilang</h2>
                <form onSubmit={handleSimulasiSubmit}>
                    <div className={styles.formGrid}>
                        <div className={styles.inputGroup}>
                            <label>Nama Terlapor (Korban)</label>
                            <input type="text" className={styles.input} required placeholder="Nama lengkap..." />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Umur</label>
                            <input type="text" className={styles.input} placeholder="Contoh: 17 Tahun" />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label>Lokasi Terakhir Dilihat</label>
                            <input type="text" className={styles.input} required placeholder="Nama jalan, gedung, atau kota..." />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label>Ciri-ciri Fisik / Pakaian Terakhir</label>
                            <textarea className={styles.textarea} rows="3" placeholder="Warna baju, tinggi badan, dll..."></textarea>
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label>Kontak Pelapor (Anda)</label>
                            <input type="text" className={styles.input} required placeholder="No. HP / WhatsApp" />
                        </div>
                    </div>
                    <button type="submit" className={styles.btnSubmit}>Kirim Laporan Darurat</button>
                </form>
            </section>
        </div>
    );
}