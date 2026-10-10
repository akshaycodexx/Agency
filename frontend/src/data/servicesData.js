import { 
  Share2, Video, Film, Palette, Sparkles, Megaphone, Search, Globe, 
  Layout, Users, MessageSquare, Cpu, Camera, MapPin, Target, Layers
} from 'lucide-react';

export const servicesData = [
  {
    id: '01',
    slug: 'social-media-management',
    title: 'Social Media Management',
    icon: Share2,
    shortDesc: 'Strategic content calendar, community management, and brand positioning across Meta, LinkedIn & TikTok.',
    whyItMatters: 'Consistent social presence builds organic brand trust and keeps your agency top-of-mind for high-intent clients.',
    deliverables: ['Monthly Content Calendar', 'Daily Engagement & Moderation', 'Copywriting & Hashtags', 'Monthly Analytics Report'],
    idealClient: 'Brands looking to establish organic authority and consistent customer touchpoints.'
  },
  {
    id: '02',
    slug: 'content-creation',
    title: 'Content Creation',
    icon: Video,
    shortDesc: 'High-converting graphics, carousel slides, and storytelling assets tailored to brand aesthetics.',
    whyItMatters: 'Quality visual content differentiates premium brands from commoditized competitors.',
    deliverables: ['Custom Infographics & Carousels', 'Brand Asset Kits', 'Copywriting & Scripting', 'Story Templates'],
    idealClient: 'Businesses seeking consistent, agency-level visual assets.'
  },
  {
    id: '03',
    slug: 'reels-video-production',
    title: 'Reels & Video Production',
    icon: Film,
    shortDesc: 'Short-form dynamic vertical video editing, trending audio selection, and high-impact visual hooks.',
    whyItMatters: 'Reels and vertical video generate maximum organic reach on modern digital platforms.',
    deliverables: ['HD Vertical Video Editing', 'Hook & Caption Scripting', 'Sound Mixing & Sound Design', 'Color Grading'],
    idealClient: 'E-commerce, lifestyle, personal brands, and hospitality venues.'
  },
  {
    id: '04',
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: Palette,
    shortDesc: 'Professional marketing collateral, digital banners, print media, and custom packaging designs.',
    whyItMatters: 'Cohesive visual identity elevates brand perception at every touchpoint.',
    deliverables: ['Vector Brand Assets', 'Brochures & Packaging', 'Social & Web Banners', 'Marketing Materials'],
    idealClient: 'Companies launching new campaigns or upgrading existing packaging.'
  },
  {
    id: '05',
    slug: 'branding-creative-direction',
    title: 'Branding & Creative Direction',
    icon: Sparkles,
    shortDesc: 'Comprehensive brand identity systems, typography guidelines, logo usage, and brand books.',
    whyItMatters: 'A strong brand identity communicates clarity, confidence, and enterprise value.',
    deliverables: ['Logo & Visual Marks', 'Brand Guidelines Book', 'Typography & Palette System', 'Brand Strategy Map'],
    idealClient: 'Startups and established companies repositioning their identity.'
  },
  {
    id: '06',
    slug: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    icon: Megaphone,
    shortDesc: 'High-ROI paid social campaigns focused on customer acquisition, retargeting, and lead generation.',
    whyItMatters: 'Targeted advertising turns cold interest into qualified buyer pipeline.',
    deliverables: ['Ad Creative Testing', 'Custom Audience Funnels', 'Pixel Setup & Tracking', 'Weekly ROI Reporting'],
    idealClient: 'Businesses aiming to scale revenue and lead volume predictably.'
  },
  {
    id: '07',
    slug: 'google-ads',
    title: 'Google Ads & PPC',
    icon: Target,
    shortDesc: 'Intent-driven Google Search, Display, and Performance Max advertising for high-commercial queries.',
    whyItMatters: 'Captures customers active at the exact moment they search for your solutions.',
    deliverables: ['Keyword Research & Bidding', 'Ad Copy Optimization', 'Conversion Tracking', 'Negative Keyword Lists'],
    idealClient: 'High-ticket service providers, real estate, B2B, and local services.'
  },
  {
    id: '08',
    slug: 'seo',
    title: 'SEO & Organic Growth',
    icon: Search,
    shortDesc: 'Technical SEO audits, content strategy, and high-authority backlinking for sustainable search rankings.',
    whyItMatters: 'Top organic rankings produce long-term, compound inbound customer inquiries.',
    deliverables: ['Technical SEO Audits', 'On-Page Content Optimization', 'Link Building Strategy', 'Rank Tracking'],
    idealClient: 'Brands seeking consistent non-paid customer traffic.'
  },
  {
    id: '09',
    slug: 'local-seo',
    title: 'Local SEO & Google Profile',
    icon: MapPin,
    shortDesc: 'Local map pack optimization, reputation management, and local citation building.',
    whyItMatters: 'Dominates local search queries for high-intent nearby buyers.',
    deliverables: ['Google Business Profile Setup', 'Local Citation Sync', 'Review Strategy', 'Geotagged Content'],
    idealClient: 'Restaurants, clinics, real estate offices, and regional service providers.'
  },
  {
    id: '10',
    slug: 'website-development',
    title: 'Website Development',
    icon: Globe,
    shortDesc: 'Custom lightning-fast React / Next.js web experiences engineered for mobile speed and high conversion.',
    whyItMatters: 'Your website is your digital flagship storefront; execution determines buyer trust.',
    deliverables: ['Custom Mobile-First Design', 'SEO-Optimized Codebase', 'CMS & Admin Integration', 'Security & Speed Optimization'],
    idealClient: 'Companies wanting a world-class web presence.'
  },
  {
    id: '11',
    slug: 'landing-pages',
    title: 'Landing Page Engineering',
    icon: Layout,
    shortDesc: 'Dedicated conversion-focused landing pages crafted specifically for ad campaign traffic.',
    whyItMatters: 'Tailored landing pages significantly reduce cost-per-lead and boost campaign ROI.',
    deliverables: ['Conversion Copywriting', 'A/B Test Design Layouts', 'Lead Form Integrations', 'Speed Analytics'],
    idealClient: 'Businesses running active paid digital campaigns.'
  },
  {
    id: '12',
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    icon: Users,
    shortDesc: 'Strategic micro-influencer outreach, contract negotiations, creator briefs, and campaign execution.',
    whyItMatters: 'Creator endorsements provide social proof and authentic brand storytelling.',
    deliverables: ['Creator Sourcing & Vetting', 'Campaign Briefs & Contracts', 'Product Seeding Strategy', 'ROI Reporting'],
    idealClient: 'Consumer brands, lifestyle, cosmetics, and food & beverage.'
  },
  {
    id: '13',
    slug: 'whatsapp-marketing',
    title: 'WhatsApp Marketing Strategy',
    icon: MessageSquare,
    shortDesc: 'Automated broadcast campaigns, transactional updates, and direct customer messaging workflows.',
    whyItMatters: 'Direct messaging channels achieve industry-leading open rates and rapid customer response.',
    deliverables: ['API Workflow Integration', 'Segmented Broadcasts', 'Automated Greeting Sequences', 'Compliance Setup'],
    idealClient: 'Local businesses, e-commerce stores, and event organizers.'
  },
  {
    id: '14',
    slug: 'ai-creative-solutions',
    title: 'AI Creative Solutions',
    icon: Cpu,
    shortDesc: 'Generative AI visual prototyping, automated video variation, and smart workflow automation.',
    whyItMatters: 'Accelerates visual ideation and allows rapid creative testing at reduced production cycles.',
    deliverables: ['AI Concept Mockups', 'Rapid Ad Variant Testing', 'Automated Content Workflows'],
    idealClient: 'Agile startups and brands testing multiple campaign angles.'
  },
  {
    id: '15',
    slug: 'photography-product-shoots',
    title: 'Photography & Product Shoots',
    icon: Camera,
    shortDesc: 'Professional lifestyle and studio photography for products, culinary items, and brand spaces.',
    whyItMatters: 'High-definition custom imagery establishes immediate luxury quality.',
    deliverables: ['High-Res Edited Imagery', 'Studio & Location Setup', 'Color Correction', 'Social Asset Sizing'],
    idealClient: 'E-commerce products, luxury venues, and culinary brands.'
  },
  {
    id: '16',
    slug: 'creative-direction',
    title: 'Omnichannel Campaign Strategy',
    icon: Layers,
    shortDesc: 'End-to-end strategic campaign orchestration connecting visual content, paid ads, and web funnels.',
    whyItMatters: 'Ensures all brand touchpoints work seamlessly together to drive business growth.',
    deliverables: ['Full Funnel Blueprint', 'Cross-Platform Content Map', 'Performance Dashboard'],
    idealClient: 'Established businesses expanding market share.'
  }
];
