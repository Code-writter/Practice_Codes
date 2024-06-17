"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.blogInput = exports.signInInput = exports.signupInput = void 0;
const zod_1 = __importStar(require("zod"));
exports.signupInput = zod_1.default.object({
    email: (0, zod_1.string)().email(),
    password: (0, zod_1.string)().min(6),
    name: (0, zod_1.string)().optional()
});
exports.signInInput = zod_1.default.object({
    email: (0, zod_1.string)().email(),
    password: (0, zod_1.string)().min(6)
});
exports.blogInput = zod_1.default.object({
    title: (0, zod_1.string)().max(20),
    content: (0, zod_1.string)().max(400)
});
exports.updateBlog = zod_1.default.object({
    title: (0, zod_1.string)().max(20),
    content: (0, zod_1.string)().max(400),
    authorId: (0, zod_1.string)()
});
