//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFkOTJMc1Z6Y0MwWWthajBlU2RTcVBNeTMvU09oNVpyVjZ3MmRwKzVuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEhXcmNDK1FwZnFERlhoSjUrNHpUSmVsSDJvS2x3YXE3SURkYUFMYUxUVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TFlUVk5yVnVhV2lsbndwcnRwTm14MVdyaWdaNTRKT1VKTE1kMDhPSFZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvaGtBVldRRXZxYjZnQXpXRDZIbXd5WE5YK0wxZkY2T3dCQWk5d2VxcWhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNMUpybDRoL3U3UjlkUStUQ1M0eC9ObzV1ODJEbjBuS3FOckpmMklpRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVla3Y2RFRDTmdsb2RJc3IySkpaMkp0WVhOS0t5TzRzMmNKNXhaQWo2WEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5TcG04Y0FPRGlRU3Q2dDBSZkVrTWFhVlljSVB0cjViOGFLOWpaM2NVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0gxVUg1UFZBdFVqUnBJaExBRmJWQzljbjZ2NjlKZFFRaDZ2cGZ2MW5UTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNxYUhqeFQwd1lDY3dnajdnYnZpSjUxelRtb1pqeUEvQ25aSWw0S2dTdXJHakJqaHoxaGF1ZWczQmdGS3NuQVgyRDdDYWJkN3RSLzBvNkFJeWExaWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6Ikc1V0xDUmt3V1ZOek5FQjNpSVc4UjZ2MFRjT0plbXBFdVhjTEJQay9YYlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZNYWVwRWM2UmhDNVZoY3Mxekc4SGciLCJwaG9uZUlkIjoiMGEyMzY1MGItZmYyNS00ZDhlLWFlZmMtZWJhNjZhN2RmMmVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4xanhiYkNaT0hiU3hDSVEvSXRoUzdUN3Q3Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmclpCT1A3UWZPMGdQSklQTVpVblNIeSt2dG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVE1EOFNDQU0iLCJtZSI6eyJpZCI6Ijk0NzExMDM1MDMxOjcyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhc21pa2EiLCJsaWQiOiI5Nzk0NzM2NjczMTg0Nzo3MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tHNS9GUVF1ZmlieFFZWUhpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlptcVgrNXpXdnJRZWNtbm1Nem8vQnhTVHlJODVLS0dlZmo1RXlnZ1hHQ3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktWejdnWDlyS2UrejUzdC9XZ3NqNTQ4d1lNUWp0dTBwT2JwditiRi81KzJHRTVHeWo5WHJUeE4zc3A1UzRueVpISXhqV0s2L3dtYkxwcVkvUmxHMUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3NGVOcU15SU9ndDFoODBIeG1TSmNDakR1WGQwbFZCSDNCcXdtTldFL0xjc0tkdnBXODhRZERUSzV6MWF3ZVNOQnQvaERNMGs3SGtsZ3N5SXIyRnVoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzExMDM1MDMxOjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldacWwvdWMxcjYwSG5KcDVqTTZQd2NVazhpUE9TaWhubjQrUk1vSUZ4Z3IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTc3NDAyNiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
