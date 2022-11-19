/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	didin: 'https://didinbotz-apiii.herokuapp.com/',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'a82716863f',
	'https://didinbotz-apiii.herokuapp.com': 'didin',
}

// Other
global.owner = ['6283164445159']
global.wangsaf= ['+0']
global.ownernomer = "6283164445159"
global.premium = ['6283164445159']
global.packname = '𝐑𝐄𝐕𝐎𝐋𝐓'
global.author = '𝐑𝐄𝐕𝐎𝐋𝐓'
global.namabot = 'コック- 𝐁𝐎𝐓'
global.sessionName = 'コック- 𝐁𝐎𝐓'
global.prefa = ['','!','.','#','&']
global.namebotmu = 'コック- 𝐁𝐎𝐓'
global.tutorial = 'https://youtu.be/c/mrrevolt'
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    verify: 'Daftar Dulu Kk, Cara Daftar nya Ketik .menu',
    owner: 'Fitur Khusus Owner Bot',
    api: 'Mungkin Api Nya Eror cok?',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '[❗] SEDANG DIPROSES',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.thumb = fs.readFileSync('./DidinMedia/didin.png')
global.didinbc = fs.readFileSync('./DidinMedia/didinbc.png')
global.rules = fs.readFileSync('./DidinMedia/rules.jpg')
global.xc = fs.readFileSync('DidinMedia/didinxc.jpg')
global.mygit = 'https://www.revolt.my.id/'
global.myyt = 'https://instagram.com/im.revolt'
global.myytv = 'https://instagram.com/im.revolt'
global.botname = 'コック- 𝐁𝐎𝐓'
global.akulaku = '𝐑𝐄𝐕𝐎𝐋𝐓'
global.ytname = '@𝐌𝐫𝐑𝐞𝐯𝐨𝐥𝐭'
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
