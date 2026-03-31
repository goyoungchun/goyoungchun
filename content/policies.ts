import type { PrivacyPolicy } from '@/types/policy'

export const policies: PrivacyPolicy[] = [
  {
    slug: 'diario',
    productName: '디아리오 : AI 일기',
    effectiveDate: '2026-03-31',
    contactEmail: 'goyoungchun1@gmail.com',
    sections: [
      {
        title: '개인정보처리방침 개요',
        body: '디아리오 : AI 일기(이하 "디아리오")는 사용자가 하루의 경험과 감정을 더 쉽게 기록할 수 있도록 돕는 대화형 일기 서비스입니다. 디아리오는 개인의 기록과 감정 표현을 다루는 서비스인 만큼, 개인정보 보호와 신뢰를 핵심 운영 원칙으로 삼습니다. 본 개인정보처리방침은 디아리오가 어떤 정보를 수집하거나 처리할 수 있는지, 어떤 목적으로 사용하는지, 이용자가 어떤 권리를 가질 수 있는지를 설명합니다.',
        titleEn: 'Overview',
        bodyEn: 'Diario: AI Diary ("Diario") is a conversational diary service designed to help users record their day, thoughts, and emotions more easily. Because Diario handles personal writing and reflective content, privacy protection and trust are treated as core operating principles. This Privacy Policy explains what information Diario may collect or process, why that information may be used, and what rights users may have.',
      },
      {
        title: '수집하거나 처리할 수 있는 정보',
        body: '디아리오는 카카오, 구글, 애플, 이메일 기반 로그인 또는 계정 식별 과정에서 필요한 정보(예: 로그인 식별자, 이메일 주소, 닉네임, 언어 및 시간대 정보)를 처리할 수 있습니다. 또한 사용자가 입력한 대화 내용, 생성된 일기 초안, 저장된 일기, 주간 회고 결과, 기기 정보, 앱 버전, 이용 기록, 오류 로그, 알림 설정 정보 등을 서비스 운영과 품질 개선을 위해 처리할 수 있습니다. 실제 수집 항목은 서비스 기능 구성과 운영 방식에 따라 달라질 수 있습니다.',
        titleEn: 'Information We May Collect',
        bodyEn: 'Diario may process information required for account identification or login through Kakao, Google, Apple, or email-based sign-in, such as login identifiers, email address, nickname, language, and timezone information. Diario may also process user conversation content, generated diary drafts, saved diary entries, weekly reflection outputs, device information, app version, usage records, error logs, and notification settings for service operation and quality improvement. The exact categories of information processed may vary depending on the final product configuration and operating model.',
      },
      {
        title: '개인정보의 이용 목적',
        body: '수집 또는 처리된 정보는 회원 식별, 로그인 유지, 일기 초안 생성, 기록 저장, 주간 회고 제공, 이용자 문의 대응, 서비스 안정성 확보, 보안 점검, 오류 분석, 기능 개선, 결제 또는 구독 상태 확인 등 디아리오의 핵심 기능 제공을 위해 사용될 수 있습니다. 디아리오는 사용자의 기록 경험을 돕기 위한 서비스이며, 의료 행위, 심리 상담, 치료 또는 진단을 제공하는 서비스가 아닙니다.',
        titleEn: 'Purpose of Use',
        bodyEn: 'Processed information may be used for user identification, maintaining login sessions, generating diary drafts, saving records, providing weekly reflection features, responding to user inquiries, securing service stability, performing security checks, analyzing errors, improving product features, and verifying payment or subscription status where applicable. Diario is a service intended to support personal recording and reflection; it is not a medical, counseling, therapy, or diagnostic service.',
      },
      {
        title: 'AI 처리 및 민감한 기록 정보',
        body: '디아리오는 사용자가 입력한 하루의 사건, 감정, 기억, 개인적 고민 등 민감할 수 있는 내용을 AI 처리에 활용할 수 있습니다. 이러한 정보는 사용자가 요청한 일기 초안 생성, 기록 정리, 회고 기능 제공을 위한 범위 안에서 처리됩니다. 현재 디아리오는 OpenAI 서비스를 활용할 예정이며, 사용자가 입력한 일부 정보가 해당 기능 제공을 위해 외부 AI 처리 환경으로 전달될 수 있습니다. 실제 서비스 운영 시 적용되는 저장 방식, 암호화 수준, 데이터 최소화 방식, 추가 외부 제공자 연동 여부에 따라 보호 방식이 달라질 수 있으므로, 운영 구조가 확정되면 본 방침도 이에 맞게 추가 보완될 수 있습니다.',
        titleEn: 'AI Processing and Sensitive Content',
        bodyEn: 'Diario may use AI processing for potentially sensitive information entered by users, including daily events, emotions, memories, and personal concerns. Such information may be processed only within the scope necessary to generate diary drafts, organize records, and provide reflection features requested by the user. Diario currently plans to use OpenAI services, and certain user-provided information may therefore be transmitted to an external AI processing environment for feature delivery. Protection measures may vary depending on the final storage model, encryption level, data minimization methods, and any additional third-party integrations, so this policy may be further updated when the production architecture is finalized.',
      },
      {
        title: '보관 기간, 삭제, 제3자 서비스',
        body: '디아리오는 서비스 제공에 필요한 범위 내에서만 개인정보를 보관하며, 관련 법령상 보존 의무가 있는 경우를 제외하고는 목적 달성 후 지체 없이 파기 또는 삭제를 검토합니다. 사용자는 앱 내 기능 또는 문의를 통해 기록 삭제를 요청할 수 있으며, 일부 정보는 백업, 보안 대응, 분쟁 대응, 법적 의무 이행을 위해 일정 기간 추가 보관될 수 있습니다. 또한 서비스 운영 과정에서 OpenAI와 같은 외부 AI 서비스, 그리고 향후 필요에 따라 호스팅, 인증, 분석, 오류 추적, 결제, 푸시 알림 등의 외부 서비스가 활용될 수 있습니다. OpenAI 외의 구체적인 제3자 서비스가 확정되는 경우, 본 방침에 이를 추가로 반영합니다.',
        titleEn: 'Retention, Deletion, and Third-Party Services',
        bodyEn: 'Diario retains personal information only to the extent necessary to provide the service and will review deletion or destruction without undue delay once the processing purpose has been fulfilled, unless retention is required by applicable law. Users may request deletion of their records through in-app functionality or by contacting the operator. Certain information may be retained for a limited period for backup, security response, dispute handling, or legal compliance. Diario may also use third-party services such as OpenAI and, in the future, may use additional external providers for hosting, authentication, analytics, crash monitoring, payments, push notifications, or related operations. If providers other than OpenAI are confirmed, this policy will be updated accordingly.',
      },
      {
        title: '이용자 권리 및 문의처',
        body: '이용자는 자신의 개인정보와 기록 데이터에 대해 열람, 수정, 삭제, 처리 문의를 요청할 수 있습니다. 디아리오의 개인정보 처리에 관한 문의는 goyoungchun1@gmail.com 으로 접수할 수 있습니다. 본 문서는 MVP 출시를 위한 운영 초안으로, 실제 서비스 출시 전 최종 기능과 데이터 흐름을 기준으로 다시 검토 및 보완될 수 있습니다.',
        titleEn: 'User Rights and Contact',
        bodyEn: 'Users may request access to, correction of, deletion of, or inquiries about their personal information and record data. Questions regarding Diario’s privacy practices may be submitted to goyoungchun1@gmail.com. This document is an operational draft for MVP release preparation and may be reviewed and updated again based on the final functionality and production data flows before broader release.',
      },
    ],
  },
]
