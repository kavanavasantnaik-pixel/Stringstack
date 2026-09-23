# ---- Stage 1: build the Spring Boot jar with Maven ----
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

COPY pom.xml .
COPY .mvn .mvn
COPY mvnw mvnw
COPY src src

RUN chmod +x mvnw
RUN ./mvnw -B -DskipTests package

# ---- Stage 2: minimal Java runtime image ----
FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/target/stringstack-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]