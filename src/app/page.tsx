export default function Home() {
  return (
    <>
      {/* Background Gradients */}
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      {/* Navigation */}
      <nav>
          <a href="#" className="logo">Uang <span>KeluargaKu</span></a>
          <ul className="nav-links">
              <li><a href="#fitur">Fitur Utama</a></li>
              <li><a href="#peran">Hak Akses</a></li>
          </ul>
          <a href="#coba" className="btn-primary">Mulai Sekarang</a>
      </nav>

      {/* Hero Section */}
      <header className="hero">
          <div className="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Transparansi finansial, keharmonisan keluarga.
          </div>
          <h1>Pantau Anggaran Keluarga Tanpa "Bocor"</h1>
          <p>Tinggalkan pencatatan manual dan Excel. Kelola pemasukan dan pengeluaran keluarga secara kolaboratif, real-time, dan praktis. Edukasi finansial sejak dini untuk anak Anda.</p>
          
          <div className="hero-cta">
              <a href="#coba" className="btn-primary">Catat Pengeluaran Pertama</a>
              <a href="#fitur" className="btn-secondary">Pelajari Fitur</a>
          </div>

          {/* Interactive Mockup (First Action: Quick Add Expense) */}
          <div className="mockup-container">
              <div className="mockup-header">
                  <div className="mockup-balance">
                      <p>Total Saldo Keluarga</p>
                      <h3>Rp 12.500.000</h3>
                  </div>
                  <div>
                      <span className="status-badge status-full">Tersinkronisasi</span>
                  </div>
              </div>
              
              <div className="mockup-body">
                  {/* Quick Add Form Mockup */}
                  <div className="mockup-card">
                      <h4>Catat Pengeluaran Cepat</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                          <input type="text" placeholder="Rp 0" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: '#fff', fontSize: '1.2rem', outline: 'none', width: '100%' }} />
                          <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-muted)', outline: 'none', width: '100%' }}>
                              <option>Belanja Rumah Tangga</option>
                              <option>Makanan dan Minuman</option>
                              <option>Pendidikan Anak</option>
                          </select>
                          <button className="quick-add-btn">Simpan Pengeluaran</button>
                      </div>
                  </div>

                  {/* Recent Transactions Mockup */}
                  <div className="mockup-card">
                      <h4>Transaksi Terbaru (Real-time)</h4>
                      <ul className="transaction-list">
                          <li className="transaction-item">
                              <div className="t-info">
                                  <div className="t-icon">🛒</div>
                                  <div className="t-details">
                                      <h5>Belanja Sayuran</h5>
                                      <p>Oleh: Istri • Hari ini, 08:30</p>
                                  </div>
                              </div>
                              <div className="t-amount expense">-Rp 150.000</div>
                          </li>
                          <li className="transaction-item">
                              <div className="t-info">
                                  <div className="t-icon">📚</div>
                                  <div className="t-details">
                                      <h5>Buku Les Anak</h5>
                                      <p>Oleh: Anak • Kemarin, 14:00</p>
                                  </div>
                              </div>
                              <div className="t-amount expense">-Rp 85.000</div>
                          </li>
                          <li className="transaction-item">
                              <div className="t-info">
                                  <div className="t-icon">💼</div>
                                  <div className="t-details">
                                      <h5>Gaji Bulanan</h5>
                                      <p>Oleh: Suami • 1 Jan 2026</p>
                                  </div>
                              </div>
                              <div className="t-amount income">+Rp 15.000.000</div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>

      {/* Features Section */}
      <section id="fitur" className="features">
          <h2 className="section-title">Fitur Andalan Keluarga</h2>
          <p className="section-subtitle">Semua yang Anda butuhkan untuk mencapai kebebasan finansial keluarga ada di sini.</p>

          <div className="grid">
              <div className="card">
                  <div className="icon">⚡</div>
                  <h3>Pencatatan Finansial Praktis</h3>
                  <p>Formulir entri cepat untuk mencatat pemasukan dan pengeluaran harian. Hanya butuh beberapa detik untuk mencatat setiap transaksi.</p>
              </div>
              <div className="card">
                  <div className="icon emerald">🎯</div>
                  <h3>Budgeting & Limit</h3>
                  <p>Tentukan batas anggaran bulanan atau mingguan per kategori. Dapatkan peringatan dini jika pengeluaran keluarga mulai mendekati limit.</p>
              </div>
              <div className="card">
                  <div className="icon">☁️</div>
                  <h3>Monitoring Real-time</h3>
                  <p>Sinkronisasi instan berbasis cloud. Transaksi yang diinput satu akun langsung tercermin di dasbor akun keluarga lainnya.</p>
              </div>
              <div className="card">
                  <div className="icon emerald">📊</div>
                  <h3>Laporan & Grafik Visual</h3>
                  <p>Analisis kesehatan keuangan keluarga Anda lebih mudah dengan visualisasi data otomatis seperti pie chart dan bar chart yang memukau.</p>
              </div>
              <div className="card">
                  <div className="icon">⚙️</div>
                  <h3>Manajemen Kategori Fleksibel</h3>
                  <p>Edit, tambah, atau sembunyikan kategori dan sub-kategori sesuai kebutuhan spesifik keluarga Anda tanpa batasan.</p>
              </div>
          </div>
      </section>

      {/* Roles Section */}
      <section id="peran" className="roles">
          <h2 className="section-title">Sistem Multi-Akun (Role-Based)</h2>
          <p className="section-subtitle">Privasi dan transparansi terjaga. Hak akses diatur secara ketat sesuai peran anggota keluarga.</p>
          
          <div className="role-table-wrapper">
              <table>
                  <thead>
                      <tr>
                          <th>Peran Pengguna</th>
                          <th>Akses Data Sendiri</th>
                          <th>Akses Data Pasangan</th>
                          <th>Akses Data Anak</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><strong>👨 Suami</strong></td>
                          <td><span className="status-badge status-full">Baca, Tulis, Edit, Hapus</span></td>
                          <td><span className="status-badge status-read">Baca (View Only)</span></td>
                          <td><span className="status-badge status-read">Baca (View Only)</span></td>
                      </tr>
                      <tr>
                          <td><strong>👩 Istri</strong></td>
                          <td><span className="status-badge status-full">Baca, Tulis, Edit, Hapus</span></td>
                          <td><span className="status-badge status-read">Baca (View Only)</span></td>
                          <td><span className="status-badge status-read">Baca (View Only)</span></td>
                      </tr>
                      <tr>
                          <td><strong>🧒 Anak</strong></td>
                          <td><span className="status-badge status-full">Baca, Tulis, Edit, Hapus</span></td>
                          <td><span className="status-badge status-none">Tidak Ada Akses</span></td>
                          <td><span className="status-badge status-none">Tidak Relevan</span></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </section>

      {/* Call to Action */}
      <section id="coba" className="cta-section">
          <div className="cta-box">
              <h2>Siap Mengelola Keuangan Bersama?</h2>
              <p>Bergabunglah dengan ribuan keluarga lain yang telah merasakan ketenangan finansial.</p>
              <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>Buat Akun Keluarga Sekarang</button>
          </div>
      </section>

      {/* Footer */}
      <footer>
          <div className="footer-logo">
              <a href="#" className="logo" style={{ fontSize: '1.2rem' }}>Uang <span>KeluargaKu</span></a>
          </div>
          <p>&copy; 2026 Uang KeluargaKu. Aplikasi pencatat keuangan kolaboratif.</p>
      </footer>
    </>
  );
}
