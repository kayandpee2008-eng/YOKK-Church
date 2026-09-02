import React, { useState } from 'react';
import { Church, Menu, X, ArrowRight, ChevronDown, ChevronUp, Play, Calendar, Download, Share2 } from 'lucide-react';

const heroWorship = `${import.meta.env.BASE_URL}img1.jpg`;

const sermonImages = [
  { id: 1, src: `${import.meta.env.BASE_URL}sermons/sermons1.webp`, title: "One Degree", date: "August 23, 2026", description: "Circumstances may be true, but the story we tell ourselves about them can be a lie, and those lies can shape the course of our lives. Dr. Donna Pisani challenges us to identify the lies of the enemy, replace them with the settled truth of God's Word, and hold onto the hope found in what God has spoken." },
  { id: 2, src: `${import.meta.env.BASE_URL}sermons/sermons2.webp`, title: "A Sure Future", date: "August 16, 2026", description: "Discover an inspiring message designed to uplift your faith and guide you through everyday life with complete assurance in God's plan." },
  { id: 3, src: `${import.meta.env.BASE_URL}sermons/sermons3.webp`, title: "Questions in the Valley", date: "August 9, 2026", description: "Navigating difficult seasons often brings heavy questions. Learn how to anchor your heart in faith when walking through life's deepest valleys." },
  { id: 4, src: `${import.meta.env.BASE_URL}sermons/sermons4.webp`, title: "The Lord Is My Shepherd", date: "August 2, 2026", description: "A powerful reminder of God's personal care, protection, and provision in every single season we encounter." },
  { id: 5, src: `${import.meta.env.BASE_URL}sermons/sermons1.webp`, title: "A Holy Hunger", date: "July 26, 2026", description: "Awaken a fresh passion for God's presence and pursue a deeper, more meaningful spiritual life." },
  { id: 6, src: `${import.meta.env.BASE_URL}sermons/sermons2.webp`, title: "Getting Ready for Victory", date: "July 19, 2026", description: "Prepare your mindset and spirit for the breakthroughs and victories God has prepared ahead of you." },
  { id: 7, src: `${import.meta.env.BASE_URL}sermons/sermons3.webp`, title: "Food Bank Sunday", date: "July 12, 2026", description: "Reflecting on the heart of generosity, community care, and sharing God's love through practical action." },
  { id: 8, src: `${import.meta.env.BASE_URL}sermons/sermons4.webp`, title: "Seek My Face", date: "July 5, 2026", description: "Turn away from distractions and lean entirely into seeking God's presence for revival in your life and community." },
  { id: 9, src: `${import.meta.env.BASE_URL}sermons/sermons1.webp`, title: "Today, I Choose to Forgive", date: "June 28, 2026", description: "Experience the profound freedom and healing that comes when you choose to release offense and walk in forgiveness." },
  { id: 10, src: `${import.meta.env.BASE_URL}sermons/sermons2.webp`, title: "After You", date: "June 21, 2026", description: "Exploring the biblical pattern of putting others first and modeling Christ-like humility in our relationships." },
  { id: 11, src: `${import.meta.env.BASE_URL}sermons/sermons3.webp`, title: "Close the Door", date: "June 14, 2026", description: "Learn how to shut out negative influences and protect your spiritual boundaries to stay aligned with your destiny." },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [openBelief, setOpenBelief] = useState(null);

  const toggleBelief = (index) => {
    setOpenBelief(openBelief === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-b border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="p-2 bg-emerald-600 text-black rounded-lg">
                <Church className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white">YOKK <span className="text-emerald-500">CHURCH</span></span>
            </div>

            {/* Desktop Links - Spacing Fixed Here */}
            <div className="hidden md:flex items-center" style={{ gap: '2rem' }}>
              {['home', 'about', 'ministries', 'sermons', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-emerald-400 ${
                    activeTab === tab ? 'text-emerald-400 border-b-2 border-emerald-500 pb-1 font-semibold' : 'text-zinc-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button 
                onClick={() => setActiveTab('prayer')}
                className="ml-4 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-black font-semibold rounded-lg text-sm transition shadow-md"
              >
                Request a Prayer
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-zinc-400 hover:text-white">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-4 space-y-2 shadow-lg">
            {['home', 'about', 'ministries', 'sermons', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:bg-emerald-950 hover:text-emerald-400 capitalize"
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* HOME PAGE */}
        {activeTab === 'home' && (
          <div className="bg-black text-zinc-100 pb-24">
            <div 
              className="relative bg-black py-32 sm:py-40 bg-cover bg-center text-center text-white border-b border-zinc-800"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.95)), url(${heroWorship})` }}
            >
              <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">WELCOME TO OUR CHURCH</p>
                <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
                  Welcome to our church
                </h1>
                <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  Our service is rooted in our belief in the Bible, our deep faith in Jesus Christ, and our acceptance of the unconditional love of God.
                </p>
                <div className="pt-4 flex justify-center">
                  <button 
                    onClick={() => setActiveTab('ministries')}
                    className="px-6 py-3 bg-emerald-600 text-black hover:bg-emerald-500 font-bold rounded-xl transition shadow-lg text-sm tracking-wide"
                  >
                    GET INVOLVED
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20 space-y-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-white tracking-wide">Get involved in our movement</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-emerald-600 transition">
                    <div>
                      <div className="h-56 overflow-hidden bg-zinc-950">
                        <img src={`${import.meta.env.BASE_URL}img2.jpg`} alt="Young Adult Group" className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90" />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">FRIDAYS AT 6:00 PM</div>
                        <h3 className="text-xl font-bold font-serif text-white">Young Adult Group Session</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          A vibrant community for young adults to connect, worship, and study the word together.
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button onClick={() => setActiveTab('ministries')} className="text-xs font-bold text-emerald-400 uppercase tracking-wider inline-flex items-center space-x-2 hover:underline">
                        <span>VIEW MINISTRIES</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-emerald-600 transition">
                    <div>
                      <div className="h-56 overflow-hidden bg-zinc-950">
                        <img src={`${import.meta.env.BASE_URL}img3.jpg`} alt="Youth Group" className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90" />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">SATURDAYS AT 4:00 PM</div>
                        <h3 className="text-xl font-bold font-serif text-white">Youth Group Session</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          Empowering the next generation with strong biblical foundations and life-giving friendships.
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button onClick={() => setActiveTab('ministries')} className="text-xs font-bold text-emerald-400 uppercase tracking-wider inline-flex items-center space-x-2 hover:underline">
                        <span>VIEW MINISTRIES</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-emerald-600 transition">
                    <div>
                      <div className="h-56 overflow-hidden bg-zinc-950">
                        <img src={`${import.meta.env.BASE_URL}img5.jpg`} alt="Women Group" className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90" />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">THURSDAYS AT 5:30 PM</div>
                        <h3 className="text-xl font-bold font-serif text-white">Women Group Fellowship</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          A supportive space for women to pray, encourage one another, and grow in faith.
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <button onClick={() => setActiveTab('ministries')} className="text-xs font-bold text-emerald-400 uppercase tracking-wider inline-flex items-center space-x-2 hover:underline">
                        <span>VIEW MINISTRIES</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl">
                <div className="space-y-6">
                  <div className="w-12 h-1 bg-emerald-500"></div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                    In our church, we love and trust Jesus
                  </h2>
                  <p className="text-zinc-300 text-base leading-relaxed">
                    YOKK Church Ministry provides dedicated support systems, prayer cells, and outreach programs. We welcome you to find your place and serve with your unique gifts.
                  </p>
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="px-8 py-3.5 bg-emerald-600 text-black hover:bg-emerald-500 font-bold rounded-xl transition shadow-md text-sm tracking-wide"
                  >
                    CONTACT US TODAY
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-80 border border-zinc-800 bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img4.jpg`} alt="Worship congregation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>  
        )}

        {/* SERMONS PAGE */}
        {activeTab === 'sermons' && (
          <div className="bg-[#0a0a0a] min-h-screen pb-24 text-white">
            <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center text-center overflow-hidden border-b border-zinc-800 mb-16">
              <div className="absolute inset-0 z-0">
                <img 
                  src={`${import.meta.env.BASE_URL}sermons/sermons1.webp`} 
                  alt="Preaching Background" 
                  className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/40"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto px-4 mt-6">
                <span className="text-emerald-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 block">
                  MESSAGES & TEACHINGS
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 font-serif">
                  Our Latest Sermons
                </h1>
                <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  Explore life-changing messages and biblical teachings from our weekly gatherings.
                </p>
              </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-10 border-b border-zinc-800 pb-4">
                <h2 className="text-2xl font-bold tracking-tight">Recent Archives</h2>
                <div className="text-sm text-neutral-400">
                  Showing latest weekly broadcasts
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sermonImages.map((sermon) => (
                  <div key={sermon.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
                    <div className="relative h-52 w-full overflow-hidden bg-neutral-950 flex-shrink-0">
                      <img 
                        src={sermon.src} 
                        alt={sermon.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `${import.meta.env.BASE_URL}sermons/sermons1.webp`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </button>
                      </div>
                      <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded">
                        Sermon Archive
                      </span>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center text-xs text-neutral-400 space-x-4 mb-2">
                          <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-emerald-500" /> {sermon.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          {sermon.title}
                        </h3>
                        
                        <p className="text-sm text-neutral-400 mb-6 line-clamp-3">
                          {sermon.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-sm mt-auto">
                        <button className="text-emerald-500 hover:text-emerald-400 font-medium flex items-center space-x-1">
                          <Play className="w-4 h-4" />
                          <span>Watch Now</span>
                        </button>
                        <div className="flex space-x-3 text-neutral-400">
                          <button aria-label="Download Sermon Media" className="hover:text-white transition-colors"><Download className="w-4 h-4" /></button>
                          <button aria-label="Share Sermon" className="hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABOUT PAGE */}
        {activeTab === 'about' && (
          <div className="bg-black text-zinc-100 space-y-24 pb-24">
            <div 
              className="relative bg-black py-36 sm:py-48 bg-cover bg-center text-center overflow-hidden border-b border-zinc-800"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.92)), url(${import.meta.env.BASE_URL}img4.jpg)` }}
            >
              <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">ABOUT YOKK CHURCH</p>
                <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
                  Who We Are
                </h1>
                <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  Rooted in faith, growing in grace, and reaching out in love.
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img1.jpg`} alt="Mission & Vision" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">OUR MISSION & VISION</h3>
                    <p className="text-zinc-300 text-xs mb-4">Discover what drives our ministry forward daily.</p>
                  </div>
                </div>

                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img2.jpg`} alt="Leadership Team" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">LEADERSHIP TEAM</h3>
                    <p className="text-zinc-300 text-xs mb-4">Meet our pastors and dedicated leaders.</p>
                  </div>
                </div>

                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img4.jpg`} alt="What We Believe" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">WHAT WE BELIEVE</h3>
                    <p className="text-zinc-300 text-xs mb-4">Explore our core biblical doctrines and faith.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">WE ARE OTHERS-FOCUSED</p>
                  <h2 className="text-3xl font-serif font-bold text-white">THE <span className="text-emerald-500">MISSION</span></h2>
                  <div className="w-16 h-1 bg-emerald-500"></div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Everything we do is geared toward connecting with those who are far from God and helping them become followers of Jesus Christ! The heartbeat of YOKK Church is to see lives changed by the power of God’s Spirit. We believe that every person has a God-given purpose inside of them. When God's Spirit moves on us, we move closer to God's Plan for our lives.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden h-72 border border-zinc-800 bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img3.jpg`} alt="Church community" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="order-2 lg:order-1 rounded-2xl overflow-hidden h-72 border border-zinc-800 bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img5.jpg`} alt="Church vision" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">COMMUNITY</p>
                  <h2 className="text-3xl font-serif font-bold text-white">THE <span className="text-emerald-500">VISION</span></h2>
                  <div className="w-16 h-1 bg-emerald-500"></div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    The vision of YOKK Church is to create a community of authentic believers and to witness a city transformed by the life-changing reality of the gospel as people come to know Jesus.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">OUR LEADERSHIP</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">PASTORS & DIRECTORS</h2>
                <div className="w-12 h-1 bg-emerald-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-center space-y-4 shadow-xl">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-emerald-500 bg-zinc-950">
                    <img src={`${import.meta.env.BASE_URL}img2.jpg`} alt="Pastor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Rev. & Mrs.</h3>
                    <p className="text-emerald-400 text-sm font-semibold">Lead Pastors</p>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Dedicated to leading the congregation with spiritual guidance, love, and integrity.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-center space-y-4 shadow-xl">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-emerald-500 bg-zinc-950">
                    <img src={`${import.meta.env.BASE_URL}img3.jpg`} alt="Associate Pastor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Leadership Team</h3>
                    <p className="text-emerald-400 text-sm font-semibold">Associate Pastors</p>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Serving ministries, prayer cells, and community development initiatives.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-center space-y-4 shadow-xl">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-emerald-500 bg-zinc-950">
                    <img src={`${import.meta.env.BASE_URL}img5.jpg`} alt="Director" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Ministry Directors</h3>
                    <p className="text-emerald-400 text-sm font-semibold">Youth & Women Leads</p>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Empowering specialized groups and organizing impactful weekly gatherings.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">OUR BELIEFS</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">WHAT WE BELIEVE</h2>
                <div className="w-12 h-1 bg-emerald-500 mx-auto"></div>
              </div>

              <div className="space-y-4">
                {[
                  { title: "God", content: "We believe in one true God, creator of all things, infinitely perfect and eternally existing in three persons: Father, Son, and Holy Spirit." },
                  { title: "Revelation", content: "We believe the Scriptures of the Old and New Testaments are inspired by God and serve as the supreme rule of faith and practice." },
                  { title: "Salvation", content: "Salvation is a free gift of God's grace received through personal faith in Jesus Christ, His death, and resurrection." },
                  { title: "Water Baptism", content: "We believe water baptism by immersion is an outward declaration of an inward faith in Jesus Christ." },
                  { title: "Holy Spirit", content: "We believe the Holy Spirit empowers believers to live godly lives, manifest spiritual gifts, and boldly witness for Christ." }
                ].map((belief, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg transition">
                    <button 
                      onClick={() => toggleBelief(idx)} 
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white hover:text-emerald-400 transition"
                    >
                      <span className="text-lg">{belief.title}</span>
                      {openBelief === idx ? <ChevronUp className="w-5 h-5 text-emerald-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                    </button>
                    {openBelief === idx && (
                      <div className="px-6 pb-5 text-zinc-300 text-sm leading-relaxed border-t border-zinc-800/60 pt-4">
                        {belief.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MINISTRIES PAGE */}
        {activeTab === 'ministries' && (
          <div className="bg-black text-zinc-100 space-y-24 pb-24">
            <div 
              className="relative bg-black py-36 sm:py-48 bg-cover bg-center text-center overflow-hidden border-b border-zinc-800"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url(${import.meta.env.BASE_URL}img3.jpg)` }}
            >
              <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">CONNECT & GROW</p>
                <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
                  Our Ministries
                </h1>
                <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  Discover a place to serve, grow in faith, and build meaningful relationships within our community.
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-3">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">FIND YOUR PLACE</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">ACTIVE MINISTRIES</h2>
                <div className="w-12 h-1 bg-emerald-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-emerald-600 transition">
                  <div>
                    <div className="h-56 overflow-hidden bg-zinc-950">
                      <img src={`${import.meta.env.BASE_URL}img3.jpg`} alt="Youth Ministry" className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">SATURDAYS AT 4:00 PM</div>
                      <h3 className="text-xl font-bold font-serif text-white">Youth Ministry</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Empowering middle and high schoolers to know God, find freedom, discover purpose, and make a difference.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button onClick={() => setActiveTab('contact')} className="text-xs font-bold text-emerald-400 uppercase tracking-wider inline-flex items-center space-x-2 hover:underline">
                      <span>GET CONNECTED</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-emerald-600 transition">
                  <div>
                    <div className="h-56 overflow-hidden bg-zinc-950">
                      <img src={`${import.meta.env.BASE_URL}img2.jpg`} alt="Young Adult Group" className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">FRIDAYS AT 6:00 PM</div>
                      <h3 className="text-xl font-bold font-serif text-white">Young Adults</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        A vibrant community for college students and young professionals to connect, worship, and study Scripture together.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button onClick={() => setActiveTab('contact')} className="text-xs font-bold text-emerald-400 uppercase tracking-wider inline-flex items-center space-x-2 hover:underline">
                      <span>GET CONNECTED</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-emerald-600 transition">
                  <div>
                    <div className="h-56 overflow-hidden bg-zinc-950">
                      <img src={`${import.meta.env.BASE_URL}img5.jpg`} alt="Women Group" className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">THURSDAYS AT 5:30 PM</div>
                      <h3 className="text-xl font-bold font-serif text-white">Women's Fellowship</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        A supportive space for women of all ages to pray, encourage one another, and grow deeper in faith.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button onClick={() => setActiveTab('contact')} className="text-xs font-bold text-emerald-400 uppercase tracking-wider inline-flex items-center space-x-2 hover:underline">
                      <span>GET CONNECTED</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">EVERYONE HAS A PLACE</p>
                  <h2 className="text-3xl font-serif font-serif font-bold text-white">SERVE WITH <span className="text-emerald-500">PURPOSE</span></h2>
                  <div className="w-16 h-1 bg-emerald-500"></div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    We believe that God has uniquely gifted every person to make an impact. Our ministry teams provide practical opportunities to put your gifts into action—from worship and hospitality to community outreach and youth mentorship.
                  </p>
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="px-8 py-3.5 bg-emerald-600 text-black hover:bg-emerald-500 font-bold rounded-xl transition shadow-md text-sm tracking-wide"
                  >
                    JOIN A SERVE TEAM
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden h-72 border border-zinc-800 bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img1.jpg`} alt="Serving together" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRAYER PAGE */}
        {activeTab === 'prayer' && (
          <div className="bg-black text-zinc-100 min-h-screen pb-24">
            <div 
              className="relative bg-black py-36 sm:py-48 bg-cover bg-center text-center overflow-hidden border-b border-zinc-800 mb-16"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.92)), url(${import.meta.env.BASE_URL}img2.jpg)` }}
            >
              <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">WE ARE HERE FOR YOU</p>
                <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
                  Request a Prayer
                </h1>
                <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  Share your prayer needs with our pastoral team. We believe in the power of intercession and faith.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <form onSubmit={(e) => { e.preventDefault(); alert('Prayer request submitted successfully!'); }} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">Your Name</label>
                      <input type="text" required className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">Email Address</label>
                      <input type="email" required className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">Prayer Request Details</label>
                    <textarea rows="5" required className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500 transition" placeholder="Share how we can pray for you..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded-xl transition shadow-lg tracking-wide uppercase text-sm">
                    Submit Prayer Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {activeTab === 'contact' && (
          <div className="bg-black text-zinc-100 min-h-screen pb-24">
            <div 
              className="relative bg-black py-36 sm:py-48 bg-cover bg-center text-center overflow-hidden border-b border-zinc-800 mb-16"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.92)), url(${import.meta.env.BASE_URL}img5.jpg)` }}
            >
              <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">GET IN TOUCH</p>
                <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
                  Contact Us
                </h1>
                <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  We would love to hear from you. Reach out with any questions, or visit us for our weekly services.
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">SEND A MESSAGE</p>
                  <h2 className="text-2xl font-serif font-bold text-white mt-1">We'd Love to Hear From You</h2>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">Your Name</label>
                    <input type="text" required className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">Email Address</label>
                    <input type="email" required className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">Message</label>
                    <textarea rows="4" required className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-emerald-500 transition" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded-xl transition shadow-lg tracking-wide uppercase text-sm">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">VISIT US</p>
                    <h2 className="text-2xl font-serif font-bold text-white mt-1">Church Location & Info</h2>
                  </div>
                  <div className="space-y-4 text-zinc-300 text-sm">
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-400 min-w-20">Address:</span>
                      <span>Adarko Jachie, Ghana</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-400 min-w-20">Phone:</span>
                      <span>+233 53 415 1101</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-400 min-w-20">Hours:</span>
                      <span>Sundays at 9:00 AM & Wednesdays at 5:30 PM</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 border border-zinc-800 bg-zinc-950">
                  <img src={`${import.meta.env.BASE_URL}img4.jpg`} alt="Church building" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 text-zinc-400 py-12 mt-24 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="text-white font-bold tracking-wider">YOKK CHURCH - ADARKO JACHIE</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved. Tel: +233 53 415 1101</p>
        </div>
      </footer>
    </div>
  );
}