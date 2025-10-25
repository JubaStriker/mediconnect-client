'use client'

import React from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import { AppointmentForm } from '@/components/appointments/AppointmentForm'

export default function NewAppointmentPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Schedule New Appointment
        </h1>
        <AppointmentForm />
      </div>
    </MainLayout>
  )
}
