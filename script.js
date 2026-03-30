// Supabase 配置
const SUPABASE_URL = 'https://aeihcgfxroeksyiraqmz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_iplBVpLsu7cO8nsfMGCweA_HkPyC2Us';

// 初始化 Supabase 客户端
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 生成或获取唯一用户 ID
// 从 URL 参数中获取共享 ID（如果有的话）
const urlParams = new URLSearchParams(window.location.search);
let sharedUserId = urlParams.get('sharedId');

// 如果有共享 ID，使用共享 ID；否则使用本地存储的 ID
let userId = sharedUserId || localStorage.getItem('tianjin_user_id');
if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    localStorage.setItem('tianjin_user_id', userId);
}

// 生成共享链接的函数
function generateShareLink() {
    const baseUrl = window.location.href.split('?')[0];
    return `${baseUrl}?sharedId=${userId}`;
}

const categories = [
    { id: 'all', name: '全部' },
    { id: 'cold', name: '凉菜' },
    { id: 'hot', name: '热菜' },
    { id: 'soup', name: '汤品' },
    { id: 'staple', name: '主食' },
    { id: 'drink', name: '酒水饮料' }
];

const dishesData = [
    { id: 1, name: '凉拌海蜇皮', price: 38, category: 'cold', desc: '爽脆可口，酸甜开胃' },
    { id: 2, name: '天津酱牛肉', price: 58, category: 'cold', desc: '酱香浓郁，肉质鲜嫩' },
    { id: 3, name: '麻酱黄瓜', price: 22, category: 'cold', desc: '清香爽口，芝麻酱香浓' },
    { id: 4, name: '松花蛋豆腐', price: 28, category: 'cold', desc: '软嫩爽滑，风味独特' },
    { id: 5, name: '凉拌木耳', price: 26, category: 'cold', desc: '口感爽脆，营养丰富' },
    { id: 6, name: '糖蒜', price: 18, category: 'cold', desc: '酸甜脆嫩，解腻佳品' },
    { id: 7, name: '老醋花生', price: 20, category: 'cold', desc: '酥脆酸甜，下酒好菜' },
    { id: 8, name: '凉拌海带丝', price: 24, category: 'cold', desc: '酸辣爽口，开胃小菜' },
    { id: 9, name: '蒜泥白肉', price: 42, category: 'cold', desc: '肥而不腻，蒜香四溢' },
    { id: 10, name: '凉拌苦瓜', price: 22, category: 'cold', desc: '清爽苦香，清热解毒' },
    { id: 11, name: '天津盐水鸭', price: 68, category: 'cold', desc: '皮白肉嫩，咸香可口' },
    { id: 12, name: '凉拌莲藕', price: 26, category: 'cold', desc: '脆嫩爽口，酸甜开胃' },
    { id: 13, name: '夫妻肺片', price: 52, category: 'cold', desc: '麻辣鲜香，牛肉牛杂' },
    { id: 14, name: '凉拌金针菇', price: 24, category: 'cold', desc: '口感劲道，香辣开胃' },
    { id: 15, name: '天津腊肠', price: 48, category: 'cold', desc: '香气浓郁，咸甜适中' },
    { id: 16, name: '狗不理包子', price: 48, category: 'hot', desc: '皮薄馅大，汤汁鲜美，天津特色' },
    { id: 17, name: '八珍豆腐', price: 58, category: 'hot', desc: '豆腐嫩滑，海鲜丰富，营养美味' },
    { id: 18, name: '贴饽饽熬小鱼', price: 68, category: 'hot', desc: '饽饽金黄，小鱼酥烂，地道农家味' },
    { id: 19, name: '锅塌里脊', price: 42, category: 'hot', desc: '色泽金黄，外酥里嫩，口感香醇' },
    { id: 20, name: '清炒虾仁', price: 88, category: 'hot', desc: '虾仁饱满，鲜嫩爽口，清淡美味' },
    { id: 21, name: '红烧肘子', price: 98, category: 'hot', desc: '肥而不腻，入口即化，喜庆硬菜' },
    { id: 22, name: '糖醋鲤鱼', price: 78, category: 'hot', desc: '外酥里嫩，酸甜可口，造型美观' },
    { id: 23, name: '独面筋', price: 38, category: 'hot', desc: '面筋劲道，酱汁浓郁，天津风味' },
    { id: 24, name: '软炸虾仁', price: 72, category: 'hot', desc: '外酥里嫩，虾仁 Q 弹，老少皆宜' },
    { id: 25, name: '扒肉条', price: 58, category: 'hot', desc: '肉质软烂，咸香可口，传统名菜' },
    { id: 26, name: '炒青虾仁', price: 82, category: 'hot', desc: '虾仁翠绿，鲜嫩清甜，健康美味' },
    { id: 27, name: '天津扣肉', price: 68, category: 'hot', desc: '肥而不腻，梅菜香浓，下饭神器' },
    { id: 28, name: '土豆辣子', price: 32, category: 'hot', desc: '土豆软糯，辣椒香辣，家常美味' },
    { id: 29, name: '豆角肉片', price: 36, category: 'hot', desc: '豆角鲜嫩，肉片香滑，下饭好菜' },
    { id: 30, name: '鱼香肉丝', price: 38, category: 'hot', desc: '酸甜辣咸，肉丝嫩滑，经典川菜' },
    { id: 31, name: '宫保鸡丁', price: 42, category: 'hot', desc: '麻辣鲜香，花生酥脆，鸡肉嫩滑' },
    { id: 32, name: '木须肉', price: 36, category: 'hot', desc: '木耳鸡蛋，肉片香嫩，营养均衡' },
    { id: 33, name: '糖醋里脊', price: 48, category: 'hot', desc: '外酥里嫩，酸甜可口，老少皆宜' },
    { id: 34, name: '红烧肉', price: 58, category: 'hot', desc: '肥而不腻，入口即化，经典家常菜' },
    { id: 35, name: '红烧排骨', price: 68, category: 'hot', desc: '肉质软烂，酱香浓郁，美味可口' },
    { id: 36, name: '干煸豆角', price: 38, category: 'hot', desc: '豆角干香，麻辣开胃，下饭菜' },
    { id: 37, name: '地三鲜', price: 36, category: 'hot', desc: '土豆茄子青椒，鲜香下饭，东北菜' },
    { id: 38, name: '西红柿炒鸡蛋', price: 26, category: 'hot', desc: '酸甜可口，营养丰富，家常小炒' },
    { id: 39, name: '酸辣土豆丝', price: 24, category: 'hot', desc: '酸辣爽口，土豆丝脆，开胃小菜' },
    { id: 40, name: '鱼香茄子', price: 32, category: 'hot', desc: '茄子软烂，鱼香味浓，下饭好菜' },
    { id: 41, name: '肉末茄子', price: 36, category: 'hot', desc: '茄子香嫩，肉末香滑，美味可口' },
    { id: 42, name: '红烧豆腐', price: 28, category: 'hot', desc: '豆腐嫩滑，酱汁浓郁，简单美味' },
    { id: 43, name: '麻婆豆腐', price: 32, category: 'hot', desc: '麻辣鲜香，豆腐嫩滑，川菜经典' },
    { id: 44, name: '韭菜炒鸡蛋', price: 26, category: 'hot', desc: '韭菜鲜香，鸡蛋滑嫩，家常小炒' },
    { id: 45, name: '青椒炒肉丝', price: 34, category: 'hot', desc: '青椒爽脆，肉丝香嫩，下饭好菜' },
    { id: 46, name: '洋葱炒鸡蛋', price: 28, category: 'hot', desc: '洋葱香甜，鸡蛋滑嫩，营养丰富' },
    { id: 47, name: '蒜薹炒肉', price: 38, category: 'hot', desc: '蒜薹鲜嫩，肉片香滑，应季美味' },
    { id: 48, name: '西芹百合', price: 32, category: 'hot', desc: '西芹脆嫩，百合清甜，清淡爽口' },
    { id: 49, name: '荷兰豆炒虾仁', price: 78, category: 'hot', desc: '荷兰豆脆，虾仁鲜嫩，健康美味' },
    { id: 50, name: '腰果虾仁', price: 98, category: 'hot', desc: '腰果酥脆，虾仁鲜美，高档菜品' },
    { id: 51, name: '清蒸鲈鱼', price: 128, category: 'hot', desc: '鱼肉鲜嫩，清蒸原味，营养丰富' },
    { id: 52, name: '红烧带鱼', price: 68, category: 'hot', desc: '带鱼鲜嫩，酱香浓郁，海鲜美味' },
    { id: 53, name: '干烧黄鱼', price: 158, category: 'hot', desc: '黄鱼鲜美，干烧入味，海鲜名菜' },
    { id: 54, name: '糖醋带鱼', price: 72, category: 'hot', desc: '外酥里嫩，酸甜可口，带鱼美味' },
    { id: 55, name: '炸河虾', price: 58, category: 'hot', desc: '河虾酥脆，鲜香可口，下酒好菜' },
    { id: 56, name: '辣炒花蛤', price: 48, category: 'hot', desc: '花蛤鲜嫩，麻辣开胃，海鲜小菜' },
    { id: 57, name: '蒜蓉粉丝蒸扇贝', price: 88, category: 'hot', desc: '扇贝鲜美，蒜香浓郁，海鲜美味' },
    { id: 58, name: '清蒸大闸蟹', price: 0, category: 'hot', desc: '蟹肉鲜美，蟹黄饱满，秋季佳肴' },
    { id: 59, name: '白灼虾', price: 98, category: 'hot', desc: '虾肉鲜嫩，原汁原味，海鲜美味' },
    { id: 60, name: '油焖大虾', price: 128, category: 'hot', desc: '大虾鲜美，油焖入味，海鲜名菜' },
    { id: 61, name: '葱烧海参', price: 268, category: 'hot', desc: '海参软糯，葱香浓郁，高档名菜' },
    { id: 62, name: '红烧鱿鱼', price: 88, category: 'hot', desc: '鱿鱼鲜嫩，酱香浓郁，海鲜美味' },
    { id: 63, name: '辣炒蛏子', price: 52, category: 'hot', desc: '蛏子鲜嫩，麻辣开胃，海鲜小菜' },
    { id: 64, name: '清蒸皮皮虾', price: 138, category: 'hot', desc: '皮皮虾鲜，清蒸原味，海鲜美味' },
    { id: 65, name: '酱爆鸡丁', price: 42, category: 'hot', desc: '鸡丁嫩滑，酱香浓郁，北京名菜' },
    { id: 66, name: '京酱肉丝', price: 40, category: 'hot', desc: '肉丝香嫩，酱香浓郁，卷饼美味' },
    { id: 67, name: '糖醋排骨', price: 58, category: 'hot', desc: '外酥里嫩，酸甜可口，经典名菜' },
    { id: 68, name: '无锡排骨', price: 78, category: 'hot', desc: '肉质软烂，甜咸适口，无锡名菜' },
    { id: 69, name: '东坡肉', price: 68, category: 'hot', desc: '肥而不腻，入口即化，杭州名菜' },
    { id: 70, name: '叫花鸡', price: 138, category: 'hot', desc: '鸡肉鲜嫩，香气四溢，江苏名菜' },
    { id: 71, name: '盐水虾', price: 88, category: 'hot', desc: '虾肉鲜嫩，咸香可口，清淡美味' },
    { id: 72, name: '醉虾', price: 118, category: 'hot', desc: '虾鲜肉嫩，酒香浓郁，特色美味' },
    { id: 73, name: '蟹粉豆腐', price: 98, category: 'hot', desc: '蟹粉鲜美，豆腐嫩滑，高档菜品' },
    { id: 74, name: '虾子冬笋', price: 68, category: 'hot', desc: '冬笋脆嫩，虾子鲜美，应季美味' },
    { id: 75, name: '红烧狮子头', price: 78, category: 'hot', desc: '肉丸软烂，鲜香可口，淮扬名菜' },
    { id: 76, name: '扬州炒饭', price: 48, category: 'hot', desc: '米饭粒粒分明，配料丰富，炒饭经典' },
    { id: 77, name: '蛋炒饭', price: 28, category: 'hot', desc: '米饭金黄，蛋香四溢，简单美味' },
    { id: 78, name: '肉丝炒饭', price: 36, category: 'hot', desc: '米饭香嫩，肉丝鲜美，美味炒饭' },
    { id: 79, name: '咖喱牛肉炒饭', price: 48, category: 'hot', desc: '咖喱香浓，牛肉鲜嫩，特色炒饭' },
    { id: 80, name: '咸鱼鸡粒炒饭', price: 52, category: 'hot', desc: '咸鱼香浓，鸡粒鲜嫩，港式炒饭' },
    { id: 81, name: '干炒牛河', price: 42, category: 'hot', desc: '河粉爽滑，牛肉鲜嫩，粤菜经典' },
    { id: 82, name: '炒河粉', price: 32, category: 'hot', desc: '河粉爽滑，配菜丰富，美味可口' },
    { id: 83, name: '炒米粉', price: 28, category: 'hot', desc: '米粉劲道，配菜丰富，美味可口' },
    { id: 84, name: '炒年糕', price: 36, category: 'hot', desc: '年糕软糯，配菜鲜美，韩式风味' },
    { id: 85, name: '麻辣烫', price: 48, category: 'hot', desc: '麻辣鲜香，食材丰富，川味小吃' },
    { id: 86, name: '麻辣香锅', price: 68, category: 'hot', desc: '麻辣鲜香，食材丰富，自选搭配' },
    { id: 87, name: '酸辣汤', price: 28, category: 'soup', desc: '酸辣开胃，暖身暖胃' },
    { id: 88, name: '番茄蛋汤', price: 22, category: 'soup', desc: '酸甜可口，营养丰富' },
    { id: 89, name: '冬瓜丸子汤', price: 32, category: 'soup', desc: '清淡鲜美，丸子嫩滑' },
    { id: 90, name: '紫菜蛋花汤', price: 18, category: 'soup', desc: '清淡爽口，制作简单' },
    { id: 91, name: '玉米排骨汤', price: 48, category: 'soup', desc: '玉米香甜，排骨软烂，营养丰富' },
    { id: 92, name: '萝卜排骨汤', price: 42, category: 'soup', desc: '萝卜清甜，排骨软烂，滋补养生' },
    { id: 93, name: '海带排骨汤', price: 46, category: 'soup', desc: '海带鲜嫩，排骨软烂，营养丰富' },
    { id: 94, name: '莲藕排骨汤', price: 48, category: 'soup', desc: '莲藕粉糯，排骨软烂，滋补汤品' },
    { id: 95, name: '番茄牛肉汤', price: 58, category: 'soup', desc: '番茄酸甜，牛肉鲜嫩，美味汤品' },
    { id: 96, name: '西湖牛肉羹', price: 42, category: 'soup', desc: '牛肉嫩滑，羹汤鲜美，杭州名汤' },
    { id: 97, name: '鱼头豆腐汤', price: 58, category: 'soup', desc: '鱼头鲜美，豆腐嫩滑，营养丰富' },
    { id: 98, name: '鲫鱼汤', price: 48, category: 'soup', desc: '鲫鱼鲜美，汤汁奶白，滋补养生' },
    { id: 99, name: '王八汤', price: 168, category: 'soup', desc: '甲鱼鲜美，滋补养生，高档汤品' },
    { id: 100, name: '乌鸡汤', price: 88, category: 'soup', desc: '乌鸡鲜嫩，滋补养生，女性佳品' },
    { id: 101, name: '鸽子汤', price: 78, category: 'soup', desc: '鸽子鲜嫩，滋补养生，营养丰富' },
    { id: 102, name: '老鸭汤', price: 68, category: 'soup', desc: '老鸭软烂，汤鲜味美，滋补养生' },
    { id: 103, name: '丝瓜蛋汤', price: 28, category: 'soup', desc: '丝瓜鲜嫩，蛋花清香，清淡汤品' },
    { id: 104, name: '苦瓜排骨汤', price: 42, category: 'soup', desc: '苦瓜苦香，排骨软烂，清热解毒' },
    { id: 105, name: '银耳莲子汤', price: 32, category: 'soup', desc: '银耳软糯，莲子清甜，美容养颜' },
    { id: 106, name: '米饭', price: 2, category: 'staple', desc: '香软可口，粒粒分明' },
    { id: 107, name: '馒头', price: 3, category: 'staple', desc: '暄软可口，麦香浓郁' },
    { id: 108, name: '花卷', price: 3, category: 'staple', desc: '层次分明，咸香可口' },
    { id: 109, name: '包子', price: 4, category: 'staple', desc: '皮薄馅大，鲜香可口' },
    { id: 110, name: '饺子', price: 28, category: 'staple', desc: '皮薄馅大，蘸料美味' },
    { id: 111, name: '馄饨', price: 22, category: 'staple', desc: '皮薄馅嫩，汤鲜味美' },
    { id: 112, name: '面条', price: 18, category: 'staple', desc: '面条劲道，卤汁美味' },
    { id: 113, name: '牛肉面', price: 38, category: 'staple', desc: '牛肉软烂，面条劲道' },
    { id: 114, name: '炸酱面', price: 28, category: 'staple', desc: '炸酱香浓，面条劲道' },
    { id: 115, name: '担担面', price: 26, category: 'staple', desc: '麻辣鲜香，面条劲道' },
    { id: 116, name: '阳春面', price: 18, category: 'staple', desc: '清淡爽口，面条劲道' },
    { id: 117, name: '炒饭', price: 28, category: 'staple', desc: '米饭金黄，蛋香四溢' },
    { id: 118, name: '炒面', price: 26, category: 'staple', desc: '面条劲道，配菜丰富' },
    { id: 119, name: '炒饼', price: 24, category: 'staple', desc: '饼丝劲道，配菜丰富' },
    { id: 120, name: '煎饼果子', price: 12, category: 'staple', desc: '天津特色，香脆可口' },
    { id: 121, name: '锅巴菜', price: 10, category: 'staple', desc: '天津早点，卤汁香浓' },
    { id: 122, name: '老豆腐', price: 8, category: 'staple', desc: '豆腐嫩滑，卤汁美味' },
    { id: 123, name: '油条', price: 3, category: 'staple', desc: '外酥里软，香酥可口' },
    { id: 124, name: '豆浆', price: 6, category: 'staple', desc: '香浓可口，营养丰富' },
    { id: 125, name: '小米粥', price: 8, category: 'staple', desc: '小米香浓，软糯可口' },
    { id: 126, name: '青岛啤酒', price: 12, category: 'drink', desc: '清爽解腻，口感纯正' },
    { id: 127, name: '哈尔滨啤酒', price: 10, category: 'drink', desc: '清爽可口，东北风味' },
    { id: 128, name: '燕京啤酒', price: 10, category: 'drink', desc: '清爽解腻，北京风味' },
    { id: 129, name: '百威啤酒', price: 15, category: 'drink', desc: '口感醇厚，美式风味' },
    { id: 130, name: '可口可乐', price: 8, category: 'drink', desc: '冰爽解渴，经典口味' },
    { id: 131, name: '雪碧', price: 8, category: 'drink', desc: '清凉爽口，柠檬风味' },
    { id: 132, name: '芬达', price: 8, category: 'drink', desc: '果香浓郁，橙味十足' },
    { id: 133, name: '七喜', price: 8, category: 'drink', desc: '清凉爽口，柠檬风味' },
    { id: 134, name: '美年达', price: 8, category: 'drink', desc: '果香浓郁，多种口味' },
    { id: 135, name: '酸梅汤', price: 18, category: 'drink', desc: '酸甜解暑，传统饮品' },
    { id: 136, name: '鲜榨橙汁', price: 38, category: 'drink', desc: '新鲜现榨，维 C 丰富' },
    { id: 137, name: '鲜榨西瓜汁', price: 32, category: 'drink', desc: '新鲜现榨，清甜解渴' },
    { id: 138, name: '鲜榨苹果汁', price: 36, category: 'drink', desc: '新鲜现榨，营养丰富' },
    { id: 139, name: '鲜榨芒果汁', price: 42, category: 'drink', desc: '新鲜现榨，芒果香浓' },
    { id: 140, name: '龙井茶', price: 48, category: 'drink', desc: '清香淡雅，回味悠长' },
    { id: 141, name: '菊花茶', price: 28, category: 'drink', desc: '清热解毒，明目降火' },
    { id: 142, name: '茉莉花茶', price: 38, category: 'drink', desc: '茉莉花香，清新淡雅' },
    { id: 143, name: '铁观音', price: 68, category: 'drink', desc: '香气浓郁，回甘悠长' },
    { id: 144, name: '普洱茶', price: 58, category: 'drink', desc: '醇厚甘滑，降脂减肥' },
    { id: 145, name: '红茶', price: 42, category: 'drink', desc: '醇厚香甜，温润养胃' },
    { id: 146, name: '衡水老白干', price: 88, category: 'drink', desc: '醇香浓郁，地道白酒' },
    { id: 147, name: '茅台', price: 2888, category: 'drink', desc: '酱香突出，国酒茅台' },
    { id: 148, name: '五粮液', price: 1288, category: 'drink', desc: '香气悠久，五粮液' },
    { id: 149, name: '剑南春', price: 588, category: 'drink', desc: '芳香浓郁，剑南春' },
    { id: 150, name: '泸州老窖', price: 388, category: 'drink', desc: '醇香浓郁，泸州老窖' },
    { id: 151, name: '长城干红', price: 128, category: 'drink', desc: '口感醇厚，回味无穷' },
    { id: 152, name: '张裕干红', price: 98, category: 'drink', desc: '口感醇厚，张裕出品' },
    { id: 153, name: '椰汁', price: 15, category: 'drink', desc: '香甜浓郁，营养丰富' },
    { id: 154, name: '杏仁露', price: 12, category: 'drink', desc: '杏仁香浓，营养丰富' },
    { id: 155, name: '花生奶', price: 10, category: 'drink', desc: '花生香浓，营养丰富' },
    { id: 156, name: '矿泉水', price: 5, category: 'drink', desc: '纯净甘甜，解渴必备' }
];

