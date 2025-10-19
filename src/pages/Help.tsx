
import React from 'react';
import { Search, BookOpen, MessageCircle, Video, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Help = () => {
  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn how to navigate and use our platform',
      articles: 5
    },
    {
      icon: Video,
      title: 'Course Help',
      description: 'Everything about taking courses and assessments',
      articles: 12
    },
    {
      icon: FileText,
      title: 'Certificates',
      description: 'Information about earning and downloading certificates',
      articles: 8
    },
    {
      icon: Users,
      title: 'Community',
      description: 'How to engage with fellow learners',
      articles: 6
    }
  ];

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Simply browse our course catalog, select your desired course, and click the "Enroll Now" button. All courses are free!'
    },
    {
      question: 'Can I download course materials?',
      answer: 'Yes! All course materials including PDFs, code samples, and resources can be downloaded for offline study.'
    },
    {
      question: 'How do I get my certificate?',
      answer: 'Complete all course modules and pass the final assessment to receive your completion certificate.'
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Our website is fully responsive and works great on mobile devices. A dedicated app is coming soon!'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team through the community forum, email, or live chat during business hours.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We <span className="gradient-text">Help?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions, browse our help articles, or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for help articles..."
                className="pl-12 h-14 text-lg"
              />
              <Button className="absolute right-2 top-2 h-10">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Browse Help Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-sm text-blue-600 font-medium">{category.articles} articles</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Still Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50">
                    <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Forum</h4>
                      <p className="text-sm text-gray-600 mb-2">Ask questions and get help from other learners</p>
                      <Button variant="outline" size="sm">Visit Forum</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-emerald-50">
                    <Video className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Video Tutorials</h4>
                      <p className="text-sm text-gray-600 mb-2">Step-by-step guides to using our platform</p>
                      <Button variant="outline" size="sm">Watch Tutorials</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-purple-50">
                    <Users className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Support</h4>
                      <p className="text-sm text-gray-600 mb-2">Chat with our support team (Mon-Fri 9AM-5PM)</p>
                      <Button variant="outline" size="sm">Start Chat</Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Send us an email at support@NoteSathi.com and we'll get back to you within 24 hours.
                  </p>
                  <Button className="w-full">Send Email</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
