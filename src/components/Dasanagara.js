import styles from './Dasanagara.module.css';

const Dasanagara = () => {
    const pillars = [
        { num: "I", text: "Kepenge-Tuhanan" },
        { num: "II", text: "Memanusiakan Yang Abad" },
        { num: "III", text: "Berkenegaraan Sosial" },
        { num: "IV", text: "Kepemimpinan Adil & Hikmat" },
        { num: "V", text: "Kesaksian Rakyat Zirigan" }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Dasanagara Zirigan</h2>
                    <p>Pedoman kebangsaan dan filosofi dasar bernegara.</p>
                </div>

                <div className={styles.grid}>
                    {pillars.map((pillar, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.number}>{pillar.num}</div>
                            <div className={styles.text}>{pillar.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dasanagara;