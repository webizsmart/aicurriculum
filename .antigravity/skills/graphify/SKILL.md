# 🕸️ Graphify Skill (Token Optimizer)
name: graphify
description: 프로젝트 전체 구조를 지식 그래프로 변환하여 토큰 사용량을 70배 이상 절감하고 정밀한 코드 분석을 수행합니다.
trigger: /graphify

---

## 🎯 설계 목적
사용자님의 전체 코드베이스와 문서를 다 읽으려면 막대한 토큰이 소모됩니다. 
이 스킬은 **[핵심 관계]**만을 추출하여 그래프화함으로써, 필요한 부분만 정밀 타격하여 코딩하게 만듭니다.

## 🛠️ 실행 프로세스 (Antigravity 전용)

### Step 1. 그래프 빌드 (최초 1회 또는 업데이트 시)
사용자가 `/graphify`를 입력하면 다음 명령을 수행합니다:
```bash
# 1. 런타임 및 패키지 확인
python3 -c "import graphify" 2>/dev/null || pip install graphifyy -q --break-system-packages

# 2. 지식 추출 및 그래프 생성
graphify . --mode deep
```

### Step 2. 토큰 최적화 분석 (Token-Efficient Context)
코드 수정 명령이 들어왔을 때, 모든 파일을 읽기 전 반드시 **[God Nodes]**와 **[Surprising Connections]**를 먼저 확인합니다:
*   `graphify-out/graph.json`을 로드하여 수정 대상 파일과 가장 밀접하게 연결된 '숨겨진 의존성'을 먼저 찾습니다.
*   관련 없는 파일은 컨텍스트에서 제외하여 토큰을 보존합니다.

## 📋 핵심 규칙
1. **Source of Truth**: 모든 관계 추출물에는 `EXTRACTED` 또는 `INFERRED` 태그를 붙여 기술적 신뢰도를 명시합니다.
2. **Context Compression**: 2,000단어 이상의 문서는 그래프 요약본으로 대체하여 읽습니다.
3. **Audit Trail**: 모든 수정 제안 시 그래프 상의 어떤 노드(기능)에 영향을 주는지 사전 경고합니다.

---
*Inspired by safishamsi/graphify - Applied to gStack Workflows*
