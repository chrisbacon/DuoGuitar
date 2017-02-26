class CoursesController < ApplicationController

  before_action :authenticate_user!

  def index
    courses = Course.all
    render :json => courses.to_json()
  end

end
