/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink, Milestone, ServiceDetail, TrustPillar, Executive } from "./types";

export const brandName = "WorldWide Music";
export const brandSlogan = "당신의 밤샘과 열정, 결코 외롭지 않도록. 국내 권리자의 마음까지 대행하는 따뜻한 저작권 파트너.";

export const navLinks: NavLink[] = [
  { id: "home", label: "홈", href: "#home" },
  { id: "about", label: "회사 소개", href: "#about" },
  { id: "services", label: "주요 서비스", href: "#services" },
  { id: "trust", label: "운영 전략", href: "#trust" },
  { id: "contact", label: "문의하기", href: "#contact" }
];

export const milestones: Milestone[] = [
  {
    number: "CARE",
    label: "권리자 중심의 밀착 케어",
    description: "내 작품처럼 소중히 다루며, 창작에만 전념할 수 있도록 가장 가까운 곳에서 돕습니다."
  },
  {
    number: "TRUST",
    label: "정직하고 투명한 마음",
    description: "단 하나의 노력도 헛되지 않도록, 모든 과정을 가감 없이 투명하게 공개하고 공유합니다."
  },
  {
    number: "GLOBAL",
    label: "영역 없는 창작 가치 보호",
    description: "국내를 넘어 세계 어디서든 찬란하게 빛나는 당신의 창작 가치를 끝까지 지켜냅니다."
  },
  {
    number: "WITH",
    label: "따뜻한 동반 성장",
    description: "창작자의 가치가 실현될 때 우리의 가치도 증명된다는 믿음으로 상생의 길을 걷습니다."
  }
];

export const services: ServiceDetail[] = [
  {
    id: "sub-pub",
    title: "저작권 관리",
    icon: "Music2",
    shortDesc: "당신이 피땀 흘려 만든 음악과 콘텐츠의 권리를 정성껏 수탁하여 세상에 당당히 드러냅니다.",
    fullDesc: "당신이 피땀 흘려 만든 음악과 콘텐츠의 권리를 정성껏 수탁하여 세상에 당당히 드러냅니다. 복잡한 서류 절차나 권리 관계의 얽힌 실타래를 우리가 대신 정성스럽게 풀어내어, 당신의 자산이 안전하게 보호받도록 돕습니다.",
    keyOfferings: [
      "창작의 결실을 온전히 보호하는 정성스러운 권리 수탁 관리 전문성",
      "복잡하고 지루한 서류 절차 및 얽힌 권리 관계의 깔끔하고 신속한 해결",
      "저작권 자산이 세상에 당당히 드러날 수 록 지원하는 든든한 보호막",
      "창작자가 오로지 창작의 즐거움에만 전념할 수 있는 평온한 생태계 제공"
    ],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sync",
    title: "라이선싱",
    icon: "Tv2",
    shortDesc: "방송, 라디오부터 뉴미디어까지, 당신의 작품이 필요한 곳에 합법적으로 쓰이게 돕습니다.",
    fullDesc: "방송, 라디오, 거리의 작은 무대부터 전 세계 스트리밍과 뉴미디어까지, 당신의 작품이 필요한 모든 곳에 합법적이고 가치 있게 쓰이도록 다리를 놓습니다. 권리자에게는 정당한 보상을, 이용자에게는 감동을 전하는 가장 아름다운 계약을 이끌어냅니다.",
    keyOfferings: [
      "방송, 라디오, 거리의 크고 작은 무대를 아우르는 포괄적 매체 라이선싱",
      "전 세계 스트리밍 및 영상 플랫폼 이용자에 대한 합법적 사용 권한 교섭",
      "권리자에게 충분하고 올바른 보상이 돌아가는 합리적인 수익 구조 설계 방안",
      "이용자와 창작자 모두에게 오래도록 기억될 아름답고 공정한 계약 체결"
    ],
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "royalty",
    title: "해외 보상금 징수 대행",
    icon: "PiggyBank",
    shortDesc: "해외 각국에서 발생하는 소중한 보상금과 미처 챙기지 못한 수익을 끝까지 찾아냅니다.",
    fullDesc: "당신의 음악과 콘텐츠가 먼 이국땅, 언어가 통하지 않는 글로벌 무대에서 울려 퍼질 때도 우리는 멈추지 않습니다. 해외 각국에서 발생하는 소중한 보상금과 미처 챙기지 못했던 권리 수익을 끝까지 추적하여 찾아옵니다. 보이지 않는 곳에서 피어난 창작자의 가치까지 빠짐없이 거두어 따뜻한 품으로 돌려드립니다.",
    keyOfferings: [
      "글로벌 전역 무대에서 사용되는 당신의 음악 및 특수 콘텐츠 추적 확인",
      "해외 각 권역에서 누락되어 있던 미분배 수익 및 소중한 보상금 파악 징수",
      "언어와 국경의 무거운 장벽을 넘어선 현지 특화 저작권 단체와의 긴밀한 공조",
      "보이지 않는 곳의 미세한 가치 누수까지 기필코 거두어 권리자에게 온전한 환원"
    ],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  }
];

export const trustPillars: TrustPillar[] = [
  {
    title: "눈으로 보이고 가슴으로 느끼는 투명한 정산",
    icon: "ShieldCheck",
    description: "아주 작은 사용료 하나도 빠짐없이, 마치 거울처럼 맑고 투명하게 정산하여 전해드립니다. 복잡한 숫자 이면에 담긴 노고를 알기에, 믿고 확인할 수 있는 정직한 데이터와 따뜻한 설명을 약속합니다.",
    metric: "TRANSPARENT",
    metricLabel: "거울처럼 맑은 정직한 결실의 데이터"
  },
  {
    title: "언제나 곁에 있는 따뜻한 소통과 거버넌스",
    icon: "Zap",
    description: "정부 부처나 거대한 신탁단체 사이에서 권리자가 외로운 목소리를 내지 않도록 든든한 대변인이 되어 드립니다. 유관기관들과 맺어온 유대를 바탕으로 따뜻한 상생의 생태계를 구축합니다.",
    metric: "COMMUNICATION",
    metricLabel: "소외 없는 따뜻한 창작자 상생 생태계"
  },
  {
    title: "마음의 평화를 주는 선제적 권리 방패막",
    icon: "Languages",
    description: "당신의 소중한 노력을 무단으로 훼손하려 할 때, 가장 먼저 앞장서는 단단한 방패가 됩니다. 온·오프라인의 침해 요소를 살피고 전담 그룹과 함께 단호하게 대응하여 전적인 평온을 선물합니다.",
    metric: "PROTECTION",
    metricLabel: "침해와 상처를 막는 든든하고 견고한 방벽"
  }
];

export const executives: Executive[] = [
  {
    name: "이승현 (Seoung Hyun Lee)",
    role: "대표 이사 (Managing Director)",
    bio: "한국 현지 저작권 관리 보호의 통합 대행 사업부를 전방위로 진두지휘하고, 국내 최고 수준의 음악 및 영상 글로벌 콘텐츠 제작 관리를 직접 이끌어 온 폭넓은 실무 경험과 역량 지식을 갖춘 미디어 전문 업계 최정상 리더입니다.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop"
  }
];
