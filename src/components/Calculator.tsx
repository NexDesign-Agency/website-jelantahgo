'use client'

import { useState } from 'react'
import { Calculator as CalcIcon } from 'lucide-react'

export default function Calculator() {
  const [liters, setLiters] = useState(0)
  const [income, setIncome] = useState(0)

  const calculateIncome = (value: number) => {
    let pricePerLiter = 0

    if (value >= 200) {
      pricePerLiter = 7500
    } else if (value >= 100) {
      pricePerLiter = 7500
    } else if (value >= 40) {
      pricePerLiter = 6500
    } else {
      pricePerLiter = 0
    }

    return value * pricePerLiter
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0
    setLiters(value)
    setIncome(calculateIncome(value))
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="card-premium max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#134E3A] p-3 rounded-card shadow-soft">
          <CalcIcon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-[#0F3D2E]">Kalkulator Harga Jelantah</h2>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        Hitung potensi pendapatan minyak bekas Anda:
      </p>
      
      <div className="mb-6">
        <label htmlFor="jelantah-liters" className="block text-sm font-semibold text-[#0F3D2E] mb-2">
          Jumlah Jelantah (Liter)
        </label>
        <input
          id="jelantah-liters"
          type="number"
          value={liters || ''}
          onChange={handleChange}
          placeholder="0"
          min="0"
          aria-label="Masukkan jumlah liter minyak jelantah"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-card focus:border-[#0F3D2E] focus:outline-none text-lg transition-smooth"
        />
      </div>
      
      <div className="bg-gradient-to-br from-[#E8F0E3] to-[#D9E3D3] p-6 rounded-card-lg border border-[#D9E3D3] mb-6">
        <div className="text-sm font-medium text-[#0F3D2E] mb-2">Estimasi Penghasilan:</div>
        <div className={`text-4xl font-bold mb-3 ${liters >= 40 ? 'text-[#0F3D2E]' : 'text-red-500'}`}>
          {formatCurrency(income)}
        </div>
        {liters >= 40 ? (
          <div className="flex items-center gap-2 text-sm text-[#0F3D2E] font-medium">
            <span className="inline-block w-2 h-2 bg-[#0F3D2E] rounded-full"></span>
            Memenuhi syarat untuk penjemputan gratis
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            Minimum 40 liter untuk penjemputan gratis
          </div>
        )}
      </div>
      
    </div>
  )
}
