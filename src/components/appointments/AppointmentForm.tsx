'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCreateAppointment, usePatients, useDoctors } from '@/hooks/useGraphQL'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import type { CreateAppointmentInput } from '@/types/medical'

export const AppointmentForm: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<CreateAppointmentInput>({
    patientId: '',
    doctorId: '',
    dateTime: '',
    duration: 30,
    reason: '',
    notes: '',
  })

  const { data: patientsData } = usePatients()
  const { data: doctorsData } = useDoctors()
  const [createAppointment, { loading, error }] = useCreateAppointment({
    onCompleted: (data) => {
      router.push(`/appointments/${data.createAppointment.id}`)
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await createAppointment({
        variables: {
          input: {
            ...formData,
            duration: Number(formData.duration),
          },
        },
      })
    } catch (err) {
      console.error('Failed to create appointment:', err)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule New Appointment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient <span className="text-red-500">*</span>
            </label>
            <select
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select a patient</option>
              {patientsData?.patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.firstName} {patient.lastName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Doctor <span className="text-red-500">*</span>
            </label>
            <select
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select a doctor</option>
              {doctorsData?.doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  Dr. {doctor.firstName} {doctor.lastName} - {doctor.specialization}
                </option>
              ))}
            </select>
          </div>

          <Input
            type="datetime-local"
            name="dateTime"
            label="Date & Time"
            value={formData.dateTime}
            onChange={handleChange}
            required
          />

          <Input
            type="number"
            name="duration"
            label="Duration (minutes)"
            value={formData.duration}
            onChange={handleChange}
            min={15}
            step={15}
            required
          />

          <Input
            type="text"
            name="reason"
            label="Reason for Visit"
            value={formData.reason}
            onChange={handleChange}
            placeholder="e.g., Annual checkup, Follow-up visit"
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Any additional information..."
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error.message}
            </div>
          )}

          <div className="flex gap-3">
            <Button type="submit" loading={loading}>
              Schedule Appointment
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
