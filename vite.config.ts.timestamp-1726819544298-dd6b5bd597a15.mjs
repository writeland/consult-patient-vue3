// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/VScodeprogram/Vue/vue3.0/project%E7%BC%96%E5%86%99/consult-patient-vue3/node_modules/.pnpm/vite@5.4.6_@types+node@20.16.5_sass@1.78.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/VScodeprogram/Vue/vue3.0/project%E7%BC%96%E5%86%99/consult-patient-vue3/node_modules/.pnpm/@vitejs+plugin-vue@5.1.3_vite@5.4.6_@types+node@20.16.5_sass@1.78.0__vue@3.5.6_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/VScodeprogram/Vue/vue3.0/project%E7%BC%96%E5%86%99/consult-patient-vue3/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.5_@nuxt+kit@3.13.2_rollup@4.21.3__rollup@4.21.3_vite@5.4.6_@type_ve2wzy2ywrsbcwtgykmmhfjkdy/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///D:/VScodeprogram/Vue/vue3.0/project%E7%BC%96%E5%86%99/consult-patient-vue3/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.6_@nuxt+kit@3.13.2_rollup@4.21.3__rollup@4._qn4rgccnqd2lred75gk57rriha/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/VScodeprogram/Vue/vue3.0/project%E7%BC%96%E5%86%99/consult-patient-vue3/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.6_@nuxt+kit@3.13.2_rollup@4.21.3__rollup@4._qn4rgccnqd2lred75gk57rriha/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///D:/VScodeprogram/Vue/vue3.0/project%E7%BC%96%E5%86%99/consult-patient-vue3/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.6_@types+node@20.16.5_sass@1.78.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
var __vite_injected_original_import_meta_url = "file:///D:/VScodeprogram/Vue/vue3.0/project%E7%BC%96%E5%86%99/consult-patient-vue3/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    // 自动导入的插件，解析器可以是 vant element and-vue
    Components({
      dts: false,
      // 原因：Toast Confirm 这类组件的样式还是需要单独引入，样式全局引入了，关闭自动引入
      resolvers: [VantResolver({ importStyle: false })]
    }),
    vueDevTools(),
    createSvgIconsPlugin({
      // 指定图标文件夹，绝对路径（NODE代码）
      // eslint-disable-next-line no-undef
      iconDirs: [path.resolve(process.cwd(), "src/icons")]
    })
  ],
  // base: '/hz', 设置基础路径import.meta.env.url
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxWU2NvZGVwcm9ncmFtXFxcXFZ1ZVxcXFx2dWUzLjBcXFxccHJvamVjdFx1N0YxNlx1NTE5OVxcXFxjb25zdWx0LXBhdGllbnQtdnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVlNjb2RlcHJvZ3JhbVxcXFxWdWVcXFxcdnVlMy4wXFxcXHByb2plY3RcdTdGMTZcdTUxOTlcXFxcY29uc3VsdC1wYXRpZW50LXZ1ZTNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1ZTY29kZXByb2dyYW0vVnVlL3Z1ZTMuMC9wcm9qZWN0JUU3JUJDJTk2JUU1JTg2JTk5L2NvbnN1bHQtcGF0aWVudC12dWUzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgVmFudFJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG4vLyBzdmdcdTYzRDJcdTRFRjZcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTc2ODRcdTYzRDJcdTRFRjZcdUZGMENcdTg5RTNcdTY3OTBcdTU2NjhcdTUzRUZcdTRFRTVcdTY2MkYgdmFudCBlbGVtZW50IGFuZC12dWVcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGR0czogZmFsc2UsXG4gICAgICAvLyBcdTUzOUZcdTU2RTBcdUZGMUFUb2FzdCBDb25maXJtIFx1OEZEOVx1N0M3Qlx1N0VDNFx1NEVGNlx1NzY4NFx1NjgzN1x1NUYwRlx1OEZEOFx1NjYyRlx1OTcwMFx1ODk4MVx1NTM1NVx1NzJFQ1x1NUYxNVx1NTE2NVx1RkYwQ1x1NjgzN1x1NUYwRlx1NTE2OFx1NUM0MFx1NUYxNVx1NTE2NVx1NEU4Nlx1RkYwQ1x1NTE3M1x1OTVFRFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKHsgaW1wb3J0U3R5bGU6IGZhbHNlIH0pXVxuICAgIH0pLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgLy8gXHU2MzA3XHU1QjlBXHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XHVGRjBDXHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHVGRjA4Tk9ERVx1NEVFM1x1NzgwMVx1RkYwOVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2ljb25zJyldXG4gICAgfSlcbiAgXSxcbiAgLy8gYmFzZTogJy9oeicsIFx1OEJCRVx1N0Y2RVx1NTdGQVx1Nzg0MFx1OERFRlx1NUY4NGltcG9ydC5tZXRhLmVudi51cmxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFgsU0FBUyxlQUFlLFdBQVc7QUFFL1osU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRzdCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sVUFBVTtBQVZzTixJQUFNLDJDQUEyQztBQWF4UixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUE7QUFBQSxJQUVKLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQTtBQUFBLE1BRUwsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLE1BQU0sQ0FBQyxDQUFDO0FBQUEsSUFDbEQsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLElBQ1oscUJBQXFCO0FBQUE7QUFBQTtBQUFBLE1BR25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsV0FBVyxDQUFDO0FBQUEsSUFDckQsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
