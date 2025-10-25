// Core medical types
export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  address?: Address
  medicalHistory?: MedicalHistory[]
  appointments?: Appointment[]
  createdAt: string
  updatedAt: string
}

export interface Doctor {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  specialization: string
  licenseNumber: string
  availability?: Availability[]
  appointments?: Appointment[]
  createdAt: string
  updatedAt: string
}

export interface Appointment {
  id: string
  patientId: string
  doctorId: string
  patient?: Patient
  doctor?: Doctor
  dateTime: string
  duration: number
  status: AppointmentStatus
  reason: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

export interface MedicalHistory {
  id: string
  patientId: string
  condition: string
  diagnosedDate: string
  status: 'ACTIVE' | 'RESOLVED' | 'CHRONIC'
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface Prescription {
  id: string
  appointmentId: string
  medication: string
  dosage: string
  frequency: string
  duration: string
  instructions?: string
  createdAt: string
  updatedAt: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Availability {
  id: string
  doctorId: string
  dayOfWeek: number
  startTime: string
  endTime: string
  isAvailable: boolean
}

// Form types
export interface CreateAppointmentInput {
  patientId: string
  doctorId: string
  dateTime: string
  duration: number
  reason: string
  notes?: string
}

export interface UpdateAppointmentInput {
  id: string
  dateTime?: string
  duration?: number
  status?: AppointmentStatus
  reason?: string
  notes?: string
}

export interface CreatePatientInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  address?: Address
}
