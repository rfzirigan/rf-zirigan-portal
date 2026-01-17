import Link from 'next/link';
import { getAllLembaga } from '../../../data/lembaga'; // Import fungsi helper
import { notFound } from 'next/navigation';
import styles from './detaillembaga.module.css';

export default function LembagaDetail({ params }) {
    // 1. Ambil semua data (diflatkan)
    const allItems = getAllLembaga();

    // 2. Cari yang slug-nya cocok
    const lembaga = allItems.find((item) => item.slug === params.slug);

    if (!lembaga) {
        notFound(); // Redirect ke 404 kalau ga ketemu
    }

    return (
        <div className="container" style={{padding: '60px 20px', maxWidth: '800px', margin:'0 auto'}}>
            {/* ... Tampilan Detail Lembaga (Copy dari file lama, sesuaikan variabelnya) ... */}
            <Link href="/lembaga">&larr; Kembali ke Daftar Lembaga</Link>

            <h1 style={{marginTop:'20px', fontSize:'2.5rem', color:'#145e33'}}>{lembaga.nama}</h1>

            <div style={{background:'#f5f5f5', padding:'20px', borderRadius:'8px', margin:'30px 0'}}>
                <p><strong>Pimpinan:</strong> {lembaga.pimpinan}</p>
                <p><strong>Visi:</strong> {lembaga.visi}</p>
            </div>

            <h3>Tugas & Fungsi Utama</h3>
            <p style={{lineHeight:'1.6'}}>{lembaga.tugas}</p>
        </div>
    );
}