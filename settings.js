//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : MATRIX-X-KING
// @author : MATRIX
// @telegram : http://t.me/MatriXXXXXXXXX
// @github : Matrix1999
// @whatsapp : +233593734312

//----------------------[ MATRIX-KING ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'QUEEN-ADIZA~WNAH1bYa#B9Jx8eI2ZCrxgvoWmLJ-yaJSrMtz6tm8wJRv1IOEQiY' 
//Enter your Adiza session id here; must start with QUEEN~ADIZA~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'Queen-Adiza' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '917500410061' 


//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Rahul.sinduriya' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Queen-Adiza" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Adizatu" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";

//-----------------[ PREMIUM API SETTINGS ]-----------------//
global.premiumApiUrl = process.env.PREMIUM_API_URL || 'http://adiza-apikey.godpapa.xyz:9000'; // 

//-----------------[ PREMIUM BOTAPI KEY ]-----------------//

global.botApiKey = process.env.BOT_API_KEY || '817ea26bbcffd66de089c3647290c311'; 


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_matrix?igsh=YzljYTk1ODg3Zg---"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "®𝘼𝙙𝙞𝙯𝙖𝙩𝙪🌹"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©Matrix', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ MATRIX-X ]----------------------//
