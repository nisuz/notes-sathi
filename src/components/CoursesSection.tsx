
import React from 'react';
import { ArrowRight, Clock, Users, Star, Code, Database, Globe, Smartphone, Brain, Shield, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      description: 'Master the fundamental building blocks of programming with comprehensive coverage of arrays, linked lists, trees, graphs, and algorithmic thinking.',
      icon: Code,
      level: 'Intermediate',
      duration: '12 weeks',
      students: 1234,
      rating: 4.9,
      color: 'from-blue-500 to-cyan-500',
      topics: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching']
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      description: 'Build modern, responsive web applications using React, Node.js, Express, and MongoDB. From frontend to backend deployment.',
      icon: Globe,
      level: 'Beginner to Advanced',
      duration: '16 weeks',
      students: 2156,
      rating: 4.8,
      color: 'from-emerald-500 to-teal-500',
      topics: ['HTML/CSS/JavaScript', 'React.js', 'Node.js & Express', 'MongoDB', 'Deployment & DevOps']
    },
    {
      id: 3,
      title: 'Database Management Systems',
      description: 'Comprehensive database design, SQL mastery, and database administration. Learn MySQL, PostgreSQL, and NoSQL databases.',
      icon: Database,
      level: 'Intermediate',
      duration: '10 weeks',
      students: 987,
      rating: 4.9,
      color: 'from-purple-500 to-pink-500',
      topics: ['Database Design', 'Advanced SQL', 'Indexing & Optimization', 'NoSQL Databases', 'Database Security']
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Create cross-platform mobile applications using React Native and Flutter. Deploy to both iOS and Android app stores.',
      icon: Smartphone,
      level: 'Intermediate',
      duration: '14 weeks',
      students: 1543,
      rating: 4.7,
      color: 'from-orange-500 to-red-500',
      topics: ['React Native', 'Flutter & Dart', 'Mobile UI/UX', 'API Integration', 'App Store Deployment']
    },
    {
      id: 5,
      title: 'Machine Learning & AI',
      description: 'Dive into artificial intelligence and machine learning with Python, TensorFlow, and practical projects in computer vision and NLP.',
      icon: Brain,
      level: 'Advanced',
      duration: '18 weeks',
      students: 876,
      rating: 4.8,
      color: 'from-indigo-500 to-purple-500',
      topics: ['Python for ML', 'TensorFlow & PyTorch', 'Computer Vision', 'Natural Language Processing', 'Deep Learning']
    },
    {
      id: 6,
      title: 'Cybersecurity Fundamentals',
      description: 'Learn ethical hacking, network security, cryptography, and how to protect systems from cyber threats and vulnerabilities.',
      icon: Shield,
      level: 'Intermediate',
      duration: '12 weeks',
      students: 654,
      rating: 4.9,
      color: 'from-red-500 to-pink-500',
      topics: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Web Security', 'Incident Response']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Popular Courses
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master In-Demand <span className="gradient-text">Tech Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum covers everything from programming fundamentals to advanced topics in AI, cybersecurity, and more.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="hover-lift cursor-pointer border-0 shadow-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    {course.rating}
                  </div>
                </div>

                {/* Course Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                  <div className="space-y-1">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                        {topic}
                      </div>
                    ))}
                    {course.topics.length > 3 && (
                      <div className="text-sm text-blue-600">
                        +{course.topics.length - 3} more topics
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
            View All Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
