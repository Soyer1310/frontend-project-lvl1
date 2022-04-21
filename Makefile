install: #установить зависимости
	npm ci

brain-games: #запустить brain-games
	node bin/brain-games.js 

publish: #запустить отладку публикации
	npm publish --dry-run

lint: #запустить eslint
	npx eslint .