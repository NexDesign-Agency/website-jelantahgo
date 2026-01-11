export default function Stats() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#0F3D2E] to-[#134E3A]">
      <div className="container-custom">
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">
          Telah Dipercaya Selama Bertahun-tahun
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: '200K+',
              label: 'Liter Terkumpul'
            },
            {
              number: 'Rp 1.8M+',
              label: 'Dibayarkan ke Masyarakat'
            },
            {
              number: '1000+',
              label: 'Pelanggan Aktif'
            },
            {
              number: '5',
              label: 'Tahun Berpengalaman'
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-card border border-white/20 hover:bg-white/15 transition-smooth"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
