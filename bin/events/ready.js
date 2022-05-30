"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'ready',
    once: true,
    execute(client) {
        var _a;
        console.log(`Logged in as ${(_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
    },
};
