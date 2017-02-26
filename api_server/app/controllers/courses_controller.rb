class CoursesController < ApplicationController

  # before_action :authenticate_user!

  def index
    courses = Course.all
    render :json => courses.to_json(
    {
        only: [:id, :name, :lessons],
        include: {
            lessons: {
                only: [:id, :exercises, :position, :name],
                include: {
                    exercises: {
                        only: [:id, :position, :content, :name]
                    }
                }
            }
        }
    }

    )
  end

end
