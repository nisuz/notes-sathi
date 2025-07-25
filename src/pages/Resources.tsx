
import React, { useState } from 'react';
import { Download, Search, Filter, FileText, Video, Code2, BookOpen, Star, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Complete C++ Programming Guide',
      description: 'Comprehensive guide covering C++ fundamentals, OOP concepts, STL, and advanced topics with examples.',
      type: 'PDF',
      category: 'Study Materials',
      size: '45 MB',
      downloads: 12500,
      rating: 4.9,
      reviews: 234,
      icon: FileText,
      color: 'bg-blue-500',
      tags: ['C++', 'Programming', 'OOP'],
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Web Development Starter Kit',
      description: 'Complete HTML, CSS, JavaScript templates and frameworks for building modern websites.',
      type: 'ZIP',
      category: 'Code Templates',
      size: '125 MB',
      downloads: 15600,
      rating: 4.8,
      reviews: 189,
      icon: Code2,
      color: 'bg-emerald-500',
      tags: ['HTML', 'CSS', 'JavaScript', 'Templates'],
      lastUpdated: '2024-01-20'
    },
    {
      id: 3,
      title: 'Data Structures Video Series',
      description: 'Complete video tutorial series covering all major data structures with implementation examples.',
      type: 'Video',
      category: 'Video Tutorials',
      size: '2.1 GB',
      downloads: 8900,
      rating: 4.9,
      reviews: 167,
      icon: Video,
      color: 'bg-purple-500',
      tags: ['Data Structures', 'Algorithms', 'Programming'],
      lastUpdated: '2024-01-10'
    },
    {
      id: 4,
      title: 'Python Quick Reference',
      description: 'Handy reference guide for Python syntax, built-in functions, and common libraries.',
      type: 'PDF',
      category: 'Quick Reference',
      size: '8 MB',
      downloads: 9800,
      rating: 4.7,
      reviews: 143,
      icon: FileText,
      color: 'bg-orange-500',
      tags: ['Python', 'Reference', 'Syntax'],
      lastUpdated: '2024-01-18'
    },
    {
      id: 5,
      title: 'Database Design Handbook',
      description: 'Complete guide to database design principles, normalization, and SQL optimization techniques.',
      type: 'PDF',
      category: 'Study Materials',
      size: '67 MB',
      downloads: 7800,
      rating: 4.8,
      reviews: 201,
      icon: BookOpen,
      color: 'bg-indigo-500',
      tags: ['Database', 'SQL', 'Design'],
      lastUpdated: '2024-01-12'
    },
    {
      id: 6,
      title: 'React Component Library',
      description: 'Pre-built React components and hooks for rapid application development.',
      type: 'ZIP',
      category: 'Code Templates',
      size: '89 MB',
      downloads: 11200,
      rating: 4.9,
      reviews: 178,
      icon: Code2,
      color: 'bg-cyan-500',
      tags: ['React', 'Components', 'JavaScript'],
      lastUpdated: '2024-01-22'
    },
    {
      id: 7,
      title: 'Interview Coding Questions',
      description: '500+ coding interview questions with detailed solutions and complexity analysis.',
      type: 'PDF',
      category: 'Interview Prep',
      size: '34 MB',
      downloads: 22100,
      rating: 4.9,
      reviews: 456,
      icon: FileText,
      color: 'bg-red-500',
      tags: ['Interview', 'Coding', 'Algorithms'],
      lastUpdated: '2024-01-25'
    },
    {
      id: 8,
      title: 'Machine Learning Notebooks',
      description: 'Jupyter notebooks with ML algorithms implementations and real-world examples.',
      type: 'ZIP',
      category: 'Code Templates',
      size: '156 MB',
      downloads: 6700,
      rating: 4.8,
      reviews: 123,
      icon: Code2,
      color: 'bg-pink-500',
      tags: ['Machine Learning', 'Python', 'Jupyter'],
      lastUpdated: '2024-01-16'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'study', name: 'Study Materials', count: resources.filter(r => r.category === 'Study Materials').length },
    { id: 'templates', name: 'Code Templates', count: resources.filter(r => r.category === 'Code Templates').length },
    { id: 'videos', name: 'Video Tutorials', count: resources.filter(r => r.category === 'Video Tutorials').length },
    { id: 'reference', name: 'Quick Reference', count: resources.filter(r => r.category === 'Quick Reference').length },
    { id: 'interview', name: 'Interview Prep', count: resources.filter(r => r.category === 'Interview Prep').length }
  ];

  const getFilteredResources = () => {
    if (activeTab === 'all') return resources;
    const categoryMap = {
      'study': 'Study Materials',
      'templates': 'Code Templates',
      'videos': 'Video Tutorials',
      'reference': 'Quick Reference',
      'interview': 'Interview Prep'
    };
    return resources.filter(r => r.category === categoryMap[activeTab]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free <span className="gradient-text">Learning Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of study materials, code templates, video tutorials, 
              and interview preparation resources - all completely free.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search resources..."
                className="pl-12 py-4 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Study Materials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">25+</div>
              <div className="text-gray-600">Video Tutorials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">100K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">4.8★</div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full lg:w-auto grid-cols-3 lg:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredResources().map((resource) => (
                  <Card key={resource.id} className="hover-lift cursor-pointer border-0 shadow-lg overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center`}>
                          <resource.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-lg font-bold">{resource.title}</CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Resource Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {resource.type} • {resource.size}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {resource.downloads.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {resource.rating} ({resource.reviews})
                        </div>
                        <div className="text-gray-400 text-xs">
                          Updated {resource.lastUpdated}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
