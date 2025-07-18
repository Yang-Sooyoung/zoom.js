### 📱 Zoom.js

Zoom.js는 Node.js, WebRTC, WebSocket을 활용한 실시간 화상회의 웹 애플리케이션 클론 프로젝트입니다.  
Zoom의 핵심 기능들을 학습하고 구현하기 위해 만들어졌으며, Express 기반 서버와 React 클라이언트가 결합되어 있습니다.

</br>

### 주요 기능

- **실시간 비디오/오디오 통신**: WebRTC를 이용한 P2P 미디어 스트림 전송  
- **실시간 메시징**: Socket.IO를 활용한 채팅 기능  
- **다중 사용자 참여**: 여러 참가자가 동시에 접속 가능  
- **React UI**: 사용자 친화적인 인터페이스 제공  
- **Express 서버**: API 및 정적 파일 서빙, Socket.IO 서버 역할 수행  

</br>

### 기술 스택

- **Backend**: Node.js, Express, Socket.IO  
- **Frontend**: React 18  
- **실시간 통신**: WebRTC, WebSocket (Socket.IO)  
- **템플릿 엔진**: Pug  
- **개발 도구**: Nodemon, Babel  

</br>

### 설치 및 실행 방법

1. 프로젝트 클론
   ```bash
   git clone https://github.com/Yang-Sooyoung/zoom.js.git
   cd zoom.js

2. 의존성 설치

   ```bash
   npm install
   ```

3. 개발 서버 실행

   ```bash
   npm run dev
   ```

   * nodemon이 자동으로 서버를 실행하고 변경 사항을 감지하여 재시작합니다.

4. 브라우저에서 접속

   ```
   http://localhost:3000
   ```

</br>

### 프로젝트 구조

```
/src                  # 서버 및 클라이언트 소스 코드
  /public             # 정적 파일 (React 빌드 결과물 포함 가능)
  /public/js/app.js   # React 클라이언트 엔트리
  /server.js          # Express 서버 진입점
  /views              # Pug 템플릿 파일
```

</br>

### 참고 및 학습 포인트

* Node.js와 Express를 이용한 서버 구성
* WebRTC API 활용 실시간 미디어 스트리밍
* Socket.IO를 통한 실시간 양방향 통신
* React를 통한 모던 UI 개발
* Babel 설정을 통한 최신 자바스크립트 문법 사용

</br>

#### 🙋‍♀️ 만든 사람

- 👩‍💻 이름: 양수영 (Yang Sooyoung)
- 🔗 GitHub: [@Yang-Sooyoung](https://github.com/Yang-Sooyoung)

<br/>

