# Docker Container README

## Prerequisites
- Docker installed on your machine

## Running the Docker Container

1. Clone the repository:
    ```bash
    git clone https://github.com/vassilYanakiev/backend-daily-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd backend-daily-app
    ```

3. Build the Docker image:
    ```bash
    docker build -t vassilyanakiev146/server-daily-app .
    ```

4. Run the Docker container with port forwarding:
    ```bash
    docker run -p 8080:8080 your-image-name
    ```

    This command maps port 8080 on your local machine to port 80 inside the container.

5. Access the application in your browser:
    ```
    http://localhost:8080
    ```

6. Open shell inside the container:
    ```bash
    docker run -it your-container-id sh
    ```



 # Docker Compose README

1.  Docker run image
    ```bash
    docker-compose up -d
    ```

2. Docker build & run image
    ```bash
    docker-compose up --build
    ```

3. Stop docker containers
    ```bash
    docker-compose down
    ```

