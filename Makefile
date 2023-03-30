app: down up install run

up:
	docker-compose -f .docker/docker-compose.yml up -d --build

down:
	docker-compose -f .docker/docker-compose.yml down

build:
	docker-compose -f .docker/docker-compose.yml build --no-cache

install:
	docker exec -t dimalos-blog-app bash -c 'npm install'

run:
	docker exec -t dimalos-blog-app bash -c 'npm run dev'