
import React from 'react';
import { Users, MessageCircle, Award, TrendingUp, Calendar, MapPin, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Community = () => {
  const communityStats = [
    { icon: Users, label: 'Active Members', value: '25,000+', color: 'text-blue-600' },
    { icon: MessageCircle, label: 'Discussions', value: '15,000+', color: 'text-emerald-600' },
    { icon: Award, label: 'Success Stories', value: '2,500+', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Job Placements', value: '5,000+', color: 'text-orange-600' }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for React state management',
      author: 'Sarah Johnson',
      avatar: 'SJ',
      category: 'Web Development',
      replies: 24,
      views: 1200,
      timeAgo: '2 hours ago',
      tags: ['React', 'State Management', 'Redux']
    },
    {
      id: 2,
      title: 'Algorithm complexity analysis help needed',
      author: 'Mike Chen',
      avatar: 'MC',
      category: 'Data Structures',
      replies: 18,
      views: 890,
      timeAgo: '4 hours ago',
      tags: ['Algorithms', 'Big O', 'Analysis']
    },
    {
      id: 3,
      title: 'Career transition from frontend to full-stack',
      author: 'Emma Davis',
      avatar: 'ED',
      category: 'Career',
      replies: 32,
      views: 1500,
      timeAgo: '6 hours ago',
      tags: ['Career', 'Full Stack', 'Backend']
    },
    {
      id: 4,
      title: 'Python vs Java for machine learning projects',
      author: 'Alex Rodriguez',
      avatar: 'AR',
      category: 'Machine Learning',
      replies: 15,
      views: 670,
      timeAgo: '8 hours ago',
      tags: ['Python', 'Java', 'ML']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      type: 'Online',
      attendees: 145,
      description: 'Build a full-stack application from scratch'
    },
    {
      id: 2,
      title: 'AI/ML Career Panel',
      date: 'March 20, 2024',
      time: '6:00 PM EST',
      type: 'Hybrid',
      attendees: 89,
      description: 'Industry experts share career insights'
    },
    {
      id: 3,
      title: 'Coding Interview Prep',
      date: 'March 25, 2024',
      time: '4:00 PM EST',
      type: 'Online',
      attendees: 203,
      description: 'Mock interviews and problem-solving strategies'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'JS',
      role: 'Software Engineer at Google',
      story: 'Thanks to the community support and resources, I landed my dream job at Google after 6 months of consistent learning.',
      course: 'Data Structures & Algorithms',
      rating: 5
    },
    {
      id: 2,
      name: 'Lisa Wang',
      avatar: 'LW',
      role: 'Full Stack Developer at Microsoft',
      story: 'The web development course and community mentorship helped me transition from marketing to tech successfully.',
      course: 'Full Stack Web Development',
      rating: 5
    },
    {
      id: 3,
      name: 'David Brown',
      avatar: 'DB',
      role: 'Data Scientist at Netflix',
      story: 'Amazing community! The ML course and peer discussions gave me the confidence to pursue data science.',
      course: 'Machine Learning & AI',
      rating: 5
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
              Join Our <span className="gradient-text">Learning Community</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow learners, share knowledge, get help with coding challenges, 
              and advance your career together with thousands of tech enthusiasts.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Join Community
              <Users className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Recent Discussions */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                <Button variant="outline">
                  View All
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-6">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="hover-lift cursor-pointer border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                            {discussion.avatar}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {discussion.category}
                            </Badge>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{discussion.timeAgo}</span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {discussion.title}
                          </h3>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span>by {discussion.author}</span>
                            <span>•</span>
                            <span>{discussion.replies} replies</span>
                            <span>•</span>
                            <span>{discussion.views} views</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {discussion.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {event.date} at {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {event.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {event.attendees} attending
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                    </div>
                  ))}
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Success Stories */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Award className="w-5 h-5 mr-2 text-emerald-600" />
                    Success Stories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {successStories.map((story) => (
                    <div key={story.id} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-emerald-100 text-emerald-600 font-semibold">
                            {story.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">{story.name}</div>
                          <div className="text-sm text-gray-600">{story.role}</div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 italic">"{story.story}"</p>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {story.course}
                        </Badge>
                        <div className="flex text-yellow-400">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    Read More Stories
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
