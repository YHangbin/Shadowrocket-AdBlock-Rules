// spotify_adblock.js
// 移除 Spotify Home 接口中的广告 section，防止黑框

let obj = JSON.parse($response.body);

// 处理 items 字段
if (obj && obj.items) {
    obj.items = obj.items.filter(
        i => !/brand-ad/.test(i.sectionId || "") &&
             !(i.entity && /NFL Sunday Ticket/i.test(i.entity.title || ""))
    );
}

// 处理 sections 字段
if (obj && obj.sections) {
    obj.sections = obj.sections.filter(
        s => !/brand-ad/.test(s.sectionId || "") &&
             !(s.entity && /NFL Sunday Ticket/i.test(s.entity.title || ""))
    );
}

$done({ body: JSON.stringify(obj) });
