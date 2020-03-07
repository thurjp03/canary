export interface Review {
  id: string,
  timestamp: Date,
  company: Company,
  position: string,
  team: string,
  internship_type: 'internship' | 'co-op',
  structured_program: boolean,
  location: string,
  terms: string[],
  pay: string,
  overall_rating: number,
  culture_rating: number,
  work_rating: number,
  year: YearValue,
  school: string,
  major: string,
  other_studies: string,
  housing_stipend: string,
  recommend: string,
  not_recommend: string,
  tools: {
    often: string[],
    occasionally: string[],
    rarely: string[],
  },
  description: string,
  offer: number,
  would_accept_offer: number,
  impact: number,
  prerequisites: number,
  expectations: number,
  work_time: number,
  expectations_description: string,
  interview_advice: string,
  optional_remarks: string,
}

export interface Company {
  id: string,
  name: string,
  description: string,
  image: string,
}

export interface YearValue {
  grad_level?: 'undergraduate' | 'graduate';
  year?: '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th+';
}

// pay: ({
//   type: 'hourly',
//   amount: 20,
//   currency: 'USD'
// }) as PayValue,

export const reviews:Review[] = [
  {
    id: 'aaa',
    company: {
      id: '123',
      name: 'Amazon',
      image: 'https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e28933d75efad0019e346ab/original/amazonwebsite2000amazonlogo900.png',
      description: 'E-Commerce/Shipping/Hosting',
    },
    position: "Product Designer",
    team: 'IT - ServiceNow CMDB',
    internship_type: 'internship',
    structured_program: true,
    location: 'Atlanta, GA',
    terms: ['Spring 2015'],
    pay: '3033/month',
    overall_rating: 3.5,
    culture_rating: 2,
    work_rating: 5,
    year: ({
      grad_level: 'undergraduate',
      year: '3rd'
    }) as YearValue,
    school: 'Georgia Institute of Technology',
    major: 'Computational Media',
    other_studies: 'Business - IT Management',
    timestamp: new Date(),
    // benefits: 'Free flights!',
    housing_stipend: 'None, but free flights!',
    recommend: 'Who love flying around the country on weekends!',
    not_recommend: 'Hate slow environments. It was pretty slow at times.',
    tools: {
      often: ['ServiceNow', 'Excel'],
      occasionally: [],
      rarely: [],
    },
    description: "I did some data cleaning deleting duplicate CIs (Configuration Items, basically data)|Created a dashboard for the server team that connected from ServiceNow's CMDB to Asset table. The dashboard pulled in all servers with a missing asset tag or environment. |Made mapping endpoints|",
    offer: 3,
    would_accept_offer: 0,
    impact: 4,
    prerequisites: 1,
    expectations: 4,
    work_time: 3,
    expectations_description: 'The IT Internship posting had a general description of what you could do as a developer or business analyst. I was a data analyst so it matched.',
    interview_advice: "I went to see them at the all majors career fair saying I was interested in an IT Internship.",
    optional_remarks: ''
  }
  ,
  { 'id': '5e28b7b983666533e17585df',
    'school': 'Georgia Tech',
    'major': 'Mechanical Engineering',
    'year': { 'grad_level': 'undergraduate',
    'year': '4th' },
    'other_studies': '',
    'company': {
      'name': 'Yokogawa Corporation of America',
      'id': '5e28b85a7899dd0015d196e5',
      image: 'https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e28933d75efad0019e346ab/original/amazonwebsite2000amazonlogo900.png',
      description: 'E-Commerce/Shipping/Hosting',
    },
    'position': 'Co-op Engineer',
    'team': 'R&D Team',
    'internship_type': 'co-op',
    'structured_program': true,
    'terms': ['Fall 2017',
    'Summer 2018',
    'Spring 2019'],
    'location': 'Newnan, GA',
    'pay': '1st term: $18/hr, 2nd term: $19/hr, 3rd term: $20/hr',
    'housing_stipend': 'no',
    'overall_rating': 3,
    'culture_rating': 4,
    'work_rating': 2.5,
    'expectations': 2,
    'expectations_description': 'It was much less engaging work than anticipated',
    'impact': 1,
    'work_time': 2,
    'prerequisites': 1,
    'description': "I spent most of my time in CAD software designing flow meter prototypes. This would have been great, but the team was extremely underfunded, which meant most of my designs were totally hypothetical. The other big part of my time was spent testing flowmeters in the company's flow calibration facility.",
    'tools': {
      'often': ['Inventor', 'Excel', 'AUTOCAD'],
      'occasionally': ['Octave', 'LABView'],
      'rarely': ['Powerpoint']
    },
    'offer': 2,
    'would_accept_offer': 2,
    'recommend': "Don't want an overly demanding first co-op/internship experience",
    'not_recommend': 'want to do impactful work.',
    'timestamp': new Date(1579703640000),
    'interview_advice': 'Referred by an HR rep who already knew me',
    optional_remarks: ''
  }
]