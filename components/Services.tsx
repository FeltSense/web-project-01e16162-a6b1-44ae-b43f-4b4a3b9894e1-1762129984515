export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div className="container-custom relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        <span className="text-sm font-semibold text-amber-900 tracking-wide">WHAT WE OFFER</span>
      </div>
      
      <h2 className="heading-1 mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 bg-clip-text text-transparent">
        Experience Excellence in Every Detail
      </h2>
      
      <p className="body-large text-slate-600 max-w-2xl mx-auto">
        From farm-fresh ingredients to seamless service, we've crafted every aspect of your dining experience with care and passion.
      </p>
    </div>

    {/* Services Grid - Masonry Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
      
      {/* Service 1 - Diverse Menu (Large Featured) */}
      <div className="lg:col-span-7 group animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="card-elevated h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="relative h-80 lg:h-96 overflow-hidden">
            <img 
              src="https://images.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="Fresh, colorful dishes showcasing diverse menu with locally-sourced ingredients"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
              <span className="text-sm font-bold text-amber-600">★ Featured</span>
            </div>
          </div>
          
          <div className="p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="heading-3 mb-3 text-slate-900">Diverse Culinary Journey</h3>
                <p className="body text-slate-600 leading-relaxed">
                  Explore a thoughtfully curated menu featuring fresh, locally-sourced ingredients. From classic favorites to innovative creations, every dish tells a story of quality and passion.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">Farm Fresh</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">Local Sourcing</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Chef's Specials</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Online Ordering (Medium) */}
      <div className="lg:col-span-5 group animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="card-elevated h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="relative h-64 overflow-hidden">
            <img 
              src="https://images.pixabay.com/photo/2017/08/10/14/09/restaurant-2623071_1280.jpg"
              alt="Convenient food delivery service with online ordering on mobile device"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          </div>
          
          <div className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-3 text-slate-900">Seamless Online Ordering</h3>
                <p className="body-small text-slate-600 leading-relaxed">
                  Order your favorites with just a few taps. Choose delivery or pickup, customize your meal, and track your order in real-time for ultimate convenience.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-200">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Fast & Reliable Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Table Reservations (Medium) */}
      <div className="lg:col-span-5 group animate-fade-in" style={{ animationDelay: '300ms' }}>
        <div className="card-elevated h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="relative h-64 overflow-hidden">
            <img 
              src="https://images.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
              alt="Easy table reservation system for hassle-free restaurant booking"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          </div>
          
          <div className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-3 text-slate-900">Effortless Reservations</h3>
                <p className="body-small text-slate-600 leading-relaxed">
                  Book your perfect table in seconds. Select your preferred time, party size, and special requests for a completely hassle-free dining experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-200">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Instant Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Welcoming Atmosphere (Large Featured) */}
      <div className="lg:col-span-7 group animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="card-elevated h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="relative h-80 lg:h-96 overflow-hidden">
            <img 
              src="https://images.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_1280.jpg"
              alt="Warm, welcoming restaurant atmosphere perfect for dining occasions"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            
            {/* Floating Stats */}
            <div className="absolute top-6 left-6 flex gap-3">
              <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-sm font-bold text-slate-900">4.9★ Rating</span>
              </div>
              <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-sm font-bold text-emerald-600">2000+ Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="heading-3 mb-3 text-slate-900">Atmosphere That Feels Like Home</h3>
                <p className="body text-slate-600 leading-relaxed">
                  Whether it's a romantic dinner, family celebration, or casual lunch with friends, our warm and inviting space adapts to every occasion, making every visit memorable.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">Cozy</div>
                <div className="text-xs text-slate-600">Ambiance</div>
              </div>
              <div className="text-center border-x border-slate-200">
                <div className="text-2xl font-bold text-slate-900 mb-1">Flexible</div>
                <div className="text-xs text-slate-600">Seating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">Perfect</div>
                <div className="text-xs text-slate-600">For All</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 lg:mt-20 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
      <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button className="btn-primary group px-8 py-4 text-lg">
          Explore Our Menu
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button className="btn-secondary px-8 py-4 text-lg">
          Make a Reservation
        </button>
      </div>
      <p className="mt-6 text-sm text-slate-600">
        Questions? Call us at <a href="tel:+1234567890" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">+1 (234) 567-890</a>
      </p>
    </div>
  </div>
</section>
  );
}