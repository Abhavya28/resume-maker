import { EducationItem, ExperienceItem } from "@/types";

export const calculateATSScore = (data: any, jobDesc: string) => {
  const resumeText = JSON.stringify(data).toLowerCase();

  // 🔹 Clean job words
  const jobWordsRaw = jobDesc.toLowerCase().split(/\W+/);
  const jobWords = [...new Set(jobWordsRaw.filter((w) => w.length > 3))];

  // 🔹 SKILLS TEXT
  const skillsText = data.skills
    ?.map((s: any) => s.skillName?.toLowerCase())
    .join(" ");

  // ✅ KEYWORD SCORE (30)
  let keywordMatches = 0;

  jobWords.forEach((word) => {
    if (resumeText.includes(word)) {
      keywordMatches++;
    }
  });

  const keywordScore = Math.min((keywordMatches / jobWords.length) * 30, 30);

  // ✅ SKILL SCORE (20)
  let skillMatches = 0;

  jobWords.forEach((word) => {
    if (skillsText.includes(word)) {
      skillMatches++;
    }
  });

  const skillScore = Math.min((skillMatches / jobWords.length) * 20, 20);

  // ✅ SECTION SCORE (20)
  let sectionScore = 0;

  if (data.summary) sectionScore += 10;

  if (data.skills?.some((s: any) => s.skillName)) {
    sectionScore += 5;
  }

  if (
    data.experiences?.some((exp: ExperienceItem) => exp.jobTitle && exp.company)
  ) {
    sectionScore += 5;
  }

  if (data.education?.some((edu: EducationItem) => edu.school && edu.degree)) {
    sectionScore += 5;
  }

  if (data.certificates?.some((cert: any) => cert.name && cert.issuer)) {
    sectionScore += 5;
  }

  // ✅ QUALITY SCORE (20)
  let qualityScore = 0;

  if (data.summary && data.summary.length > 50) {
    qualityScore += 10;
  }

  const hasActionWords =
    /(built|developed|created|managed|designed|implemented)/i.test(resumeText);

  if (hasActionWords) {
    qualityScore += 10;
  }

  // ✅ FINAL SCORE
  const totalScore = Math.round(
    keywordScore + skillScore + sectionScore + qualityScore + 15,
  );

  return totalScore;
};
