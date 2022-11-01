module.exports = function(eleventyConfig) {

    // Pour cloner le dossier css dans le dossier public
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/svg");
    eleventyConfig.addPassthroughCopy("./src/css");

    // Pour générer le dossier public à partir du dossier src
    return  {
        dir: {
            input: "src",
            output: "public"
        }
    }
};