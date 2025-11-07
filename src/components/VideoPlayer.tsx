'use client'

export default function VideoPlayer() {
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
  )
}

