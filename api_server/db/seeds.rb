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

Exercise.create(
  {
    name: 'test exercise',
    lesson: l1,
    position: 1,
    content: "Some Content"
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

