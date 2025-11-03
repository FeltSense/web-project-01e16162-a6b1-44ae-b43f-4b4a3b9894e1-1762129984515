'use client'

import Navigation from '@/components/shared/Navigation';
import Hero from '@/components/shared/Hero';
import FeaturedDishes from '@/components/menu/FeaturedDishes';
import Stats from '@/components/shared/Stats';
import Testimonials from '@/components/shared/Testimonials';
import ContactForm from '@/components/contact/ContactForm';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedDishes />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
