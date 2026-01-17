import Hero from '../components/Hero'; // <--- Pastikan baris ini ada
import ServiceGrid from '../components/ServiceGrid';
import Dasanagara from '../components/Dasanagara';
import NewsPreview from '../components/NewsPreview';

export default function Home() {
    return (
        <main>
            <Hero /> {/* <--- Pastikan komponen ini dipanggil di sini */}
            <ServiceGrid/>
            <NewsPreview/>
            <Dasanagara/>

            <div className="container" style={{ padding: '50px 20px', textAlign: 'center', opacity: 0.6 }}>
                <p>— Konten lainnya akan ditambahkan di sini —</p>
            </div>
        </main>
    );
}