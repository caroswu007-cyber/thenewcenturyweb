import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useI18n } from '../i18n/LocaleProvider';
import {
  founderStoryIllustrations,
  founderStoryPage,
  founderTimeline,
  STORYLINE_OF_WOOS_URL,
} from '../content/founderStory2026Content';

/** Readable width: comfortable on phone; wider on desktop without touching viewport edges */
const articleShell =
  'w-full max-w-3xl md:max-w-4xl lg:max-w-[52rem] xl:max-w-[56rem] 2xl:max-w-[60rem] mx-auto px-5 sm:px-7 md:px-10 lg:px-14 xl:px-16';

const ACH_LINK_TOKEN = '{{%ACH%}}';

/** Inline **gold emphasis** */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="text-amber-100 font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const bodyProse = 'text-[1.05rem] md:text-lg lg:text-[1.125rem] leading-[1.75] text-slate-200/95';

function RichParagraph({ text, className = '' }: { text: string; className?: string }) {
  return (
    <p className={`${bodyProse} ${className}`}>
      <RichText text={text} />
    </p>
  );
}

/** Phase B copy: inline link token for `/our-achievements`. */
function PhaseBParagraph({ text, className = '' }: { text: string; className?: string }) {
  if (!text.includes(ACH_LINK_TOKEN)) {
    return <RichParagraph text={text} className={className} />;
  }
  const [a, b] = text.split(ACH_LINK_TOKEN);
  return (
    <p className={`${bodyProse} ${className}`}>
      <RichText text={a} />
      <Link to="/our-achievements" className="text-amber-200 underline-offset-2 hover:underline font-semibold">
        《2025直播间成就》专题页
      </Link>
      <RichText text={b} />
    </p>
  );
}

function StoryFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="my-12 md:my-16 rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl shadow-black/40"
    >
      <div className="aspect-[21/9] md:aspect-[2.4/1] relative bg-slate-900/50">
        <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(5,8,15,0.75) 100%)',
          }}
        />
      </div>
      <figcaption className="text-sm md:text-base text-slate-400 px-4 py-3 bg-[rgba(8,10,18,0.92)] border-t border-white/10 font-ui">
        {alt}
      </figcaption>
    </motion.figure>
  );
}

function SectionCard({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      id={id}
      className={`scroll-mt-28 md:scroll-mt-32 rounded-2xl border border-white/[0.1] bg-[rgba(12,16,28,0.75)] backdrop-blur-md px-6 py-8 md:px-10 md:py-10 ${className}`}
    >
      {children}
    </div>
  );
}

/** Sub-block inside a card: optional kicker + divider from previous */
function ContentBlock({
  title,
  children,
  showDivider,
}: {
  title?: string;
  children: React.ReactNode;
  showDivider?: boolean;
}) {
  return (
    <div className={showDivider ? 'pt-6 mt-6 border-t border-white/[0.08]' : ''}>
      {title ? (
        <h4 className="font-ui font-bold text-amber-200/90 text-base md:text-lg mb-3 tracking-wide">{title}</h4>
      ) : null}
      {children}
    </div>
  );
}

const toneDot: Record<string, string> = {
  sky: 'bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.45)]',
  amber: 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.4)]',
  violet: 'bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.45)]',
  rose: 'bg-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.4)]',
  gold: 'bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.4)]',
};

function IntegratedTimelineRow({
  range,
  label,
  tone,
}: {
  range: string;
  label: string;
  tone: string;
}) {
  return (
    <div className="flex gap-4 items-start mb-8 pb-8 border-b border-white/[0.08]">
      <span
        className={`mt-1.5 w-3.5 h-3.5 rounded-full shrink-0 ${toneDot[tone] ?? toneDot.sky}`}
        aria-hidden
      />
      <div>
        <p className="font-mono text-sm md:text-base text-slate-400 tracking-wide">{range}</p>
        <p className="font-ui font-semibold text-sky-100/95 text-lg md:text-xl mt-1">{label}</p>
      </div>
    </div>
  );
}

/** Date-only timeline strip (no “period” subtitle) — used for A1–A5. */
function TimelineRangeOnly({ range, tone }: { range: string; tone: string }) {
  return (
    <div className="flex gap-4 items-start mb-6 pb-6 border-b border-white/[0.08]">
      <span
        className={`mt-1.5 w-3.5 h-3.5 rounded-full shrink-0 ${toneDot[tone] ?? toneDot.sky}`}
        aria-hidden
      />
      <p className="font-mono text-sm md:text-base text-slate-300 tracking-wide pt-0.5">{range}</p>
    </div>
  );
}

