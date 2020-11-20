install:
	npm ci

install-local:
	npm install
	chmod +x bin/*.js
	npm link

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
