/** @format */

export interface Interview {
  id: string
  date: string
  interviewer: string
  outcome: 'Passed' | 'Failed' | 'Scheduled'
  notes?: string
}

export interface Note {
  id: string
  author: string
  date: string
  content: string
}

export type CandidateStage =
  | 'Applied'
  | 'Screening'
  | 'Interview'
  | 'Offer'
  | 'Hired'
  | 'Rejected'

export interface Candidate {
  id: string
  name: string
  email: string
  phone: string
  role: string
  stage: CandidateStage
  score?: number 
  lastUpdated: string
  avatar: string
  skills: string[]
  interviews: Interview[]
  notes: Note[]
}
export type NewCandidatePayload = {
  name: string
  email: string
  phone: string
  role: string
  stage: CandidateStage
}