module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import '@/scss/settings/_00-feature-detection.scss';
                    @import '@/scss/settings/_00-queries.scss';
                    @import '@/scss/settings/_01-dimensions.scss';
                    @import '@/scss/settings/_02-colours.scss';
                    @import '@/scss/settings/_04-mixins.scss';
                    @import '@/scss/settings/_05-typography.scss';
                `
            }
        }
    }
}
