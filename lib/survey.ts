import type { Locale } from './i18n';
export type SurveyAnswer = { topics: string[]; frequency: string; suggestion: string };
export const questionKeys = ['topics','frequency','suggestion'] as const;
export function validateAnswers(value: unknown): value is SurveyAnswer {
  if (!value || typeof value !== 'object') return false;
  const a = value as Record<string, unknown>;
  return Array.isArray(a.topics) && a.topics.length > 0 && a.topics.length <= 5 && a.topics.every(x => typeof x === 'string' && x.length <= 80) && typeof a.frequency === 'string' && ['Often','Sometimes','Rarely','First time','经常','有时','很少','第一次填写'].includes(a.frequency) && typeof a.suggestion === 'string' && a.suggestion.length <= 1200;
}
export function labels(locale: Locale) { return locale === 'zh' ? { topics:['科技','健康与身心','旅行','个人理财','美食与生活方式'], frequency:['经常','有时','很少','第一次填写'] } : { topics:['Technology','Health & wellness','Travel','Personal finance','Food & lifestyle'], frequency:['Often','Sometimes','Rarely','First time'] }; }
