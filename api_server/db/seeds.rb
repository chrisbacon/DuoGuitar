Course.destroy_all
Lesson.destroy_all
Exercise.destroy_all
SubscribedCourse.destroy_all

c1 = Course.create(
{
  name: 'test course'
}
)
c2 = Course.create(
{
  name: 'test course 2'
}
)

l1 = Lesson.create(
{
  name: 'test lesson',
  course: c1,
  position: 1
}
)

l2 = Lesson.create(
{
  name: 'media test lesson',
  course: c1,
  position: 2
}
)

l3 = Lesson.create(
{
  name: 'media test lesson',
  course: c2,
  position: 1
}
)

Exercise.create(
  {
    name: 'test exercise',
    lesson: l1,
    position: 2,
    content: "Some Content"
  }
)

Exercise.create(
  {
    name: 'test exercise',
    lesson: l1,
    position: 4,
    content: "Some more content"
  }
)

Exercise.create(
  {
    name: 'test exercise',
    lesson: l1,
    position: 3,
    content: "Even more content"
  }
)
Exercise.create(
  {
    name: 'test exercise',
    lesson: l1,
    position: 7,
    content: "Even more content"
  }
)

Exercise.create(
  {
    name: 'test exercise',
    lesson: l1,
    position: 1,
    content: "Even more content"
  }
)

media_exercise = Exercise.create(
    name: 'media test exercise',
    lesson: l2,
    position: 5,
    content: "Look at all this lovely content"
  )

Medium.create(
  {
    exercise: media_exercise,
    source: "https://www.youtube.com/embed/_RGYzv0O5GE",
    source_type: "video"
  }
)

u1 = User.create(
{
  email: "user@email.com",
  password: "password",
  password_confirmation: "password"
}
)

u2 = User.create(
{
  email: "user2@email.com",
  password: "password",
  password_confirmation: "password"
}
)

#------- FLAMENCO COURSE ----------

basic_tangos_compas = Course.new(
    {name: "Flamenco - Basic Tangos Course"}
  )

tangos_lesson1 = Lesson.create(
{
  name: 'Basic Tangos Compas - Lesson 1',
  course: basic_tangos_compas,
  position: 1
}
)

tangos_lesson2 = Lesson.create(
{
  name: 'Basic Tangos Compas - Lesson 2',
  course: basic_tangos_compas,
  position: 2
}
)

tangos_lesson3 = Lesson.create(
{
  name: 'Basic Tangos Compas - Lesson 3',
  course: basic_tangos_compas,
  position: 3
}
)

tangos_final = Lesson.create(
{
  name: 'Basic Tangos Compas - Final Lesson',
  course: basic_tangos_compas,
  position: 4
}
)

tangos_lesson1_exercise1 = Exercise.create(
  {
    name: 'Lesson 1 - Exercise 1',
    lesson: tangos_lesson1,
    position: 1,
    content: "Bit of content here"
  }
)

Medium.create(
  {
    exercise: tangos_lesson1_exercise1,
    source: "https://www.youtube.com/embed/_RGYzv0O5GE",
    source_type: "video"
  }
)

tangos_lesson1_exercise2 = Exercise.create(
  {
    name: 'Lesson 1 - Exercise 2',
    lesson: tangos_lesson1,
    position: 2,
    content: "Bit of content here"
  }
)

Medium.create(
  {
    exercise: tangos_lesson1_exercise2,
    source: "tangos_lesson_1.png",
    source_type: "image"
  }
)


tangos_lesson2_exercise1 = Exercise.create(
  {
    name: 'Lesson 2 - Exercise 1',
    lesson: tangos_lesson2,
    position: 1,
    content: "Bit of content here"
  }
)

Medium.create(
  {
    exercise: tangos_lesson2_exercise1,
    source: "https://www.youtube.com/embed/AOWckeFi-e0",
    source_type: "video"
  }
)

tangos_lesson2_exercise2 = Exercise.create(
  {
    name: 'Lesson 2 - Exercise 2',
    lesson: tangos_lesson2,
    position: 2,
    content: "Bit of content here"
  }
)

Medium.create(
  {
    exercise: tangos_lesson2_exercise2,
    source: "tangos_lesson_2.png",
    source_type: "image"
  }
)

tangos_lesson3_exercise1 = Exercise.create(
  {
    name: 'Lesson 3 - Exercise 1',
    lesson: tangos_lesson3,
    position: 1,
    content: "Bit of content here"
  }
)

tangos_lesson3_exercise2 = Exercise.create(
  {
    name: 'Lesson 3 - Exercise 2',
    lesson: tangos_lesson3,
    position: 2,
    content: "Bit of content here"
  }
)

Medium.create(
  {
    exercise: tangos_lesson3_exercise2,
    source: "tangos_lesson_3.png",
    source_type: "image"
  }
)

Medium.create(
  {
    exercise: tangos_lesson3_exercise1,
    source: "https://www.youtube.com/embed/NSIEEaw1KSU",
    source_type: "video"
  }
)

tangos_final_exercise1 = Exercise.create(
  {
    name: 'Final Lesson - Exercise 1',
    lesson: tangos_final,
    position: 1,
    content: "Bit of content here"
  }
)

Medium.create(
  {
    exercise: tangos_final_exercise1,
    source: "https://www.youtube.com/embed/4dtEKZX4lFU",
    source_type: "video"
  }
)


# lesson1 = "https://www.youtube.com/embed/_RGYzv0O5GE"
# lesson2 = "https://www.youtube.com/embed/AOWckeFi-e0"
# lesson3 = "https://www.youtube.com/embed/NSIEEaw1KSU"
# final = "https://www.youtube.com/embed/4dtEKZX4lFU"

# ---------END OF FLAMENCO COURSE ---------------


u1.courses << c1
u1.courses << c2
u2.courses << c1

