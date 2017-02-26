class CoursesController < ApplicationController

  # before_action :authenticate_user!

  def index
    courses = Course.all
    render :json => courses.to_json(
    {
        only: [:id, :name, :lessons],
        include: {
            lessons: {
                only: [:id, :name, :exercises, :position],
                include: {
                    exercises: {
                        only: [:id, :position, :content]
                    }
                }
            }
        }
    }

    )
  end

end
