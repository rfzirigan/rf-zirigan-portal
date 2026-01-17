import Link from 'next/link';
import styles from './Navbar.module.css'; // Kita akan buat CSS-nya sebentar lagi

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                {/* Logo Area */}
                <Link href="/" className={styles.brand}>
                    <div className={styles.logoPlaceholder}>RFZ</div>
                    <div className={styles.brandText}>
                        <h1>Republik Federal Zirigan</h1>
                        <span>Portal Resmi Pemerintahan</span>
                    </div>
                </Link>

                {/* Menu Links */}
                <div className={styles.navLinks}>
                    <Link href="/">Beranda</Link>
                    <Link href="/about">Tentang RFZ</Link>
                    <Link href="/departemen">Dapartemen</Link>
                    <Link href="/kuhn">E-Legislative</Link>
                    <Link href="/contact">Hubungi Kami</Link>
                    
                    <Link href="/services" className={styles.btnServices}>Layanan Publik</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;