import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "../../components/ui/button";

interface TestimonialProps {
  author: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const defaultTestimonials: TestimonialProps[] = [
  {
    author: "Sarah Johnson",
    role: "Project Manager",
    company: "BuildTech Construction",
    content:
      "BestReport has completely transformed how we manage our construction sites. The institutional-grade monitoring and automated reporting have saved us countless hours and improved our project delivery times by 30%.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    author: "Michael Rodriguez",
    role: "Site Supervisor",
    company: "Rodriguez & Sons Builders",
    content:
      "As a site supervisor managing multiple projects, BestReport has been a game-changer. I can now monitor all my sites from one dashboard and generate comprehensive reports with just a few clicks. The precision and reliability are unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    author: "Jennifer Lee",
    role: "CEO",
    company: "Precision Construction Group",
    content:
      "Implementing BestReport across our organization has resulted in a 25% reduction in compliance issues and significantly improved our client satisfaction ratings. It's an essential tool for modern construction management that delivers financial-grade reliability.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <div className="bg-[#0F0F0F] border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 relative">
          <div className="absolute inset-0 bg-white/5"></div>
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-full h-full object-cover object-center md:absolute inset-0 mix-blend-overlay opacity-60"
          />
          <div className="relative md:absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h4 className="font-bold text-xl">{testimonial.author}</h4>
            <p className="text-gray-400">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>

        <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
          <Quote className="text-white w-12 h-12 mb-6 opacity-20" />
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            "{testimonial.content}"
          </p>
          <div className="flex items-center mt-auto">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">
              5.0 average rating
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TestimonialSectionProps {
  testimonials?: TestimonialProps[];
}

const TestimonialSection = ({
  testimonials = defaultTestimonials,
}: TestimonialSectionProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section
      className="py-24 md:py-32 px-4 bg-[#0A0B0D] relative"
      id="testimonials"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">


          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from construction professionals who have transformed their site
            monitoring with our institutional-grade platform.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>

          <div className="flex justify-center mt-10 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-none bg-[#0F0F0F] hover:bg-gray-800 border-gray-700 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 ${index === currentIndex ? "bg-white" : "bg-gray-700"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-none bg-[#0F0F0F] hover:bg-gray-800 border-gray-700 text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
