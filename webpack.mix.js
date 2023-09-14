const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// Rezolve Ziggy
mix.alias({
    ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue"),
});

// Build files
mix.js("resources/js/app.js", "public/js")
    .vue({ version: 2 })
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources/js"),
            },
        },
    })
    .extract()
    // .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .sass("resources/sass/app.scss", "public/css")
    .version();

mix.disableNotifications();
