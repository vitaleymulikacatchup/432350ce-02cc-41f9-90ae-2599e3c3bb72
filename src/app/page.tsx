"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Star, Award, Fish, ChefHat, Crown, Sparkles, UtensilsCrossed, DollarSign, Trophy, Calendar, Users, MessageCircle, Newspaper, HelpCircle } from "lucide-react";

export default function SushiRestaurantPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Gon-No-Gordon"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Authentic Japanese Sushi Experience"
          description="Experience the finest traditional sushi crafted with premium ingredients by master chefs at Gon-No-Gordon"
          tag="Premium Sushi Bar"
          tagIcon={Star}
          buttons={[
            { text: "View Menu", href: "product" },
            { text: "Make Reservation", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713462244-gk79gzpx.jpg",
              imageAlt: "Master sushi chef preparing fresh sushi"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713463617-zel6c094.jpg",
              imageAlt: "Premium salmon sushi rolls"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713464642-eks4vcbk.jpg",
              imageAlt: "Fresh tuna nigiri"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713466957-fd513ztw.jpg",
              imageAlt: "Assorted sashimi platter"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713465817-t9sw169k.jpg",
              imageAlt: "Variety of maki rolls"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Gon-No-Gordon, we honor the ancient traditions of Japanese sushi making while embracing modern culinary innovation. Our master chefs bring decades of experience, sourcing only the finest ingredients to create an unforgettable dining experience that celebrates the artistry and precision of authentic sushi cuisine."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="What Makes Us Special"
          description="Discover the elements that set Gon-No-Gordon apart from other sushi restaurants"
          tag="Excellence"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            { title: "Fresh Daily Selection", icon: Fish },
            { title: "Master Sushi Chefs", icon: ChefHat },
            { title: "Premium Ingredients", icon: Crown },
            { title: "Traditional Techniques", icon: Sparkles }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Our Signature Menu"
          description="Explore our carefully curated selection of premium sushi and sashimi"
          tag="Menu"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Premium Salmon Roll",
              price: "$18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713463617-zel6c094.jpg",
              imageAlt: "Fresh salmon sushi roll"
            },
            {
              id: "2",
              name: "Tuna Nigiri Set",
              price: "$24",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713464642-eks4vcbk.jpg",
              imageAlt: "Fresh tuna nigiri sushi"
            },
            {
              id: "3",
              name: "Assorted Sashimi",
              price: "$32",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713466957-fd513ztw.jpg",
              imageAlt: "Fresh assorted sashimi platter"
            },
            {
              id: "4",
              name: "Chef's Special Maki",
              price: "$28",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713465817-t9sw169k.jpg",
              imageAlt: "Variety of specialty maki rolls"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Dining Options"
          description="Choose from our carefully crafted meal experiences"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "lunch",
              badge: "Popular Choice",
              badgeIcon: Sparkles,
              price: "$28",
              subtitle: "Perfect for lunch dining",
              features: [
                "Miso soup",
                "6-piece sushi selection",
                "Green tea",
                "Complimentary appetizer"
              ]
            },
            {
              id: "omakase",
              badge: "Chef's Selection",
              badgeIcon: Award,
              price: "$85",
              subtitle: "Premium tasting experience",
              features: [
                "12-course chef selection",
                "Premium sake pairing",
                "Seasonal specialties",
                "Personal chef attention"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Achievements"
          description="Numbers that reflect our commitment to excellence and customer satisfaction"
          tag="Recognition"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "15",
              title: "years",
              description: "Serving authentic Japanese cuisine",
              icon: Calendar
            },
            {
              id: "2",
              value: "50K+",
              title: "customers",
              description: "Satisfied diners served",
              icon: Users
            },
            {
              id: "3",
              value: "5",
              title: "awards",
              description: "Restaurant industry recognition",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Master Chefs"
          description="The skilled artisans behind every perfect piece of sushi"
          tag="Our Team"
          tagIcon={ChefHat}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Chef Takashi",
              role: "Head Sushi Master",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713462244-gk79gzpx.jpg",
              imageAlt: "Portrait of Chef Takashi"
            },
            {
              id: "2",
              name: "Chef Kenji",
              role: "Senior Sushi Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713469043-b2je5l14.jpg",
              imageAlt: "Portrait of Chef Kenji"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Real experiences from our valued customers"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Food Critic",
              testimonial: "Gon-No-Gordon delivers an absolutely exceptional sushi experience. The attention to detail and quality of ingredients is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713471503-uaysbcxg.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Restaurant Reviewer",
              testimonial: "Every visit to Gon-No-Gordon is a culinary journey. The chef's expertise shines through in every perfectly crafted piece.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713472733-ppmczccm.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Food Blogger",
              testimonial: "The authenticity and freshness at Gon-No-Gordon is remarkable. This is where you come for the real sushi experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713473855-rxl7tug1.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Local Diner",
              testimonial: "I've been coming here for years and the quality never disappoints. Gon-No-Gordon sets the standard for exceptional sushi.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713475084-yl32hb2z.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Maria Santos",
              role: "Culinary Enthusiast",
              testimonial: "The omakase experience here is truly special. Each course tells a story of craftsmanship and dedication to the art of sushi.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713476220-mdbwwqyb.jpg",
              imageAlt: "Maria Santos"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured In"
          description="Recognized by leading food publications and review platforms"
          tag="Media Coverage"
          tagIcon={Newspaper}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713477439-mf5i8aef.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713478525-ojgci8i4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713479794-p4qj6kbr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713480619-nhjdhrha.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713481439-04l5q0ml.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713482563-htf3y8qr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763713483582-p28v75k6.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Gon-No-Gordon"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner service and our omakase experience. You can call us or book online through our website."
            },
            {
              id: "2",
              title: "What are your hours of operation?",
              content: "We are open Tuesday through Sunday. Lunch service is from 11:30 AM to 2:30 PM, and dinner service is from 5:30 PM to 10:00 PM. We are closed on Mondays."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! Please inform us of any allergies or dietary restrictions when making your reservation. We can accommodate vegetarian options and have experience with various food allergies."
            },
            {
              id: "4",
              title: "What is the omakase experience?",
              content: "Our omakase is a chef's choice tasting menu featuring the freshest seasonal ingredients. It's a 12-course journey that showcases our chef's expertise and creativity, paired with premium sake selections."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          title="Visit Gon-No-Gordon Today"
          description="Make a reservation or join our newsletter to stay updated on seasonal specials and events"
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Gon-No-Gordon"
          columns={[
            {
              items: [
                { label: "Menu", href: "product" },
                { label: "Reservations", href: "contact" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonial" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}