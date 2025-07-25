
import React, { useState } from 'react';
import { Search, Filter, Clock, Users, Star, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'Programming', 'Web Development', 'Data Science', 'Mobile Development', 'Cybersecurity'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const courses = [
    {
      id: 1,
      title: 'Complete Python Programming',
      description: 'Master Python from basics to advanced topics including OOP, data structures, and frameworks.',
      category: 'Programming',
      level: 'Beginner',
      duration: '14 weeks',
      students: 2543,
      rating: 4.9,
      price: 'Free',
      image: '/api/placeholder/300/200',
      instructor: 'Dr. Sarah Johnson',
      modules: 45,
      projects: 8
    },
    {
      id: 2,
      title: 'React.js & Modern Frontend',
      description: 'Build dynamic web applications with React, Redux, and modern JavaScript ES6+.',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 1876,
      rating: 4.8,
      price: 'Free',
      image: '/api/placeholder/300/200',
      instructor: 'Mike Chen',
      modules: 38,
      projects: 6
    },
    {
      id: 3,
      title: 'Data Science with Python',
      description: 'Learn data analysis, visualization, and machine learning with Python, Pandas, and Scikit-learn.',
      category: 'Data Science',
      level: 'Intermediate',
      duration: '16 weeks',
      students: 1234,
      rating: 4.7,
      price: 'Free',
      image: '/api/placeholder/300/200',
      instructor: 'Prof. Emma Davis',
      modules: 52,
      projects: 10
    },
    {
      id: 4,
      title: 'Flutter Mobile Development',
      description: 'Create beautiful cross-platform mobile apps for iOS and Android using Flutter and Dart.',
      category: 'Mobile Development',
      level: 'Intermediate',
      duration: '13 weeks',
      students: 987,
      rating: 4.8,
      price: 'Free',
      image: '/api/placeholder/300/200',
      instructor: 'Alex Rodriguez',
      modules: 41,
      projects: 7
    },
    {
      id: 5,
      title: 'Ethical Hacking & Penetration Testing',
      description: 'Learn cybersecurity fundamentals, network security, and ethical hacking techniques.',
      category: 'Cybersecurity',
      level: 'Advanced',
      duration: '15 weeks',
      students: 654,
      rating: 4.9,
      price: 'Free',
      image: '/api/placeholder/300/200',
      instructor: 'James Wilson',
      modules: 47,
      projects: 5
    },
    {
      id: 6,
      title: 'Node.js Backend Development',
      description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
      category: 'Web Development',
      level: 'Intermediate',
      duration: '11 weeks',
      students: 1543,
      rating: 4.8,
      price: 'Free',
      image: '/api/placeholder/300/200',
      instructor: 'Lisa Park',
      modules: 35,
      projects: 9
    }
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="gradient-text">Course Library</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive courses designed by industry experts to help you master 
              in-demand skills and advance your career in technology.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search courses..."
                className="pl-10 py-3"
              />
            </div>
            
            <div className="flex gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="px-4 py-3">
                    <Filter className="w-4 h-4 mr-2" />
                    Category: {selectedCategory}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="px-4 py-3">
                    Level: {selectedLevel}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {levels.map((level) => (
                    <DropdownMenuItem
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-center text-gray-600">
            Showing {filteredCourses.length} courses
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover-lift cursor-pointer border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-bold opacity-20">{course.id}</div>
                      <div className="text-sm font-medium">{course.category}</div>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                    {course.level}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                    {course.price}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                  <p className="text-sm text-blue-600 font-medium">by {course.instructor}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center py-4 border-y border-gray-100 mb-4">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{course.modules}</div>
                      <div className="text-xs text-gray-500">Modules</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{course.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{course.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                  </div>

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

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
