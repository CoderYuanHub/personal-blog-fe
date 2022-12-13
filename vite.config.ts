import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const baseConfig = {
    publicDir: "public",
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
  const otherConfig = {};
  if (command === "serve") {
    const devConfig = {
      server: {
        host: "localhost",
        port: 8080,
        proxy: {},
      },
    };
    Object.assign(otherConfig, devConfig);
  } else {
    const buildConfig = {
      build: {
        outDir: "front", // 打包文件夹名称
        assetsDir: "assets", // 指定生成静态资源的存放路径
        assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为base64编码,以避免额外的http请求,设置为0可以完全禁用此项
        reportCompressedSize: true, // 计算打包大小
        chunkSizeWarningLimit: 1000, // 包大小超过1000控制台警告
        rollupOptions: {
          output: {
            chunkFileNames: "js/[name]-[hash].js", //入口文件名
            entryFileNames: "js/[name]-[hash].js", //出口文件名位置
            assetFileNames: "[ext]/[name]-[hash].[ext]",
          },
        },
      },
    };
    Object.assign(otherConfig, buildConfig);
  }
  return Object.assign(baseConfig, otherConfig);
});
