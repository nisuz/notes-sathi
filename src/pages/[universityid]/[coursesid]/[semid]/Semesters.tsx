import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesByUniversity } from '@/lib/sample-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ClipboardList, ChevronLeft } from 'lucide-react';

const Semesters: React.FC = () => {
  const { universityid, semid, coursesid } = useParams();
  const safeSem = semid ?? '1';

  // Sample subjects for demo; replace with real data or API calls as needed.
  const subjects = [
    { id: 's1', title: `Semester ${safeSem}` },
    { id: 's2', title: `Semester ${safeSem}` },
    { id: 's3', title: `Semester ${safeSem}` },
  ];

  // Determine canonical subjects path. If coursesid is missing, pick first course for this university.
  let subjectsPath = `/${universityid}/${safeSem}`;
  if (coursesid) {
    subjectsPath = `/${universityid}/${coursesid}/${safeSem}`;
  } else {
    const first = (coursesByUniversity[universityid ?? ''] || [])[0];
    if (first) subjectsPath = `/${universityid}/${first.id}/${safeSem}`;
  }

  const navigate = useNavigate();

  // Debugging: log params and computed path
  // Remove or disable these logs in production
  // eslint-disable-next-line no-console
  console.debug('[Semesters] params:', { universityid, coursesid, semid, safeSem });
  // eslint-disable-next-line no-console
  console.debug('[Semesters] subjectsPath:', subjectsPath);

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
                <span className="text-gray-700">Semester {safeSem}</span>
              </nav>
              <h1 className="text-2xl font-bold">Semester {safeSem} — {universityid?.toUpperCase()}</h1>
              <p className="text-sm text-gray-600 mt-1">Select a subject to view notes and resources.</p>
            </div>
            <div>
              <Link to={`/${universityid}`} className="inline-flex items-center gap-2 text-sm text-gray-700 hover:underline">
                <ChevronLeft className="w-4 h-4" /> Back to courses
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
                    <ClipboardList className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <Badge className="ml-auto bg-white/20 text-white">Sem {safeSem}</Badge>
                    </div>
                    <p className="text-sm text-white/90 mt-1">Brief overview and resources for this subject.</p>
                  </div>
                </div>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">3 notes • 2 attachments</div>
                    <div className="flex items-center gap-2">
                      <Button onClick={() => navigate(subjectsPath)}>
                        View subjects
                      </Button>
                      <Link to={`/${universityid}`}>
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

export default Semesters;