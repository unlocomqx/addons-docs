const {description} = require("../../package");

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
    ["meta", {name: "apple-mobile-web-app-status-bar-style", content: "black"}]
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
    logo: "/images/tunisoft.png",
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
        {
          title: "Product Configuration",
          path: "/dynamicproduct/product-config/",
          collapsable: true,
          children: [
            "product-config/06-settings.md",
            "product-config/07-fields.md",
            "product-config/08-formulas.md",
            "product-config/15-combinations.md",
            "product-config/16-visibility.md",
            "product-config/09-conditions.md",
            "product-config/10-field-formulas.md",
            "product-config/11-proportions.md",
            "product-config/12-intervals.md",
            "product-config/13-grids.md",
            "product-config/14-groups.md",
          ],
        },
        "15-formula-functions.md",
        "16-php-calculation.md",
        "17-custom-scripts.md",
        "18-carrier-filtering.md",
        "19-dynamic-content.md",
        "20-troubleshooting.md",
        "21-debug-mode.md",
        "22-custom-style.md",
        "23-extra-fields.md",
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
        "07-downloads",
        "08-troubleshooting",
      ]
    },
    sidebarDepth: 3
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "vuepress-plugin-zooming",
    "vuepress-plugin-smooth-scroll",
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-177220990-1'
      }
    ]
  ],

  markdown: {
    extendMarkdown: md => {
      // md.set({ breaks: true })
      if (process.env.NODE_ENV === "production") {
        md.use(require('./resize-images'));
      }
    }
  },
};
