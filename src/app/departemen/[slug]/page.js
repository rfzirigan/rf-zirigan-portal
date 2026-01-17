import { departemenList } from '../../../data/departemen';
import styles from './detail.module.css';

// PERUBAHAN 1: Tambahkan kata 'async' di depan function
export default async function DepartemenDetail({ params }) {

    // PERUBAHAN 2: Tambahkan 'await' sebelum params
    // Ini wajib di Next.js versi terbaru agar datanya terbaca
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // 2. Cari data yang cocok
    const dept = departemenList.find((item) => item.slug === slug);

    // DEBUG: Jika data tidak ketemu
    if (!dept) {
        return (
            <div className="container" style={{ padding: '100px', textAlign: 'center' }}>
                <h2 style={{ color: 'red' }}>Error: Data Tidak Ditemukan</h2>
                <p>Sistem mencari slug: <strong>"{slug}"</strong></p>
                <p>Tapi tidak ada kecocokan di database.</p>
                <br />
                <a href="/departemen" style={{ color: 'blue', textDecoration: 'underline' }}>
                    &larr; Kembali ke Daftar
                </a>
            </div>
        );
    }

    // 3. Jika ketemu, tampilkan isinya
    return (
        <main>
            {/* Hero Header Warna Hijau */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{dept.name}</h1>
                    <p className={styles.minister}>Menteri: <strong>{dept.minister}</strong></p>
                </div>
            </section>

            <div className="container">
                <div className={styles.contentGrid}>
                    {/* Kolom Kiri: Konten Utama */}
                    <div className={styles.mainContent}>
                        <section>
                            <h2>Visi & Misi</h2>
                            <p>{dept.visi}</p>
                        </section>

                        <section>
                            <h2>Tentang {dept.name}</h2>
                            <p>{dept.desc}</p>
                            <p>
                                Dapartemen ini bertanggung jawab penuh kepada Dewan Federal dan Presiden
                                untuk memastikan pelayanan publik berjalan optimal, transparan, dan
                                sesuai dengan amanat Dasanagara.
                            </p>
                        </section>
                    </div>

                    {/* Kolom Kanan: Sidebar */}
                    <aside className={styles.sidebar}>
                        <h3>Layanan Digital</h3>
                        <ul className={styles.serviceList}>
                            <li><a href="#">📝 Permohonan Izin</a></li>
                            <li><a href="#">📊 Data & Statistik</a></li>
                            <li><a href="#">📢 Pengaduan Masyarakat</a></li>
                        </ul>
                    </aside>
                </div>
            </div>
        </main>
    );
}