
import React from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';
import { ServiceItem, FaqItem, FeatureItem } from './types.ts';

export const RESERVATION_LOGS = [
  "서울 종로구 구의원 예비후보 상담 예약 완료",
  "강남구 을 국회의원 예비후보 컨설팅 진행 중",
  "춘천시장 예비후보 전략 수립 완료",
  "동해시의원 예비후보 상담 예약 중",
  "경기도 남양주시 시의원 브랜딩 착수",
  "광주광역시 시의원 홍보물 제작 중"
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "SNS 기동 타격대\n패키지",
    description: "유권자의 시선을 사로잡는 숏폼과 카드뉴스로 디지털 점유율을 압도합니다.",
    features: [
      "고퀄리티 숏츠·릴스 제작",
      "후보자 퍼스널 브랜딩 진단",
      "실시간 정책 대응 카드뉴스",
      "커뮤니티 여론 모니터링"
    ]
  },
  {
    title: "캠프 통합 전략\n풀 패키지",
    description: "온/오프라인을 관통하는 하나의 메시지. 후보님의 승리만을 위해 모든 홍보 인프라를 가동합니다.",
    features: [
      "SNS 패키지 전체 포함",
      "다큐멘터리형 브이로그 제작",
      "선거 공보물 및 현수막 디자인",
      "메시지 기획 및 연설문 보조",
      "위기 관리 대응 핫라인"
    ]
  },
  {
    title: "내 캠프에 맞는\n홍보팀 구성 확인",
    description: "지역구의 특성과 상대 후보의 전략에 따라 홍보팀의 구성은 달라져야 합니다.",
    features: [],
    isHighlight: true
  }
];

export const FEATURES: FeatureItem[] = [
  {
    icon: <Award className="w-8 h-8 text-lime-400" />,
    title: "1지역구 1후보 원칙",
    description: "우리는 신의를 지킵니다. 계약된 지역구 내에서는 오직 후보님의 승리만을 위해 싸우며 경쟁자 편에 서지 않습니다."
  },
  {
    icon: <Zap className="w-8 h-8 text-lime-400" />,
    title: "12시간 이내 릴리즈",
    description: "현장의 소스가 전달되는 즉시 기획에 착수합니다. 이슈의 골든타임을 놓치지 않는 신속한 콘텐츠 제작을 보장합니다."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-lime-400" />,
    title: "정치 전문 크리에이티브",
    description: "단순한 디자인이 아닙니다. 정치적 맥락과 선거법을 이해하는 베테랑들이 유권자의 심리를 파고드는 콘텐츠를 만듭니다."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Q1. 정말 우리 지역구 경쟁 후보는 안 받으시나요?",
    answer: "그렇습니다. 위보트의 가장 철저한 원칙입니다. 동일 선거구 내에서는 한 분의 후보자님과만 계약을 체결하여 화력의 분산을 막습니다."
  },
  {
    question: "Q2. 선거법 준수가 가장 걱정됩니다.",
    answer: "모든 제작물은 발행 전 선거법 위반 여부를 선제적으로 검토합니다. 불필요한 리스크를 최소화하고 안전하면서도 강력한 홍보를 지향합니다."
  },
  {
    question: "Q3. 기존 캠프 인력과 어떻게 협업하나요?",
    answer: "우리는 캠프의 외부 하청 업체가 아닌 '디지털 전략팀'으로 합류합니다. 내부 인력은 후보자 수행과 조직에 집중하고, 콘텐츠와 브랜딩은 우리가 전담하여 시너지를 냅니다."
  },
  {
    question: "Q4. 비용은 어느 정도 수준인가요?",
    answer: "전담 인력 한 명을 채용하는 비용으로 영상 편집자, 디자이너, 카피라이터가 포함된 '팀'을 고용하는 것과 같습니다. 구체적인 견적은 상담을 통해 캠프 규모에 맞춰 제안 드립니다."
  }
];
