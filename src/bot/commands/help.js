const { MessageEmbed } = require("discord.js");
const quickdb = require("quick.db");

module.exports = {
  name: "help",
  cooldown: 7,
  aliases: ["مساعده"],
  run: async (client, message) => {
    var prefix = quickdb.fetch(`Prefix_${message.guild.id}`);
    if (prefix == null)
      quickdb.set(
        `Prefix_${message.guild.id}`,
        require("../../config/bot").prefix
      );
    message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "قائمة المساعده 🕌",
          "https://athkarapp.com/images/athkarLogo.png"
        )
        .setThumbnail(client.user.avatarURL({ dynaimc: true }))
        .setColor(0x2f3136)
        .setFooter(
          client.user.username,
          client.user.avatarURL({ dynaimc: true })
        ).setDescription(`


*أوامر عامه**
> 🕌 \`${prefix}help\` 
> 🕌 \`${prefix}ping\` 

**أوامر الأذكار**
> 🕌 \`${prefix}set-azkar-channel\`
> 🕌 \`${prefix}set-azkar-embed\` 
> 🕌 \`${prefix}set-azkar-toggle\` 
> 🕌 \`${prefix}morning\` 
> 🕌 \`${prefix}evening\` 
> 🕌 \`${prefix}mos7f\` 

**أوامر القرءان**
> 🕌 \`${prefix}set-quran-channel\`
> 🕌 \`${prefix}set-quran-toggle\`
> 🕌 \`${prefix}quran\`

**Perfix Bot**: \`${prefix}\`
 

**روابط تابعة للبوت:**
**[سيرفر الدعم الفني](https://discord.gg/qAGeKu3wNx) \`|\` [الموقع الخاص بالبوت](coming soon ) \`|\` [التصويت للبوت](coming soon) 
 \`|\` [اضافة البوت](https://discord.com/api/oauth2/authorize?client_id=756968531446202399&permissions=3201024&scope=bot)**`)
      // .addFields(
      //   { name: `> ${prefix}help`, value: "**`للحصول على قاءمة السماعده`**", inline: false },
      //   { name: `> ${prefix}support`, value: "**`للحصول على روابط مساعدة البوت`**", inline: false },
      //   { name: `> ${prefix}ping`, value: "**`للحصول على نتيجه ببينج البوت`**", inline: false },
      //   { name: `_ _`, value: "_ _", inline: false },
      //   { name: `> ${prefix}set-azkar-channel`, value: "**`لتحديد روم نشر الأذكار`**", inline: false },
      //   { name: `> ${prefix}set-azkar-embed`, value: "**`للتغير ما بين نظام نشر الأذكار من رساءل عاديه ل رساءل ايمبد`**", inline: false },
      //   { name: `> ${prefix}set-azkar-toggle`, value: "**`لايقاف و تشغيل نظام أرسال الأذكار`**", inline: false },
      //   { name: `> ${prefix}morning`, value: "**`للحصول على اذكار الصباح`**", inline: false },
      //   { name: `> ${prefix}evening`, value: "**`للحصول على اذكار المساء`**", inline: false },
      //   { name: `> ${prefix}mos7f`, value: "**`للحصول على صفحات المصحف الكريم`**", inline: false },
      //   { name: `_ _`, value: "_ _", inline: false },
      //   { name: `> ${prefix}set-quran-channel`, value: "**`لتحديد روم اذاعة القرءان الكريم`**", inline: false },
      //   { name: `> ${prefix}set-quran-toggle`, value: "**`لاقاف و تشغيل نظام أذاعة القرءان الكريم`**", inline: false },
      //   { name: `> ${prefix}quran`, value: "**`لتشغيل صور معينه في القرءان الكريم`**", inline: false },
      // )
    );
  }
};
