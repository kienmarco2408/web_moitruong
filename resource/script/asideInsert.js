// Get Content Show Constructor
function ContentFill(title, thumbnail, link) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.link = link;
    this.getThumb = function() {
        return `<a href="${this.link}"><img src="${this.thumbnail}"></a>`
    }
    this.getTitle = function() {
        return `<a href="${this.link}"><p>${this.title}</p></a>`
    }
}
// Post List
let contentData = [
    post1 = new ContentFill('Trái Đất kêu cứu liệu có ai trả lời', 'https://hutbephot247.com/wp-content/uploads/anh-huong-cua-bien-doi-khi-hau-den-viet-nam.jpg', 'resource/post/environ/trai-dat-keu-cuu-lieu-co-ai-tra-loi.html'),
    post2 = new ContentFill('Ô nhiễm môi trường', 'https://upanh123.com/wp-content/uploads/2020/10/hinh-anh-o-nhiem-moi-truong9-2.jpg', '/resource/post/environ/o-nhiem-moi-truong.html'),
    post3 = new ContentFill('Ô nhiễm môi trường nước có nguy hiểm như chúng ta nghĩ ', 'https://vitamia.com.vn/wp-content/uploads/2020/06/Moi-truong-nuoc-bi-o-nhiem-anh-huong-nang-ne-den-con-nguoi-va-vi-sinh-vat.jpg', '/resource/post/environ/o-nhiem-moi-truong-co-nguy-hiem-nhu-chung-ta-nghi.html'),
    post4 = new ContentFill('Biến đổi khí hậu', '/resource/Project môi trường/Môi trường và phân loại rác/Môi trường/Post1Picture2.jpg', '/resource/post/environ/bien-doi-khi-hau.html'),
    post5 = new ContentFill('Ô nhiễm môi trường đất là gì?', '/resource/Project môi trường/Môi trường và phân loại rác/Môi trường/Post2Picture1.jpg', '/resource/post/environ/o-nhiem-moi-truong-dat.html'),
    post6 = new ContentFill('Nguyên nhân gây ô nhiễm môi trường đất', '/resource/Project môi trường/Môi trường và phân loại rác/Môi trường/Post5Pic1.png','/resource/post/environ/nguyen-nhan-gay-o-nhiem-moi-truong-dat.html'),
    post7 = new ContentFill('Rác không chỉ có 1 loại', 'https://photo-cms-baophapluat.zadn.vn/w800/Uploaded/2021/carwqwrwq/2019_03_27/0_QDAB.png', '/resource/post/recycle/rac-khong-chi-co-1-loai.html'),
    post8 = new ContentFill('Rác thải nhựa - mối nguy tiềm tàng', 'https://anphatholdings.com/wp-content/uploads/2020/04/hau-qua-cua-rac-thai-nhua-den-trai-dat.jpg', '/resource/post/recycle/rac-thai-nhua-moi-nguy-co-tiem-tang.html'),
    post9 = new ContentFill('Tái chế rác - Cứu tinh của cả hành tinh', 'http://image.plo.vn/w800/Uploaded/2019/mrnvyqdxl/2017_09_16/giam-rac-thai_pykb.jpg', '/resource/post/recycle/tai-che-rac-cuu-tinh-cua-ca-hanh-tinh.html'),
    post10 = new ContentFill('Phân loại rác', '/resource/Project môi trường/Môi trường và phân loại rác/Phân loại rác/Picture1.jpg', '/resource/post/recycle/phan-loai-rac.html'),
    post11 = new ContentFill('Rác thải nhựa', '/resource/Project môi trường/Môi trường và phân loại rác/Phân loại rác/Picture5.jpg', '/resource/post/recycle/rac-thai-nhua.html'),
    post12 = new ContentFill('Tái chế rác thải', '/resource/Project môi trường/Môi trường và phân loại rác/Phân loại rác/Picture14.jpg', '/resource/post/recycle/tai-che-rac-thai.html'),
    post13 = new ContentFill('Microsoft ra mắt chuột Ocean Plastic', '/resource/Project môi trường/Vid tái chế rác/Picture15.jpg', '/resource/post/competition/chuot-microsoft.html'),
    post14 = new ContentFill('GÃ KHỔNG LỒ ADIDAS DÙNG SÁNG TẠO CHỐNG LẠI NHỰA', '/resource/Project môi trường/Vid tái chế rác/Picture17.png', '/resource/post/competition/giay-adidas.html'),
    post15 = new ContentFill('KHI TÍN ĐỒ LÀM ĐẸP THÂN THIỆN VỚI MÔI TRƯỜNG', '/resource/Project môi trường/Vid tái chế rác/Picture21.jpg', '/resource/post/competition/my-pham-xanh.html'),
]
let numberDataKey = contentData.length

// Aside RandomShow Content
function getRandDataKey () {
    let asideDataKey = Math.floor(Math.random()*numberDataKey)
    return asideDataKey
}

function AsideRandShowContent(asideThumb, asideTitle) {    
    function getAsideContent (asideDataKey) {
        document.getElementById(asideThumb).innerHTML=contentData[asideDataKey].getThumb()
        document.getElementById(asideTitle).innerHTML=contentData[asideDataKey].getTitle()
    }
    getAsideContent(getRandDataKey())
}

let aside1 = new AsideRandShowContent('thumbnail1', 'title1')
let aside2 = new AsideRandShowContent('thumbnail2', 'title2')
let aside3 = new AsideRandShowContent('thumbnail3', 'title3')
let aside4 = new AsideRandShowContent('thumbnail4', 'title4')
let aside5 = new AsideRandShowContent('thumbnail5', 'title5')