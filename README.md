# myWebPanda 프로젝트 소개

## 프로젝트 취지
이 프로젝트는 블록체인 기술을 활용한 웹 애플리케이션의 개발 및 배포 경험을 쌓기 위해 진행되었습니다. Docker, AWS 클라우드 환경 등을 통해 복잡한 기술 스택을 구성하여 기술 역량을 증명하고자 했습니다.

---

## 사용 방법

1. **프로젝트 클론**  
   ```bash
   git clone https://github.com/habit80/myWebPanda.git
   ```

1. **디렉토리 이동**
   ```bash
   cd myWebPanda
   ```

1. **도커 컴포즈 실행**
   ```bash
   docker compose up --build
   ```

1. **브라우저에서 실행**

    브라우저에 http://localhost를 입력하여 애플리케이션에 접속합니다.


---

## 컨테이너 설명
- **Docker Container 01 (Nginx)**  
  클라이언트 요청을 처리하고 적절한 백엔드 서비스로 라우팅하는 리버스 프록시 역할을 수행합니다.

- **Docker Container 02 (Frontend & Blockchain App)**  
  React 기반 프론트엔드와 Flask 기반 블록체인 애플리케이션을 제공합니다. 지갑 생성, 거래 생성 및 확인 등의 기능을 포함합니다.

- **Docker Container 03 (Binance API)**  
  Binance API를 활용해 실시간 암호화폐 시세 데이터를 제공합니다.

- **Docker Container 06 (Bitcoin Core)**  
  블록체인 풀노드를 실행하여 네트워크 동기화를 담당합니다.

- **Docker Container 07 (Bitcoin Core Exporter)**  
  Bitcoin Core로부터 데이터를 수집하고, Prometheus에 전달합니다.

- **Docker Container 06 (Prometheus)**  
  Bitcoin Core Exporter에서 전달받은 데이터를 저장하고 분석합니다.

- **Docker Container 07 (Grafana)**  
  Prometheus 데이터를 기반으로 블록체인 네트워크 상태를 시각화합니다.

---

## Blockchain App 사용 방법

Blockchain App 사용 방법에 대한 자세한 내용은 [YouTube 가이드 영상](https://youtu.be/sOhKPgqjjYg?si=o0r9bq5zsOYMCKlr)을 참조해주세요.

## 참고 저장소 (License)

- Blockchain app : [Adil Moujahid의 Blockchain Python Tutorial](https://github.com/adilmoujahid/blockchain-python-tutorial) 
- Bitcoin exporter : [bitcoin-prometheus-exporter
](https://github.com/jvstein/bitcoin-prometheus-exporter)
