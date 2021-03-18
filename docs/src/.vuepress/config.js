const {description} = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Addons Documentation",
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
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
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
        {
          title: "Guide",
          path: "/dynamicproduct/",
          collapsable: false,
          children: [
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
          ]
        }
      ],
    },
    sidebarDepth: 3
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "vuepress-plugin-smooth-scroll",
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
  ]
};
