start:
	node app.js

build-docker:
	docker build -t diogofilipedocker/dummy-app .

push-docker:
	docker push diogofilipedocker/dummy-app

run-docker:
	docker run -it -p 8080:8080 dummy-app

deploy-kubernetes:
	kubectl apply -f kubernetes/