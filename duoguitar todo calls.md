edit so that:

instead of filter relying on props.user.(courses/lessons/exercises) (as props can't be changed as needed) component makes another api request to api endpoint for subscribed (courses/lessons/exercises) (see rake routes)

this needs to be made on component load, and after every api push which subscribes to a course, so that the ui accurately reflects state of subscribed (courses/lessons/exercises) in db.

Duoguitar does subscribed_courses call
Course does subscribed_lessons call
Lesson does subscribed_exercises call