let currentCategory = 'all';
let favorites = [];
let cart = [];
let orders = [];
let currentPage = 'menu';

// 从 Supabase 加载数据
async function loadUserData() {
    try {
        // 加载收藏
        const { data: favData, error: favError } = await supabaseClient
            .from('favorites')
            .select('*')
            .eq('user_id', userId);
        
        if (!favError && favData) {
            favorites = favData.map(f => f.dish_id);
        }
        
        // 加载购物车
        const { data: cartData, error: cartError } = await supabaseClient
            .from('cart_items')
            .select('*')
            .eq('user_id', userId);
        
        if (!cartError && cartData) {
            cart = cartData.map(item => ({
                dishId: item.dish_id,
                dishName: item.dish_name,
                price: item.price,
                quantity: item.quantity
            }));
        }
        
        // 加载订单
        const { data: ordersData, error: ordersError } = await supabaseClient
            .from('orders')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        
        if (!ordersError && ordersData) {
            orders = ordersData.map(item => ({
                dishId: item.dish_id,
                dishName: item.dish_name,
                price: item.price,
                quantity: item.quantity,
                timestamp: new Date(item.created_at).getTime()
            }));
        }
    } catch (error) {
        console.error('加载用户数据失败:', error);
    }
}

// 监听实时数据变化
function setupRealtimeSubscription() {
    // 监听订单变化
    supabaseClient
        .channel('orders_channel')
        .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'orders',
            filter: `user_id=eq.${userId}`
        }, async (payload) => {
            console.log('订单变化:', payload);
            await loadUserData();
            renderOrders();
            updateBadges();
        })
        .subscribe();
    
    // 监听购物车变化
    supabaseClient
        .channel('cart_channel')
        .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'cart_items',
            filter: `user_id=eq.${userId}`
        }, async (payload) => {
            console.log('购物车变化:', payload);
            await loadUserData();
            renderCart();
            updateBadges();
        })
        .subscribe();
    
    // 监听收藏变化
    supabaseClient
        .channel('favorites_channel')
        .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'favorites',
            filter: `user_id=eq.${userId}`
        }, async (payload) => {
            console.log('收藏变化:', payload);
            await loadUserData();
            renderFavorites();
        })
        .subscribe();
}

