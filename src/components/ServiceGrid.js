import Link from 'next/link';
import styles from './ServiceGrid.module.css';

const ServiceGrid = () => {
    // Data dummy layanan
    const services = [
        { title: "📢 SIPERIL", desc: "Sistem Peringatan & Info Darurat", link: "/siperil" },
        { title: "🎓 Portal Pendidikan", desc: "List Universitas & Statistik", link: "/pendidikan" },
        { title: "⚖️ E-Legislative", desc: "Akses Dokumen UU & Hukum", link: "/kuhn" },
        { title: "💰 E-Budgeting", desc: "Transparansi Anggaran Negara", link: "/budget" },
    ];

    return (
        <section className={styles.servicesSection}>
            <div className={`container ${styles.gridContainer}`}>
                {services.map((item, index) => (
                    <Link href={item.link} key={index} className={styles.card}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <span className={styles.arrow}>Akses Layanan &rarr;</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ServiceGrid;