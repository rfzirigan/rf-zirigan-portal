import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            color: '#333'
        }}>
            <h1 style={{
                fontSize: '6rem',
                color: '#D4AF37', // Gold RFZ
                margin: 0,
                lineHeight: 1
            }}>404</h1>

            <h2 style={{
                color: '#1F8A4C', // Green RFZ
                marginBottom: '20px'
            }}>Halaman Tidak Ditemukan</h2>

            <p style={{ maxWidth: '500px', color: '#666', marginBottom: '40px' }}>
                Maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus,
                atau sedang dalam pemeliharaan Kementerian Komunikasi & Informatika RFZ.
            </p>

            <Link href="/" style={{
                padding: '12px 30px',
                backgroundColor: '#1F8A4C',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                transition: '0.3s'
            }}>
                Kembali ke Beranda
            </Link>
        </div>
    );
}