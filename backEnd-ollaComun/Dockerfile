FROM maven:3.8.4-openjdk-17-slim AS build

COPY src /home/app/src
COPY pom.xml /home/app

RUN mvn -f /home/app/pom.xml clean package -DskipTests

FROM eclipse-temurin:17-alpine

LABEL authors="erik_antony"

COPY --from=build /home/app/target/backEnd-ollaComun-0.0.1-SNAPSHOT.jar /usr/local/lib/ollacomun.jar

ENTRYPOINT ["java","-jar","/usr/local/lib/ollacomun.jar"]