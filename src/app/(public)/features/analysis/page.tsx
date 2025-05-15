"use client";

import { Bot, FileAudio, Gauge, Mic, Rocket, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { TestimonialMarquee } from "./testimonial";

export default function DebateAnalysisFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  const features = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Live Debate Recording",
      description: "Practice in real-time with our AI judge analyzing every argument"
    },
    {
      icon: <FileAudio className="h-6 w-6" />,
      title: "Upload Past Debates",
      description: "Analyze recorded debates from tournaments or practice sessions"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Gemini AI Transcription",
      description: "Accurate, real-time transcription of your speech patterns"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Performance Metrics",
      description: "Detailed scoring on clarity, logic, persuasion, and delivery"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Personalized Feedback",
      description: "Actionable suggestions tailored to your speaking style"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Storage",
      description: "End-to-end encrypted debate history with progress tracking"
    }
  ];

  const analysisSteps = [
    {
      step: "1",
      title: "Record/Upload",
      description: "Start a live session or upload existing debate audio"
    },
    {
      step: "2",
      title: "AI Processing",
      description: "Our system transcribes and analyzes your performance"
    },
    {
      step: "3",
      title: "Get Insights",
      description: "Receive detailed feedback and improvement roadmap"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <Rocket className="mr-2 h-4 w-4" /> New Feature
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Debate Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your debating skills with real-time AI feedback and performance insights
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">
                See Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="h-full hover:shadow-md transition-all">
                  <CardHeader className="flex flex-row items-start space-x-4">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get from practice to perfection in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {analysisSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                      {step.step}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Debaters Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands who have transformed their public speaking skills
            </p>
          </div>
          <TestimonialMarquee />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Debating?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get started with our AI analysis today and see results after your first session
          </p>
          <Button size="lg" className="px-8">
            Start Your 14-Day Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}