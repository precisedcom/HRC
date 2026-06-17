/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Consultant {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  availableDays: string[];
}

export type IndustryType = 'Technology' | 'Financial Services' | 'Healthcare' | 'Logistics & Supply';

export interface MarketMetrics {
  industry: IndustryType;
  avgSalary: number;
  timeToHireDays: number;
  demandIndex: 'High' | 'Very High' | 'Moderate';
  topRowRole: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    points: { hrcTrack: 'culture' | 'retention' | 'speed' | 'sourcing'; value: number };
  }[];
}

export interface AssessmentResult {
  title: string;
  scoreLabel: string;
  description: string;
  recommendations: string[];
}
