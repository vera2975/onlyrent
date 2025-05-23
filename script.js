document.addEventListener('DOMContentLoaded', function () {
    // 輪播圖等功能
    const images = [
        "images/only rent 1.webp",
        "images/only rent 2.webp",
        "images/only rent 3.webp",
        "images/only rent 4.webp",
        "images/only rent 5.webp",
        "images/only rent 6.webp",
        "images/only rent 7.webp",
        "images/only rent 8.webp",
        "images/only rent 9.webp",
        "images/only rent 10.webp"
    ];

    let current = 0;
    const imgEl = document.querySelector('.mockup-image');
    const dots = document.querySelectorAll('.dot');
    let intervalId = null;

    function showImage(idx) {
        imgEl.src = images[idx];
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
    }

    function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
    }

    function startCarousel() {
        if (intervalId === null) {
            intervalId = setInterval(nextImage, 2000);
        }
    }

    function stopCarousel() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // 滑鼠移入停止輪播
    imgEl.addEventListener('mouseenter', stopCarousel);
    // 滑鼠移出繼續輪播（先切換下一張，再啟動輪播）
    imgEl.addEventListener('mouseleave', function() {
        nextImage();
        startCarousel();
    });

    imgEl.addEventListener('click', nextImage);
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            current = i;
            showImage(current);
        });
    });

    // 服務條款展開
    const footerToggle = document.getElementById('footer-toggle');
    const footerContent = document.getElementById('footer-content');
    const footerClose = document.getElementById('footer-close');
    if (footerToggle && footerContent && footerClose) {
        footerToggle.addEventListener('click', function () {
            footerContent.classList.toggle('active');
        });
        footerClose.addEventListener('click', function () {
            footerContent.classList.remove('active');
        });
    }

    // 語言切換功能
    const translations = {
        zh: {
            mainTitle: `<span>Download</span>`,
            subtitle1: `<span class="title-bold">Only Rent</span> App`,
            subtitle2: "每一種才華 都值得被看見 !",
            aboutTitle: "Only Rent 不只是個 App，更是一種態度<br>你的價值不被定義，而是由你自己決定",
            aboutDesc: `我們是 Only Rent，一家來自新加坡的公司，創立於一個簡單卻有力量的信念 — <span class="highlight">你的價值，由你決定</span>。<br>
          在這個世界，太多人被工作定義，被市場標籤限制，被學歷或履歷決定價值。但我們相信，每一個人都有屬於自己的能力和獨特之處，都值得被看見、被選擇、被尊重。Only Rent 就是為了這樣的人而誕生：一個真正屬於人的服務平台。<br><br>
          在 Only Rent，你可以自由發布你擅長的服務，無論是美甲、攝影、烘焙、居家清潔、才藝教學，還是任何一項技能。你可以自己設定價格、服務方式和時間，成為自己的老闆。同時，客戶也可以發布需求，讓服務者主動搶單，建立更有溫度、更直接的連結。<br><br>
          我們從東南亞出發，把台灣作為第一站，因為我們看見這裡有最多願意打破框架、敢於嘗試、渴望自由的年輕人。Only Rent 要打造一個新型態的工作生態，讓「自由職業」真正成為一種自由、一個選擇、一種生活方式。`,
            contactTW1: "台灣分公司 | 禾且科技有限公司",
            contactTW2: "地址 | 高雄市鼓山區明誠路1505號3樓",
            contactTW3: "電子信箱 | support@onlyrent.tw",
            contactTW4: "公司聯繫人 | 朱巧雲",
            contactSG1: "Only Rent Technology （S） Pte. Ltd.",
            contactSG2: "1 North Bridge Road #01-37 High Street Centre Singapore 179094",
            contactSG3: "Contact us：support@onlyrent.sg",
            copyright: "© 2025 Only Rent. All rights reserved.",
            footerToggle: "服務條款 | 隱私政策",
            footerContent: `我Only Rent 服務條款（Terms and Conditions）<br><br>
生效日期：2025年5月15日<br><br>
歡迎使用 Only Rent（以下簡稱「本平台」）。本平台由 Only Rent Technology （S） Pte. Ltd.（註冊地：新加坡） 所經營，為服務媒合平台，讓用戶自由發佈或接取各類人力服務。使用本平台即表示您同意以下條款與條件。<br><br>

1. 使用資格<br>
• 使用本平台者須年滿 18歲，並具有完全法律行為能力。未滿18歲者，請勿註冊或使用本服務。<br>
• 平台保留要求用戶完成身分認證（如手機驗證、政府核發身分證明上傳）的權利。未完成者將無法使用部分或全部功能。<br><br>

2. 平台服務說明<br>
• 本平台僅提供一個供「服務提供者」與「服務需求者」發佈、搜尋與交易服務的技術平台，不參與雙方實際履約內容。<br>
• 平台所提供之資訊、媒合功能與交易紀錄，僅為協助雙方溝通與建立合作，不構成任何承諾、擔保或代理行為。<br><br>

3. 禁止事項與內容規範<br>
用戶在使用本平台時，嚴禁從事以下行為：<br>
• 發佈或提供任何違法、暴力、詐騙、色情、賭博、毒品、人口販運等服務<br>
• 涉及多層次傳銷（MLM）、非法貸款、虛擬貨幣詐騙等金融詐騙類服務<br>
• 上傳他人未經授權的照片、資料、侵權內容<br>
• 發佈具誤導性、歧視性、侮辱性或侵害第三人權益之內容<br>
• 冒用他人身分、散播垃圾訊息、干擾平台運作<br>
平台有權在未事先通知情況下，刪除任何違規內容、封鎖帳號或限制功能使用，並視情況依法舉報。<br><br>

4. 智慧財產權<br>
Only Rent 所提供之所有內容，包括但不限於圖像、商標、程式碼、平台架構與文字，皆屬本公司或合法授權人所有。未經書面同意，不得複製、散布、編輯或用於商業用途。<br><br>

5. 使用者內容（UGC）管理<br>
• 用戶所發佈之所有內容（文字、圖片、影片等）須保證具合法性與真實性，並願意授權平台於行銷或用戶瀏覽時公開顯示。<br>
• 平台保留審核、下架或刪除違反本條款之內容的權利，並可封鎖相關帳號以維護平台秩序。<br><br>

6. 付款與退款政策<br>
• 所有金流將由第三方台灣「TapPay」支付業者處理，平台不儲存用戶之信用卡或支付資訊。<br>
• 服務需求方付款後如有爭議，應於交易完成後 24 小時內提出申訴。平台將基於雙方資料進行初步判斷，協助退款處理，但不承諾最終結果。<br>
• 平台有權收取一定比例之平台手續費，相關費用標準將公告於平台。<br><br>

7. 隱私與資料安全<br>
• 用戶提供的個人資料將依據《隱私政策》妥善儲存、加密與使用，平台亦會實施嚴格內部權限控管機制。<br>
• 若您刪除帳號，平台將於合理必要期間內刪除或匿名化所有資料。<br><br>

8. 責任限制與風險揭露<br>
• 平台不對任何服務內容、品質、履約或成效提供明示或默示之保證。<br>
• 用戶應自行評估風險並承擔所有與交易相關之後果。<br>
• 平台對因系統故障、外部攻擊、合作廠商問題等導致的損失不負賠償責任。<br><br>

9. 條款修改與通知<br>
本平台保留隨時修改本服務條款與隱私政策的權利，修改後將以公告或 App 內通知形式通知用戶。您繼續使用本服務即視為同意新條款。<br><br>

10. 法律適用與爭議解決<br>
本條款依據新加坡法律解釋與執行。若有爭議，原則上提交新加坡法院。若用戶位於台灣，平台有權選擇由台灣地方法院管轄。<br><br>

Only Rent 隱私政策（Terms and Conditions ｜ Privacy Policy ）<br><br>

1. 資料蒐集類型<br>
我們可能會蒐集以下類型資料：<br>
• 註冊資料：姓名、性別、手機、電子郵件、身份證號（或居留證號）<br>
• 交易與使用行為：服務內容、歷史紀錄、裝置資訊、IP 位址<br>
• 金流資料：付款紀錄、退款記錄（由第三方支付商處理）<br><br>

2. 資料使用目的<br>
• 核對身份與安全驗證<br>
• 提供與改善平台功能與用戶體驗<br>
• 用戶申訴處理、交易紀錄查核、法律義務配合<br>
• 發送重要系統通知、行銷資訊（用戶可選擇取消訂閱）<br><br>

3. 第三方資料分享聲明<br>
我們可能在以下情況分享用戶資料：<br>
• 與支付業者、身分驗證機構等合作夥伴為提供交易服務<br>
• 與法律或行政機關依合法程序要求時<br>
• 與經授權之客服、審查團隊為提供合規服務<br>
我們不會將用戶資料出售或租賃予任何商業用途之第三方。<br><br>

4. 跨境傳輸聲明<br>
您所提供之資料可能會被儲存或處理於新加坡、台灣、或其他資料保護標準相當的國家。我們將以 SSL 加密、權限控管等方式，確保資料安全。<br><br>

5. 用戶權利<br>
您可隨時行使以下權利：<br>
• 查詢或請求閱覽您的資料<br>
• 請求更正或刪除資料<br>
• 撤回同意行銷或資料使用<br>
• 停用帳號並刪除所有關聯資料（部分交易紀錄需依法保留）<br>
如需行使上述權利，請聯絡我們：<span class="footer-email">support@onlyrent.sg</span><br><br>

6. 資料保留期限<br>
除非法令另有規定，我們將於帳號關閉或停用後 6 個月內刪除或匿名化資料，但法律要求保存之項目（如交易記錄）將依法保留至少 5 年。<br><br>

7. 隱私政策修改<br>
Only Rent 保留隨時更新本政策之權利。所有修訂將公告於平台，重大變更將透過電子郵件或應用程式通知。請您定期查閱最新版本。<br>
`,
            footerClose: "收合"
        },
        en: {
            mainTitle: `<span class="title-bold">Only Rent</span> APP`,
            subtitle1: `Coming Soon`,
            subtitle2: "One app to unleash your talents!",
            aboutTitle: "Only Rent is more than an app. It's a mindset.<br>Here, your worth isn't assigned. It's self-defined.",
            aboutDesc: `Only Rent is a service platform from Singapore, built on a simple yet powerful belief: your value should be defined by you.
In today's world, people are often boxed in by job titles, resumes, and market expectations. But we believe everyone has something unique to offer — a skill, a passion, a way to connect. Only Rent exists to unlock that potential.<br><br>Here, individuals can list the services they're good at — from nail art, photography, and baking to home cleaning and private lessons. You decide your prices, schedule, and how you work. You're in control. At the same time, customers can post what they need, and you can actively respond. This creates a more open, direct, and human way to connect.<br><br>We're launching in Southeast Asia, starting with Taiwan — a place full of bold, creative, freedom-driven individuals. Our mission is to help shape a new kind of work culture — one where freelancing isn't just an option, but a real, sustainable lifestyle.`,
            contactTW1: "台灣分公司 | 禾且科技有限公司",
            contactTW2: "地址 | 高雄市鼓山區明誠路1505號3樓",
            contactTW3: "電子信箱 | support@onlyrent.tw",
            contactTW4: "公司聯繫人 | 朱巧雲",
            contactSG1: "Only Rent Technology (S) Pte. Ltd.",
            contactSG2: "1 North Bridge Road #01-37 High Street Centre Singapore 179094",
            contactSG3: "Contact us: support@onlyrent.sg",
            contactSG4: "Collaboration and Advertising: partner@onlyrent.sg",
            copyright: "© 2025 Only Rent. All rights reserved.",
            footerToggle: "Terms and Conditions ｜ Privacy Policy ",
            footerContent: `<span>Only Rent Terms and Conditions</span><br>
<span>Effective Date: May 15, 2025</span><br><br>

Welcome to Only Rent (hereinafter referred to as "the Platform"). The Platform is operated by Only Rent Technology (S) Pte. Ltd., registered in Singapore, and serves as a service-matching platform allowing users to freely post or accept various human services. By using the Platform, you agree to the following terms and conditions.<br><br>

<span>1. Eligibility</span><br>
• Users must be at least 18 years old and possess full legal capacity. Individuals under 18 should not register or use the services.<br>
• The Platform reserves the right to require users to complete identity verification (e.g., mobile verification, uploading government-issued identification). Failure to complete verification may result in limited or restricted access to certain features.<br><br>

<span>2. Platform Services</span><br>
• The Platform solely provides a technical platform for "service providers" and "service seekers" to post, search, and transact services. It does not participate in the actual fulfillment of services between parties.<br>
• Information, matching functions, and transaction records provided by the Platform are intended to assist communication and collaboration between parties and do not constitute any commitment, guarantee, or agency relationship.<br><br>

<span>3. Prohibited Activities and Content Guidelines</span><br>
Users are strictly prohibited from engaging in the following activities on the Platform:<br>
• Posting or offering services that are illegal, violent, fraudulent, pornographic, related to gambling, drugs, or human trafficking.<br>
• Engaging in multi-level marketing (MLM), illegal lending, cryptocurrency scams, or other financial fraud services.<br>
• Uploading unauthorized photos, data, or infringing content.<br>
• Posting misleading, discriminatory, insulting, or content that infringes upon third-party rights.<br>
• Impersonating others, spreading spam, or interfering with Platform operations.<br>
The Platform reserves the right to delete any violating content, block accounts, or restrict feature usage without prior notice and may report violations to authorities as necessary.<br><br>

<span>4. Intellectual Property Rights</span><br>
All content provided by Only Rent, including but not limited to images, trademarks, code, platform structure, and text, is owned by the company or its authorized licensors. Unauthorized reproduction, distribution, editing, or commercial use is prohibited without written consent.<br><br>

<span>5. User-Generated Content (UGC) Management</span><br>
• Users must ensure that all posted content (text, images, videos, etc.) is legal and truthful and grant the Platform the right to display such content publicly for marketing or browsing purposes.<br>
• The Platform reserves the right to review, remove, or delete content that violates these terms and may block related accounts to maintain order.<br><br>

<span>6. Payment and Refund Policy</span><br>
• All financial transactions are processed by the third-party payment provider "TapPay" in Taiwan. The Platform does not store users' credit card or payment information.<br>
• If disputes arise after payment, service seekers must file a complaint within 24 hours of transaction completion. The Platform will make a preliminary judgment based on available information to assist in refund processing but does not guarantee outcomes.<br>
• The Platform reserves the right to charge a service fee, with applicable rates announced on the Platform.<br><br>

<span>7. Privacy and Data Security</span><br>
• Personal data provided by users will be securely stored, encrypted, and used in accordance with the Terms and Conditions ｜ Privacy Policy. The Platform implements strict internal access controls.<br>
• Upon account deletion, the Platform will delete or anonymize all data within a reasonable period unless retention is legally required.<br><br>

<span>8. Limitation of Liability and Risk Disclosure</span><br>
• The Platform does not provide explicit or implicit guarantees regarding any service content, quality, fulfillment, or effectiveness.<br>
• Users are responsible for assessing risks and bearing all consequences related to transactions.<br>
• The Platform is not liable for losses resulting from system failures, external attacks, or issues with partner services.<br><br>

<span>9. Amendments and Notifications</span><br>
The Platform reserves the right to modify these Terms and the Terms and Conditions ｜ Privacy Policy at any time. Changes will be communicated via announcements or in-app notifications. Continued use of the services constitutes acceptance of the new terms.<br><br>

<span>10. Governing Law and Dispute Resolution</span><br>
These Terms are governed by the laws of Singapore. Disputes will primarily be submitted to Singapore courts. For users located in Taiwan, the Platform reserves the right to choose the jurisdiction of Taiwanese local courts.<br><br>

<span>Only Rent Terms and Conditions ｜ Privacy Policy</span><br><br>

<span>1. Data Collection Types</span><br>
We may collect the following types of data:<br>
• Registration Data: Name, gender, mobile number, email, identification number (or residence permit number).<br>
• Transaction and Usage Behavior: Service content, history records, device information, IP address.<br>
• Financial Data: Payment and refund records (processed by third-party payment providers).<br><br>

<span>2. Purpose of Data Use</span><br>
• Identity verification and security authentication.<br>
• Providing and improving platform functions and user experience.<br>
• Handling user complaints, transaction record audits, and legal compliance.<br>
• Sending important system notifications and marketing information (users may opt-out).<br><br>

<span>3. Third-Party Data Sharing Statement</span><br>
We may share user data under the following circumstances:<br>
• With payment providers, identity verification agencies, and other partners to facilitate transactions.<br>
• With legal or administrative authorities upon lawful request.<br>
• With authorized customer service and review teams to ensure compliance.<br>
We do not sell or rent user data to third parties for commercial purposes.<br><br>

<span>4. Cross-Border Data Transfer Statement</span><br>
Your data may be stored or processed in Singapore, Taiwan, or other countries with comparable data protection standards. We employ SSL encryption and access controls to ensure data security.<br><br>

<span>5. User Rights</span><br>
You may exercise the following rights at any time:<br>
• Inquire or request access to your data.<br>
• Request correction or deletion of data.<br>
• Withdraw consent for marketing or data usage.<br>
• Deactivate your account and delete all associated data (some transaction records may be retained as required by law).<br>
To exercise these rights, please contact us at: support@onlyrent.sg<br><br>

<span>6. Data Retention Period</span><br>
Unless otherwise required by law, we will delete or anonymize data within 6 months after account closure or deactivation. Legally mandated records (e.g., transaction records) will be retained for at least 5 years.<br><br>

<span>7. Terms and Conditions ｜ Privacy Policy Amendments</span><br>
Only Rent reserves the right to update this policy at any time. All revisions will be announced on the Platform, and significant changes will be communicated via email or in-app notifications. Please review the latest version regularly.<br>
`,
            footerClose: "Hide"
        }
    };

    function setLang(lang) {
        // 更新內容
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = translations[lang][key] || '';
        });
    
        // 更新按鈕樣式
        const zhBtn = document.getElementById('lang-zh');
        const enBtn = document.getElementById('lang-en');
    
        if (lang === 'zh') {
            zhBtn.style.color = 'black';
            zhBtn.style.textDecoration = 'underline';
            enBtn.style.color = '#656565';
            enBtn.style.textDecoration = 'none';
        } else {
            zhBtn.style.color = '#656565';
            zhBtn.style.textDecoration = 'none';
            enBtn.style.color = 'black';
            enBtn.style.textDecoration = 'underline';
        }
    }

    // 預設語言
    setLang('zh');

    // 綁定語言切換按鈕
    document.getElementById('lang-zh').onclick = () => setLang('zh');
    document.getElementById('lang-en').onclick = () => setLang('en');

    // 初始化輪播
    startCarousel();
    showImage(current);
});