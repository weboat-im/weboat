import React from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';
import { ServiceItem, FaqItem, FeatureItem } from './types.ts';

export const RESERVATION_LOGS = [
  "서울 종로구 구의원 출마 예정자 상담 예약 완료",
  "춘천시장 출마 예정자  상담 예약 완료",
  "동해시의원 출마 예정자 상담 예약 중",
  "경기도 동두천시장 출마 예정자 상담 예약 중",
  "경기도 남양주시 시의원 출마 예정자 상담 예약 완료",
  "광주광역시 시의원 출마 예정자 상담 예약 중",
  "충주시장 출마 예정자 상담 예약 중"
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "SNS 홍보팀 패키지",
    description: "단기간 내 유권자와의 접점을 넓혀 인지도를 올고자 하는 캠프를 위한 실전형 홍보 솔루션입니다.",
    features: [
      "쇼츠·릴스 제작",
      "후보 심층 인터뷰 & 브랜딩",
      "정책 카드뉴스, 웹포스터",
      "SNS 채널 컨설팅 및 모니터링"
    ]
  },
  {
    title: "캠프 홍보 총괄 패키지",
    description: "캠프 홍보의 모든 것, 하나의 팀이 총괄합니다. 압도적인 후보자 브랜딩을 완성해 모든 홍보 실무를 해결합니다.",
    features: [
      "SNS홍보팀 패키지 전체 포함",
      "현장 브이로그 및 롱폼 영상 제작",
      "오프라인 패키지 디자인",
      "캠페인 및 유세 기획",
      "선거사무소 세팅 가이드",
      "24시간 핫라인"
    ]
  },
  {
    title: "내 캠프에 맞는\n홍보팀 구성 확인하기",
    description: "선택 기준은 ‘예산’이 아니라 ‘캠프 구조’입니다. 후보님의 캠프 구조에 최적화된 '홍보팀'을 선택해보세요.",
    features: [],
    isHighlight: true
  }
];

export const FEATURES: FeatureItem[] = [
  {
    icon: <Award className="w-8 h-8 text-lime-400" />,
    title: "지역구 독점 마크",
    description: "우리는 승리할 후보에만 집중합니다. 동일 지역구 내 경쟁 후보의 의뢰는 절대 받지 않습니다."
  },
  {
    icon: <Zap className="w-8 h-8 text-lime-400" />,
    title: "실전형 속도",
    description: "선거판은 속도전입니다. 소스 투입 시 3~12시간 이내 콘텐츠화하여 실시간 여론에 대응해 골든타임을 놓치지 않습니다."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-lime-400" />,
    title: "검증된 실무 전문성",
    description: "다년간 캠프 홍보 실무를 경험한 인력이 정치적 리스크를 고려해 문제가 생기지 않는 콘텐츠를 기획·제작합니다."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Q1. 우리 캠프 상황에 맞게 조정이 가능한가요?",
    answer: "가능합니다. 지역구 특성과 후보자님의 일정에 맞춰 콘텐츠의 비중과 우선순위를 유연하게 설계합니다."
  },
  {
    question: "Q2. 선거법 등 정치적 리스크는 안전한가요?",
    answer: "그렇습니다. 모든 콘텐츠는 선거법 가이드라인과 정치적 맥락을 최우선으로 고려합니다. 후보자가 직접 수습할 일이 생기지 않도록 선제적으로 검토하고 제작합니다."
  },
  {
    question: "Q3. 캠프에 일부 홍보 인력이 있어도 이용할 수 있나요?",
    answer: "물론입니다. 기존 인력의 업무 과부하를 줄이는 '전담 파트너' 역할을 수행합니다. 내부 인력과 역할이 겹치지 않도록 조율하여 홍보 효율을 극대화합니다."
  },
  {
    question: "Q4. 현수막·공보물 등 인쇄까지 진행해주나요?",
    answer: "어떤 인쇄소에서도 즉시 사용 가능한 '최종 인쇄용 데이터'를 완벽하게 제작해 드립니다. 캠프가 지정한 인쇄소를 그대로 활용하시거나, 필요 시 검증된 파트너 업체를 연결해 드립니다."
  }
];