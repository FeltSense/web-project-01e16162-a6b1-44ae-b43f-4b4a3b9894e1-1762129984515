export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          SIMPLE, TRANSPARENT PRICING
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
        Everything You Need,
        <span className="block mt-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          One Perfect Price
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Get your complete restaurant website with all premium features included. No hidden fees, no surprises.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-100 transform hover:scale-105 transition-all duration-300">
        {/* Popular Badge */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center py-3 font-semibold tracking-wide">
          ⭐ MOST POPULAR CHOICE
        </div>
        
        <div className="p-10 md:p-12">
          {/* Price Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Website Package</h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-6xl md:text-7xl font-bold text-gray-900">$29</span>
              <div className="text-left">
                <div className="text-sm text-gray-500 line-through">$299</div>
                <div className="text-sm font-semibold text-green-600">Save 90%</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 font-medium">One-time payment • Lifetime access</p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Diverse Menu Showcase</h3>
                <p className="text-sm text-gray-600">Display fresh, locally-sourced ingredients with beautiful imagery</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Complete Online Ordering System</h3>
                <p className="text-sm text-gray-600">Seamless delivery and pickup options for customer convenience</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Smart Table Reservation System</h3>
                <p className="text-sm text-gray-600">Easy booking management for hassle-free dining experiences</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Atmosphere & Ambiance Gallery</h3>
                <p className="text-sm text-gray-600">Showcase your welcoming space perfect for any occasion</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dietary Accommodations Filter</h3>
                <p className="text-sm text-gray-600">Highlight vegetarian, vegan, and gluten-free options clearly</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location & Parking Information</h3>
                <p className="text-sm text-gray-600">Interactive map with prime location and parking details</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=01e16162-a6b1-44ae-b43f-4b4a3b9894e1'}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            🚀 Get Your Website Now - $29
          </button>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-gray-900 mb-2">Is this really a one-time payment?</h3>
          <p className="text-gray-600">Yes! Pay once, own forever. No monthly fees, no subscriptions, no surprises.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-gray-900 mb-2">Can I customize the website?</h3>
          <p className="text-gray-600">Absolutely! All content, colors, images, and features are fully customizable to match your brand.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-gray-900 mb-2">Is it mobile-friendly?</h3>
          <p className="text-gray-600">100%! Your website will look stunning on all devices - phones, tablets, and desktops.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}