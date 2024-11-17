const {description} = require("../../package")

const ogprefix = "og: http://ogp.me/ns#"

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "Addons Documentations",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ["meta", {name: "theme-color", content: "#00aff0"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ["meta", {name: "apple-mobile-web-app-status-bar-style", content: "black"}],
        ["meta", {prefix: ogprefix, property: "og:image", content: "/images/social-preview.jpg"}],
        ["script", {
            src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components/prism-phpdoc.js",
            defer: true
        }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: "https://github.com/unlocomqx/addons-docs",
        editLinks: true,
        docsBranch: "main",
        docsDir: "docs/src",
        editLinkText: "",
        lastUpdated: true,
        logo: "/optimized/images/tunisoft.webp",
        nav: [
            {
                text: "Dynamic Product",
                link: "/dynamicproduct/",
            },
            {
                text: "Product Designer",
                link: "/productdesigner/"
            },
            {
                text: "PrestaShop Addons",
                link: "https://addons.prestashop.com/en/2_community-developer?contributor=179195"
            }
        ],
        sidebar: {
            "/dynamicproduct/": [
                "",
                "02-installation.md",
                "03-updates.md",
                "04-configuration.md",
                "29-common-cases.md",
                {
                    title: "Product configuration",
                    path: "/dynamicproduct/product-config/",
                    collapsable: true,
                    children: [
                        "product-config/06-settings.md",
                        "product-config/07-fields.md",
                        "product-config/18-calculation.md",
                        "product-config/08-formulas.md",
                        "product-config/15-combinations.md",
                        "product-config/16-visibility.md",
                        "product-config/09-conditions.md",
                        "product-config/10-field-formulas.md",
                        "product-config/11-proportions.md",
                        "product-config/12-intervals.md",
                        "product-config/13-grids.md",
                        "product-config/14-groups.md",
                        "product-config/17-steps.md",
                    ],
                },
                "15-formula-functions.md",
                "26-dynamic-preview.md",
                "16-php-calculation.md",
                "17-custom-scripts.md",
                "18-carrier-filtering.md",
                "19-dynamic-content.md",
                "20-troubleshooting.md",
                "21-debug-mode.md",
                "22-custom-style.md",
                "28-custom-hook.md",
                "23-extra-fields.md",
                "24-migration.md",
                "25-webservice.md",
                "27-custom-fields.md",
            ],
            "/productdesigner/": [
                "",
                "02-installation",
                "05-updates.md",
                "03-configuration",
                {
                    title: "Product Configuration",
                    path: "/productdesigner/product-config/",
                    collapsable: true,
                    children: [
                        "product-config/04-main.md",
                        "product-config/26-combinations.md",
                        "product-config/05-tabs.md",
                        "product-config/06-sides.md",
                        "product-config/07-images.md",
                        "product-config/08-product-colors.md",
                        "product-config/09-product-size.md",
                        "product-config/10-real-size.md",
                        "product-config/11-visual-options.md",
                        "product-config/12-fonts.md",
                        "product-config/13-text-colors.md",
                        "product-config/14-image-colors.md",
                        "product-config/15-image-filters.md",
                        "product-config/25-image-shapes.md",
                        "product-config/15-image-groups.md",
                        "product-config/16-areas.md",
                        "product-config/17-fields.md",
                        "product-config/18-design-options.md",
                        "product-config/19-text-options.md",
                        "product-config/20-image-options.md",
                        "product-config/21-text-pricing.md",
                        "product-config/22-image-pricing.md",
                        "product-config/23-side-pricing.md",
                        "product-config/24-bulk-copy.md",
                    ],
                },
                "04-color-theme",
                "06-custom-style",
                "15-custom-script",
                "12-custom-hook",
                "07-downloads",
                "08-troubleshooting",
                "09-compatibility-with-dynamic.md",
                "10-combination-images.md",
                "13-initial-design.md",
                "11-migration.md",
                "14-pricing-plugin.md",
                "16-translation.md"
            ],
            "/prestashop/": [
                "",
                "01-customization.md",
                "02-translation.md",
                "03-update.md",
                "04-support.md",
            ],
            "/layerstack/": [
                "",
                "01-product-config.md",
                "02-settings.md",
                "03-options.md",
                "04-generating.md",
            ],
            "/devtools/": [
                "",
                "01-getting-started.md",
                "02-hooks-list.md",
                "03-tools.md",
                "04-overriding-files.md",
                "05-backups.md",
            ],
        },
        sidebarDepth: 3,
        activeHeaderLinks: false,
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        ["@vuepress/plugin-search",
            {
                // Placeholder for the search input box
                placeholder: "Search",

                // The depth of headings to include in search index
                maxSuggestions: 10,

                // Custom search options (Optional)
                //algolia: {
                //  apiKey: '<YOUR_ALGOLIA_API_KEY>',
                //  indexName: '<YOUR_ALGOLIA_INDEX_NAME>'
                //},
            }],
        "vuepress-plugin-zooming",
        "vuepress-plugin-smooth-scroll",
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
        [
            "@vuepress/google-analytics",
            {
                "ga": "UA-177220990-1"
            }
        ],
        ["@snowdog/vuepress-plugin-pdf-export", {

        }],
    ],

    markdown: {
        extendMarkdown: md => {
            // md.set({ breaks: true })
            if (process.env.NODE_ENV === "production") {
                md.use(require("./resize-images"))
            }
        }
    },

    evergreen: true,
}
