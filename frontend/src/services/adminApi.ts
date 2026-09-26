import { apiRequest } from "./api";

export type AdminRole = "ADMIN" | "HR";
export type ApplicationStatus = "APPLIED" | "SHORTLISTED" | "INTERVIEW" | "SELECTED" | "REJECTED";
export type JobStatus = "DRAFT" | "ACTIVE" | "CLOSED";

export interface AdminUser { adminId: number; name: string; email: string; role: AdminRole; }
export interface AdminJob { id: number; title: string; company: string; location: string; salary: string | null; slug: string; description: string; responsibilities: string | null; requirements: string | null; employmentType: string | null; openings: number | null; status: JobStatus; createdAt: string; updatedAt: string; _count: { applications: number }; }
export interface AdminApplication { id: number; name: string; email: string; phone: string; experience: string | null; qualification: string | null; location: string | null; resumeUrl: string | null; resumeName: string | null; coverMessage: string | null; status: ApplicationStatus; createdAt: string; updatedAt: string; job: { id: number; title: string; company: string; location: string; salary?: string | null }; }

const queryString = (params: Record<string, string | number | undefined>) => {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== "") query.set(key, String(value));
  return query.toString() ? `?${query.toString()}` : "";
};

export async function adminLogin(email: string, password: string) { return apiRequest<{ success: true; message: string; data: AdminUser }>("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }); }
export async function adminLogout() { return apiRequest<{ success: true; message: string }>("/auth/logout", { method: "POST" }); }
export async function getCurrentAdmin() { return apiRequest<{ success: true; data: AdminUser }>("/admin/me"); }

export async function getAdminDashboard() {
  return apiRequest<{ success: true; data: { jobs: { total: number; active: number; draft: number; closed: number }; applications: { total: number; applied: number; shortlisted: number; interview: number; selected: number; rejected: number }; courses: { total: number }; recentApplications: Array<{ id: number; name: string; email: string; phone: string; status: ApplicationStatus; createdAt: string; job: { id: number; title: string; company: string; location: string } }> } }>("/admin/dashboard");
}

export async function getAdminJobs(params?: { search?: string; status?: JobStatus; page?: number; limit?: number }) { return apiRequest<{ success: true; data: AdminJob[]; pagination: { page: number; limit: number; total: number; totalPages: number; hasNextPage: boolean; hasPreviousPage: boolean } }>(`/admin/jobs${queryString(params || {})}`); }
export async function createAdminJob(data: Partial<AdminJob> & { title: string; company: string; location: string; description: string }) { return apiRequest<{ success: true; data: AdminJob }>("/admin/jobs", { method: "POST", body: JSON.stringify(data) }); }
export async function updateAdminJob(id: number, data: Partial<AdminJob>) { return apiRequest<{ success: true; data: AdminJob }>(`/admin/jobs/${id}`, { method: "PATCH", body: JSON.stringify(data) }); }
export async function updateJobStatus(id: number, status: JobStatus) { return apiRequest<{ success: true; message: string; data: { id: number; title: string; status: JobStatus; updatedAt: string } }>(`/admin/jobs/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }); }
export async function deleteAdminJob(id: number) { return apiRequest<{ success: true; message: string }>(`/admin/jobs/${id}`, { method: "DELETE" }); }

export async function getAdminApplications(params?: { search?: string; status?: ApplicationStatus; page?: number; limit?: number }) { return apiRequest<{ success: true; data: AdminApplication[]; pagination: { page: number; limit: number; total: number; totalPages: number; hasNextPage: boolean; hasPreviousPage: boolean } }>(`/admin/applications${queryString(params || {})}`); }
export async function getAdminApplication(id: number) { return apiRequest<{ success: true; data: AdminApplication }>(`/admin/applications/${id}`); }
export async function updateApplicationStatus(id: number, status: ApplicationStatus) { return apiRequest<{ success: true; message: string; data: { id: number; status: ApplicationStatus; updatedAt: string } }>(`/admin/applications/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }); }
export async function deleteAdminApplication(id: number) { return apiRequest<{ success: true; message: string }>(`/admin/applications/${id}`, { method: "DELETE" }); }
