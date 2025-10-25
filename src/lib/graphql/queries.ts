import { gql } from '@apollo/client'

// Patient Queries
export const GET_PATIENTS = gql`
  query GetPatients($limit: Int, $offset: Int) {
    patients(limit: $limit, offset: $offset) {
      id
      firstName
      lastName
      email
      phone
      dateOfBirth
      gender
      createdAt
    }
  }
`

export const GET_PATIENT = gql`
  query GetPatient($id: ID!) {
    patient(id: $id) {
      id
      firstName
      lastName
      email
      phone
      dateOfBirth
      gender
      address {
        street
        city
        state
        zipCode
        country
      }
      medicalHistory {
        id
        condition
        diagnosedDate
        status
        notes
      }
      appointments {
        id
        dateTime
        status
        reason
        doctor {
          id
          firstName
          lastName
          specialization
        }
      }
      createdAt
      updatedAt
    }
  }
`

// Doctor Queries
export const GET_DOCTORS = gql`
  query GetDoctors($specialization: String) {
    doctors(specialization: $specialization) {
      id
      firstName
      lastName
      email
      phone
      specialization
      licenseNumber
    }
  }
`

export const GET_DOCTOR = gql`
  query GetDoctor($id: ID!) {
    doctor(id: $id) {
      id
      firstName
      lastName
      email
      phone
      specialization
      licenseNumber
      availability {
        id
        dayOfWeek
        startTime
        endTime
        isAvailable
      }
      createdAt
      updatedAt
    }
  }
`

// Appointment Queries
export const GET_APPOINTMENTS = gql`
  query GetAppointments($patientId: ID, $doctorId: ID, $status: AppointmentStatus) {
    appointments(patientId: $patientId, doctorId: $doctorId, status: $status) {
      id
      dateTime
      duration
      status
      reason
      notes
      patient {
        id
        firstName
        lastName
        email
      }
      doctor {
        id
        firstName
        lastName
        specialization
      }
      createdAt
    }
  }
`

export const GET_APPOINTMENT = gql`
  query GetAppointment($id: ID!) {
    appointment(id: $id) {
      id
      dateTime
      duration
      status
      reason
      notes
      patient {
        id
        firstName
        lastName
        email
        phone
        dateOfBirth
      }
      doctor {
        id
        firstName
        lastName
        specialization
        phone
      }
      createdAt
      updatedAt
    }
  }
`

// Mutations
export const CREATE_PATIENT = gql`
  mutation CreatePatient($input: CreatePatientInput!) {
    createPatient(input: $input) {
      id
      firstName
      lastName
      email
      phone
      dateOfBirth
      gender
      createdAt
    }
  }
`

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient($id: ID!, $input: UpdatePatientInput!) {
    updatePatient(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      phone
      dateOfBirth
      gender
      updatedAt
    }
  }
`

export const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      id
      dateTime
      duration
      status
      reason
      patient {
        id
        firstName
        lastName
      }
      doctor {
        id
        firstName
        lastName
        specialization
      }
      createdAt
    }
  }
`

export const UPDATE_APPOINTMENT = gql`
  mutation UpdateAppointment($id: ID!, $input: UpdateAppointmentInput!) {
    updateAppointment(id: $id, input: $input) {
      id
      dateTime
      duration
      status
      reason
      notes
      updatedAt
    }
  }
`

export const CANCEL_APPOINTMENT = gql`
  mutation CancelAppointment($id: ID!) {
    cancelAppointment(id: $id) {
      id
      status
      updatedAt
    }
  }
`
