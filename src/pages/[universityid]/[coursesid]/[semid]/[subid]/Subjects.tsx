import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, FileText, ChevronLeft } from 'lucide-react';

const Subjects: React.FC = () => {
  const { universityid, coursesid, semid } = useParams();

  // debug
  // eslint-disable-next-line no-console
  console.debug('[Subjects] params', { universityid, coursesid, semid });

  // Sample content - replace with real data
  const subjects = [
    { id: 'sub1', code: 'CS101', title: 'Introduction to Programming', desc: 'Variables, control flow, and functions.' },
    { id: 'sub2', code: 'CS102', title: 'Data Structures', desc: 'Arrays, lists, trees and basic algorithms.' },
    { id: 'sub3', code: 'CS201', title: 'Algorithms', desc: 'Sorting, searching and algorithmic complexity.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="text-sm text-gray-500 mb-1">
                <Link to="/universities" className="hover:underline">Universities</Link>
                <span className="mx-2">/</span>
                <Link to={`/${universityid}`} className="hover:underline">{universityid?.toUpperCase()}</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-700">Semester {semid}</span>
              </nav>
              <h1 className="text-2xl font-bold">Subjects — {coursesid}</h1>
              <p className="text-sm text-gray-600 mt-1">Subjects offered in semester {semid}. Click a subject to view notes and resources.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to={`/${universityid}/${coursesid}/${semid}`} className="inline-flex items-center gap-2 text-sm text-gray-700 hover:underline">
                <ChevronLeft className="w-4 h-4" /> Back to semester
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map(s => (
              <Card key={s.id} className="hover-lift overflow-hidden">
                <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-md bg-white/10">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <Badge className="ml-auto bg-white/20 text-white">{s.code}</Badge>
                    </div>
                    <p className="text-sm text-white/90 mt-1">{s.desc}</p>
                  </div>
                </div>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Notes, resources and attachments</div>
                    <div className="flex items-center gap-2">
                      <Link to={`/${universityid}/${coursesid}/${semid}/${s.id}`}>
                        <Button>
                          <FileText className="w-4 h-4 mr-2" /> Open notes
                        </Button>
                      </Link>
                      <Link to={`/${universityid}/${coursesid}/${semid}`}>
                        <Button variant="outline">Back</Button>
                      </Link>
                    </div>
                  </div>
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

export default Subjects;
