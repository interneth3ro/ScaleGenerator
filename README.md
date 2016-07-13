# Guitar Scale Generator



Basic scale generator for guitar. Generate scales in all 12 keys for the Major key and all modes

### Quick start
**Make sure you have at least the latest version of Node and NPM**

```bash
# clone repo
git clone https://github.com/interneth3ro/ScaleGenerator.git

# change directory to repo
cd ScaleGenerator

# WINDOWS ONLY
# add required global libraries `typings webpack-dev-server rimraf webpack`
npm install -g typings webpack-dev-server rimraf webpack

# install the repo with npm
npm install

# WINDOWS ONLY
# install typings
npm run typings-install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr
```
go to [http://localhost:3000](http://localhost:3000) in your browser

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### run tests
```bash
npm run test
```