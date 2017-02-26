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
  name: 'c1 test lesson 1',
  course: c1,
  position: 1
}
)

l2 = Lesson.create(
{
  name: 'c1 test lesson 2',
  course: c1,
  position: 2
}
)

l3 = Lesson.create(
{
  name: 'c1 test lesson 3',
  course: c1,
  position: 3
}
)

e1 = Exercise.create(
{
  name: 'c1 l1 test exercise 1',
  lesson: l1,
  position: 1,
  content: "Some Content"
}
)

e2 = Exercise.create(
{
  name: 'c1 l1 test exercise 2',
  lesson: l1,
  position: 2,
  content: "Some Content"
}
)

e3 = Exercise.create(
{
  name: 'c1 l2 test exercise 1',
  lesson: l2,
  position: 1,
  content: "Some Content"
}
)

e4 = Exercise.create(
{
  name: 'c1 l2 test exercise 2',
  lesson: l2,
  position: 2,
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
