/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { trustPillars } from "../data";
import { ShieldCheck, Zap, Languages, Check, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Languages: Languages,
};

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layout: Two columns - Left is statement, Right is pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 flex flex-col pt-2 lg:pt-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-amber-500 font-bold mb-4">
              운영 전략 (Operational Strategy)
            </h2>
            <p className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-100 tracking-tight leading-tight break-keep">
              마음으로 이어지는
              <br />
              투명한 신뢰의 원칙
            </p>
            <p className="mt-5 text-slate-300 text-sm leading-relaxed font-sans break-keep">
              안일한 전통의 업계 관행이나 복잡하고 불투명한 징수 구조를 철저히
              생략하고 외면합니다. 우리는 창작의 결실이 조금이라도 손실되는 일이
              없도록 투박하지만 정직한 정도(正道)를 고집하며 따스한 울타리가
              되어 드립니다.
            </p>
            <p className="mt-4 text-slate-400 text-xs leading-relaxed font-sans break-keep">
              누군가 당신의 소중한 노력을 무단으로 사용하거나 훼손하려 할 때
              단호하게 대응하며, 그 복잡한 숫자 이면에 흘린 당신의 땀방울을
              알기에 가장 정직하고 확실한 데이터로 믿음직한 안식처를 선사합니다.
            </p>

            <div className="mt-6 border-t border-slate-800/80 pt-5">
              <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold uppercase tracking-wider">
                <Check className="w-4 h-4 text-amber-500" />
                창작자 권익 최우선의 투명한 상생 원칙
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold uppercase tracking-wider mt-2">
                <Check className="w-4 h-4 text-amber-500" />
                침해 제로를 향한 철저하고 빈틈없는 방어
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {trustPillars.map((pillar, idx) => {
              const PillarIcon = iconMap[pillar.icon] || ShieldCheck;
              return (
                <motion.div
                  key={pillar.title}
                  id={`trust-pillar-${idx}`}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 transition-all duration-300 group hover:shadow-xl hover:shadow-amber-500/5 text-slate-300"
                >
                  <div className="flex items-start gap-5 max-w-xl">
                    <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shrink-0">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-base text-slate-100 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 font-sans text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {pillar.metric && (
                    <div className="border-l border-slate-800/80 pl-6 sm:border-l-2 sm:border-slate-800/60 w-full sm:w-auto text-left shrink-0">
                      <div className="font-sans font-black text-2xl sm:text-3xl text-amber-400 tracking-tight">
                        {pillar.metric}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mt-0.5 max-w-[120px] sm:max-w-none">
                        {pillar.metricLabel}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
