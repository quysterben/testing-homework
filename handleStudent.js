const ConductType = {
   Good: "Good",
   Rather: "Rather",
   Medium: "Medium",
   Weak: "Weak"
}

const StudentType = {
   Good: "Good",
   Rather: "Rather",
   Medium: "Medium",
   Weak: "Weak"
}

const handleStudent = {
   ConductType: {
      Good: "Good",
      Rather: "Rather",
      Medium: "Medium",
      Weak: "Weak"
   },
   StudentType: {
      Good: "Good",
      Rather: "Rather",
      Medium: "Medium",
      Weak: "Weak"
   },
   getStudentType: (
      mathScore, 
      literatureScore, 
      englishScore, 
      supportSbjScore, 
      typeOfConduct
      ) => {
   
      if (mathScore < 0 || mathScore > 10) {
         return -1
      }
      if (literatureScore < 0 || literatureScore > 10) {
         return -1
      }
      if (englishScore < 0 || englishScore > 10) {
         return -1
      }
      if (supportSbjScore < 0 || supportSbjScore > 10) {
         return -1
      }
   
      const averageScore = (mathScore + literatureScore + englishScore + supportSbjScore) / 4

      if (averageScore >= 8 && 
         typeOfConduct === ConductType.Good && 
         ((mathScore >= 8 && literatureScore >= 8 && englishScore >= 8))
         ) {
         return StudentType.Good
      } else if (averageScore >= 7 && 
         (typeOfConduct === ConductType.Good || typeOfConduct === ConductType.Rather) && 
         ((mathScore >= 7 && literatureScore >= 7 && englishScore >= 7))
         ) {
         return StudentType.Rather
      } else if (averageScore >= 6 && 
         (typeOfConduct !== ConductType.Weak) && 
         (mathScore >= 6 && literatureScore >= 6 && englishScore >= 6)
         ) {
         return StudentType.Medium
      } else {
         return StudentType.Weak
      }
   }
}

module.exports = handleStudent