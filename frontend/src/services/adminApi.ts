import { apiRequest } from "./api";

export type AdminRole = "ADMIN" | "HR";

export type ApplicationStatus =
  | "APPLIED"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "SELECTED"
  | "REJECTED";

export type JobStatus =
  | "DRAFT"
  | "ACTIVE"
  | "CLOSED";

export interface AdminUser {
  adminId: number;
  email: string;
  role: AdminRole;
}

export interface AdminJob {
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
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
  _count: {
    applications: number;
  };
}

export interface AdminApplication {
  id: number;
  name: string;
  email: string;
  phone: string;
  experience: string | null;
  qualification: string | null;
  location: string | null;
  resumeUrl: string | null;
  resumeName: string | null;
  coverMessage: string | null;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    salary?: string | null;
  };
}

export async function adminLogin(
  email: string,
  password: string,
) {
  return apiRequest<{
    success: true;
    message: string;
    data: AdminUser;
  }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

export async function adminLogout() {
  return apiRequest<{
    success: true;
    message: string;
  }>("/auth/logout", {
    method: "POST",
  });
}

export async function getCurrentAdmin() {
  return apiRequest<{
    success: true;
    data: AdminUser;
  }>("/admin/me");
}

export async function getAdminJobs(params?: {
  search?: string;
  status?: JobStatus;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();

  if (params?.search) {
    query.set("search", params.search);
  }

  if (params?.status) {
    query.set("status", params.status);
  }

  if (params?.page) {
    query.set("page", String(params.page));
  }

  if (params?.limit) {
    query.set("limit", String(params.limit));
  }

  const suffix = query.toString()
    ? `?${query.toString()}`
    : "";

  return apiRequest<{
    success: true;
    data: AdminJob[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  }>(`/admin/jobs${suffix}`);
}

export async function getAdminApplications(params?: {
  search?: string;
  status?: ApplicationStatus;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();

  if (params?.search) {
    query.set("search", params.search);
  }

  if (params?.status) {
    query.set("status", params.status);
  }

  if (params?.page) {
    query.set("page", String(params.page));
  }

  if (params?.limit) {
    query.set("limit", String(params.limit));
  }

  const suffix = query.toString()
    ? `?${query.toString()}`
    : "";

  return apiRequest<{
    success: true;
    data: AdminApplication[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  }>(`/admin/applications${suffix}`);
}

export async function updateApplicationStatus(
  id: number,
  status: ApplicationStatus,
) {
  return apiRequest<{
    success: true;
    message: string;
    data: {
      id: number;
      status: ApplicationStatus;
      updatedAt: string;
    };
  }>(`/admin/applications/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export async function updateJobStatus(
  id: number,
  status: JobStatus,
) {
  return apiRequest<{
    success: true;
    message: string;
    data: {
      id: number;
      title: string;
      status: JobStatus;
      updatedAt: string;
    };
  }>(`/admin/jobs/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}