/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Linkedin, Youtube, Twitter, Globe, ArrowUp } from "lucide-react";
import { navLinks, brandName } from "../data";
import { LogoIcon } from "./LogoIcon";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#0F172A] border-t border-slate-800 pt-16 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Column 1 - Brand Summary */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm overflow-hidden">
                <LogoIcon className="w-6 h-6" />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-tight text-slate-100">
                {brandName}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              투명하고 효율적인 저작권 대리중개 서비스를 바탕으로, 국내외
              권리자의 가치를 극대화하고 신뢰도 높은 권리 보호와 행정 솔루션을
              전문적으로 제공합니다.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                id="social-linkedin"
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-slate-700 transition-all shadow-sm"
                aria-label="링크드인 프로필"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="social-youtube"
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-slate-700 transition-all shadow-sm"
                aria-label="유튜브 채널"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="social-twitter"
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-slate-700 transition-all shadow-sm"
                aria-label="트위터 프로필"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                id="social-globe"
                href="#globe"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-slate-700 transition-all shadow-sm"
                aria-label="글로벌 네트워크 웹 사이트"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Sitemap shortcuts */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.2em] text-orange-400 uppercase font-black mb-4">
              법인 사이트맵 바로가기
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    id={`footer-shortcut-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="text-xs text-slate-400 hover:text-orange-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Technical Registries */}
          <div className="md:col-span-4 select-none">
            <h4 className="text-xs font-mono tracking-[0.2em] text-orange-400 uppercase font-black mb-4">
              공식 등록기관 및 제휴 파트너십 현황
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.komca.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col group"
                >
                  <span className="text-xs text-slate-300 font-bold font-sans group-hover:text-orange-300 transition-colors">
                    한국음악저작권협회 (KOMCA)
                  </span>
                  <span className="text-xs text-slate-500 font-mono mt-0.5 font-medium group-hover:text-slate-400 transition-colors">
                    www.komca.or.kr
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.fkmp.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col group"
                >
                  <span className="text-xs text-slate-300 font-bold font-sans group-hover:text-orange-300 transition-colors">
                    한국음악실연자연합회 (FKMP)
                  </span>
                  <span className="text-xs text-slate-500 font-mono mt-0.5 font-medium group-hover:text-slate-400 transition-colors">
                    www.fkmp.kr
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="http://pimak.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col group"
                >
                  <span className="text-xs text-slate-300 font-bold font-sans group-hover:text-orange-300 transition-colors">
                    한국대중음악산업협회
                  </span>
                  <span className="text-xs text-slate-500 font-mono mt-0.5 font-medium group-hover:text-slate-400 transition-colors">
                    pimak.org
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Details panel */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-slate-500 font-semibold tracking-wide text-center md:text-left">
            © 2026 {brandName}. All rights reserved. 대한민국 통합 저작권 관리
            보호 및 서브 퍼블리싱 라이선스 파트너.
          </p>

          <button
            id="footer-back-to-top"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 bg-[#0F172A] hover:bg-[#1E293B] text-slate-400 hover:text-orange-400 p-2.5 px-4 rounded-xl border border-slate-800 text-xs font-bold uppercase tracking-wider transition-all select-none cursor-pointer shadow-sm"
          >
            <span>맨 위로 스크롤</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