// 更新收藏到 Supabase
async function updateFavoriteInSupabase(dishId, isFavorite) {
    try {
        const dish = dishesData.find(d => d.id === dishId);
        
        if (isFavorite) {
            // 添加收藏
            await supabaseClient
                .from('favorites')
                .insert({
                    user_id: userId,
                    dish_id: dishId,
                    dish_name: dish.name
                });
        } else {
            // 删除收藏
            await supabaseClient
                .from('favorites')
                .delete()
                .eq('user_id', userId)
                .eq('dish_id', dishId);
        }
    } catch (error) {
        console.error('更新收藏失败:', error);
    }
}

// 更新购物车到 Supabase
async function updateCartInSupabase() {
    try {
        // 先删除所有购物车项
        await supabaseClient
            .from('cart_items')
            .delete()
            .eq('user_id', userId);
        
        // 添加新的购物车项
        if (cart.length > 0) {
            const cartItems = cart.map(item => ({
                user_id: userId,
                dish_id: item.dishId,
                dish_name: item.dishName,
                price: item.price,
                quantity: item.quantity
            }));
            
            await supabaseClient
                .from('cart_items')
                .insert(cartItems);
        }
    } catch (error) {
        console.error('更新购物车失败:', error);
    }
}

// 更新订单到 Supabase
async function addOrderToSupabase(orderItem) {
    try {
        await supabaseClient
            .from('orders')
            .insert({
                user_id: userId,
                dish_id: orderItem.dishId,
                dish_name: orderItem.dishName,
                price: orderItem.price,
                quantity: orderItem.quantity
            });
    } catch (error) {
        console.error('添加订单失败:', error);
    }
}

