import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            outDir: "build",
            manifest: {
                name: "Molly the dog",
                short_name: "Molly",
                description: "Сайт про жизнь нашей собаки",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "images/android-icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "images/ms-310x310.png",
                        sizes: "310x310",
                        type: "image/png",
                    },
                ],
            },
            devOptions: {
                enabled: true,
            },
        }),
    ],
});
