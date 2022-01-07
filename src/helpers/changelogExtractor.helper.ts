//ایجاد اسپینر
export const ora = require("ora")
//دسترسی به فایل های سیستمی
export const os = require("os")
export const fs = require("fs")
//برای کار کردن با مسیر ها
export const path = require("path")
export const zipDir = require("zip-dir")
//اجرای کامند ها داخل جاوااسکریپت** اصل داستان همین بزرگواره**
export const shell = require("shell")
//این یکی نمی دونم چیه باید بپرسی حتما
export const consola = require("consola")
export const packageJson = require("/package.json")


//این برای زمانی که فرایند داره طی میشه، یه اسپینر تک بیتی میوفته
const spinner = new ora({text: "Extracting changes..."})

//بپرس حتما ***
shell.config.silent = true

//اینجا اسم فایل خروجی رو ست میکنم
const distName = `ReactCrypto-v-${packageJson.version}`
//ادرس فایل خروجی رو تنظیم می کنم
const changeLogDir = path.resolve(__dirname, `../version/${distName}`)