// 删除订单从 Supabase
async function deleteOrderFromSupabase(dishId) {
    try {
        await supabaseClient
            .from('orders')
            .delete()
            .eq('user_id', userId)
            .eq('dish_id', dishId);
    } catch (error) {
        console.error('删除订单失败:', error);
    }
}

// 清空订单从 Supabase
async function clearOrdersFromSupabase() {
    try {
        await supabaseClient
            .from('orders')
            .delete()
            .eq('user_id', userId);
    } catch (error) {
        console.error('清空订单失败:', error);
    }
}

function init() {
    renderCategories();
    renderDishes();
    renderFavorites();
    renderCart();
    renderOrders();
    setupEventListeners();
    updateBadges();
    
    // 加载用户数据并设置实时订阅
    loadUserData().then(() => {
        setupRealtimeSubscription();
        renderFavorites();
        renderCart();
        renderOrders();
        updateBadges();
    });
}

function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = categories.map(cat => `
        <div class="category-item ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">${cat.name}</div>
    `).join('');
}

function renderDishes() {
    const dishGrid = document.getElementById('dishGrid');
    let filteredDishes = dishesData;
    
    if (currentCategory !== 'all') {
        filteredDishes = dishesData.filter(dish => dish.category === currentCategory);
    }
    
    if (searchQuery) {
        filteredDishes = filteredDishes.filter(dish => 
            dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dish.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    dishGrid.innerHTML = filteredDishes.map(dish => createDishCard(dish)).join('');
}

function createDishCard(dish) {
    const isFavorite = favorites.includes(dish.id);
    return `
        <div class="dish-card">
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-dish-id="${dish.id}">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
            <div class="dish-content">
                <h3 class="dish-name">${dish.name}</h3>
                <p class="dish-desc">${dish.desc}</p>
            </div>
            <div class="dish-footer">
                <span class="dish-price">¥${dish.price === 0 ? '时价' : dish.price}</span>
                <button class="add-to-cart-btn" data-dish-id="${dish.id}" title="加入购物车">
                    <span>+</span>
                </button>
            </div>
        </div>
    `;
}

let searchQuery = '';

function setupEventListeners() {
    // 分类切换
    const categoryList = document.getElementById('categoryList');
    if (categoryList) {
        categoryList.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-item')) {
                currentCategory = e.target.dataset.category;
                renderCategories();
                renderDishes();
            }
        });
    }
    
    // 收藏按钮和加入购物车按钮
    const dishGrid = document.getElementById('dishGrid');
    if (dishGrid) {
        dishGrid.addEventListener('click', (e) => {
            // 查找最近的按钮元素（处理点击 span 的情况）
            const favoriteBtn = e.target.closest('.favorite-btn');
            const addToCartBtn = e.target.closest('.add-to-cart-btn');
            
            if (favoriteBtn) {
                e.preventDefault();
                e.stopPropagation();
                const dishId = parseInt(favoriteBtn.dataset.dishId);
                if (!isNaN(dishId)) {
                    toggleFavorite(dishId);
                }
            } else if (addToCartBtn) {
                e.preventDefault();
                e.stopPropagation();
                const dishId = parseInt(addToCartBtn.dataset.dishId);
                if (!isNaN(dishId)) {
                    addToCart(dishId);
                }
            }
        });
    }
    
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderDishes();
        });
        
        // 搜索按钮点击事件
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                searchInput.focus();
                searchQuery = searchInput.value.trim();
                renderDishes();
            });
        }
        
        // 回车键搜索
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchQuery = searchInput.value.trim();
                renderDishes();
                searchInput.blur();
            }
        });
    }
    
    // 页面切换
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            if (page) {
                switchPage(page);
            }
        });
    });
    
    // 购物车操作
    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        cartItems.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-from-cart');
            const decreaseBtn = e.target.closest('.decrease-quantity');
            const increaseBtn = e.target.closest('.increase-quantity');
            
            if (removeBtn) {
                const dishId = parseInt(removeBtn.dataset.dishId);
                if (!isNaN(dishId)) {
                    removeFromCart(dishId);
                }
            } else if (decreaseBtn) {
                const dishId = parseInt(decreaseBtn.dataset.dishId);
                if (!isNaN(dishId)) {
                    decreaseQuantity(dishId);
                }
            } else if (increaseBtn) {
                const dishId = parseInt(increaseBtn.dataset.dishId);
                if (!isNaN(dishId)) {
                    increaseQuantity(dishId);
                }
            }
        });
    }
    
    // 清空购物车
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            cart = [];
            updateCartInSupabase();
            renderCart();
            updateBadges();
        });
    }
    
    // 结算
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // 已点菜品操作
    const ordersList = document.getElementById('ordersList');
    if (ordersList) {
        ordersList.addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.delete-order');
            if (deleteBtn) {
                const dishId = parseInt(deleteBtn.dataset.dishId);
                if (!isNaN(dishId)) {
                    deleteOrder(dishId);
                }
            }
        });
    }
    
    // 分享链接按钮
    const shareLinkBtn = document.getElementById('shareLinkBtn');
    if (shareLinkBtn) {
        shareLinkBtn.addEventListener('click', () => {
            const shareLink = generateShareLink();
            
            // 复制链接到剪贴板
            navigator.clipboard.writeText(shareLink).then(() => {
                showToast('链接已复制，可以分享给朋友了！');
            }).catch(() => {
                // 如果复制失败，使用 prompt
                prompt('复制以下链接分享给朋友：', shareLink);
            });
        });
    }
    
    // 清空记录按钮
    const clearOrdersBtn = document.getElementById('clearOrdersBtn');
    if (clearOrdersBtn) {
        clearOrdersBtn.addEventListener('click', () => {
            clearOrders();
        });
    }
}

