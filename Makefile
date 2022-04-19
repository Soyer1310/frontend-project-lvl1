install: install-deps
	npm ci

brain-games: run brain-games.js
	node bin/brain-games.js