class SubscribedExercisesController < ApplicationController

  before_action :authenticate_user!

  def index 
    render :json => current_user.exercises.to_json()
  end

  def create
    exercise = SubscribedExercise.create({user_id: current_user.id, exercise_id: params[:exercise_id]})
    render :json => current_user.exercises.to_json()
  end

  def update
    exercise = SubscribedExercise.find(params[:id])
    exercise.update(rating: params[:rating])
  end


  private
  def exercise_params
    params.require(:subscribed_exercise).permit([:exercise_id, :user_id])
  end

end