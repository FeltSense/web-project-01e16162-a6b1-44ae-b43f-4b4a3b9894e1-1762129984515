export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Customer Stories
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        What Our Guests Are Saying
      </h2>
      <p className="text-lg text-slate-600">
        Real experiences from real people who've dined with us
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Testimonial 1 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-slate-700 leading-relaxed mb-6">
          "The online ordering system is incredibly smooth! I placed my order at 6:15 PM and had my food delivered by 6:40 PM - still hot and perfectly packaged. The app even sent me real-time updates. This is how modern dining should work!"
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" 
            alt="Marcus Chen"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/20"
          />
          <div>
            <div className="font-semibold text-slate-900">Marcus Chen</div>
            <div className="text-sm text-slate-500">Tech Consultant</div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-slate-700 leading-relaxed mb-6">
          "We've been coming here for our monthly team dinners for over a year now. The private dining room is perfect for our group of 12, and the staff always remembers our preferences. Last month they even surprised us with a custom dessert for our colleague's promotion!"
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg" 
            alt="Sarah Mitchell"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/20"
          />
          <div>
            <div className="font-semibold text-slate-900">Sarah Mitchell</div>
            <div className="text-sm text-slate-500">Marketing Director</div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-slate-700 leading-relaxed mb-6">
          "As someone with celiac disease, dining out is usually stressful. OG's Resto has a dedicated gluten-free menu with actual variety - not just salads! The chef even came out to discuss cross-contamination protocols. I felt safe and enjoyed an amazing meal. Finally, a place I can recommend to my support group!"
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" 
            alt="Jennifer Rodriguez"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/20"
          />
          <div>
            <div className="font-semibold text-slate-900">Jennifer Rodriguez</div>
            <div className="text-sm text-slate-500">Healthcare Professional</div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-1 mb-4 justify-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-slate-700 leading-relaxed mb-6 text-center text-lg">
            "I proposed to my girlfriend here last Saturday, and the team made it absolutely magical. They coordinated with me for weeks - custom menu cards with our story, rose petals, a violinist, and they even timed the dessert course perfectly for the big moment. She said yes! Beyond the proposal, the food was exceptional. The seared scallops were the best I've ever had. Thank you for making our special night unforgettable."
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-slate-100 justify-center">
            <img 
              src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" 
              alt="David Thompson"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/20"
            />
            <div>
              <div className="font-semibold text-slate-900">David Thompson</div>
              <div className="text-sm text-slate-500">Financial Analyst</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center gap-2 text-slate-600 bg-white px-6 py-3 rounded-full shadow-md">
        <span className="font-medium">Join 2,500+ happy guests</span>
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
  </div>
</section>
  );
}