# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170301093742) do

  create_table "courses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exercises", force: :cascade do |t|
    t.string   "name"
    t.integer  "lesson_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "content"
    t.integer  "position"
    t.index ["lesson_id"], name: "index_exercises_on_lesson_id"
    t.index ["position", "lesson_id"], name: "index_exercises_on_position_and_lesson_id", unique: true
  end

  create_table "lessons", force: :cascade do |t|
    t.string   "name"
    t.integer  "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "position"
    t.index ["course_id"], name: "index_lessons_on_course_id"
    t.index ["position", "course_id"], name: "index_lessons_on_position_and_course_id", unique: true
  end

  create_table "media", force: :cascade do |t|
    t.integer  "exercise_id"
    t.string   "source"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "source_type"
    t.index ["exercise_id"], name: "index_media_on_exercise_id"
  end

  create_table "subscribed_courses", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_subscribed_courses_on_course_id"
    t.index ["user_id", "course_id"], name: "index_subscribed_courses_on_user_id_and_course_id", unique: true
    t.index ["user_id"], name: "index_subscribed_courses_on_user_id"
  end

  create_table "subscribed_exercises", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "exercise_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "rating"
    t.index ["exercise_id"], name: "index_subscribed_exercises_on_exercise_id"
    t.index ["user_id", "exercise_id"], name: "index_subscribed_exercises_on_user_id_and_exercise_id", unique: true
    t.index ["user_id"], name: "index_subscribed_exercises_on_user_id"
  end

  create_table "subscribed_lessons", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "lesson_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lesson_id"], name: "index_subscribed_lessons_on_lesson_id"
    t.index ["user_id", "lesson_id"], name: "index_subscribed_lessons_on_user_id_and_lesson_id", unique: true
    t.index ["user_id"], name: "index_subscribed_lessons_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
