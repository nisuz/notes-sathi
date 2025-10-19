import React, { useMemo, useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { coursesByUniversity } from '@/lib/sample-data';





// use shared sample data

const Courses: React.FC = () => {
	const { universityid, coursesid } = useParams();
		const navigate = useNavigate();
		const location = useLocation();

		// If the URL is /:universityid/:coursesid (no semid), redirect to default semester 1
		useEffect(() => {
			if (universityid && coursesid) {
				// build expected base path
				const base = `/${universityid}/${coursesid}`;
				if (location.pathname === base) {
					navigate(`${base}/1`, { replace: true });
				}
			}
		}, [universityid, coursesid, location.pathname, navigate]);
	const [query, setQuery] = useState('');
	const [level, setLevel] = useState('All');

	// Map src/assets images so courses can reference images by filename/base name.
	const courseAssetModules = import.meta.glob('../../../assets/*.{png,jpg,jpeg,svg,webp,PNG}', { eager: true }) as Record<string, any>;
	const courseAssetMap: Record<string, string> = {};
	for (const p of Object.keys(courseAssetModules)) {
		const parts = p.split('/');
		const filename = parts[parts.length - 1];
		const key = filename.split('.')[0].toLowerCase();
		const module = courseAssetModules[p];
		courseAssetMap[key] = module.default ?? module;
	}

		const selectedCourses = useMemo(() => coursesByUniversity[universityid ?? ''] ?? [], [universityid]);

		const levels = useMemo(() => ['All', ...Array.from(new Set(selectedCourses.map(c => c.level)))], [selectedCourses]);

		const filtered = useMemo(() => {
			const q = query.trim().toLowerCase();
			return selectedCourses.filter(c => {
				const matchesQ = !q || c.title.toLowerCase().includes(q) || (c.description || '').toLowerCase().includes(q);
				const matchesLevel = level === 'All' || c.level === level;
				return matchesQ && matchesLevel;
			});
		}, [query, level, selectedCourses]);

		const goToSemesters = (courseId: string) => {
			if (!universityid) return;
			navigate(`/${universityid}/${courseId}`);
		};

		return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<section className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="flex items-center justify-between mb-6">
						<div>
							<h1 className="text-3xl font-bold">Courses {coursesid ? `- ${coursesid}` : ''}</h1>
							<p className="text-sm text-gray-600">Browse courses offered by the selected department/university.</p>
						</div>

						<div className="flex items-center gap-3">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<Input className="pl-10" placeholder="Search courses..." value={query} onChange={e => setQuery((e.target as HTMLInputElement).value)} />
							</div>

							<select value={level} onChange={e => setLevel(e.target.value)} className="rounded-md border px-3 py-2">
								{levels.map(l => (
									<option key={l} value={l}>{l}</option>
								))}
							</select>
						</div>
					</div>

					<p className="text-sm text-gray-500">Showing {filtered.length} courses</p>
				</div>
			</section>

			<section className="py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filtered.map(course => (
							<Card
								key={course.id}
								className="hover-lift cursor-pointer overflow-hidden"
								onClick={() => goToSemesters(course.id)}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { goToSemesters(course.id); } }}
							>
								<div className="aspect-video bg-gradient-to-br from-indigo-600 to-purple-600 relative">
									{course.image ? (
										<img src={courseAssetMap[(course.image.split('/').pop() || '').split('.')[0].toLowerCase()] ?? course.image} alt={course.title} className="w-full h-full object-cover" />
									) : null}
									<Badge className="absolute top-4 left-4 bg-white text-gray-900">{course.level}</Badge>
								</div>

								<CardHeader className="p-4">
									<CardTitle className="text-lg font-bold">{course.title}</CardTitle>
									<p className="text-sm text-gray-600">{course.description}</p>
								</CardHeader>

								<CardContent>
									<div className="flex items-center justify-between text-sm text-gray-500 mb-4">
										<div className="flex items-center gap-2"><Users className="w-4 h-4" />{(course.students ?? 0).toLocaleString()} students</div>
										<div className="flex items-center gap-2"><Clock className="w-4 h-4" />{course.duration}</div>
										<div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" />{course.rating ?? '—'}</div>
									</div>

									<div className="flex gap-2">
									{/* Navigate to the first semester by default (/:universityid/1) */}
										<Link to={`/${universityid}/${course.id}/`}>
											<Button>View semesters</Button>
										</Link>
										<Button variant="outline">Bookmark</Button>
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

export default Courses;

