import React from "react";
import { motion } from "framer-motion";
import Screenshot from "../../assets/screenshot-1.png";

interface CheckLineProps {
    text: string;
}

const CheckLine = ({ text }: CheckLineProps) => {
    return (
        <div className="flex items-center gap-2 mb-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <span className="text-black">{text}</span>
        </div>
    );
};

interface FeatureSectionProps {
    id?: string;
    className?: string;
    title?: string;
    description?: string;
    checkpoints?: string[];
    imageSrc?: string;
    imageAlt?: string;
}

const FeatureSection = ({
    id = "about",
    className = "",
    title = "Precise Notes",
    description = "Capture detailed observations and notes directly on-site with our intuitive mobile interface.",
    checkpoints = [
        "Track your jobsites simply and intuitively",
        "Reservations, remarks, reports, speakers, documents",
    ],
    imageSrc = Screenshot,
    imageAlt = "Feature screenshot",
}: FeatureSectionProps) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id={id} className={`py-16 md:py-24 bg-white ${className}`}>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="w-full md:w-1/2"
                    >
                        <span>
                            <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
                                {title}
                            </h4>
                            <p className="text-black mb-6 leading-relaxed">{description}</p>
                            {checkpoints.map((checkpoint, index) => (
                                <CheckLine key={index} text={checkpoint} />
                            ))}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 hidden md:block self-center"
                    >
                        <img
                            src={imageSrc}

                            className="h-80 w-auto rounded-lg shadow-lg"
                            alt={imageAlt}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