function toggleFavorite(dishId) {
    const index = favorites.indexOf(dishId);
    if (index > -1) {
        favorites.splice(index, 1);
        updateFavoriteInSupabase(dishId, false);
    } else {
        favorites.push(dishId);
        updateFavoriteInSupabase(dishId, true);
    }
    renderFavorites();
    renderDishes();
}

function addToCart(dishId) {
    const dish = dishesData.find(d => d.id === dishId);
    
    // 检查是否已点过此菜品
    const hasOrdered = orders.some(order => order.dishId === dishId);
    
    if (hasOrdered) {
        // 显示确认对话框
        if (confirm(`您已点过此菜品"${dish.name}"，是否再次添加？`)) {
            addDishToCart(dish);
        }
    } else {
        // 检查购物车是否已有
        const existingItem = cart.find(item => item.dishId === dishId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            addDishToCart(dish);
        }
    }
    
    updateCartInSupabase();
    renderCart();
    updateBadges();
}

function addDishToCart(dish) {
    cart.push({
        dishId: dish.id,
        dishName: dish.name,
        price: dish.price,
        quantity: 1
    });
    showToast(`已添加 ${dish.name}`);
}

function removeFromCart(dishId) {
    cart = cart.filter(item => item.dishId !== dishId);
    updateCartInSupabase();
    renderCart();
    updateBadges();
}

