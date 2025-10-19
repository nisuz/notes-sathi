import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesByUniversity } from '@/lib/sample-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Semesters: React.FC = () => {
  const { universityid, semid, coursesid } = useParams();

  // Sample subjects for demo; replace with real data or API calls as needed.
  const subjects = [
    { id: 's1', title: `Semester ${semid} - Subject 1` },
    { id: 's2', title: `Semester ${semid} - Subject 2` },
    { id: 's3', title: `Semester ${semid} - Subject 3` },
  ];

  // Determine canonical subjects path. If coursesid is missing, pick first course for this university.
  let subjectsPath = `/${universityid}/${semid}/subjects`;
  if (coursesid) {
    subjectsPath = `/${universityid}/${coursesid}/${semid}/subjects`;
  } else {
    const first = (coursesByUniversity[universityid ?? ''] || [])[0];
    if (first) subjectsPath = `/${universityid}/${first.id}/${semid}/subjects`;
  }

  const navigate = useNavigate();

  // Debugging: log params and computed path
  // Remove or disable these logs in production
  // eslint-disable-next-line no-console
  console.debug('[Semesters] params:', { universityid, coursesid, semid });
  // eslint-disable-next-line no-console
  console.debug('[Semesters] subjectsPath:', subjectsPath);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">{universityid?.toUpperCase()} — Semester {semid}</h1>
            <p className="text-sm text-gray-600">Subjects offered in this semester.</p>
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
                  <p className="text-sm text-gray-600 mb-4">A short description of the subject {s.title}.</p>
                  <div className="flex gap-2">
                    <Button onClick={() => navigate(subjectsPath)}>View subjects</Button>
                    <Link to={`/${universityid}`}>
                      <Button variant="outline">Back to courses</Button>
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

export default Semesters;