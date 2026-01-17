import styles from './about.module.css';

export default function About() {
    return (
        <div className="container">
            {/* Header */}
            <header className={styles.header}>
                <h1>Tentang Republik Federal Zirigan</h1>
                <p>Sejarah, Simbol, dan Struktur Pemerintahan</p>
            </header>

            {/* Sejarah */}
            <section className={styles.section}>
                <h2>Sejarah Singkat</h2>
                <p>
                    Republik Federal Zirigan merupakan negara berdaulat yang berdiri pada 26 September 2000 sebagai
                    hasil dari proses politik, sosial, dan struktural yang berkembang secara bertahap di wilayah selatan
                    Sumatra. Sebelum kemerdekaan, wilayah Zirigan berada dalam yurisdiksi Negara Kesatuan Republik
                    Indonesia dan sejak lama menghadapi berbagai persoalan ketimpangan pembangunan, representasi politik
                    yang terbatas, serta perbedaan karakter sosial dan tata kelola lokal yang tidak sepenuhnya
                    terakomodasi oleh sistem pemerintahan pusat.
                    <br/>
                    Memasuki akhir dekade 1990-an, krisis nasional yang melanda Indonesia menyebabkan melemahnya kontrol
                    pemerintahan pusat dan terganggunya stabilitas administrasi di daerah. Dalam konteks tersebut, para
                    pemimpin lokal, tokoh adat, dan kelompok masyarakat sipil di wilayah Zirigan mulai membentuk forum
                    koordinasi regional guna menjaga ketertiban, mengelola sumber daya, dan memastikan keberlangsungan
                    pelayanan publik. Forum-forum ini kemudian berkembang menjadi struktur pemerintahan sementara yang
                    berfungsi secara de facto.
                    <br/>
                    Pada tanggal 26 September 2000, melalui deklarasi politik yang disertai pembentukan pemerintahan
                    federal sementara, wilayah Zirigan menyatakan pemisahan diri dan berdirinya negara baru yang
                    berdaulat. Proses transisi ini diiringi oleh konflik terbatas yang bersifat sporadis dan
                    terlokalisasi, namun tidak berkembang menjadi perang terbuka berskala luas. Dalam periode tersebut,
                    fokus utama pemerintahan sementara adalah pengamanan wilayah, konsolidasi administratif, dan
                    pencegahan disintegrasi internal.
                    <br/>
                    Bentuk republik federal dipilih sebagai dasar sistem kenegaraan Zirigan untuk mengakomodasi
                    keragaman struktur sosial, budaya, dan politik di wilayahnya. Sistem ini memungkinkan keberadaan
                    negara-negara bagian dengan karakter pemerintahan yang berbeda, termasuk demokratis dan monarkis,
                    dalam satu kerangka kedaulatan nasional yang utuh. Prinsip federalisme menjadi instrumen utama untuk
                    menjaga stabilitas, mencegah dominasi pusat, dan menghormati otoritas lokal.
                    <br/>
                    Pada fase awal kemerdekaan, kebijakan negara diarahkan pada pembangunan institusi dasar, penegakan
                    hukum, serta penyusunan kerangka konstitusional dan perundang-undangan. Penguatan legitimasi
                    internal dipandang lebih prioritas dibandingkan pengakuan internasional. Setelah struktur
                    pemerintahan dianggap stabil dan fungsional, Zirigan secara bertahap memproyeksikan diri sebagai
                    negara yang berdaulat, rasional, dan berorientasi pada tata kelola jangka panjang.
                    <br/>
                    Dengan demikian, Republik Federal Zirigan berdiri sebagai hasil dari proses historis yang ditandai
                    oleh penyesuaian terhadap realitas sosial dan politik, serta kebutuhan akan sistem pemerintahan yang
                    mampu menjamin stabilitas, keadilan, dan keberlanjutan negara.
                </p>
            </section>

            {/* Simbol Negara */}
            <section className={styles.section}>
                <h2>Lambang & Bendera</h2>
                <div className={styles.symbolGrid}>
                    <div className={styles.symbolCard}>
                            <img
                                src="/bendera-zirigan.jpg"
                                alt="Bendera Zirigan"
                                className={styles.symbolImage}
                            />
                            <h3>Sang Saka Zirigan</h3>
                            <p>Filosofi: Merah melambangkan keberanian, Emas melambangkan kejayaan.</p>
                    </div>
                    <div className={styles.symbolCard}>
                            <img
                                src="/logo-zirigan.png" // <-- GANTI DENGAN LAMBANG BESAR ATAU BENDERA
                                alt="Lambang Negara"
                                className={styles.symbolImage}
                            />
                            <h3>Geloplace Nagara</h3>
                            <p>Bunga Keusaka</p>
                    </div>
                </div>
            </section>

            {/* Struktur Pemerintahan (Diagram Sederhana) */}
            <section className={styles.section}>
                <h2>Struktur Pemerintahan</h2>
                <div className={styles.orgChart}>
                    <div className={styles.boxTop}>Dewan Diraja / Presiden</div>
                    <div className={styles.line}></div>
                    <div className={styles.row}>
                        <div className={styles.box}>Mahkamah Konstitusi (MAKN)</div>
                        <div className={styles.box}>Dewan Federal (Legislatif)</div>
                        <div className={styles.box}>Kabinet Departemen (Eksekutif)</div>
                    </div>
                </div>
            </section>
        </div>
    );
}