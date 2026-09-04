import type { AcademicProject, Education } from "@/types/content";

export const education: Education = {
  degree: "Bachelor of Engineering",
  field: "Computer Science and Engineering",
  institution: "Paavai College of Engineering",
  start: "Oct 2021",
  end: "Jun 2025",
  score: "CGPA 7.8",
};

/** Description carried over from the previous portfolio. */
export const academicProject: AcademicProject = {
  name: "Intelligent Ambulance Detection & Traffic Light Optimization",
  description:
    "A real-time computer-vision system that detects ambulances in traffic video and dynamically optimizes signal timing to prioritize their passage.",
  tech: ["Python", "YOLO", "OpenCV", "TensorFlow"],
};
