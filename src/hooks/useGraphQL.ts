import { useQuery, useMutation, QueryHookOptions, MutationHookOptions } from '@apollo/client'
import {
  GET_PATIENTS,
  GET_PATIENT,
  GET_DOCTORS,
  GET_DOCTOR,
  GET_APPOINTMENTS,
  GET_APPOINTMENT,
  CREATE_PATIENT,
  UPDATE_PATIENT,
  CREATE_APPOINTMENT,
  UPDATE_APPOINTMENT,
  CANCEL_APPOINTMENT,
} from '@/lib/graphql/queries'
import type { Patient, Doctor, Appointment, CreatePatientInput, CreateAppointmentInput, UpdateAppointmentInput } from '@/types/medical'

// Patient Hooks
export const usePatients = (options?: QueryHookOptions) => {
  return useQuery<{ patients: Patient[] }>(GET_PATIENTS, options)
}

export const usePatient = (id: string, options?: QueryHookOptions) => {
  return useQuery<{ patient: Patient }>(GET_PATIENT, {
    variables: { id },
    skip: !id,
    ...options,
  })
}

export const useCreatePatient = (options?: MutationHookOptions) => {
  return useMutation<{ createPatient: Patient }, { input: CreatePatientInput }>(
    CREATE_PATIENT,
    {
      refetchQueries: [{ query: GET_PATIENTS }],
      ...options,
    }
  )
}

export const useUpdatePatient = (options?: MutationHookOptions) => {
  return useMutation<{ updatePatient: Patient }, { id: string; input: Partial<CreatePatientInput> }>(
    UPDATE_PATIENT,
    options
  )
}

// Doctor Hooks
export const useDoctors = (specialization?: string, options?: QueryHookOptions) => {
  return useQuery<{ doctors: Doctor[] }>(GET_DOCTORS, {
    variables: { specialization },
    ...options,
  })
}

export const useDoctor = (id: string, options?: QueryHookOptions) => {
  return useQuery<{ doctor: Doctor }>(GET_DOCTOR, {
    variables: { id },
    skip: !id,
    ...options,
  })
}

// Appointment Hooks
export const useAppointments = (
  filters?: { patientId?: string; doctorId?: string; status?: string },
  options?: QueryHookOptions
) => {
  return useQuery<{ appointments: Appointment[] }>(GET_APPOINTMENTS, {
    variables: filters,
    ...options,
  })
}

export const useAppointment = (id: string, options?: QueryHookOptions) => {
  return useQuery<{ appointment: Appointment }>(GET_APPOINTMENT, {
    variables: { id },
    skip: !id,
    ...options,
  })
}

export const useCreateAppointment = (options?: MutationHookOptions) => {
  return useMutation<{ createAppointment: Appointment }, { input: CreateAppointmentInput }>(
    CREATE_APPOINTMENT,
    {
      refetchQueries: [{ query: GET_APPOINTMENTS }],
      ...options,
    }
  )
}

export const useUpdateAppointment = (options?: MutationHookOptions) => {
  return useMutation<{ updateAppointment: Appointment }, { id: string; input: UpdateAppointmentInput }>(
    UPDATE_APPOINTMENT,
    options
  )
}

export const useCancelAppointment = (options?: MutationHookOptions) => {
  return useMutation<{ cancelAppointment: Appointment }, { id: string }>(
    CANCEL_APPOINTMENT,
    {
      refetchQueries: [{ query: GET_APPOINTMENTS }],
      ...options,
    }
  )
}
