import styles from './pendidikan.module.css';

export default function PendidikanPage() {
    const universitas = [
        { rank: 1, nama: "Universitas Nasional Zirigan (UNAZ)", lokasi: "Ibukota", fokus: "Sains & Teknologi" },
        { rank: 2, nama: "Institut Pemerintahan Federal", lokasi: "Zirigan Utara", fokus: "Hukum & Politik" },
        { rank: 3, nama: "Universitas Malikussaleh Zirigan", lokasi: "Bireuen State", fokus: "Teknik & Agro" },
        { rank: 4, nama: "Politeknik Maritim Diraja", lokasi: "Pesisir Timur", fokus: "Kelautan" },
        { rank: 5, nama: "Sekolah Tinggi Seni & Budaya", lokasi: "Zirigan Selatan", fokus: "Seni & Humaniora" },
    ];

    return (
        <main>
            <section className={styles.hero}>
                <h1>Portal Pendidikan Nasional</h1>
                <p>Mencerdaskan Kehidupan Bangsa Menuju Zirigan Emas</p>
            </section>

            <div className={styles.container}>
                {/* Statistik Pendidikan */}
                <div className={styles.statsGrid}>
                    <div className={styles.statBox}>
                        <span className={styles.statNumber}>98%</span>
                        <span>Tingkat Literasi</span>
                    </div>
                    <div className={styles.statBox}>
                        <span className={styles.statNumber}>15+</span>
                        <span>Universitas Negeri</span>
                    </div>
                    <div className={styles.statBox}>
                        <span className={styles.statNumber}>Free</span>
                        <span>Wajib Belajar 12 Tahun</span>
                    </div>
                </div>

                {/* Tabel Universitas */}
                <h2 style={{ marginBottom: '20px', color: '#145e33' }}>Daftar Perguruan Tinggi Unggulan</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th width="10%">Peringkat</th>
                            <th>Nama Institusi</th>
                            <th>Lokasi</th>
                            <th>Fokus Studi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {universitas.map((uni) => (
                            <tr key={uni.rank}>
                                <td style={{ textAlign: 'center' }}>
                                    <span className={styles.rank}>{uni.rank}</span>
                                </td>
                                <td><strong>{uni.nama}</strong></td>
                                <td>{uni.lokasi}</td>
                                <td>{uni.fokus}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}