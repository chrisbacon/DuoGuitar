Course.destroy_all
Lesson.destroy_all
Exercise.destroy_all
SubscribedCourse.destroy_all

c1 = Course.create(
{
  name: 'test course'
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
    source: "https://www.youtube.com/embed/KSiv6wOBG8c",
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

c2 = Course.create(
{
  name: 'test course 2'
}
)

u1.courses << c1
u1.courses << c2
u2.courses << c1

