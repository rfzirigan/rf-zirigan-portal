export default function PrivacyPolicy() {
    return (
        <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
            <h1 style={{ color: '#145e33', marginBottom: '30px', borderBottom: '2px solid #D4AF37', paddingBottom: '15px' }}>
                Kebijakan Privasi & Perlindungan Data
            </h1>

            <div style={{ lineHeight: '1.8', color: '#444' }}>
                <p><strong>Terakhir Diperbarui:</strong> Januari 2026</p>
                <br />
                <p>
                    Pemerintah Republik Federal Zirigan (selanjutnya disebut "Kami") berkomitmen untuk melindungi privasi
                    dan keamanan data pribadi Anda saat mengakses portal resmi pemerintahan (gov.zr).
                    Kebijakan ini disusun berdasarkan <strong>UU No. 12 Tahun 2024 tentang Perlindungan Data Pribadi (PDP-RFZ)</strong>.
                </p>

                <h3 style={{ color: '#1F8A4C', marginTop: '30px' }}>1. Pengumpulan Data</h3>
                <p>
                    Kami hanya mengumpulkan data yang Anda berikan secara sukarela, seperti saat mengisi formulir pengaduan
                    atau layanan SIPERIL. Data teknis (IP Address, Browser) mungkin dicatat otomatis untuk keperluan keamanan siber negara.
                </p>

                <h3 style={{ color: '#1F8A4C', marginTop: '30px' }}>2. Penggunaan Data</h3>
                <p>
                    Data Anda digunakan semata-mata untuk pelayanan publik. Kami tidak akan menjual, menyewakan,
                    atau membagikan data Anda kepada pihak swasta tanpa persetujuan, kecuali diwajibkan oleh perintah Pengadilan Federal.
                </p>

                <h3 style={{ color: '#1F8A4C', marginTop: '30px' }}>3. Keamanan</h3>
                <p>
                    Portal ini menggunakan enkripsi SSL standar militer untuk melindungi transmisi data.
                    Pusat Data Nasional Zirigan dijaga dengan protokol keamanan berlapis.
                </p>
            </div>
        </div>
    );
}