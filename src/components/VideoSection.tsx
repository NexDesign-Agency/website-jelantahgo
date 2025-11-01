'use client'

export default function VideoSection() {
  const loadVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    if (container.getAttribute('data-loaded')) return
    container.setAttribute('data-loaded', 'true')
    
    const iframe = document.createElement('iframe')
    iframe.src = 'https://www.youtube.com/embed/6DCi9gw9Zy8?autoplay=1&rel=0'
    iframe.allow = 'autoplay; encrypted-media'
    iframe.allowFullscreen = true
    iframe.title = 'Video Cara Kerja JelantahGO'
    iframe.className = 'absolute top-0 left-0 w-full h-full'
    
    container.innerHTML = ''
    container.appendChild(iframe)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E8F0E3] text-[#0F3D2E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            VIDEO
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E] mb-4">
            Lihat Cara Kami Bekerja
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tonton video singkat ini untuk melihat bagaimana JelantahGO membantu masyarakat dan lingkungan.
          </p>
        </div>

        <div className="max-w-[630px] mx-auto">
          <div 
            onClick={loadVideo}
            className="relative rounded-card-lg overflow-hidden shadow-layered cursor-pointer hover:shadow-soft-xl transition-smooth"
            style={{ paddingBottom: '56.25%', height: 0 }}
          >
            <img 
              src="https://res.cloudinary.com/dknswj9co/image/upload/w_800,q_auto,f_auto/v1761001505/thumbnail_video_wp67dr.webp"
              alt="Thumbnail video cara kerja JelantahGO: penjemputan minyak jelantah gratis dan bayar tunai"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-soft-lg hover:scale-110 transition-smooth">
                <div className="w-0 h-0 border-l-[20px] border-l-[#0F3D2E] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
