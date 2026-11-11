(()=>{"use strict";module.exports = [
"[project]/.next-internal/server/app/(frontend)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(frontend)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60e85e33711b228e0d5e5fe95204ff75e8ab7e5add",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$frontend$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$frontend$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(frontend)/login/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(frontend)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/(frontend)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(frontend)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$frontend$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(frontend)/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/src/app/(frontend)/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001eaf6631fa7440c268008934b0352406d3cfcc21":{"name":"logoutAction"},"6081aa2101699dfa423909dd44092563c358520d22":{"name":"signupAction"},"608f5c900989676f3b14ed4f52df985aa2819f0e4c":{"name":"createApplicationAction"},"60d5494dbd5bbd5037333bb1c0f6e66e70a31bc6b1":{"name":"uploadDocumentAction"},"60e85e33711b228e0d5e5fe95204ff75e8ab7e5add":{"name":"loginAction"},"60e9f9d894891c5d0232a519b1bebfccbce408e8d0":{"name":"contactAction"}},"src/app/(frontend)/actions.ts",""] */ __turbopack_context__.s([
    "contactAction",
    ()=>contactAction,
    "createApplicationAction",
    ()=>createApplicationAction,
    "loginAction",
    ()=>loginAction,
    "logoutAction",
    ()=>logoutAction,
    "signupAction",
    ()=>signupAction,
    "uploadDocumentAction",
    ()=>uploadDocumentAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.2_@types+node@24.12.3_react-dom@19.3.1_react@19.3.1__react@19.3.1_sass@1.77.4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.2_@types+node@24.12.3_react-dom@19.3.1_react@19.3.1__react@19.3.1_sass@1.77.4/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.2_@types+node@24.12.3_react-dom@19.3.1_react@19.3.1__react@19.3.1_sass@1.77.4/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$app$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/app-auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payload.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.2_@types+node@24.12.3_react-dom@19.3.1_react@19.3.1__react@19.3.1_sass@1.77.4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const text = (data, key, max = 500)=>{
    const value = data.get(key);
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
};
async function loginAction(_, data) {
    const email = text(data, 'email', 200).toLowerCase();
    const password = text(data, 'password', 200);
    if (!email || !password) return {
        ok: false,
        message: 'أدخل البريد الإلكتروني وكلمة المرور.'
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$app$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appAuth"].login(email, password);
    } catch  {
        return {
            ok: false,
            message: 'بيانات الدخول غير صحيحة، حاول مرة أخرى.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
async function signupAction(_, data) {
    const name = text(data, 'name', 120);
    const email = text(data, 'email', 200).toLowerCase();
    const password = text(data, 'password', 200);
    const accountType = text(data, 'accountType', 20);
    if (!name || !email || password.length < 8) {
        return {
            ok: false,
            message: 'أدخل بيانات صحيحة وكلمة مرور من 8 أحرف على الأقل.'
        };
    }
    if (![
        'traveler',
        'student'
    ].includes(accountType)) {
        return {
            ok: false,
            message: 'اختر نوع الحساب.'
        };
    }
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadClient"])();
        await payload.create({
            collection: 'users',
            overrideAccess: false,
            data: {
                name,
                email,
                password,
                accountType: accountType
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$app$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appAuth"].login(email, password);
    } catch  {
        return {
            ok: false,
            message: 'تعذر إنشاء الحساب. قد يكون البريد مستخدماً مسبقاً.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
async function logoutAction() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$app$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appAuth"].logout();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
}
async function contactAction(_, data) {
    const name = text(data, 'name', 120);
    const email = text(data, 'email', 200).toLowerCase();
    const phone = text(data, 'phone', 40);
    const message = text(data, 'message', 2000);
    if (!name || !email.includes('@') || message.length < 10) {
        return {
            ok: false,
            message: 'يرجى إكمال الاسم والبريد وكتابة رسالة واضحة.'
        };
    }
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadClient"])();
        await payload.create({
            collection: 'contact-submissions',
            overrideAccess: false,
            data: {
                name,
                email,
                phone,
                message
            }
        });
        return {
            ok: true,
            message: 'تم إرسال رسالتك بنجاح، وسنتواصل معك قريباً.'
        };
    } catch  {
        return {
            ok: false,
            message: 'تعذر إرسال الرسالة الآن. حاول مرة أخرى.'
        };
    }
}
async function uploadDocumentAction(_, data) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$app$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appAuth"].currentUser();
    if (!user) return {
        ok: false,
        message: 'يجب تسجيل الدخول أولاً.'
    };
    const file = data.get('file');
    const label = text(data, 'label', 100);
    if (!(file instanceof File) || file.size === 0 || !label) {
        return {
            ok: false,
            message: 'اختر ملفاً واكتب اسمه.'
        };
    }
    if (file.size > 8 * 1024 * 1024) return {
        ok: false,
        message: 'حجم الملف يجب ألا يتجاوز 8 ميغابايت.'
    };
    if (![
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/webp'
    ].includes(file.type)) {
        return {
            ok: false,
            message: 'الملفات المقبولة: PDF وJPG وPNG وWEBP.'
        };
    }
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadClient"])();
        const bytes = Buffer.from(await file.arrayBuffer());
        await payload.create({
            collection: 'documents',
            overrideAccess: false,
            user,
            data: {
                label,
                owner: user.id
            },
            file: {
                data: bytes,
                mimetype: file.type,
                name: file.name,
                size: file.size
            }
        });
        return {
            ok: true,
            message: 'تم رفع المستند وحفظه بأمان.'
        };
    } catch  {
        return {
            ok: false,
            message: 'تعذر رفع المستند الآن.'
        };
    }
}
async function createApplicationAction(_, data) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$app$2d$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appAuth"].currentUser();
    if (!user) return {
        ok: false,
        message: 'يجب تسجيل الدخول أولاً.'
    };
    const type = text(data, 'type', 20);
    const notes = text(data, 'notes', 1000);
    if (![
        'trip',
        'scholarship',
        'visa'
    ].includes(type)) {
        return {
            ok: false,
            message: 'اختر نوع الطلب.'
        };
    }
    try {
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPayloadClient"])();
        await payload.create({
            collection: 'applications',
            overrideAccess: false,
            user,
            data: {
                type: type,
                notes,
                owner: user.id,
                reference: `ST-${Date.now().toString(36).toUpperCase()}`,
                status: 'received'
            }
        });
        return {
            ok: true,
            message: 'تم إنشاء طلبك، وسيبدأ الفريق بمراجعته.'
        };
    } catch  {
        return {
            ok: false,
            message: 'تعذر إنشاء الطلب الآن.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAction,
    signupAction,
    logoutAction,
    contactAction,
    uploadDocumentAction,
    createApplicationAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "60e85e33711b228e0d5e5fe95204ff75e8ab7e5add", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signupAction, "6081aa2101699dfa423909dd44092563c358520d22", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAction, "001eaf6631fa7440c268008934b0352406d3cfcc21", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(contactAction, "60e9f9d894891c5d0232a519b1bebfccbce408e8d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadDocumentAction, "60d5494dbd5bbd5037333bb1c0f6e66e70a31bc6b1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$2_$40$types$2b$node$40$24$2e$12$2e$3_react$2d$dom$40$19$2e$3$2e$1_react$40$19$2e$3$2e$1_$5f$react$40$19$2e$3$2e$1_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createApplicationAction, "608f5c900989676f3b14ed4f52df985aa2819f0e4c", null);
}),
"[project]/src/lib/app-auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appAuth",
    ()=>appAuth
]);
const appAuth = {
    async currentUser () {
        return null;
    },
    async login (_email, _password) {},
    async logout () {}
};
}),
"[project]/src/lib/payload.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPayloadClient",
    ()=>getPayloadClient
]);
const emptyResult = {
    docs: [],
    totalDocs: 0,
    limit: 20,
    totalPages: 0,
    page: 1
};
async function getPayloadClient() {
    return {
        find: async ()=>emptyResult,
        create: async ({ data })=>data
    };
}
}),
];})()

//# sourceMappingURL=_208iso-_lb89d._.js.map