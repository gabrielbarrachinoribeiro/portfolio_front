import { ChartNoAxesColumnIncreasing, ArrowUpRight, Wallet, LayoutDashboard, ArrowLeftRight, ChartPie, Target } from 'lucide-react'

function SpendingChart() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
      <div role="img" aria-label="Distribuição ilustrativa: moradia 58%, alimentação 22%, outros 20%" className="flex size-32 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#B6F568_0%_58%,#8D9AF2_58%_80%,#79D4D9_80%_100%)]">
        <div className="flex size-24 flex-col items-center justify-center rounded-full bg-[#191F28]"><span className="text-xs text-white/45">TOTAL</span><span className="mt-1 text-sm font-semibold">R$ 4.508</span></div>
      </div>
      <div className="space-y-3 text-xs">
        {[['bg-[#B6F568]', 'Moradia', '58%'], ['bg-[#8D9AF2]', 'Alimentação', '22%'], ['bg-[#79D4D9]', 'Outros', '20%']].map(([color, name, value]) => <div key={name} className="flex items-center gap-2"><span className={`size-1.5 rounded-full ${color}`} /><span className="mr-3 text-white/55">{name}</span><span className="ml-auto">{value}</span></div>)}
      </div>
    </div>
  )
}

// Previews de interface ilustrativos até a inclusão das capturas definitivas.
export default function ContelarPreview({ detail = false }) {
  if (detail) return (
    <div className="flex h-full min-h-80 items-center justify-center bg-[#12171D] p-6 sm:p-10">
      <div className="w-full max-w-sm rounded-2xl bg-[#191F28] p-6"><p className="mb-2 text-sm font-medium">Gastos por categoria</p><p className="mb-6 text-xs text-white/45">Entenda para onde seu dinheiro vai.</p><SpendingChart /><div className="mt-6 flex justify-between border-t border-white/10 pt-4 text-xs text-white/50"><span>Este mês</span><span className="text-[#B6F568]">Ver análise ↗</span></div></div>
    </div>
  )
  return (
    <div className="flex h-full min-h-80 overflow-hidden bg-[#090B0F] text-[#F5F7FA]">
      <div className="hidden w-40 shrink-0 flex-col border-r border-white/10 bg-[#10151C] p-4 xl:flex">
        <div className="mb-10 flex items-center gap-2 text-lg font-semibold"><ChartNoAxesColumnIncreasing className="size-7 rounded-lg bg-[#B6F568] p-1 text-[#090B0F]" />Contelar</div>
        {[[LayoutDashboard, 'Visão geral'], [ArrowLeftRight, 'Transações'], [ChartPie, 'Análises'], [Target, 'Metas']].map(([Icon, label], index) => <div key={label} className={`mb-2 flex items-center gap-2 rounded-md p-2 text-xs ${index === 0 ? 'bg-[#B6F568]/10 text-[#B6F568]' : 'text-white/45'}`}><Icon size={13} />{label}</div>)}
        <span className="mt-auto text-xs text-white/35">Suas finanças em um só lugar.</span>
      </div>
      <div className="min-w-0 flex-1 p-5 sm:p-7">
        <div className="mb-7 flex items-center justify-between gap-2 border-b border-white/10 pb-4"><span className="text-xs font-medium">Visão geral</span><span className="rounded-full bg-[#B6F568]/10 px-3 py-1 text-xs text-[#B6F568]">Últimos 30 dias</span></div>
        <p className="text-lg font-medium tracking-tight sm:text-xl">Seu dinheiro, com mais clareza.</p><p className="mt-1 text-xs text-white/45">Um olhar sobre suas finanças neste mês.</p>
        <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[['Saldo total', 'R$ 50.731,50'], ['Receitas', 'R$ 8.250,00'], ['Despesas', 'R$ 4.508,24']].map(([label, value], index) => <div key={label} className={`rounded-xl bg-[#191F28] p-4 ${index === 2 ? 'hidden sm:block' : ''}`}><Wallet size={15} className="mb-4 text-[#B6F568]" /><p className="text-xs text-white/50">{label}</p><p className="mt-2 text-sm font-semibold sm:text-lg">{value}</p></div>)}
        </div>
        <div className="rounded-xl bg-[#191F28] p-4"><div className="flex justify-between text-xs"><span>Evolução do saldo</span><ArrowUpRight size={13} className="text-[#B6F568]" /></div><svg viewBox="0 0 600 140" className="mt-5 w-full" role="img" aria-label="Gráfico ilustrativo de evolução do saldo"><path d="M0 30H600 M0 75H600 M0 120H600" fill="none" stroke="#F5F7FA" strokeOpacity=".08" strokeDasharray="3 6" /><path d="M0 105L55 94L110 100L165 75L220 80L275 56L330 65L385 39L440 48L495 26L550 30L600 12V140H0Z" fill="#B6F568" fillOpacity=".06" /><path d="M0 105L55 94L110 100L165 75L220 80L275 56L330 65L385 39L440 48L495 26L550 30L600 12" fill="none" stroke="#B6F568" strokeWidth="2" /></svg><div className="mt-2 flex justify-between text-xs text-white/35"><span>01 nov</span><span>15 nov</span><span>30 nov</span></div></div>
      </div>
    </div>
  )
}
