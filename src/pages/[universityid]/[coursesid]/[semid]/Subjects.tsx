import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Subjects: React.FC = () => {
  const { universityid, coursesid, semid } = useParams();

  // debug
  // eslint-disable-next-line no-console
  console.debug('[Subjects] params', { universityid, coursesid, semid });

  // Sample content - replace with real data
  const subjects = [
    { id: 'sub1', title: 'Subject 1' },
    { id: 'sub2', title: 'Subject 2' },
    { id: 'sub3', title: 'Subject 3' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">{universityid?.toUpperCase()} — {coursesid} — Semester {semid} — Subjects</h1>
            <p className="text-sm text-gray-600">Subject list for this semester.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4">
            {subjects.map(s => (
              <Card key={s.id} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">A short description for {s.title}.</p>
                  <div className="flex gap-2">
                    <Link to={`/${universityid}/${coursesid}/${semid}/${s.id}`}>
                      <Button>Open notes</Button>
                    </Link>
                    <Link to={`/${universityid}/${coursesid}/${semid}`}>
                      <Button variant="outline">Back to semester</Button>
                    </Link>
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
