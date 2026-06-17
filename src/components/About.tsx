/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { milestones } from "../data";
import { Sparkles, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Block: Narrative text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4.5 py-1 text-slate-400 text-xs font-mono tracking-widest uppercase mb-6 self-start shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-orange-300" />
              회사 소개 (About Us)
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-100 tracking-tight leading-[1.2] break-keep">
              단순한 계약 대행이 아닌
              <br />{" "}
              <span className="text-orange-300">
                따뜻한 마음까지 대행합니다.
              </span>
            </h2>

            <p className="mt-6 text-slate-400 text-sm leading-relaxed font-sans break-keep">
              우리는 단순한 계약을 대행하는 회사가 아닙니다. 하나의 콘텐츠가
              세상에 나오기까지 창작자가 겪은 고뇌와 노력의 무게를 깊이 이해하는
              사람들이 모였습니다. 본 기업은 국내 문화 콘텐츠의 뿌리인
              권리자분들의 소중한 권리를 가슴으로 대행하며, 창작의 결실이 온전히
              주인의 품으로 돌아갈 수 있도록 돕는 문화체육관광부 지정
              저작권대리중개업체입니다.
            </p>

            <div className="mt-8 flex flex-col gap-5 border-l-2 border-slate-800 pl-4 py-1">
              <div>
                <div className="text-orange-300 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
                  미션 (Mission)
                </div>
                <p className="text-slate-300 text-xs font-sans break-keep leading-relaxed ml-3">
                  복잡하고 지치는 저작권 관리 부담은 우리가 짊어지고, 권리자는
                  오직 더 아름다운 창작과 제작에만 몰두할 수 있는 평온한 환경을
                  만듭니다.
                </p>
              </div>
              <div>
                <div className="text-orange-300 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
                  비전 (Vision)
                </div>
                <p className="text-slate-300 text-xs font-sans break-keep leading-relaxed ml-3">
                  대한민국 창작자들과 제작자들이 가장 힘들 때 먼저 떠올리고 기댈
                  수 있는 따뜻한 저작권 안식처가 되겠습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Milestones Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.number}
                id={`milestone-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/5 group"
              >
                <div className="font-sans font-black text-4xl sm:text-5xl text-orange-300/90 tracking-tight group-hover:scale-[1.03] transition-transform duration-300 origin-left">
                  {milestone.number}
                </div>

                <div className="mt-3 font-sans font-bold text-sm text-slate-200 tracking-tight">
                  {milestone.label}
                </div>

                <div className="mt-2 font-sans text-xs text-slate-400 leading-relaxed">
                  {milestone.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
