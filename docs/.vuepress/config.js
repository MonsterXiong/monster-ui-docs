module.exports = {
  title: "MonsterUI",
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/favicon.ico",
    search: false,
    smoothScroll: true,
    sidebar: [
      {
        title: "开发指南",
        sidebarDepth: 0,
        collapsable: false,
        children: [
          ["/installation", "安装"],
          ["/quickstart", "快速上手"],
          ["/i18n", "国际化"],
          ["/custom-theme", "自定义主题"],
          ["/transition", "内置过渡动画"],
        ],
      },
      {
        title: "组件", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0, // 可选的, 默认值是 1
        children: [
          {
            title: "Basic",
            collapsable: false,
            sidebarDepth: 0,
            children: [
              "/layout",
              "/container",
              ["/color", "Color 色彩"],
              ["/typography", "Font 字体"],
              ["/border", "Border 边框"],
              "/icon",
              "/button",
              "/link",
            ],
          },
          {
            title: "Form",
            collapsable: false,
            sidebarDepth: 0,
            children: [
              "checkbox",
              "input",
              "input-number",
              "select",
              "cascader",
              "switch",
              "time-picker",
              "date-picker",
              "datetime-picker",
              "upload",
              "rate",
              "color-picker",
              "transfer",
              "form",
            ],
          },
          {
            title: "Data",
            collapsable: false,
            sidebarDepth: 0,
            children: [
              "/table",
              "/tag",
              "/progress",
              "/tree",
              "/pagination",
              "/badge",
              "avatar",
            ],
          },
          {
            title: "Notice",
            collapsable: false,
            sidebarDepth: 0,
            children: [
              "/alert",
              "/loading",
              "/message",
              "/message-box",
              "/notification",
            ],
          },
          {
            title: "Navigation",
            collapsable: false,
            sidebarDepth: 0,
            children: [
              "/menu",
              "/tabs",
              "/breadcrumb",
              "/page-header",
              "/dropdown",
              "/steps",
            ],
          },
          {
            title: "Others",
            collapsable: false,
            sidebarDepth: 0,
            children: [
              "/dialog",
              "/tooltip",
              "/popover",
              "/popconfirm",
              "/card",
              "/carousel",
              "/collapse",
              "/timeline",
              "/divider",
              "/calendar",
              "/image",
              "/backtop",
              "/infiniteScroll",
              "/drawer",
            ],
          },
        ],
      },
    ],
  },
  plugins: ["demo-container"],
};