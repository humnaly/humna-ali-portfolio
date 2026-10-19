import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioEffects from "./components/PortfolioEffects";

// Server-Rendered Portfolio Sections, Migrated From The Supplied WordPress Theme Preview.
// Edit Visible Portfolio Text And Projects Below; Keep Design Rules In app/globals.css.
export default function HomePage() {
  return (
    <>
      <PortfolioEffects />
      <a className="ha-skip-link" href="#main">Skip To Main Content</a>
      <Header />
    <main id="main" className="wp-block-group ha-main">
      <section id="home" className="wp-block-group ha-hero ha-wrap">
        <div className="wp-block-group ha-hero-copy">
          <p className="ha-label">
            HUMNA ALI · MULTAN, PAKISTAN
          </p>
          <h1 className="wp-block-heading">
            Digital Marketing.
            <br />
            <span className="accent">
              Creative Intelligence.
            </span>
          </h1>
          <p className="ha-role">
            Digital Marketing Executive
          </p>
          <p className="ha-lead">
            I Help Businesses Strengthen Their Online Presence Through SEO, Social Media Content, And Creative Visuals.
          </p>
          <div className="wp-block-buttons">
            <div className="wp-block-button">
              <a className="wp-block-button__link wp-element-button" href="#work">
                View My Work ↗
              </a>
            </div>
            <div className="wp-block-button is-style-outline">
              <a className="wp-block-button__link wp-element-button" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <p className="ha-hero-note">
            SEO &amp; Content Strategy
            <br />
            Generative AI &amp; AI Image Generation
          </p>
        </div>
        <div className="wp-block-group ha-hero-visual">
          <figure className="wp-block-image size-full ha-hero-photo">
            <Image src="/images/workspace.png" alt="An Abstract Emerald Glass Sculpture With Glowing Orbital Light Trails" width={1254} height={1254} sizes="(max-width: 720px) 100vw, 48vw" priority />
          </figure>
          <div className="wp-block-group ha-image-note">
            <p className="ha-label">
              STRATEGY × AI × DESIGN
            </p>
            <p className="ha-image-caption">
              Human Creativity.
              <br />
              New Possibilities.
            </p>
          </div>
        </div>
      </section>
      <div className="wp-block-group ha-strip ha-wrap">
        <p>
          Search Visibility
        </p>
        <p>
          Social Media Content
        </p>
        <p>
          Creative Visuals
        </p>
      </div>
      <section id="services" className="wp-block-group ha-section ha-wrap">
        <div className="wp-block-group ha-section-head">
          <p className="ha-label">
            01 / WHAT I DO
          </p>
          <h2 className="wp-block-heading">
            Practical Support.
            <br />
            <span className="muted">
              Creative Execution.
            </span>
          </h2>
        </div>
        <div className="wp-block-group ha-service-grid">
          <div className="wp-block-group ha-service-card ha-reveal">
            <p className="ha-card-index">
              01 
              <span aria-hidden="true">
                ↗
              </span>
            </p>
            <h3 className="wp-block-heading">
              Search Engine Optimization
            </h3>
            <p>
              On-page And Off-page SEO, Keyword Research, And Website Content Optimization To Support Organic Search Visibility.
            </p>
          </div>
          <div className="wp-block-group ha-service-card ha-reveal">
            <p className="ha-card-index">
              02 
              <span aria-hidden="true">
                ↗
              </span>
            </p>
            <h3 className="wp-block-heading">
              Local SEO
            </h3>
            <p>
              Google Business Profile Content, Business Listings, And Backlink Building To Strengthen A Business’s Local Online Presence.
            </p>
          </div>
          <div className="wp-block-group ha-service-card ha-reveal">
            <p className="ha-card-index">
              03 
              <span aria-hidden="true">
                ↗
              </span>
            </p>
            <h3 className="wp-block-heading">
              Social Media Management
            </h3>
            <p>
              Content Planning, Post Creation, Scheduling, And Community Engagement For Business Social Media Accounts.
            </p>
          </div>
          <div className="wp-block-group ha-service-card ha-reveal">
            <p className="ha-card-index">
              04 
              <span aria-hidden="true">
                ↗
              </span>
            </p>
            <h3 className="wp-block-heading">
              Content Strategy &amp; Writing
            </h3>
            <p>
              Blog Content, Product Descriptions, And Platform-specific Social Media Copy Aligned With Business Goals And Audience Needs.
            </p>
          </div>
          <div className="wp-block-group ha-service-card ha-reveal">
            <p className="ha-card-index">
              05 
              <span aria-hidden="true">
                ↗
              </span>
            </p>
            <h3 className="wp-block-heading">
              Visual Content Creation
            </h3>
            <p>
              Social Media Graphics, Website Banners, Product Reels, Canva Designs, And AI-generated Images.
            </p>
          </div>
        </div>
      </section>
      <section id="work" className="wp-block-group ha-section ha-wrap">
        <div className="wp-block-group ha-section-head">
          <p className="ha-label">
            02 / SELECTED WORK
          </p>
          <h2 className="wp-block-heading">
            A Closer Look At My Work.
          </h2>
        </div>
        <p className="ha-section-intro">
          Product Content, Social Media, And Design — Created With The Audience In Mind.
        </p>
        <div className="wp-block-buttons ha-work-link">
          <div className="wp-block-button is-style-outline">
            <a className="wp-block-button__link wp-element-button" href="https://www.behance.net/ihzdesigner" target="_blank" rel="noopener noreferrer">
              Explore My Behance Portfolio ↗
            </a>
          </div>
        </div>
        <div className="wp-block-group ha-project-grid">
          <div className="wp-block-group ha-project ha-reveal">
            <p className="ha-project-type">
              Product Content Creation · Canva
            </p>
            <h3 className="wp-block-heading">
              Garden Fountain Product Reel
            </h3>
            <p className="ha-project-brand">
              Hi-Line Gift
            </p>
            <p>
              Created A Promotional Reel Featuring A Contemporary Semicircle Tiered Outdoor Fountain With Warm White LED Lighting. Highlighted The Fountain’s Design, Lighting, And Use In Outdoor Spaces.
            </p>
          </div>
          <div className="wp-block-group ha-project ha-reveal">
            <p className="ha-project-type">
              Product Content Creation
            </p>
            <h3 className="wp-block-heading">
              Floral Lights Collection Reel
            </h3>
            <p className="ha-project-brand">
              Hi-Line Gift
            </p>
            <p>
              Created A Product Reel Featuring Three Floral Light Designs, Using Smooth Transitions And A Coordinated Visual Style To Highlight Product Details And Decorative Appeal.
            </p>
          </div>
          <div className="wp-block-group ha-project ha-reveal">
            <p className="ha-project-type">
              Social Media Content · Canva
            </p>
            <h3 className="wp-block-heading">
              Pagoda Garden Statue
            </h3>
            <p className="ha-project-brand">
              Promotional Content
            </p>
            <p>
              Created Promotional Content Showcasing A Pagoda Garden Statue For Gardens, Patios, And Outdoor Spaces. Combined Product-focused Visuals With Copy Highlighting Its Design And Styling Possibilities.
            </p>
          </div>
        </div>
        <details className="wp-block-details">
          <summary>
            More Projects · Marketing, Design &amp; Machine Vision
          </summary>
          <div className="wp-block-group ha-project-grid ha-more-projects">
            <div className="wp-block-group ha-project">
              <p className="ha-project-type">
                Social Media Marketing · Adobe Illustrator
              </p>
              <h3 className="wp-block-heading">
                Facebook Marketing Strategy
              </h3>
              <p className="ha-project-brand">
                Taawun Groups
              </p>
              <p>
                Developed A Facebook Marketing Strategy For A Construction, Contracting, And Project Management Business, Presenting Services Clearly To Support Brand Visibility And Audience Engagement.
              </p>
            </div>
            <div className="wp-block-group ha-project">
              <p className="ha-project-type">
                Website Banner Design · Adobe Illustrator
              </p>
              <h3 className="wp-block-heading">
                Haircare Website Banner
              </h3>
              <p className="ha-project-brand">
                GiftPoint
              </p>
              <p>
                Designed A Haircare Product Banner With Clear Messaging, Visual Hierarchy, And Brand Consistency To Support Product Discovery And Complement The Website’s Design.
              </p>
            </div>
            <div className="wp-block-group ha-project">
              <p className="ha-project-type">
                Image Optimization · Flow
              </p>
              <h3 className="wp-block-heading">
                Product Image Optimization
              </h3>
              <p className="ha-project-brand">
                Web-ready Product Visuals
              </p>
              <p>
                Reduced Image File Sizes While Preserving Visual Quality, With Attention To Loading Efficiency And Clear Product Presentation.
              </p>
            </div>
            <div className="wp-block-group ha-project">
              <p className="ha-project-type">
                Academic Project · Machine Vision
              </p>
              <h3 className="wp-block-heading">
                Neural Style Transfer
              </h3>
              <p className="ha-project-brand">
                University Of Southern Punjab, Multan
              </p>
              <p>
                Explored How Neural Networks Combine The Content Of One Image With The Artistic Style Of Another. Resized Input Images And Adjusted Training Iterations To Refine The Generated Output.
              </p>
            </div>
          </div>
        </details>
      </section>
      <section id="about" className="wp-block-group ha-section ha-wrap">
        <div className="wp-block-group ha-section-head">
          <p className="ha-label">
            03 / A LITTLE ABOUT ME
          </p>
          <h2 className="wp-block-heading">
            Strategy With A Creative Perspective.
          </h2>
        </div>
        <div className="wp-block-group ha-about-grid ha-reveal">
          <figure className="wp-block-image size-full ha-about-photo">
            <Image src="/images/creative.png" alt="An Open Notebook With Content Strategy And SEO Planning Notes In Green Studio Lighting" width={1536} height={1024} sizes="(max-width: 720px) 100vw, 48vw" />
          </figure>
          <div className="wp-block-group ha-about-copy">
            <p>
              I’m A Digital Marketing Professional With Experience In Search Engine Optimization, Social Media Management, And Content Creation.
            </p>
            <p>
              My Work Includes Optimizing Website Content, Managing Google Business Profile Posts, Planning Social Media Content, And Supporting Local SEO Through Backlink Building. I Also Use Generative AI And AI Image Generation As Part Of My Creative Skill Set.
            </p>
            <p>
              With A Background In Graphic Design And UI/UX And A Master’s Degree In Computer Science, I Bring Technical Understanding And Visual Communication Skills To My Marketing Work. I Continue To Develop My Expertise Through Practical Experience And Professional Training.
            </p>
            <p className="ha-signoff">
              Understand. Create. Refine.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="wp-block-group ha-section ha-wrap">
        <div className="wp-block-group ha-section-head">
          <p className="ha-label">
            04 / SKILLS &amp; TOOLS
          </p>
          <h2 className="wp-block-heading">
            The Skills Behind The Work.
          </h2>
        </div>
        <div className="wp-block-group ha-skills-grid">
          <div className="wp-block-group ha-skill-group">
            <h3 className="wp-block-heading">
              Digital Marketing
            </h3>
            <div className="wp-block-group ha-chips">
              <p className="ha-chip">
                Search Engine Optimization
              </p>
              <p className="ha-chip">
                On-page &amp; Off-page SEO
              </p>
              <p className="ha-chip">
                Local SEO
              </p>
              <p className="ha-chip">
                Google Business Profile Content
              </p>
              <p className="ha-chip">
                Keyword Research
              </p>
              <p className="ha-chip">
                Social Media Management
              </p>
              <p className="ha-chip">
                Content Strategy &amp; Writing
              </p>
              <p className="ha-chip">
                Community Engagement
              </p>
            </div>
          </div>
          <div className="wp-block-group ha-skill-group">
            <h3 className="wp-block-heading">
              Design &amp; Creative
            </h3>
            <div className="wp-block-group ha-chips">
              <p className="ha-chip">
                Social Media Graphics
              </p>
              <p className="ha-chip">
                Website Banners
              </p>
              <p className="ha-chip">
                Product Reels
              </p>
              <p className="ha-chip">
                Logo &amp; Flyer Design
              </p>
              <p className="ha-chip">
                UI/UX Design
              </p>
              <p className="ha-chip">
                Generative AI
              </p>
              <p className="ha-chip">
                AI Image Generation
              </p>
              <p className="ha-chip">
                Product Image Optimization
              </p>
            </div>
          </div>
          <div className="wp-block-group ha-skill-group">
            <h3 className="wp-block-heading">
              Creative &amp; Publishing Tools
            </h3>
            <div className="wp-block-group ha-chips">
              <p className="ha-chip">
                Canva
              </p>
              <p className="ha-chip">
                Adobe Illustrator
              </p>
              <p className="ha-chip">
                Planable
              </p>
              <p className="ha-chip">
                Publer
              </p>
              <p className="ha-chip">
                Flow
              </p>
            </div>
          </div>
          <div className="wp-block-group ha-skill-group">
            <h3 className="wp-block-heading">
              Tools Covered In Training
            </h3>
            <div className="wp-block-group ha-chips">
              <p className="ha-chip">
                Google Ads
              </p>
              <p className="ha-chip">
                Google Analytics
              </p>
              <p className="ha-chip">
                Google Search Console
              </p>
              <p className="ha-chip">
                Google Keyword Planner
              </p>
              <p className="ha-chip">
                Semrush
              </p>
              <p className="ha-chip">
                Moz
              </p>
              <p className="ha-chip">
                Ubersuggest
              </p>
            </div>
          </div>
          <div className="wp-block-group ha-skill-group">
            <h3 className="wp-block-heading">
              Technical Background
            </h3>
            <div className="wp-block-group ha-chips">
              <p className="ha-chip">
                Computer Science
              </p>
              <p className="ha-chip">
                Python
              </p>
              <p className="ha-chip">
                MySQL
              </p>
              <p className="ha-chip">
                Machine Vision
              </p>
              <p className="ha-chip">
                Neural Style Transfer
              </p>
            </div>
          </div>
          <div className="wp-block-group ha-skill-group">
            <h3 className="wp-block-heading">
              Freelancing Skills In Development
            </h3>
            <div className="wp-block-group ha-chips">
              <p className="ha-chip">
                Proposal Writing
              </p>
              <p className="ha-chip">
                Client Outreach
              </p>
              <p className="ha-chip">
                Bidding Strategies
              </p>
              <p className="ha-chip">
                Profile Optimization
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="wp-block-group ha-section ha-wrap">
        <div className="wp-block-group ha-section-head">
          <p className="ha-label">
            05 / PROFESSIONAL JOURNEY
          </p>
          <h2 className="wp-block-heading">
            Experience &amp; Continuous Learning.
          </h2>
        </div>
        <details className="wp-block-details">
          <summary>
            ZKV Digital SEO And Web Design · Social Media Marketing Specialist &amp; SEO
          </summary>
          <p className="meta">
            February 2025–Present · Full-time · Remote · Kitchener, Ontario, Canada
          </p>
          <p>
            • Optimize Website Content, Including Blog Posts And Product Descriptions, To Support Search Visibility.
          </p>
          <p>
            • Create, Manage, And Schedule Content For Google Business Profile, Facebook, And Instagram.
          </p>
          <p>
            • Support Local SEO Through Backlink Building.
          </p>
          <p>
            • Use Canva To Create Visual Content And Reels.
          </p>
          <p>
            • Schedule Social Media Posts Using Planable And Publer.
          </p>
        </details>
        <details className="wp-block-details">
          <summary>
            WLEK · Search Engine Optimization Specialist
          </summary>
          <p className="meta">
            February–April 2026 · Full-time · Remote · Lahore, Pakistan
          </p>
          <p>
            • Worked On Off-page SEO.
          </p>
          <p>
            • Associated Projects Included A Flying Wish And Ahmad Fabrics International.
          </p>
        </details>
        <details className="wp-block-details">
          <summary>
            Fazzilet Consultancy Services · Social Media Manager
          </summary>
          <p className="meta">
            July–October 2025 · Internship · Remote · New Jersey, United States
          </p>
          <p>
            • Created Content For X (Twitter) Giveaway Campaigns.
          </p>
          <p>
            • Encouraged Community Participation And Audience Interaction.
          </p>
          <p>
            • Supported LinkedIn Page Management And Content Creation.
          </p>
          <p>
            • Developed Social Media Content To Support Brand Awareness And Engagement.
          </p>
        </details>
        <details className="wp-block-details">
          <summary>
            Sparkify Solutions · Search Engine Optimization Specialist
          </summary>
          <p className="meta">
            June 2025 · Full-time · Remote · Islamabad, Pakistan
          </p>
        </details>
        <details className="wp-block-details">
          <summary>
            WLEK · Search Engine Optimization Specialist
          </summary>
          <p className="meta">
            October 2024–February 2025 · Remote · Lahore, Pakistan
          </p>
          <p>
            • Full-time: January–February 2025. Internship: October–December 2024.
          </p>
          <p>
            • Worked On On-page And Off-page SEO.
          </p>
          <p>
            • Supported Business Listings And Blog Commenting.
          </p>
          <p>
            • Associated Projects Included Choicemall, GO-Globe, And Wrth.Studio.
          </p>
        </details>
        <details className="wp-block-details">
          <summary>
            Earlier Graphic Design &amp; UI/UX Experience
          </summary>
          <div className="wp-block-group ha-career-item">
            <h3 className="wp-block-heading">
              Graphic Designer
            </h3>
            <p className="company">
              Oasis Infobyte
            </p>
            <p className="meta">
              September 2024 · Internship · Remote · New Delhi, India
            </p>
            <p>
              Logo And Flyer Design.
            </p>
          </div>
          <div className="wp-block-group ha-career-item">
            <h3 className="wp-block-heading">
              Junior Graphic Designer
            </h3>
            <p className="company">
              Trout Flow
            </p>
            <p className="meta">
              July–September 2024 · Internship · On-site · Multan, Pakistan
            </p>
            <p>
              Logos And Social Media Post Designs.
            </p>
          </div>
          <div className="wp-block-group ha-career-item">
            <h3 className="wp-block-heading">
              UI/UX Design Intern
            </h3>
            <p className="company">
              Digital Empowerment Network
            </p>
            <p className="meta">
              August 2024 · Remote · Islamabad, Pakistan
            </p>
            <p>
              Web And Mobile Application Design.
            </p>
          </div>
          <div className="wp-block-group ha-career-item">
            <h3 className="wp-block-heading">
              UI/UX Design Intern
            </h3>
            <p className="company">
              InternnCraft
            </p>
            <p className="meta">
              July–August 2024 · Remote · Karachi, Pakistan
            </p>
            <p>
              Mobile And Web Application Design And Redesign.
            </p>
          </div>
          <div className="wp-block-group ha-career-item">
            <h3 className="wp-block-heading">
              Web User Interface Design Intern
            </h3>
            <p className="company">
              Growintern
            </p>
            <p className="meta">
              June 2024 · Remote · Delhi, India
            </p>
            <p>
              Web And Mobile Interface Design And Application Redesign.
            </p>
          </div>
        </details>
        <details className="wp-block-details">
          <summary>
            Education
          </summary>
          <div className="wp-block-group ha-education-grid">
            <div className="wp-block-group education-item">
              <h3 className="wp-block-heading">
                MS In Computer Science
              </h3>
              <p className="company">
                University Of Southern Punjab, Multan
              </p>
              <p className="meta">
                October 2022–March 2024
              </p>
              <p>
                Focus: Machine Vision · Project: Neural Style Transfer
              </p>
            </div>
            <div className="wp-block-group education-item">
              <h3 className="wp-block-heading">
                BS In Computer Science
              </h3>
              <p className="company">
                University Of Southern Punjab, Multan
              </p>
              <p className="meta">
                2014–2018
              </p>
              <p>
                Relevant Skills: Python And MySQL
              </p>
            </div>
          </div>
        </details>
        <details className="wp-block-details">
          <summary>
            Certifications &amp; Certificates
          </summary>
          <div className="wp-block-group credential">
            <h3 className="wp-block-heading">
              Social Media Manager
            </h3>
            <p>
              Fazzilet Consultancy Services · Issued November 2025 · Associated Skill: Content Writing
            </p>
          </div>
          <div className="wp-block-group credential">
            <h3 className="wp-block-heading">
              UI/UX
            </h3>
            <p>
              Alison
            </p>
          </div>
          <div className="wp-block-group credential">
            <h3 className="wp-block-heading">
              User Interface And User Experience (UI/UX)
            </h3>
            <p>
              Great Learning · Credential ID: 55928
            </p>
          </div>
          <div className="wp-block-group credential">
            <h3 className="wp-block-heading">
              Flutter
            </h3>
            <p>
              Simplilearn · Credential ID: 6249075
            </p>
          </div>
          <div className="wp-block-group credential">
            <h3 className="wp-block-heading">
              MERN Stack
            </h3>
            <p>
              Professional Freelancing Training Program · Credential ID: B17003317
            </p>
          </div>
          <div className="wp-block-group credential">
            <h3 className="wp-block-heading">
              Full Stack Web Developer
            </h3>
            <p>
              Professional Freelancing Training Program · Credential ID: B17003318
            </p>
          </div>
        </details>
        <details className="wp-block-details">
          <summary>
            Training &amp; Professional Development
          </summary>
          <h3 className="wp-block-heading">
            Freelancing IT Training — NAVTTC Skills Of Tomorrow Program
          </h3>
          <p className="meta">
            PNY Trainings · September 2026–Present · Apprenticeship · On-site · Multan, Pakistan
          </p>
          <p>
            Developing Practical Freelancing And Client Acquisition Skills: Profile Setup And Optimization For Upwork, Fiverr, And Freelancer.com; Proposal Writing And Bidding; Client Prospecting, Outreach, And Professional Communication.
          </p>
          <h3 className="wp-block-heading">
            Google Ads &amp; PPC
          </h3>
          <p className="meta">
            NS Training (SMC-PRIVATE) Limited · March–April 2025 · Training Internship · Remote
          </p>
          <p>
            Hands-on Training In Search, Display, And Video Campaigns; Keyword Research, Campaign Structure, Audience Targeting, Bidding, Budgeting, And Ad Copywriting; Ad Extensions, Quality Score, Conversion Tracking, Google Analytics Integration, Remarketing, And A/B Testing.
          </p>
          <h3 className="wp-block-heading">
            Advanced SEO
          </h3>
          <p className="meta">
            NS Training (SMC-PRIVATE) Limited · March–April 2025 · Training Internship · Remote
          </p>
          <p>
            Training In Technical, On-page, And Off-page SEO; Keyword Research And Competitor Analysis; Audits, Crawl Issues, And Indexing; Content Optimization, Meta Tags, Internal Linking, Backlinks, And Performance Monitoring.
          </p>
        </details>
      </section>
      <section id="contact" className="wp-block-group ha-contact ha-wrap">
        <p className="ha-label">
          LET’S WORK TOGETHER
        </p>
        <h2 className="wp-block-heading">
          Let’s Build Your
          <br />
          <span className="accent">
            Online Presence.
          </span>
        </h2>
        <p className="ha-lead">
          Looking For Support With SEO, Social Media Content, Or Creative Visuals? Let’s Discuss Your Business And Your Next Project.
        </p>
        <p className="ha-contact-location">
          Multan, Pakistan
        </p>
        <div className="wp-block-buttons ha-profile-buttons">
          <div className="wp-block-button">
            <a className="wp-block-button__link wp-element-button" href="https://www.upwork.com/freelancers/~010c3e5db3c37f5319" target="_blank" rel="noopener noreferrer">
              Hire Me On Upwork ↗
            </a>
          </div>
          <div className="wp-block-button is-style-outline">
            <a className="wp-block-button__link wp-element-button" href="https://www.linkedin.com/in/humna-ali-081a401a6/" target="_blank" rel="noopener noreferrer">
              Connect On LinkedIn ↗
            </a>
          </div>
          <div className="wp-block-button is-style-outline">
            <a className="wp-block-button__link wp-element-button" href="https://www.behance.net/ihzdesigner" target="_blank" rel="noopener noreferrer">
              View Behance ↗
            </a>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
