const { src, dest, watch, parallel, series } = require("gulp");

const browserSync = require("browser-sync").create();
const scss = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const fonter = require("gulp-fonter");
const tt2woff2 = require("gulp-ttf2woff2");
const del = require("del");
const plumber = require("gulp-plumber");
const notifier = require("gulp-notifier");
const ghPages = require("gulp-gh-pages");

const buildPath = "./build";
const srcPath = "./src";

const path = {
  src: {
    html: `${srcPath}/*.html`,
    css: `${srcPath}/css/*.css`,
    scss: `${srcPath}/scss/style.scss`,
    js: `${srcPath}/js/**/*.js`,
    img: `${srcPath}/assets/img/**/*.{jpg,jpeg,png,svg,gif}`,
    videos: `${srcPath}/assets/vids/**/*.{mp4,mov,webm,mkv,avi}`,
    fonts: `${srcPath}/assets/fonts/**/*.{eot,ttf,woff,woff2,svg}`,
    favicon: `${srcPath}/favicon.{ico,png,svg}`,
  },
  build: {
    html: `${buildPath}/`,
    css: `${buildPath}/css/`,
    js: `${buildPath}/js/`,
    img: `${buildPath}/assets/images/`,
    videos: `${buildPath}/assets/videos/`,
    fonts: `${buildPath}/fonts/`,
    favicon: `${buildPath}/`,
  },
  watch: {
    html: `${srcPath}/*.html`,
    css: `${srcPath}/css/*.css`,
    scss: `${srcPath}/scss/**/*.scss`,
    js: `${srcPath}/js/**/*.js`,
    img: `${srcPath}/assets/img/**/*.{jpg,jpeg,png,svg,gif}`,
    videos: `${srcPath}/assets/vids/**/*.{mp4,mov,webm,mkv,avi}`,
    fonts: `${srcPath}/assets/fonts/**/*.{eot,ttf,woff,woff2,svg}`,
    favicon: `${srcPath}/favicon.{ico,png,svg}`,
  },
  clean: `${buildPath}/*`,
  ignore: {
    img: `!${buildPath}/assets`,
    fonts: `!${buildPath}/fonts`,
  },
  deploy: `${buildPath}/**/*`,
};

function sync() {
  browserSync.init({
    server: {
      baseDir: buildPath,
    },
    notify: false,
    port: 3000,
  });
}

function htmlTask() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
}

function cssTask() {
  return src(path.src.css)
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }));
}

function scssTask() {
  return src(path.src.scss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(scss())
    .pipe(autoprefixer({ overrideBrowserslist: ["last 5 version"] }))
    .pipe(dest(path.build.css))
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }));
}

function jsTask() {
  return src(path.src.js)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }));
}

function imgTask() {
  return src(path.src.img)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(newer(path.build.img))
    .pipe(webp())
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(newer(path.build.img))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 4 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: false }],
        }),
      ])
    )
    .pipe(dest(path.build.img));
}

function videoTask() {
  return src(path.src.videos)
    .pipe(dest(path.build.videos))
    .pipe(browserSync.reload({ stream: true }));
}

function fontsTask() {
  return src(path.src.fonts)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(newer(path.build.fonts))
    .pipe(fonter({ formats: ["eot", "ttf", "woff"] }))
    .pipe(dest(path.build.fonts))
    .pipe(tt2woff2())
    .pipe(dest(path.build.fonts));
}

function faviconTask() {
  return src(path.src.favicon).pipe(dest(path.build.favicon));
}

function cleanDest() {
  return del([path.clean, path.ignore.img, path.ignore.fonts]);
}

function deploy() {
  return src(path.deploy).pipe(ghPages());
}

function watcher() {
  watch([path.watch.html], htmlTask);
  watch([path.watch.css], cssTask);
  watch([path.watch.scss], scssTask);
  watch([path.watch.js], jsTask);
  watch([path.watch.img], imgTask);
  watch([path.watch.videos], videoTask);
  watch([path.watch.fonts], fontsTask);
  watch([path.watch.favicon], faviconTask);
}

const tasks = parallel(
  htmlTask,
  cssTask,
  scssTask,
  jsTask,
  imgTask,
  videoTask,
  fontsTask,
  faviconTask
);
const dev = series(cleanDest, tasks, parallel(watcher, sync));

exports.default = dev;
exports.deploy = deploy;
