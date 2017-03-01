class SubscribedLessonsController < ApplicationController

  before_action :authenticate_user!

  def index 
    render :json => current_user.lessons.to_json()
  end

  def create
    lesson = SubscribedLesson.create({user_id: current_user.id, lesson_id: params[:lesson_id]})
    render :json => current_user.lessons.to_json()
  end


  private
  def lesson_params
    params.require(:subscribed_lesson).permit([:lesson_id, :user_id])
  end

end