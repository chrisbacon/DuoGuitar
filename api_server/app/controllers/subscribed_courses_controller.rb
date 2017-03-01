class SubscribedCoursesController < ApplicationController

  before_action :authenticate_user!

  def index 
    render :json => current_user.courses.to_json()
  end

  def create
    course = SubscribedCourse.create({user_id: current_user.id, course_id: params[:course_id]})
    render :json => current_user.courses.to_json()
  end


  private
  def course_params
    params.require(:subscribed_course).permit([:course_id, :user_id])
  end

end