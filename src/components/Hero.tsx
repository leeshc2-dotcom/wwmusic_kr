/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Music, Shield, Globe } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    const headerElement = document.getElementById("site-header");
    const offset = headerElement ? headerElement.offsetHeight : 80;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Gradients & Grid Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5" />
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold text-slate-100 tracking-tight leading-[1.2] sm:leading-[1.1] md:leading-none text-balance break-keep"
        >
          당신의 밤샘과 열정,
          <br className="hidden sm:block" /> 결코 외롭지 않도록.{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent block mt-2">
            국내 권리자의 마음까지 대행하는
            <br className="hidden sm:block" /> 따뜻한 저작권 파트너.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mt-6 text-base sm:text-lg text-slate-400 font-sans leading-relaxed text-pretty animate-fade-in break-keep"
        >
          보이지 않는 곳에서 흘린 창작자의 땀방울을 기억합니다. 소중한 콘텐츠가
          올바른 가치로 인정받고, 창작에만 전념할 수 있도록 가장 가까운 곳에서
          권리를 지켜드립니다.
        </motion.p>

        {/* CTAs */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-primary-cta"
            onClick={() => handleScrollTo("services")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-orange-300 to-orange-400 text-slate-900 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:from-orange-400 hover:to-orange-500 transition-all duration-200 shadow-xl shadow-orange-400/10 hover:shadow-orange-400/20 active:scale-98"
          >
            서비스 자세히 보기
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-secondary-cta"
            onClick={() => handleScrollTo("contact")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-orange-300 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-slate-800 hover:border-slate-700 transition-all duration-200 active:scale-98 shadow-sm"
          >
            카탈로그 컨설팅 문의
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          id="hero-trust-indicators"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-20 border-t border-slate-800/60 pt-10 w-full"
        >
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-6">
            창작자의 진정한 가치를 지켜내는 따뜻하고 투명한 관리
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 opacity-80 hover:opacity-100 transition-all duration-300">
            <span className="flex items-center gap-2 text-slate-300 font-sans font-bold tracking-wide text-[12px] sm:text-[13px] bg-slate-900 border border-slate-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm w-full sm:w-auto justify-center">
              <Music className="w-4 h-4 text-orange-300" /> [Care] 작품을 소중히
              다루는 밀착 케어
            </span>
            <span className="flex items-center gap-2 text-slate-300 font-sans font-bold tracking-wide text-[12px] sm:text-[13px] bg-slate-900 border border-slate-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm w-full sm:w-auto justify-center">
              <Shield className="w-4 h-4 text-emerald-500" /> [Trust] 정직하고
              기댈 수 있는 투명한 마음
            </span>
            <span className="flex items-center gap-2 text-slate-300 font-sans font-bold tracking-wide text-[12px] sm:text-[13px] bg-slate-900 border border-slate-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm w-full sm:w-auto justify-center">
              <Globe className="w-4 h-4 text-orange-400" /> [Global Heart]
              한계를 넘어 빛나는 창작 가치
            </span>
          </div>
        </motion.div>
      </div>

      {/* Elegant Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 overflow-hidden pointer-events-none">
        <div className="w-[120%] h-[120px] bg-slate-900/50 border-t border-slate-800 rounded-[50%] -translate-x-[10%]" />
      </div>
    </section>
  );
}
