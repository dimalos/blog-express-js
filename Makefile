up:
	docker-compose -f .docker/docker-compose.yml up -d --build --force-recreate

build:
	docker-compose -f .docker/docker-compose.yml build --no-cache