const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export interface ApiJob {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string | null;
  slug: string;
  description: string;
  responsibilities: string | null;
  requirements: string | null;
  employmentType: string | null;
  openings: number | null;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  createdAt: string;
  updatedAt: string;
}

export interface ApiCourse {
  id: number;
  title: string;
  duration: string;
  salaryPotential: string | null;
  description: string;
  learnings: string | null;
  skills: string | null;
  image: string | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface ApiPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data as T;
}

const splitLines = (value: string | null | undefined) =>
  value
    ? value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

const normalizeJob = (job: ApiJob): ApiJob & {
  logo: string;
  responsibilitiesList: string[];
  requirementsList: string[];
} => ({
  ...job,
  logo: "/assets/emta-gif.gif",
  responsibilitiesList: splitLines(job.responsibilities),
  requirementsList: splitLines(job.requirements),
});

export async function getJobs(params?: {
  search?: string;
  location?: string;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();

  if (params?.search) query.set("search", params.search);
  if (params?.location) query.set("location", params.location);
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));

  const suffix = query.toString() ? `?${query.toString()}` : "";

  const response = await apiRequest<{
    success: true;
    data: ApiJob[];
    pagination: ApiPagination;
  }>(`/jobs${suffix}`);

  return {
    ...response,
    data: response.data.map(normalizeJob),
  };
}

export async function getJob(identifier: string | number) {
  const response = await apiRequest<{
    success: true;
    data: ApiJob;
  }>(`/jobs/${encodeURIComponent(String(identifier))}`);

  return {
    ...response,
    data: normalizeJob(response.data),
  };
}

export async function submitApplication(form: {
  jobId: number;
  name: string;
  email: string;
  phone: string;
  experience?: string;
  qualification?: string;
  location?: string;
  coverMessage?: string;
  resume: File;
}) {
  const body = new FormData();
  body.append("jobId", String(form.jobId));
  body.append("name", form.name);
  body.append("email", form.email);
  body.append("phone", form.phone);
  body.append("experience", form.experience || "");
  body.append("qualification", form.qualification || "");
  body.append("location", form.location || "");
  body.append("coverMessage", form.coverMessage || "");
  body.append("resume", form.resume);

  return apiRequest<{
    success: true;
    message: string;
    data: {
      id: number;
      status: string;
      createdAt: string;
      resumeName: string;
      job: { id: number; title: string; company: string };
    };
  }>("/applications", {
    method: "POST",
    body,
  });
}

export interface CourseView extends ApiCourse {
  learningsList: string[];
  skillsList: string[];
}

const normalizeCourse = (course: ApiCourse): CourseView => ({
  ...course,
  learningsList: splitLines(course.learnings),
  skillsList: course.skills
    ? course.skills.split(",").map((item) => item.trim()).filter(Boolean)
    : [],
});

export async function getCourses() {
  const response = await apiRequest<{
    success: true;
    data: ApiCourse[];
  }>("/courses");

  return {
    ...response,
    data: response.data.map(normalizeCourse),
  };
}

export async function getCourse(id: string | number) {
  const response = await apiRequest<{
    success: true;
    data: ApiCourse;
  }>(`/courses/${encodeURIComponent(String(id))}`);

  return {
    ...response,
    data: normalizeCourse(response.data),
  };
}

export async function submitCourseEnquiry(
  id: string | number,
  form: { name: string; email: string; phone: string; message?: string },
) {
  return apiRequest<{
    success: true;
    message: string;
    data: { id: number; createdAt: string; course: { id: number; title: string } };
  }>(`/courses/${encodeURIComponent(String(id))}/enquiries`, {
    method: "POST",
    body: JSON.stringify(form),
  });
}

export async function submitContact(form: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  return apiRequest<{
    success: true;
    message: string;
    data: { id: number; createdAt: string; subject: string | null };
  }>("/contact", {
    method: "POST",
    body: JSON.stringify(form),
  });
}
