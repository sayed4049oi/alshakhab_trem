module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(frontend)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.2_@types+node@24.12.3_react-dom@19.3.1_react@19.3.1__react@19.3.1_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.2_@types+node@24.12.3_react-dom@19.3.1_react@19.3.1__react@19.3.1_sass@1.77.4/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/icons'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/MediaImage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ScholarshipCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/TripCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/TravelGlobeLogo'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/content'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
async function HomePage() {
    const [trips, scholarships, settings] = await Promise.all([
        getFeaturedTrips(),
        getFeaturedScholarships(),
        getSiteSettings()
    ]);
    const travelHero = trips[0];
    const studyHero = scholarships[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "brand-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TravelGlobeLogo, {
                        variant: "hero"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "sr-only",
                        children: "الشيخاب للسفر والسياحة"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "#discover",
                        className: "brand-intro-action",
                        children: [
                            "اكتشف عالمنا",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↓"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "discover",
                className: "grid min-h-[92svh] scroll-mt-20 bg-[#071f30] text-white lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-pane group relative flex min-h-[46svh] items-end overflow-hidden p-7 sm:p-12 lg:min-h-[calc(92svh-5rem)] lg:p-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaImage, {
                                media: travelHero?.heroImage,
                                priority: true,
                                className: "absolute inset-0 h-full w-full object-cover transition duration-[1.5s] group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-[#051d2e] via-[#082b3e]/45 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-xs backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Plane, {
                                                className: "h-4 w-4 text-[#e3c46f]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this),
                                            " للسفر والسياحة"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-black leading-[1.35] sm:text-6xl",
                                        children: [
                                            "اكتشف العالم",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e3c46f]",
                                                children: "بطريقتك."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 max-w-md leading-8 text-slate-200",
                                        children: "رحلات مختارة بعناية، تفاصيل واضحة، ودعم يرافقك من الحجز حتى العودة."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/trips",
                                        className: "mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-[#08263a] transition hover:-translate-y-1",
                                        children: [
                                            "استكشف الرحلات ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Plane, {
                                className: "hero-cursor pointer-events-none absolute left-10 top-1/3 h-10 w-10 text-[#e3c46f] opacity-0 transition group-hover:opacity-100"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-pane group relative flex min-h-[46svh] items-end overflow-hidden border-white/15 p-7 sm:p-12 lg:min-h-[calc(92svh-5rem)] lg:border-r lg:p-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaImage, {
                                media: studyHero?.heroImage,
                                priority: true,
                                className: "absolute inset-0 h-full w-full object-cover transition duration-[1.5s] group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-[#071d31] via-[#102b4c]/55 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-xs backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GraduationCap, {
                                                className: "h-5 w-5 text-[#e3c46f]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            " للمنح والقبولات"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-black leading-[1.35] sm:text-6xl",
                                        children: [
                                            "ابنِ مستقبلك",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#e3c46f]",
                                                children: "من اليوم."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 max-w-md leading-8 text-slate-200",
                                        children: "نبحث معك عن الفرصة الأنسب ونجهّز ملفك خطوة بخطوة حتى التقديم."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/scholarships",
                                        className: "mt-7 inline-flex items-center gap-3 rounded-xl bg-[#d6af4b] px-6 py-3.5 font-bold text-[#08263a] transition hover:-translate-y-1",
                                        children: [
                                            "استكشف المنح ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GraduationCap, {
                                className: "hero-cursor pointer-events-none absolute left-10 top-1/3 h-11 w-11 text-[#e3c46f] opacity-0 transition group-hover:opacity-100"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#f6f3eb] py-20 dark:bg-[#071f30]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-12 max-w-2xl text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-kicker",
                                    children: "وجهتك تبدأ هنا"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: "عروض سفر صُنعت لتُعاش"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-copy",
                                    children: "اختر من تجاربنا المميزة، ويمكنك إضافة وإدارة كل العروض من لوحة المحتوى."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        trips.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                            children: trips.map((trip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TripCard, {
                                    trip: trip
                                }, trip.id, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                            href: "/admin/collections/trips",
                            label: "أضف أول رحلة من لوحة الإدارة"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "outline-button",
                                href: "/trips",
                                children: [
                                    "عرض جميع الرحلات ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white py-20 dark:bg-[#092536]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-12 max-w-2xl text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-kicker",
                                    children: "فرص بلا حدود"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: "منحة واحدة قد تغيّر كل شيء"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-copy",
                                    children: "فرص دراسية موثوقة مع شروط ومواعيد واضحة، ومراجعة أولية مجانية لملفك."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        scholarships.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                            children: scholarships.map((scholarship)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ScholarshipCard, {
                                    scholarship: scholarship
                                }, scholarship.id, false, {
                                    fileName: "[project]/src/app/(frontend)/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                            href: "/admin/collections/scholarships",
                            label: "أضف أول منحة من لوحة الإدارة"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "outline-button",
                                href: "/scholarships",
                                children: [
                                    "عرض جميع المنح ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden bg-[#082d43] py-20 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-32 -top-32 h-96 w-96 rounded-full border border-[#d6af4b]/20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(frontend)/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_.85fr] lg:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-[#e3c46f]",
                                        children: "كيف نعمل؟"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-3 text-4xl font-black leading-tight sm:text-5xl",
                                        children: [
                                            "من الحلم إلى الخطة،",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            "ومن الخطة إلى الوصول."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 max-w-xl leading-8 text-slate-300",
                                        children: "مسار واضح لا يتركك محتاراً. ابدأ بطلب مبدئي مجاني، وسيتواصل معك مستشار متخصص."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "mt-7 inline-flex rounded-xl bg-[#d6af4b] px-6 py-3.5 font-bold text-[#08263a]",
                                        children: "ابدأ استشارتك المجانية"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: [
                                    'اختر الرحلة أو الفرصة المناسبة',
                                    'أرسل طلبك ومستنداتك بأمان',
                                    'تابع كل تحديث من بوابتك الخاصة'
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d6af4b] font-black text-[#08263a]",
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Check, {
                                                className: "mr-auto h-5 w-5 text-[#e3c46f]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/src/app/(frontend)/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(frontend)/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(frontend)/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#f6f3eb] py-16 dark:bg-[#071f30]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-5xl grid-cols-3 gap-5 px-5 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                            value: settings.statistics?.trips ?? 120,
                            label: "رحلة ناجحة"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                            value: settings.statistics?.students ?? 85,
                            label: "طالباً مقبولاً"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                            value: settings.statistics?.countries ?? 24,
                            label: "دولة متاحة"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(frontend)/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(frontend)/page.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function Stat({ value, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "block text-3xl font-black text-[#b18624] sm:text-5xl",
                children: [
                    "+",
                    value
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-2 block text-xs text-slate-600 dark:text-slate-300 sm:text-sm",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/page.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
function EmptyState({ href, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-dashed border-[#d6af4b] p-12 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: "mt-4 inline-flex font-bold text-[#a87812]",
                children: "فتح لوحة الإدارة"
            }, void 0, false, {
                fileName: "[project]/src/app/(frontend)/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(frontend)/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(frontend)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(frontend)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c1y-_fvdtu0m._.js.map