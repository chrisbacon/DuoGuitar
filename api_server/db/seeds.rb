Course.destroy_all
Lesson.destroy_all
Exercise.destroy_all

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

e1 = Exercise.create(
{
  name: 'test exercise',
  lesson: l1,
  position: 1
}
)

u1 = User.create(
{
  email: "user@email.com",
  password: "password",
  password_confirmation: "password"
}
)

u1.courses << c1
