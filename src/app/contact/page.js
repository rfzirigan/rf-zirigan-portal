export default function Contact() {
    return (
        <div className="container" style={{ padding: '60px 20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Hubungi Pemerintah</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                {/* Info Kantor */}
                <div>
                    <h3>Kantor Pusat Pemerintahan</h3>
                    <p>Jl. Merdeka No. 1, Komplek Geloplace Nagara<br />Ibu Kota Zirigan, RFZ 10110</p>
                    <br />
                    <p>Email: humas@gov.zr<br />Telp: (021) 555-0100</p>
                </div>

                {/* Form */}
                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input type="text" placeholder="Nama Lengkap" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <input type="email" placeholder="Alamat Email" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <textarea rows="5" placeholder="Pesan atau Pengaduan Anda" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                    <button type="button" style={{ padding: '12px', background: 'var(--rfz-green)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </div>
    );
}