function decreaseQuantity(dishId) {
    const item = cart.find(item => item.dishId === dishId);
    if (item) {
        item.quantity--;
        if (item.quantity === 0) {
            removeFromCart(dishId);
        } else {
            updateCartInSupabase();
        }
        renderCart();
        updateBadges();
    }
}

function increaseQuantity(dishId) {
    const item = cart.find(item => item.dishId === dishId);
    if (item) {
        item.quantity++;
        updateCartInSupabase();
        renderCart();
        updateBadges();
    }
}

function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    if (!favoritesGrid) return;
    
    const favoriteDishes = dishesData.filter(dish => favorites.includes(dish.id));
    
    if (favoriteDishes.length === 0) {
        favoritesGrid.innerHTML = '<div style="text-align: center; color: #999; padding: 40px;">暂无收藏菜品</div>';
    } else {
        favoritesGrid.innerHTML = favoriteDishes.map(dish => createDishCard(dish)).join('');
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; color: #999; padding: 40px;">购物车是空的</div>';
        cartTotal.textContent = '¥0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.dishName}</div>
                    <div class="cart-item-price">¥${item.price}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="decrease-quantity" data-dish-id="${item.dishId}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity" data-dish-id="${item.dishId}">+</button>
                    </div>
                    <button class="remove-from-cart" data-dish-id="${item.dishId}">删除</button>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotal.textContent = `¥${total}`;
    }
}

