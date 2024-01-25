import { useContext } from "react"
import { Context } from "../Context"

export default function useT(key) {

    const { lang } = useContext(Context)

    const translations = {
        "Let's embrace": {
            "en": "Let's embrace courage, creativity, and assurance in our pursuits.",
            "ch": "让我们在追求的过程中鼓起勇气，发挥创造力，坚定信念。",
        },
        "Feeling lost": {
            "en": "Feeling lost or left behind in your social circle? Gain valuable career insights from an esteemed HR director. Find your ideal job and prioritize happiness and true passion. Unlock the secrets to professional success and personal fulfillment as you embark on a journey towards self-discovery and meaningful connections. Your path to a rewarding career starts here.",
            "ch": "在社交圈中感到迷失或落后？从德高望重的人力资源总监那里获得宝贵的职业见解。找到理想的工作，优先考虑幸福和真正的激情。揭开职业成功和个人成就感的秘密，踏上自我发现和建立有意义联系的旅程。你的职业发展之路从这里开始。",
        },
        "Nice to meet": {
            "en": "Nice to meet you!",
            "ch": "很高兴见到你",
        },
        "I'm": {
            "en": "I'm",
            "ch": "我是",
        },
        "you": {
            "en": "You",
            "ch": "你",
        },
        "Xiaoyang Li": {
            "en": " Xiaoyang Li",
            "ch": "李晓阳",
        },
        "I'm a director": {
            "en": "I'm a director, marketer, and sales professional + career coach, here to champion and unleash you.",
            "ch": "我是一名导演、营销人员、专业销售人员和职业教练，在这里为你提供支持和帮助。",
        },
        "I help individuals": {
            "en": "I help individuals pursue unconventional career paths and daring aspirations they've been considering. But often, hesitation prevents them from taking the next step. With my coaching program, I assist clients in articulating their experiences, overcoming self-doubt, and transitioning to fulfilling creative endeavors. This shift aligns their opportunities with their desired lifestyle and aspirations. By empowering individuals to embrace their unique talents, they gain the confidence to take on new challenges and succeed in uncharted professional territories.",
            "ch": "我帮助人们追求非传统的职业道路和他们一直在考虑的大胆愿望。但是，犹豫不决往往会阻碍他们迈出下一步。通过我的辅导计划，我帮助客户阐明他们的经历，克服自我怀疑，并向充实的创造性事业过渡。这种转变使他们的机会与他们想要的生活方式和愿望相一致。通过赋予个人拥抱自己独特才能的能力，他们获得了接受新挑战的信心，并在未知的职业领域取得了成功。",
        },
        "Sr. Director, Human Resources": {
            "en": "Sr. Director, Human Resources.",
            "ch": "人力资源高级总监",
        },
        "HR Business Partner": {
            "en": "HR Business Partner",
            "ch": "人力资源业务合作伙伴",
        },
        "Director, HR Business Partner": {
            "en": "Director, HR Business Partner.",
            "ch": "总监，人力资源业务合作伙伴",
        },
        "MBA, Business Administration and Management": {
            "en": "MBA, Business Administration and Management.",
            "ch": "工商管理 MBA",
        },
        "Master's degree, Management": {
            "en": "Master's degree, Management.",
            "ch": "管理学硕士学位",
        },
        "Certified Professional Coach, CPC": {
            "en": "Certified Professional Coach, CPC.",
            "ch": "认证专业教练，CPC",
        },
        "Master of Science": {
            "en": "Master of Science.",
            "ch": "理学硕士",
        },
        "Your work": {
            "en": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
            "ch": "你的工作将占据你生活的大部分时间，而真正让你满意的唯一方法就是做你认为出色的工作。而做伟大工作的唯一途径就是热爱你的工作。",
        },
        "Experience": {
            "en": "Experience",
            "ch": "经验",
        },
        "Education": {
            "en": "Education",
            "ch": "教育",
        },
        "tools": {
            "en": "tools",
            "ch": "工具",
        },
        "books": {
            "en": "books",
            "ch": "书籍",
        },
        "news": {
            "en": "news",
            "ch": "新闻",
        },
        "coach": {
            "en": "coach",
            "ch": "教练",
        },
        "read more": {
            "en": "read more",
            "ch": "阅读更多",
        },
        "Choose a job": {
            "en": "Choose a job you love, and you will never have to work a day in your life.",
            "ch": "选择一份自己喜欢的工作，这辈子就不用再工作了。",
        },
        "Todd Peng Liu - Huawei Technologies EuroAsia Region - President of Enterprise Business Group": {
            "en": "Todd Peng Liu - Huawei Technologies EuroAsia Region - President of Enterprise Business Group",
            "ch": "Todd Peng Liu - 华为技术欧亚区 - 企业业务集团总裁",
        },
        "Li is one of my best team members who takes care of marketing and sales operations in Huawei Symantec Brazil. Since we ran a start-up business, almost everything like start-from-zero, but with her preeminent work, we could improved the brand awareness in Brazil market in a short time. For sales operation part, she built the processes to guaranty that we started off on the right foot": {
            "en": "Li is one of my best team members who takes care of marketing and sales operations in Huawei Symantec Brazil. Since we ran a start-up business, almost everything like start-from-zero, but with her preeminent work, we could improved the brand awareness in Brazil market in a short time. For sales operation part, she built the processes to guaranty that we started off on the right foot",
            "ch": "李是我最得力的团队成员之一，负责华为赛门铁克巴西公司的市场营销和销售业务。由于我们的业务刚刚起步，几乎一切都是从零开始，但在她的出色工作下，我们在短时间内提高了品牌在巴西市场的知名度。在销售运营方面，她建立了一套流程，确保我们在正确的道路上起步",
        },
        "Miriam Serrato - Channel Sales Manager Mexico at Trellix": {
            "en": "Miriam Serrato - Channel Sales Manager Mexico at Trellix",
            "ch": "Miriam Serrato - Trellix 墨西哥渠道销售经理",
        },
        "Li is one of the best directors I've ever met. Her leadership style motivates the entire team to success. She contributed to the success and good positioning of the company at a regional level as one of the top IT companies": {
            "en": "Li is one of the best directors I've ever met. Her leadership style motivates the entire team to success. She contributed to the success and good positioning of the company at a regional level as one of the top IT companies",
            "ch": "李是我见过的最好的总监之一。她的领导风格激励着整个团队走向成功。她为公司的成功和良好定位做出了贡献，使公司成为地区顶级 IT 公司之一。",
        },
        "Jenny B. - Former Client": {
            "en": "Jenny B. - Former Client",
            "ch": "Jenny B. - 以前的客户",
        },
        "Xiaoyang is an outstanding career coach. Her deep understanding of the job market and the significance of personal branding is extremely valuable. She always makes me feel like a valued client, introducing me to innovative ideas and perspectives that continue to enhance my position in the freelance market. I wholeheartedly recommend her coaching services and ongoing support!": {
            "en": "Xiaoyang is an outstanding career coach. Her deep understanding of the job market and the significance of personal branding is extremely valuable. She always makes me feel like a valued client, introducing me to innovative ideas and perspectives that continue to enhance my position in the freelance market. I wholeheartedly recommend her coaching services and ongoing support!",
            "ch": "Xiaoyang 是一位出色的职业指导师。她对就业市场和个人品牌意义的深刻理解非常有价值。她总是让我感觉自己是一个有价值的客户，向我介绍创新的想法和观点，不断提升我在自由职业市场中的地位。我衷心推荐她的指导服务和持续支持！",
        },
        "recommendation": {
            "en": "recommendation",
            "ch": "建议",
        },
        "review": {
            "en": "review",
            "ch": "审查",
        },
        "Start Your": {
            "en": "Start Your",
            "ch": "开始您的",
        },
        "Career Path": {
            "en": "Career Path",
            "ch": "职业道路",
        },
        "Apply for": {
            "en": "Apply for",
            "ch": "申请",
        },
        "1:1 Career Coaching": {
            "en": "1:1 Career Coaching",
            "ch": "1:1 职业指导",
        },
        "with Xiaoyang Li": {
            "en": "with Xiaoyang Li",
            "ch": "与李晓阳",
        },
        "Hi! I'm currently facing a roadblock": {
            "en": "Hi! I'm currently facing a roadblock and lacking motivation in my job hunt and career exploration",
            "ch": "你好！我目前在求职和职业探索中遇到了障碍，缺乏动力。",
        },
        "Career exploration with VIP": {
            "en": "Career exploration with VIP treatment? I'm in! Are you ready to re-ignite curiosity, take charge, and gain the clarity you need to start again?",
            "ch": "享受贵宾待遇的职业探索？我加入！您准备好重新点燃好奇心、掌握主动权并获得重新开始所需的清晰度了吗？",
        },
        "apply now": {
            "en": "apply now",
            "ch": "立即申请",
        },
        "You've been navigating": {
            "en": "You've been navigating this journey independently for quite some time now",
            "ch": "你们已经独立走过这段路很长时间了",
        },
        "Your moment": {
            "en": "Your moment to shine is waiting",
            "ch": "你的闪光时刻正在等待",
        },
        "just imagine": {
            "en": "just imagine",
            "ch": "试想",
        },
        "Well, today": {
            "en": "Well, today is your lucky day!",
            "ch": "今天是你的幸运日",
        },
        "You possess a strong grasp of your skills and strengths and understand how they contribute value to individuals, teams, organizations": {
            "en": "You possess a strong grasp of your skills and strengths and understand how they contribute value to individuals, teams, organizations",
            "ch": "您对自己的技能和优势有很强的把握，并了解这些技能和优势如何为个人、团队和组织创造价值",
        },
        "You are choosing to embrace a mindset focused on growth and development while actively quieting the negative inner voice of criticism and doubt": {
            "en": "You are choosing to embrace a mindset focused on growth and development while actively quieting the negative inner voice of criticism and doubt",
            "ch": "您选择了以成长和发展为中心的心态，同时积极平息内心负面的批评和怀疑之声",
        },
        "You're actively pursuing something that truly ignites your passion, and you possess the adaptability to evolve in response to marketplace demands": {
            "en": "You're actively pursuing something that truly ignites your passion, and you possess the adaptability to evolve in response to marketplace demands",
            "ch": "你正在积极追求真正能点燃你激情的事业，你拥有适应市场需求的能力。",
        },
        "let's get acquainted": {
            "en": "let's get acquainted",
            "ch": "认识一下",
        },
        "now is your turn": {
            "en": "now is your turn",
            "ch": "现在轮到你了",
        },
        "TECH INNOVATIONS": {
            "en": "TECH INNOVATIONS",
            "ch": "技术创新",
        },
        "GADGETS": {
            "en": "GADGETS",
            "ch": "小工具",
        },
        "NEW STRATEGIES": {
            "en": "NEW STRATEGIES",
            "ch": "新战略",
        },
        "VACATION": {
            "en": "VACATION",
            "ch": "度假",
        },
        "TRAVELING": {
            "en": "TRAVELING",
            "ch": "旅行",
        },
        "STAYING AT HOME": {
            "en": "STAYING AT HOME",
            "ch": "待在家里",
        },
        "PART-TIME": {
            "en": "PART-TIME",
            "ch": "兼职",
        },
        "FULL-TIME": {
            "en": "FULL-TIME",
            "ch": "全职",
        },
        "ONSITE": {
            "en": "ONSITE",
            "ch": "现场",
        },
        "REMOTE": {
            "en": "REMOTE",
            "ch": "远程",
        },
        "FREELANCE": {
            "en": "FREELANCE",
            "ch": "自由职业",
        },
        "CONTRACT": {
            "en": "CONTRACT",
            "ch": "合同",
        },
        "email": {
            "en": "email",
            "ch": "电子邮件",
        },
        "name": {
            "en": "name",
            "ch": "名字",
        },
        "your current career situation": {
            "en": "your current career situation",
            "ch": "您目前的职业状况",
        },
        "your dream career": {
            "en": "your dream career",
            "ch": "你的理想职业",
        },
        "Success is not the key": {
            "en": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful",
            "ch": "成功不是幸福的关键。幸福才是成功的关键。如果你热爱你正在做的事情，你就会成功",
        },
        "Career Coach & HR director": {
            "en": "Career Coach & HR director",
            "ch": "职业指导与人力资源总监",
        },
        "Terms": {
            "en": "Terms",
            "ch": "条款",
        },
        "Privacy": {
            "en": "Privacy",
            "ch": "隐私权",
        },
        "About": {
            "en": "About",
            "ch": "关于",
        },
        "Coaching": {
            "en": "Coaching",
            "ch": "教练",
        },
        "Tools": {
            "en": "Tools",
            "ch": "工具",
        },
        "is typing": {
            "en": "is typing",
            "ch": "正在输入",
        },
        "000": {
            "en": "000",
            "ch": "111",
        },
    }

    // use: t("Let's embrace")
    return translations?.[key]?.[lang]
}