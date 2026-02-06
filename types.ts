import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  isHighlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}