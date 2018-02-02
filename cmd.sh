npm install -g browserify
npm install --save-dev babelify

browserify scripts/main.js scripts/lib/Util.js -t [ babelify --presets es2015 ] -o scripts/my.js