const phaseExpandBtnClass =
  'w-full max-w-2xl mx-auto font-cinzel font-bold text-sm sm:text-base uppercase tracking-[0.2em] px-8 py-5 rounded-xl border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060812]';

/** Legacy Storyline of Woos page — Stage 1/2 YouTube + companion figure (see founderStory2026Content). */
function StorylineClipBlock({
  legacyStage,
  youtubeId,
  figureSrc,
  figureAlt,
}: {
  legacyStage: string;
  youtubeId: string;
  figureSrc: string;
  figureAlt: string;
}) {
  const { t, tFormat } = useI18n();
  return (
    <div className="mt-8 pt-8 border-t border-white/[0.08] space-y-5">
      <p className={`${bodyProse} text-slate-400 text-sm md:text-base`}>
        <RichText text={tFormat('founderStory.storylineClipLead', { stage: legacyStage })} />{' '}
        <a
          href={STORYLINE_OF_WOOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400/90 hover:text-sky-300 underline-offset-2 font-semibold whitespace-nowrap"
        >
          {t('founderStory.storylineClipPageLink')}
        </a>
        .
      </p>
      <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
        <figure className="md:col-span-2 m-0 space-y-2">
          <div className="rounded-xl overflow-hidden border border-white/[0.12] shadow-lg shadow-black/35 bg-slate-900/50">
            <img
              src={figureSrc}
              alt={figureAlt}
              className="w-full h-auto object-cover aspect-[4/3] md:aspect-[5/4]"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs text-slate-500 font-ui leading-snug px-0.5">{figureAlt}</figcaption>
        </figure>
        <div className="md:col-span-3 space-y-3 min-w-0">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/[0.12] shadow-xl shadow-black/45 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title={tFormat('founderStory.storylineYoutubeIframeTitle', { stage: legacyStage })}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-300/90 hover:text-amber-200 text-sm font-ui font-semibold underline-offset-2 hover:underline"
          >
            {t('spirit.watchYoutube')}
          </a>
        </div>
      </div>
    </div>
  );
}

const FounderStoryView = () => {
  const { t } = useI18n();
  const p = founderStoryPage;
  const ill = founderStoryIllustrations;
  const [phaseAOpen, setPhaseAOpen] = useState(false);

  const timelineRowForStage = (stageId: string) =>
    founderTimeline.find(row => row.phase === stageId.toUpperCase());

  return (
    <div className="min-h-screen text-slate-200" style={{ background: '#060812' }}>
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201,168,76,0.12), transparent 50%), radial-gradient(ellipse 60% 40% at 100% 60%, rgba(56,189,248,0.08), transparent 45%)',
        }}
      />

      <header className="relative z-10 pt-28 pb-12 border-b border-white/10">
        <div className={`${articleShell} flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6`}>
          <div>
            <p
              className="font-cinzel text-sm md:text-base uppercase tracking-[0.3em] mb-3"
              style={{ color: 'rgba(251,191,36,0.55)' }}
            >
              {p.heroBadge}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold cosmic-title leading-tight">
              {p.heroTitle}
            </h1>
            <p className="mt-6 text-slate-300 font-ui text-xl md:text-2xl">John Long Woo · Caros · Sam</p>
          </div>
          <Link
            to="/about"
            className="shrink-0 inline-flex items-center justify-center font-ui font-semibold text-base px-6 py-3 rounded-lg border border-white/20 text-slate-200 hover:bg-white/5 transition-colors"
          >
            ← Organization overview
          </Link>
        </div>
      </header>

      <div className={`relative z-10 pb-28 ${articleShell}`}>
        <SectionCard id="intro">
          <RichParagraph text={p.intro} className="font-light !text-[1.08rem] md:!text-xl lg:!text-[1.35rem] !leading-[1.65]" />
        </SectionCard>

        <StoryFigure {...ill[0]} />

        <section id="truths" className="scroll-mt-28 md:scroll-mt-32 mt-16 md:mt-20">
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-10 pb-4 border-b border-amber-500/35">
            {p.truths.title}
          </h2>
          <div className="space-y-8">
            {p.truths.items.map(item => (
              <SectionCard key={item.label}>
                <p className="font-cinzel text-sm md:text-base uppercase tracking-[0.25em] mb-6" style={{ color: '#c9a84c' }}>
                  {item.label}
                </p>
                <div className="space-y-0">
                  {item.blocks.map((blk, bi) => (
                    <ContentBlock key={bi} title={'title' in blk ? blk.title : undefined} showDivider={bi > 0}>
                      <RichParagraph text={blk.text} />
                    </ContentBlock>
                  ))}
                </div>
              </SectionCard>
            ))}
          </div>
        </section>

        <StoryFigure {...ill[1]} />

        <section id="phases" className="scroll-mt-28 md:scroll-mt-32 mt-16 md:mt-20">
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-10 pb-4 border-b border-amber-500/35">
            {p.phasesOverview.title}
          </h2>

          {/* Phase A — intro + its own expand/collapse */}
          <div className="space-y-6">
            <SectionCard>
              <h3 className="font-ui font-bold text-sky-200 text-xl md:text-2xl mb-6">{p.phasesOverview.a.title}</h3>
              {p.phasesOverview.a.blocks.map((blk, bi) => (
                <ContentBlock key={bi} title={blk.title} showDivider={bi > 0}>
                  <RichParagraph text={blk.text} />
                </ContentBlock>
              ))}
            </SectionCard>

            <button
              type="button"
              id="founder-phase-a-toggle"
              aria-expanded={phaseAOpen}
              onClick={() => setPhaseAOpen(v => !v)}
              className={phaseExpandBtnClass}
              style={{
                color: '#fcd9a8',
                borderColor: 'rgba(56,189,248,0.5)',
                background: 'linear-gradient(180deg, rgba(56,189,248,0.1) 0%, rgba(12,16,28,0.85) 100%)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <span className="flex items-center justify-center gap-3">
                {phaseAOpen ? t('founderStory.collapsePhaseA') : t('founderStory.expandPhaseA')}
                {phaseAOpen ? (
                  <ChevronUp className="w-5 h-5 shrink-0 opacity-80" aria-hidden />
                ) : (
                  <ChevronDown className="w-5 h-5 shrink-0 opacity-80" aria-hidden />
                )}
              </span>
            </button>

            {phaseAOpen ? (
              <div id="chronology-phase-a" className="mt-10 space-y-10 md:space-y-12">
                {founderTimeline.find(r => r.phase === 'A') ? (
                  <SectionCard>
                    {(() => {
                      const row = founderTimeline.find(r => r.phase === 'A')!;
                      return <IntegratedTimelineRow range={row.range} label={row.label} tone={row.tone} />;
                    })()}
                    <p className={`${bodyProse} text-slate-400 text-sm`}>{t('founderStory.phaseAUmbrellaCaption')}</p>
                  </SectionCard>
                ) : null}

                {p.phaseAStages.map((stage, si) => {
                  const tl = timelineRowForStage(stage.id);
                  const rangeText = tl?.range ?? stage.range;
                  const tone = tl?.tone ?? 'amber';
                  const stageKey = stage.id.replace(/^a/i, 'A');
                  return (
                    <div key={stage.id} id={stage.id} className="scroll-mt-28 md:scroll-mt-32">
                      <SectionCard>
                        <TimelineRangeOnly range={rangeText} tone={tone} />
                        <h4 className="font-cinzel text-xl md:text-2xl font-bold text-white tracking-[0.12em] mb-6">
                          {stageKey}
                        </h4>
                        <div className="space-y-0">
                          {stage.paragraphs.map((para, pi) => (
                            <ContentBlock key={pi} showDivider={pi > 0}>
                              <RichParagraph text={para} />
                            </ContentBlock>
                          ))}
                        </div>
                        {'storylineClip' in stage && stage.storylineClip ? (
                          <StorylineClipBlock {...stage.storylineClip} />
                        ) : null}
                      </SectionCard>
                      {si === 1 ? <StoryFigure {...ill[3]} /> : null}
                      {si === 3 ? <StoryFigure {...ill[4]} /> : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>

          {/* Phase B — full narrative, always visible (not folded like Phase A) */}
          <div className="space-y-6 mt-16 md:mt-20">
            <section id={p.phaseB.id} className="scroll-mt-28 md:scroll-mt-32">
              <SectionCard>
                <h3 className="font-ui font-bold text-amber-200 text-xl md:text-2xl mb-8 tracking-wide">{p.phaseB.title}</h3>
                <div className="space-y-0">
                  {p.phaseB.blocks.map((blk, bi) => (
                    <ContentBlock key={bi} title={blk.title} showDivider={bi > 0}>
                      <PhaseBParagraph text={blk.text} />
                    </ContentBlock>
                  ))}
                </div>
              </SectionCard>
            </section>
          </div>
        </section>

        <StoryFigure {...ill[2]} />

        <p className="mt-14 text-center font-ui text-sm md:text-base text-slate-500">
          <a
            href={STORYLINE_OF_WOOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400/90 hover:text-sky-300 underline-offset-2"
          >
            Earlier staged timeline on the legacy site
          </a>
        </p>
      </div>
    </div>
  );
};

export default FounderStoryView;
