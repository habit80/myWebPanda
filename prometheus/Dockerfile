# Prometheus 공식 이미지 사용
FROM prom/prometheus:latest

# Prometheus 설정 파일을 컨테이너로 복사
COPY prometheus.yml /etc/prometheus/prometheus.yml

# 기본 포트 9090 노출
EXPOSE 9090

# Prometheus 실행
CMD ["--config.file=/etc/prometheus/prometheus.yml"]

