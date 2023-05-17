const source = "src"; // Название папки с исходными файлами
const build = "build"; // Название папки с готовыми файлами

// Экспортируем пути для gulpfile.js
module.exports = {
  project: build,

  src: {
    scss: [
      source + "/static/sass/style.scss",
      source + "/static/sass/basic/*.scss",
      source + "/components/**/*.scss"
    ],
    pug: source + "/pages/*.pug",
    js: [source + "/static/js/index.js"],
    fonts: source + "/static/fonts/*.{woff,woff2,eot,ttf}",
    img: [
      source + "/static/img/**/*.{png,jpg,jpeg,gif}",
      source + "/components/**/assets/*.*",
      "!src/static/img/png-sprite/*.*",
      "!src/static/img/svg-sprite/*.*"
    ],
    svg: [
      source + "/components/assets/**/*.svg",
      source + "/static/img/svg/**/*.svg"
    ],
    spritePNG: source + "/static/img/png-sprite/*.png",
    spriteSVG: source + "/static/img/svg-sprite/*.svg",
    public: source + "/public/**/*.*"
  },
  build: {
    styles: build,
    html: build,
    js: build + "/js",
    fonts: build + "/fonts",
    img: build + "/img",
    svg: build + "/img/svg",
    spritePNG: build + "/img/sprite",
    spriteSVG: build + "/img",
    spriteCSS: source + "/static/sass/sprite", // Генерируемый файл с данными для PNG-спрайта
    public: build
  },
  watch: {
    sass: [
      source + "/static/sass/**/*.scss",
      source + "/static/sass/basic/*.scss",
      source + "/components/**/*.scss"
    ],
    pug: [source + "/components/**/*.pug", source + "/pages/**/*.pug"],
    js: [source + "/static/js/*.js", source + "/components/**/*.js"],
    fonts: source + "/static/fonts/**/*.*",
    img: [source + "/components/**/assets/*.*", source + "/static/img/**/*.*"],
    svg: [
      source + "/components/assets/**/*.svg",
      source + "static/img/svg/**/*.svg"
    ],
    spritePNG: source + "/static/img/png-sprite/*.*",
    spriteSVG: source + "/static/img/svg-sprite/*.*",
    public: source + "/public"
  },
  addModule: {
    template: source + "/components/_template/*.*",
    result: source + "/components/"
  },
  addComponent: {
    template: source + "/components/_reactTemplate/*.*",
    result: source + "/components/ReactComponents/"
  },
  browserSync: {
    server: {
      baseDir: "./" + build,
      directory: true
    },
    tunnel: false,
    host: "localhost",
    port: 9000,
    logPrefix: "Local server"
  },
  public: source + "/public/*.*"

};
