
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Universities from "./pages/[universityid]/Universities";
import UniversityCourses from "./pages/[universityid]/[coursesid]/Courses";
import Semesters from "./pages/[universityid]/[coursesid]/[semid]/Semesters";
import Subjects from "./pages/[universityid]/[coursesid]/[semid]/Subjects";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:universityid" element={<Universities />} />
          <Route path="/universities/:universityid/:coursesid" element={<UniversityCourses />} />
          {/* top-level shorthand route so /tu shows TU's courses */}
          <Route path="/:universityid" element={<UniversityCourses />} />
          {/* top-level course route so /tu/bsccsit shows course page */}
          <Route path="/:universityid/:coursesid" element={<UniversityCourses />} />
          {/* semesters route, e.g. /tu/bsccsit/1 */}
          <Route path="/:universityid/:coursesid/:semid" element={<Semesters />} />
          <Route path="/:universityid/:coursesid/:semid/:subjectid" element={<Subjects />} />
            {/* fallback subjects route when coursesid is not present in the URL */}
            <Route path="/:universityid/:semid/subjects" element={<Subjects />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/help" element={<Help />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
