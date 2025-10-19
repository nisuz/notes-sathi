import React, { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { /* Avatar, AvatarImage, AvatarFallback */ } from '@/components/ui/avatar';
import { Search, Globe, MapPin, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

type University = {
	id: string;
	name: string;
	city?: string;
	country: string;
	students?: number;
	courses?: number;
	founded?: number;
	description?: string;
	website?: string;
};

const sampleUniversities: University[] = [
	{
		id: 'tu',
		name: 'Tribhuvan University (TU)',
		city: 'Kirtipur',
		country: 'Nepal',
		
		students: 400000,
		courses: 1000,
		founded: 1959,
		description: 'The oldest and largest university in Nepal offering a wide range of programs.',
		website: 'https://tu.edu.np',
	},
	{
		id: 'pu',
		name: 'Pokhara University (PU)',
		city: 'Pokhara',
		country: 'Nepal',
		
		students: 35000,
		courses: 200,
		founded: 1997,
		description: 'University serving the western region with multiple campuses and diverse programs.',
		website: 'https://pu.edu.np',
	},
	{
		id: 'pou',
		name: 'Purbanchal University (PoU)',
		city: 'Kamalpur',
		country: 'Nepal',
		
		students: 50000,
		courses: 180,
		founded: 1993,
		description: 'Regional university focusing on professional and technical education.',
		website: 'https://purbanchaluniversity.edu.np/',
	},
	{
		id: 'nsu',
		name: 'Nepal Sanskrit University (NSU)',
		city: 'Benares (Vishvavidyalaya)',
		country: 'Nepal',
		
		students: 8000,
		courses: 60,
		founded: 1987,
		description: 'Specialized university for Sanskrit and traditional studies.',
		website: 'https://nsu.edu.np',
	},
	{
		id: 'ku',
		name: 'Kathmandu University (KU)',
		city: 'Dhulikhel',
		country: 'Nepal',
		
		students: 15000,
		courses: 120,
		founded: 1991,
		description: 'Known for engineering, medicine and research-focused programs.',
		website: 'https://ku.edu.np',
	},
	{
		id: 'lbu',
		name: 'Lumbini Boudha University (LBU)',
		city: 'Lumbini',
		country: 'Nepal',
		
		students: 7000,
		courses: 50,
		founded: 1999,
		description: 'University in the Lumbini region with emphasis on Buddhist studies and local development.',
		website: 'https://lbu.edu.np',
	},
	{
		id: 'afu',
		name: 'Agriculture and Forestry University (AFU)',
		city: 'Chitwan',
		country: 'Nepal',
		
		students: 12000,
		courses: 80,
		founded: 2010,
		description: 'Specializes in agriculture, forestry and allied disciplines.',
		website: 'https://afu.edu.np',
	},
	{
		id: 'mbu',
		name: 'Mid-Western University (MBU)',
		city: 'Surkhet',
		country: 'Nepal',

		students: 6000,
		courses: 40,
		founded: 2010,
		description: 'Regional university serving the mid-western development region.',
		website: 'https://mwu.edu.np',
	},
	{
		id: 'nou',
		name: 'Nepal Open University (NOU)',
		city: 'Kirtipur',
		country: 'Nepal',
		
		students: 50000,
		courses: 120,
		founded: 2016,
		description: 'National open university providing distance education across Nepal.',
		website: 'https://nou.edu.np',
	},
	{
		id: 'fwu',
		name: 'Far-Western University (FWU)',
		city: 'Mahendranagar',
		country: 'Nepal',
	
		students: 4000,
		courses: 30,
		founded: 2010,
		description: 'University serving the far-western development region of Nepal.',
		website: 'https://fwu.edu.np',
	},
];

const Universities: React.FC = () => {
	const [query, setQuery] = useState('');
	const [country, setCountry] = useState('All');
	const [sortBy, setSortBy] = useState<'students' | 'name'>('students');

	const countries = useMemo(() => ['All', ...Array.from(new Set(sampleUniversities.map(u => u.country)))], []);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		let list = sampleUniversities.filter(u => {
			const matchesQuery = !q || u.name.toLowerCase().includes(q) || (u.city || '').toLowerCase().includes(q);
			const matchesCountry = country === 'All' || u.country === country;
			return matchesQuery && matchesCountry;
		});

		return list;
	}, [query, country]);

	// Build a mapping of local assets in src/assets so we can reference them by university id.
	// Vite's import.meta.glob will include these at build time. We'll normalize filenames to lower-case ids.
	// Example filenames in src/assets: TU.png, KU.png, pu.png, NOU.PNG, LBU.webp
	const assetModules = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,webp,PNG}', { eager: true }) as Record<string, any>;
	const assetMap: Record<string, string> = {};
	for (const p of Object.keys(assetModules)) {
		// path like '../../assets/TU.png' -> filename TU.png
		const parts = p.split('/');
		const filename = parts[parts.length - 1];
		const idKey = filename.split('.')[0].toLowerCase();
		const module = assetModules[p];
		// When using eager import with Vite, the module's default export is the resolved URL
		assetMap[idKey] = module.default ?? module;
	}

	// Avatar that prefers src/assets mapping (case-insensitive id), then tries public/universities/*,
	// and finally falls back to /placeholder.svg.
	

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<section className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="text-center mb-6">
						<h1 className="text-4xl font-bold text-gray-900 mb-2">Top Universities</h1>
						<p className="text-gray-600 max-w-3xl mx-auto">Explore institutions, compare rankings, courses and student counts.</p>
					</div>

					<div className="max-w-4xl mx-auto mt-8">
						<div className="flex gap-3">
							<div className="relative flex-1">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<Input placeholder="Search universities or city..." className="pl-10 py-3" value={query} onChange={e => setQuery((e.target as HTMLInputElement).value)} />
							</div>

											<div className="flex items-center gap-2">
												<select value={country} onChange={e => setCountry(e.target.value)} className="rounded-md border px-3 py-2">
													{countries.map(c => (
														<option key={c} value={c}>{c}</option>
													))}
												</select>

												<select value={sortBy} onChange={e => setSortBy(e.target.value as any)} className="rounded-md border px-3 py-2">
													<option value="students">Sort: Students</option>
													<option value="name">Sort: Name</option>
												</select>
											</div>
						</div>

						<p className="text-sm text-gray-500 mt-3">Showing {filtered.length} universities</p>
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filtered.map(u => (
							<Card key={u.id} className="hover-lift cursor-pointer overflow-hidden">
								<div className="flex items-center gap-4 p-4 border-b">
														{/* Prefer resolved src/assets image (assetMap), else fall back to placeholder */}
														<img
															src={assetMap[u.id.toLowerCase()] ?? '/placeholder.svg'}
															alt={u.name}
															className={u.id === 'tu' ? 'w-14 h-14 rounded-full object-fill bg-gray-200' : 'w-16 h-16 rounded-full object-fill bg-gray-200'}
															onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
														/>
									<div>
										<div className="text-lg font-bold">{u.name}</div>
										<div className="text-sm text-gray-500 flex items-center gap-2"><MapPin className="w-4 h-4" />{u.city}, {u.country}</div>
									</div>
										
								</div>

								<CardContent>
									<p className="text-sm text-gray-600 mb-3 mt-2">{u.description}</p>

									<div className="flex items-center justify-between text-sm text-gray-500 mb-4">
										<div className="flex items-center gap-2"><Users className="w-4 h-4" />{(u.students ?? 0).toLocaleString()} students</div>
										<div className="flex items-center gap-2"><Globe className="w-4 h-4" />{u.courses ?? 0} courses</div>
					
									</div>

									<div className="flex gap-2">
										<a href={u.website} target="_blank" rel="noreferrer">
											<Button variant="outline">Visit website</Button>
										</a>
										<Link to={`/${u.id}`}>
											<Button>View details</Button>
										</Link>
										<Link to={`/universities/${u.id}/courses`}>
											<Button>Notes</Button>
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

export default Universities;
