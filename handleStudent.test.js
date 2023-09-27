const handleStudent = require('./handleStudent')

test("PHTD - Should be return -1", () => {
   expect(handleStudent.getStudentType(-1, 8, 8, 8, handleStudent.ConductType.Good)).toBe(-1)
   expect(handleStudent.getStudentType(8, -1, 8, 8, handleStudent.ConductType.Medium)).toBe(-1)
   expect(handleStudent.getStudentType(8, 8, -1, 8, handleStudent.ConductType.Rather)).toBe(-1)
   expect(handleStudent.getStudentType(8, 8, 8, -1, handleStudent.ConductType.Weak)).toBe(-1)
   expect(handleStudent.getStudentType(11, 8, 8, 8, handleStudent.ConductType.Good)).toBe(-1)
   expect(handleStudent.getStudentType(8, 11, 8, 8, handleStudent.ConductType.Weak)).toBe(-1)
   expect(handleStudent.getStudentType(8, 8, 11, 8, handleStudent.ConductType.Medium)).toBe(-1)
   expect(handleStudent.getStudentType(8, 8, 8, 11, handleStudent.ConductType.Rather)).toBe(-1)
})

test("PHTD - Should be return Good", () => {
   expect(handleStudent.getStudentType(9, 9, 9 , 7, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Good)
   expect(handleStudent.getStudentType(8, 9, 9 , 9, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Good)
   expect(handleStudent.getStudentType(9, 8, 9 , 9, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Good)
   expect(handleStudent.getStudentType(9, 8, 9 , 9, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Good)
})

test("PHTD - Should be return Rather", () => {
   expect(handleStudent.getStudentType(9, 9, 9 , 1, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Rather)
   expect(handleStudent.getStudentType(7, 9, 9 , 9, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Rather)
   expect(handleStudent.getStudentType(9, 7, 9 , 9, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Rather)
   expect(handleStudent.getStudentType(9, 8, 7, 9, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Rather)
})

test("PHTD - Should be return Medium", () => {
   expect(handleStudent.getStudentType(7, 7, 7, 6, handleStudent.ConductType.Medium))
      .toBe(handleStudent.StudentType.Medium)
   expect(handleStudent.getStudentType(7, 9, 9, 9, handleStudent.ConductType.Medium))
      .toBe(handleStudent.StudentType.Medium)
   expect(handleStudent.getStudentType(7, 6, 5, 8, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Medium)
   expect(handleStudent.getStudentType(6, 5, 6, 7, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Medium)
})

test("PHTD - Should be return Weak", () => {
   expect(handleStudent.getStudentType(1, 2, 3, 7, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Weak)
   expect(handleStudent.getStudentType(5, 5, 5, 5, handleStudent.ConductType.Medium))
      .toBe(handleStudent.StudentType.Weak)
   expect(handleStudent.getStudentType(9, 9, 9, 9, handleStudent.ConductType.Weak))
      .toBe(handleStudent.StudentType.Weak)
   expect(handleStudent.getStudentType(4, 5, 6, 7, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Weak)
})

test("BQD - Should be return Good", () => {
   expect(handleStudent.getStudentType(8, 8, 8, 8, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Good)  
})

test("BQD - Should be return Rather", () => {
   expect(handleStudent.getStudentType(8, 8, 8, 9, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Rather)  
   expect(handleStudent.getStudentType(8, 7, 8, 9, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Rather)
   expect(handleStudent.getStudentType(8, 7, 8, 9, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Rather)
   expect(handleStudent.getStudentType(7.5, 7.5, 7.5, 7.5, handleStudent.ConductType.Rather))
      .toBe(handleStudent.StudentType.Rather)
})

test("BQD - Should be return Medium", () => {
   expect(handleStudent.getStudentType(8, 8, 8, 9, handleStudent.ConductType.Medium))
      .toBe(handleStudent.StudentType.Medium)  
   expect(handleStudent.getStudentType(8, 7, 8, 9, handleStudent.ConductType.Medium))
      .toBe(handleStudent.StudentType.Medium)
   expect(handleStudent.getStudentType(7.5, 7.5, 7.5, 7.5, handleStudent.ConductType.Medium))
      .toBe(handleStudent.StudentType.Medium)
   expect(handleStudent.getStudentType(6.5, 6.5, 6.5, 6.5, handleStudent.ConductType.Medium))
      .toBe(handleStudent.StudentType.Medium)
})

test("BQD - Should be return Weak", () => {
   expect(handleStudent.getStudentType(8, 8, 8, 9, handleStudent.ConductType.Weak))
      .toBe(handleStudent.StudentType.Weak)  
   expect(handleStudent.getStudentType(8, 7, 8, 9, handleStudent.ConductType.Weak))
      .toBe(handleStudent.StudentType.Weak)
   expect(handleStudent.getStudentType(7.5, 7.5, 7.5, 7.5, handleStudent.ConductType.Weak))
      .toBe(handleStudent.StudentType.Weak)
   expect(handleStudent.getStudentType(5.5, 5.5, 5.5, 5.5, handleStudent.ConductType.Good))
      .toBe(handleStudent.StudentType.Weak)
})