function renderOrders() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<div style="text-align: center; color: #999; padding: 40px;">暂无点菜记录</div>';
    } else {
        // 按时间分组
        const ordersByTime = {};
        orders.forEach(order => {
            const time = new Date(order.timestamp).toLocaleString('zh-CN');
            if (!ordersByTime[time]) {
                ordersByTime[time] = [];
            }
            ordersByTime[time].push(order);
        });
        
        let html = '';
        for (const [time, timeOrders] of Object.entries(ordersByTime)) {
            const total = timeOrders.reduce((sum, order) => sum + order.price * order.quantity, 0);
            html += `
                <div class="order-group">
                    <div class="order-time">${time}</div>
                    ${timeOrders.map(order => `
                        <div class="order-item">
                            <div class="order-item-info">
                                <div class="order-item-name">${order.dishName}</div>
                                <div class="order-item-details">¥${order.price} × ${order.quantity}</div>
                            </div>
                            <div class="order-item-price">¥${order.price * order.quantity}</div>
                            <button class="delete-order" data-dish-id="${order.dishId}">删除</button>
                        </div>
                    `).join('')}
                    <div class="order-group-total">小计：¥${total}</div>
                </div>
            `;
        }
        ordersList.innerHTML = html;
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('购物车是空的！');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    if (confirm(`确认下单吗？\n总计：¥${total}`)) {
        // 将购物车商品添加到订单
        const timestamp = Date.now();
        cart.forEach(item => {
            orders.unshift({
                dishId: item.dishId,
                dishName: item.dishName,
                price: item.price,
                quantity: item.quantity,
                timestamp
            });
            addOrderToSupabase(item);
        });
        
        // 清空购物车
        cart = [];
        updateCartInSupabase();
        
        renderOrders();
        renderCart();
        updateBadges();
        
        // 切换到已点菜品页面
        switchPage('orders');
        
        showToast('下单成功！');
    }
}

function deleteOrder(dishId) {
    orders = orders.filter(order => order.dishId !== dishId);
    deleteOrderFromSupabase(dishId);
    renderOrders();
}

function clearOrders() {
    if (confirm('确定要清空所有点菜记录吗？')) {
        orders = [];
        clearOrdersFromSupabase();
        renderOrders();
    }
}

function updateBadges() {
    // 购物车徽章
    const cartBadge = document.querySelector('[data-page="cart"] .badge');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // 已点菜品徽章
    const ordersBadge = document.querySelector('[data-page="orders"] .badge');
    if (ordersBadge) {
        const uniqueOrders = new Set(orders.map(o => o.dishId)).size;
        ordersBadge.textContent = uniqueOrders;
        ordersBadge.style.display = uniqueOrders > 0 ? 'flex' : 'none';
    }
}

function switchPage(page) {
    currentPage = page;
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });
    
    // 切换页面内容
    document.querySelectorAll('.page').forEach(p => {
        p.style.display = 'none';
    });
    document.getElementById(`${page}Page`).style.display = 'block';
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-size: 16px;
        z-index: 1000;
        animation: fadeIn 0.3s;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
