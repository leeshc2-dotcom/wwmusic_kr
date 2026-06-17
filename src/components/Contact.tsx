/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-sm font-mono uppercase tracking-[0.25em] text-orange-400 font-bold mb-4 -translate-x-4">
          문의하기 (Contact Us)
        </h2>
        <p className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-100 tracking-tight leading-tight">
          따뜻한 이야기가 시작되는 곳
        </p>
        <p className="mt-5 text-slate-300 text-base leading-relaxed font-sans max-w-2xl break-keep">
          당신의 소중한 창작 이야기, 우리가 온 마음을 다해 들을 준비가 되어
          있습니다. 이 외롭고 때론 험난한 창작의 길에서 함께 발맞추어 걸어갈
          가장 든든하고 따뜻한 유일무이한 내 편을 만나고 싶으시다면, 언제든 부담
          없이 편안하게 이 안식처의 문을 두드려 주세요.
        </p>

        {/* Structured Contact Elements */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 w-full max-w-md">
          <a
            href="mailto:leeshc0@naver.com?subject=Sub-Publishing%20Representation%20Inquiry"
            className="flex items-center gap-5 bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 hover:border-orange-400/50 transition-all group cursor-pointer text-left w-full shadow-xl"
          >
            <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-xs text-slate-100 uppercase tracking-wider">
                커뮤니케이션 담당
              </h4>
              <p className="mt-1 font-sans text-sm text-slate-400 font-semibold tracking-wide group-hover:text-orange-300 transition-colors">
                leeshc0@naver.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
