import { StudentDetail } from '@/components/swr'
import * as React from 'react'

export default function SWRPage() {
  return (
    <div>
      <h1>SWR</h1>
      <ul>
        <li>
          <StudentDetail studentId="lea11ziflg8xoiza" />
        </li>
        <li>
          <StudentDetail studentId="lea11ziflg8xoiza" />
        </li>
        <li>
          <StudentDetail studentId="lea11ziflg8xoiza" />
        </li>
      </ul>
    </div>
  )
}
