/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Send, User, MessageSquare, AtSign } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "서브 퍼블리싱 및 저작권 대리중개 문의",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "서브 퍼블리싱 및 저작권 대리중개 문의",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Copy and Info */}
        <div className="flex-1 text-center lg:text-left flex flex-col lg:items-start items-center">
          <h2 className="text-sm font-mono uppercase tracking-[0.25em] text-orange-400 font-bold mb-4">
            문의하기 (Contact Us)
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-100 tracking-tight leading-[1.3] sm:leading-tight break-keep">
            따뜻한 이야기가 시작되는 곳
          </p>
          <p className="mt-5 text-slate-300 text-base leading-relaxed font-sans max-w-xl break-keep">
            당신의 소중한 창작 이야기, 우리가 온 마음을 다해 들을 준비가 되어
            있습니다. 이 외롭고 때론 험난한 창작의 길에서 함께 발맞추어 걸어갈
            가장 든든하고 따뜻한 유일무이한 내 편을 만나고 싶으시다면, 언제든 부담
            없이 편안하게 이 안식처의 문을 두드려 주세요.
          </p>

          <div className="mt-10 flex flex-col gap-5 w-full max-w-sm">
            <div className="flex items-center gap-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl px-5 py-4">
              <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="font-sans font-extrabold text-[11px] text-slate-400 uppercase tracking-wider">
                  커뮤니케이션 담당
                </h4>
                <p className="mt-1 font-sans text-sm text-slate-200 font-semibold tracking-wide">
                  Jude.lee@wwmg.co.kr
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-3xl blur-xl" />
          <form
            onSubmit={handleSubmit}
            className="relative bg-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-slate-400 ml-1">
                이름 / 회사명 <span className="text-orange-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="w-4 h-4 text-slate-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동 / (주)월드와이드"
                  className="w-full bg-slate-900 border border-slate-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-400 ml-1">
                회신받을 이메일 <span className="text-orange-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <AtSign className="w-4 h-4 text-slate-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full bg-slate-900 border border-slate-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-400 ml-1">
                문의 주제 <span className="text-orange-400">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700/50 rounded-xl py-3 px-4 text-sm text-slate-200 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all appearance-none"
              >
                <option value="서브 퍼블리싱 및 저작권 대리중개 문의">서브 퍼블리싱 및 저작권 대리중개 문의</option>
                <option value="저작권 보호 및 침해 대응 문의">저작권 보호 및 침해 대응 문의</option>
                <option value="해외 진출 및 글로벌 네트워크 문의">해외 진출 및 글로벌 네트워크 문의</option>
                <option value="기타 제휴 및 협력 문의">기타 제휴 및 협력 문의</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-slate-400 ml-1">
                문의 내용 <span className="text-orange-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none">
                  <MessageSquare className="w-4 h-4 text-slate-500" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="궁금하신 점이나 제안하실 내용을 자유롭게 적어주세요."
                  className="w-full bg-slate-900 border border-slate-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`mt-2 w-full flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-xl transition-all ${
                status === "success"
                  ? "bg-emerald-500 text-white"
                  : status === "error"
                  ? "bg-red-500 text-white"
                  : "bg-orange-500 hover:bg-orange-400 text-slate-950"
              } disabled:opacity-80`}
            >
              {status === "loading" ? (
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : status === "success" ? (
                <span>전송 완료</span>
              ) : status === "error" ? (
                <span>전송 실패. 다시 시도해주세요.</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>이메일 보내기</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
