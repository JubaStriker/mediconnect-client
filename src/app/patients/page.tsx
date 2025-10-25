'use client'

import React from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import { PatientList } from '@/components/patients/PatientList'

export default function PatientsPage() {
  return (
    <MainLayout>
      <PatientList />
    </MainLayout>
  )
}
