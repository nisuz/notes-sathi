
import React from 'react';
import { Download, FileText, Video, Code2, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: 'Complete Programming Notes',
      description: 'Comprehensive study materials covering C, C++, Java, Python, and JavaScript fundamentals.',
      type: 'PDF',
      size: '45 MB',
      downloads: 12500,
      icon: FileText,
      color: 'bg-blue-500',
      category: 'Study Materials'
    },
    {
      id: 2,
      title: 'Data Structures Cheat Sheet',
      description: 'Quick reference guide for all major data structures with time complexity analysis.',
      type: 'PDF',
      size: '8 MB',
      downloads: 8900,
      icon: FileText,
      color: 'bg-emerald-500',
      category: 'Quick Reference'
    },
    {
      id: 3,
      title: 'Algorithm Implementation Videos',
      description: 'Step-by-step video tutorials for implementing sorting and searching algorithms.',
      type: 'Video',
      size: '2.1 GB',
      downloads: 5600,
      icon: Video,
      color: 'bg-purple-500',
      category: 'Video Tutorials'
    },
    {
      id: 4,
      title: 'Web Development Code Templates',
      description: 'Starter templates for HTML, CSS, JavaScript, React, and Node.js projects.',
      type: 'ZIP',
      size: '125 MB',
      downloads: 15600,
      icon: Code2,
      color: 'bg-orange-500',
      category: 'Code Templates'
    },
    {
      id: 5,
      title: 'Database Design Handbook',
      description: 'Complete guide to database design principles, normalization, and SQL optimization.',
      type: 'PDF',
      size: '28 MB',
      downloads: 7800,
      icon: BookOpen,
      color: 'bg-indigo-500',
      category: 'Study Materials'
    },
    {
      id: 6,
      title: 'Interview Preparation Kit',
      description: '500+ coding interview questions with detailed solutions and explanations.',
      type: 'PDF',
      size: '67 MB',
      downloads: 22100,
      icon: FileText,
      color: 'bg-red-500',
      category: 'Interview Prep'
    }
  ];

  const categories = [
    { name: 'All Resources', count: resources.length },
    { name: 'Study Materials', count: 15 },
    { name: 'Video Tutorials', count: 8 },
    { name: 'Code Templates', count: 12 },
    { name: 'Quick Reference', count: 6 },
    { name: 'Interview Prep', count: 4 }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
            <Download className="w-4 h-4 mr-2" />
            Free Resources
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Download <span className="gradient-text">Study Materials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our extensive library of free educational resources including notes, code templates, 
            video tutorials, and interview preparation materials.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource) => (
            <Card key={resource.id} className="hover-lift cursor-pointer border-0 shadow-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
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
                {/* Resource Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {resource.type}
                  </div>
                  <div className="text-gray-500">
                    {resource.size}
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {resource.downloads.toLocaleString()}
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

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Study Materials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-gray-600">Video Tutorials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">Free</div>
              <div className="text-gray-600">Always Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
