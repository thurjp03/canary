export interface Review {
  id: string,
  timestamp: { seconds: number },
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
  expectations_description: string,
  work_time: number,
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
  grad_level?: 'undergraduate' | 'graduate' | 'graduated';
  year?: '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th+' | undefined;
}

// pay: ({
//   type: 'hourly',
//   amount: 20,
//   currency: 'USD'
// }) as PayValue,

// export const reviews: Review[] = [
//   { "id": "5e28b7b983666533e17585cf", "school": "Georgia Tech", "major": "Mechanical Engineering", "year": { "grad_level": "undergraduate", "year": "3rd" }, "other_studies": "Computer Science Minor", "company": { "name": "The Company Lab (CO.LAB)", "id": "5e2894786501c2001584b40f", "image": "https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e28946094695c001580e959/original/download.jfif", "description": "Think Tanks\t" }, "position": "Operations Specialist", "team": "Small company, no departments", "internship_type": "internship", "structured_program": false, "terms": ["Summer 2018"], "location": "Chattanooga, TN", "pay": "$3500 for the summer", "housing_stipend": "No", "overall_rating": 5, "culture_rating": 5, "work_rating": 4, "expectations": 3, "expectations_description": "Honestly didn't know what to expect really. Turned out great", "impact": 2, "work_time": 4, "prerequisites": 0, "description": "So CO.LAB is a small non-profit startup accelerator who's purpose is to help Chattanooga's startup ecosystem grow, and they have had a pretty big part of that growth over the past few years.||The team was (and still is) pretty small. About 10 people or so. Everyone is fantastic and excited about what they do.||My internship was basically an opportunity for me to come learn as much as I can while being as helpful as I could and figuring out how I could add value. This ended up being pretty dang fantastic. CO.LAB usually has a number of programs running. That summer, there were two accelerator programs, one for tech startups and one for consumer package companies. These programs consisted of the startups coming into the office a couple times a week for a few hours and going through workshops and 1 on 1 meetings with mentors and startup \"\"coaches\"\", etc. I went to as many of these meetings as I could just to learn. My primary job was to film basically everything and upload it to the Google Drive so everyone could access it if they missed a meeting, etc. But for myself, this just gave me an excuse to be in the room and learn from the meetings and presentations and pitches, etc., and my boss recognized this and wanted to give me a reason to go to all the meetings and learn as much as possible.||More and more I also was able to participate in meetings and give my thoughts, and I eventually became responsible for taking notes in almost all the 1 on 1 meetings and aggregating weekly \"\"reports\"\" of all the notes from that week with updates on the startups' progress. This was very rewarding, and I learned a TON. Overall, this internship was a great opportunity to be introduced to startups, entrepreneurship, fundamental business principles, etc. Also learned interesting things like what it looked like behind the scenes to put on a big event like the \"\"Demo Day\"\" at the end of the summer program for all the startups to pitch to the public.||In conclusion, for an internship here, you can essentially make it what you want it to be. Just WORK HARD and find what you are good at and how you can add value. Fantastic people and opportunities to just learn and network and get coffee with people to chat and hear their startup story. This was my first internship and set me up for a great trajectory in the startup world. I've gone on to intern at a VC firm in Atlanta, start my own startup (it's a platform for reading and writing internship reviews - sound familiar ;) ?), and I'm about to start an internship at Bain & Co.||At the time of you reading this, if this platform supports communicating with me, please reach out, and I would be more than happy to connect you with the folks over there!", "tools": { "often": ["Google Docs", "Adobe Creative Cloud Suite"], "occasionally": ["Crunchbase"], "rarely": ["Google Slides"] }, "offer": 3, "would_accept_offer": 2, "recommend": "Are interested in startups, entrepreneurship, and potentially VC, and who are passionate self-starters who can work hard ", "not_recommend": "Who are not passionate about startups and don't want to be the ones deciding how they will provide value to the team", "timestamp": { "seconds": 1579649580.0 }, "interview_advice": "I called them directly. The website said applications were closed, but I literally cold-called them and told them I would work for nothing. Ended up chatting with a girl who worked there and talking to the CEO (small company), and they wanted to give me the shot to work there and paid me something, even if it was not a ton. Very unconventional process - but definitely reach out directly if there is nothing on the website. I was not doing this for the money, but it helped.", "optional_remarks": "" }, 
//   { "id": "5e28b7b983666533e17585c3", "school": "Georgia Tech", "major": "Computer Engineering", "year": { "grad_level": "undergraduate", "year": "4th" }, "other_studies": "", "company": { "name": "Applied Imagination", "id": "5e289316d6a5780015db85a9", "image": "https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e2893118977e50016dbae28/original/logotypetransparentbg.png", "description": "Computer Software/Engineering\t" }, "position": "Software Engineering Intern", "team": "Software Team", "internship_type": "internship", "structured_program": false, "terms": ["Summer 2018"], "location": "Norcross ", "pay": "$10 hour", "housing_stipend": "N/A", "overall_rating": 1.5, "culture_rating": 1.5, "work_rating": 1, "expectations": 0, "expectations_description": "", "impact": 1, "work_time": 1, "prerequisites": 2, "description": "I learned a lot of web development on my own with no help from anyone else. You are given a project to work on with no set timeline but also no help at all. You learn the framework yourself and google your way to the end. That's the entire day of work.", "tools": { "often": ["PHP", "SQL", "Javascript "], "occasionally": ["HTML"], "rarely": ["Excel"] }, "offer": 2, "would_accept_offer": 3, "recommend": "Don't mind learning on their own", "not_recommend": "Dislike Web Development, small companies, and PHP", "timestamp": { "seconds": 1579631760.0 }, "interview_advice": "Through connections to the CEO, I've also seen online applications work", "optional_remarks": "" }, 
//   { "id": "5e28b7b983666533e17585c1", "school": "Georgia Tech", "major": "Industrial Engineering", "year": { "grad_level": "undergraduate", "year": "2nd" }, "other_studies": "", "company": { "name": "Manhattan Associates", "id": "5e13bad39717ff0015ff1de9", "image": "https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e13bad10a295c00156fe8ae/original/usethisonema295jpg300dpi_10896293.jpg", "description": "IT Consulting" }, "position": "Professional Services Consultant", "team": "Cloud Services", "internship_type": "co-op", "structured_program": true, "terms": ["Fall 2019", "Summer 2020"], "location": "Atlanta, GA", "pay": "$17 ", "housing_stipend": "no", "overall_rating": 4, "culture_rating": 4.5, "work_rating": 3, "expectations": 1, "expectations_description": "Co-ops have potential to work on a variety of teams, so the job description is not super specific. I was happy with how it turned out, but I went in with few expectations. ", "impact": 2, "work_time": 4, "prerequisites": 1, "description": "I worked on a variety of internal projects for the team (that is: not client-facing). These included reporting protocols, data visualization, server alerting and monitoring, and general team organization. I was usually in at least ~10 meetings per week and frequently sat in on client calls. I did get to interface frequently with multiple project managers, our director, senior director, and vice president, which was a welcome surprise. ", "tools": { "often": ["Microsoft Office/O365", "Python", "Power BI,"], "occasionally": ["Microsoft Power Automate", ""], "rarely": ["HTML", "CSS", "Figma"] }, "offer": 3, "would_accept_offer": 0, "recommend": "Are willing to approach projects and tasks not necessarily directly stated. Much of this job due to the nature of the team relies on the co-op finding opportunities for improving the team. ", "not_recommend": "Dislike a social, laid back work environment. ", "timestamp": { "seconds": 1579630560.0 }, "interview_advice": "I got the job from a referral. The interview was mostly behavioral (questions about how you've worked on a team, solved problems) with a couple example questions (if you were a developer for X company, how would you do Y?). ", "optional_remarks": "" },
// ]