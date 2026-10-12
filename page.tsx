import { BeforeAfter } from '@/components/report/before-after'
import { EditRequest, FinalResult, LegalNote, ProjectStatus, SiteFooter } from '@/components/report/closing'
import { Hero } from '@/components/report/hero'
import { InnerPages } from '@/components/report/inner-pages'
import { SiteHeader } from '@/components/report/site-header'
import { Stats } from '@/components/report/stats'
import { Summary } from '@/components/report/summary'
import { Timeline } from '@/components/report/timeline'
import { Works } from '@/components/report/works'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Summary />
        <Timeline />
        <Works />
        <InnerPages />
        <Stats />
        <BeforeAfter />
        <FinalResult />
        <ProjectStatus />
        <LegalNote />
        <EditRequest />
      </main>
      <SiteFooter />
    </>
  )
}
